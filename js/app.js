const chords = window.CHORDS || [];
const fundamentalMap = window.FUNDAMENTAL_MAP || {};

function normalizeText(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function getEl(id) {
  return document.getElementById(id);
}

function openDialog(chord) {
  const dialog = getEl("chordDialog");
  const title = getEl("dialogTitle");
  const image = getEl("dialogImage");
  const caption = getEl("dialogCaption");

  if (!dialog || !title || !image || !caption) return;

  title.textContent = chord.label;
  image.src = chord.image;
  image.alt = chord.label;
  caption.textContent = chord.id;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "true");
  }
}

function closeDialog() {
  const dialog = getEl("chordDialog");
  if (!dialog) return;
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}

function renderSuggestions(inputValue, suggestionsId) {
  const box = getEl(suggestionsId);
  if (!box) return;

  const value = normalizeText(inputValue);
  if (!value) {
    box.innerHTML = "";
    return;
  }

  const results = chords.filter((chord) => {
    const haystack = normalizeText([chord.id, chord.label, ...(chord.aliases || [])].join(" "));
    return haystack.includes(value);
  }).slice(0, 8);

  if (!results.length) {
    box.innerHTML = `<div class="suggestion suggestion--empty">Nenhum acorde encontrado</div>`;
    return;
  }

  box.innerHTML = results
    .map(
      (chord) => `
        <button class="suggestion" data-id="${chord.id}">
          <strong>${chord.label}</strong>
          <span>${chord.id}</span>
        </button>
      `
    )
    .join("");

  box.querySelectorAll("[data-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const chord = chords.find((c) => c.id === btn.dataset.id);
      if (!chord) return;
      box.innerHTML = "";
      const mobileSearch = getEl("mobileSearch");
      if (mobileSearch) mobileSearch.classList.remove("is-open");
      openDialog(chord);
    });
  });
}

function setupSearch(inputId, suggestionsId) {
  const input = getEl(inputId);
  if (!input) return;

  input.addEventListener("input", (e) => {
    renderSuggestions(e.target.value, suggestionsId);
  });

  input.addEventListener("focus", (e) => {
    renderSuggestions(e.target.value, suggestionsId);
  });

  document.addEventListener("click", (event) => {
    const suggestions = getEl(suggestionsId);
    if (!suggestions) return;
    if (!suggestions.contains(event.target) && event.target !== input) {
      suggestions.innerHTML = "";
    }
  });
}

function setupMobileControls() {
  const searchToggle = getEl("searchToggle");
  const menuToggle = getEl("menuToggle");
  const mobileSearch = getEl("mobileSearch");
  const mobileDrawer = getEl("mobileDrawer");
  const overlay = getEl("overlay");
  const closeMenu = getEl("closeMenu");

  const openOverlay = () => overlay?.classList.add("is-open");
  const closeOverlay = () => overlay?.classList.remove("is-open");

  if (searchToggle && mobileSearch) {
    searchToggle.addEventListener("click", () => {
      mobileSearch.classList.toggle("is-open");
      if (mobileSearch.classList.contains("is-open")) {
        mobileDrawer?.classList.remove("is-open");
        openOverlay();
      } else {
        closeOverlay();
      }
    });
  }

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener("click", () => {
      mobileDrawer.classList.add("is-open");
      mobileSearch?.classList.remove("is-open");
      openOverlay();
    });
  }

  if (closeMenu && mobileDrawer) {
    closeMenu.addEventListener("click", () => {
      mobileDrawer.classList.remove("is-open");
      closeOverlay();
    });
  }

  overlay?.addEventListener("click", () => {
    mobileDrawer?.classList.remove("is-open");
    mobileSearch?.classList.remove("is-open");
    closeOverlay();
  });
}

function renderCatalogPage() {
  const params = new URLSearchParams(window.location.search);
  const fundamental = params.get("fundamental") || "C";
  const meta = fundamentalMap[fundamental] || { title: "Acordes", subtitle: "" };

  const title = getEl("catalogTitle");
  const subtitle = getEl("catalogSubtitle");
  const grid = getEl("catalogGrid");

  if (!title || !subtitle || !grid) return;

  title.textContent = meta.title;
  subtitle.textContent = meta.subtitle;

  const items = chords.filter((chord) => chord.fundamental === fundamental);

  if (!items.length) {
    grid.innerHTML = `<p class="empty-state">Nenhum acorde cadastrado para esta categoria.</p>`;
    return;
  }

  grid.innerHTML = items
    .map(
      (chord) => `
        <article class="chord-card">
          <button class="chord-card__button" data-id="${chord.id}">
            <img src="${chord.image}" alt="${chord.label}" />
            <strong>${chord.label}</strong>
            <span>${chord.id}</span>
          </button>
        </article>
      `
    )
    .join("");

  grid.querySelectorAll("[data-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const chord = chords.find((c) => c.id === btn.dataset.id);
      if (chord) openDialog(chord);
    });
  });
}

function boot() {
  setupSearch("searchInput", "suggestions");
  setupSearch("searchInputMobile", "suggestionsMobile");
  setupMobileControls();

  const isCatalog = Boolean(getEl("catalogGrid"));
  if (isCatalog) renderCatalogPage();

  getEl("closeDialog")?.addEventListener("click", closeDialog);
  getEl("chordDialog")?.addEventListener("click", (event) => {
    if (event.target === getEl("chordDialog")) closeDialog();
  });
}
document.addEventListener("DOMContentLoaded", boot);
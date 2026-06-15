// Banco de dados dos acordes
// Adicione aqui novos acordes e novas variações conforme for criando as imagens.

window.CHORDS = [
    {
        id: "C",
        fundamental: "C",
        label: "Dó",
        aliases: ["do", "dó", "c"],
        image: "assets/acordes/C-Do.webp",
    },
    {
        id: "Cm",
        fundamental: "C",
        label: "Dó menor",
        aliases: ["dom", "do menor", "cm"],
        image: "assets/acordes/C-Dom.webp",
    },

    {
        id: "Csimples",
        fundamental: "C",
        label: "Dó simples",
        aliases: ["Dosim", "do maior", "C", "c"],
        image: "assets/acordes/C-Dosimples.webp",
    },

    {
        id: "D",
        fundamental: "D",
        label: "Ré",
        aliases: ["re", "ré", "d"],
        image: "assets/acordes/D-Re.webp",
    },
    {
        id: "Dm",
        fundamental: "D",
        label: "Ré menor",
        aliases: ["rem", "ré menor", "dm"],
        image: "assets/acordes/Dm-Rem.webp",
    },
    {
        id: "D#",
        fundamental: "DE",
        label: "Ré#",
        aliases: ["re#", "ré#", "d#", "eb", "e bemol", "eb", "E bemol", "Eb"],
        image: "assets/acordes/D-Re#.webp",
    },
    {
        id: "D7",
        fundamental: "D",
        label: "Ré 7",
        aliases: ["Re7", "re7", "d7"],
        image: "assets/acordes/D7-Re7.webp",
    },
    {
        id: "E",
        fundamental: "E",
        label: "Mi",
        aliases: ["mi", "e"],
        image: "assets/acordes/E-Mi.webp",
    },
    {
        id: "F",
        fundamental: "F",
        label: "Fá",
        aliases: ["fa", "fá", "f"],
        image: "assets/acordes/F-Fa.webp",
    },
    {
        id: "F simples",
        fundamental: "F",
        label: "Fá",
        aliases: ["fa", "fá", "f"],
        image: "assets/acordes/F-Fasimples.webp",
    },
    {
        id: "F#",
        fundamental: "FG",
        label: "Fá# ou Solb",
        aliases: ["fa#", "fá#", "gb"],
        image: "assets/acordes/F#-Fa#.webp",
    },
    {
        id: "Gb",
        fundamental: "GF",
        label: "Solb ou Fá#",
        aliases: ["solb", "sol bemol", "gb", "f#", "fá#", "fa#"],
        image: "assets/acordes/Gb-Solb.webp",
    },
    {
        id: "Gm",
        fundamental: "G",
        label: "Sol menor",
        aliases: ["solm", "sol menor", "gm"],
        image: "assets/acordes/Gm-Solm.webp",
    },
    {
        id: "Gmsimples",
        fundamental: "G",
        label: "Sol menor simples",
        aliases: ["solm", "sol menor", "gm"],
        image: "assets/acordes/Gm-Solmsimples.webp",
    },
    {
        id: "Am",
        fundamental: "A",
        label: "Lá menor",
        aliases: ["lam", "lá menor", "am"],
        image: "assets/acordes/Am-Lam.webp",
    },
    {
        id: "Bb",
        fundamental: "AB",
        label: "Si bemol",
        aliases: ["sib", "si bemol", "Bb"],
        image: "assets/acordes/Bb-Sib.webp",
    },
    {
        id: "B",
        fundamental: "B",
        label: "Si",
        aliases: ["si", "b"],
        image: "assets/acordes/B-Si.webp",
    },
];

window.FUNDAMENTAL_MAP = {
    C: { title: "Dó", subtitle: "Variações de Dó, Dó# e Dó bemol" },
    D: { title: "Ré", subtitle: "Variações de Ré, Ré# e Ré bemol" },
    E: { title: "Mi", subtitle: "Variações de Mi e suas extensões" },
    F: { title: "Fá", subtitle: "Variações de Fá, Fá# e Sol bemol" },
    G: { title: "Sol", subtitle: "Variações de Sol" },
    A: { title: "Lá", subtitle: "Variações de Lá, Si bemol e relacionadas" },
    B: { title: "Si", subtitle: "Variações de Si" },
};
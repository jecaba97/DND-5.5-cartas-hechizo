// --- LISTA DE ARMAS PREDEFINIDAS ---
const listaArmasPredefinidas = [
    // --- ARMAS SENCILLAS CUERPO A CUERPO ---
    { nombre: "Bastón", dado1: "1d6", tipoDaño: "Contundente", esVersatil: true, dado2: "1d8", atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "Versátil (1d8)" },
    { nombre: "Daga", dado1: "1d4", tipoDaño: "Perforante", esVersatil: false, atributo: "Destreza", esProficiente: true, alcance: "20/60", notas: "Sutil, ligera, arrojadiza" },
    { nombre: "Garrote", dado1: "1d4", tipoDaño: "Contundente", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "Ligera" },
    { nombre: "Gran garrote", dado1: "1d8", tipoDaño: "Contundente", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "A dos manos" },
    { nombre: "Hacha de mano", dado1: "1d6", tipoDaño: "Cortante", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "20/60", notas: "Ligera, arrojadiza" },
    { nombre: "Hoz", dado1: "1d4", tipoDaño: "Cortante", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "Ligera" },
    { nombre: "Jabalina", dado1: "1d6", tipoDaño: "Perforante", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "30/120", notas: "Arrojadiza" },
    { nombre: "Lanza", dado1: "1d6", tipoDaño: "Perforante", esVersatil: true, dado2: "1d8", atributo: "Fuerza", esProficiente: true, alcance: "20/60", notas: "Arrojadiza, versátil (1d8)" },
    { nombre: "Martillo ligero", dado1: "1d4", tipoDaño: "Contundente", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "20/60", notas: "Ligera, arrojadiza" },
    { nombre: "Maza", dado1: "1d6", tipoDaño: "Contundente", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "-" },

    // --- ARMAS SENCILLAS A DISTANCIA ---
    { nombre: "Arco corto", dado1: "1d6", tipoDaño: "Perforante", esVersatil: false, atributo: "Destreza", esProficiente: true, alcance: "80/320", notas: "Munición, a dos manos" },
    { nombre: "Ballesta ligera", dado1: "1d8", tipoDaño: "Perforante", esVersatil: false, atributo: "Destreza", esProficiente: true, alcance: "80/320", notas: "Munición, a 2 manos, recarga" },
    { nombre: "Dardo", dado1: "1d4", tipoDaño: "Perforante", esVersatil: false, atributo: "Destreza", esProficiente: true, alcance: "20/60", notas: "Sutil, arrojadiza" },
    { nombre: "Honda", dado1: "1d4", tipoDaño: "Contundente", esVersatil: false, atributo: "Destreza", esProficiente: true, alcance: "30/120", notas: "Munición" },
    // --- ARMAS MARCIALES CUERPO A CUERPO ---
    { nombre: "Alabarda", dado1: "1d10", tipoDaño: "Cortante", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "A dos manos, gran alcance, pesada" },
    { nombre: "Cimitarra", dado1: "1d6", tipoDaño: "Cortante", esVersatil: false, atributo: "Destreza", esProficiente: true, alcance: "C/C", notas: "Ligera, sutil" },
    { nombre: "Espada corta", dado1: "1d6", tipoDaño: "Perforante", esVersatil: false, atributo: "Destreza", esProficiente: true, alcance: "C/C", notas: "Ligera, sutil" },
    { nombre: "Espada larga", dado1: "1d8", tipoDaño: "Cortante", esVersatil: true, dado2: "1d10", atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "Versátil (1d10)" },
    { nombre: "Espadón", dado1: "2d6", tipoDaño: "Cortante", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "A dos manos, pesado" },
    { nombre: "Estoque", dado1: "1d8", tipoDaño: "Perforante", esVersatil: false, atributo: "Destreza", esProficiente: true, alcance: "C/C", notas: "Sutil" },
    { nombre: "Guja", dado1: "1d10", tipoDaño: "Cortante", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "A dos manos, gran alcance, pesada" },
    { nombre: "Hacha a dos manos", dado1: "1d12", tipoDaño: "Cortante", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "A dos manos, pesada" },
    { nombre: "Hacha de guerra", dado1: "1d8", tipoDaño: "Cortante", esVersatil: true, dado2: "1d10", atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "Versátil (1d10)" },
    { nombre: "Lanza de caballería", dado1: "1d10", tipoDaño: "Perforante", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "A dos manos (salvo montado), gran alcance, pesada" },
    { nombre: "Látigo", dado1: "1d4", tipoDaño: "Cortante", esVersatil: false, atributo: "Destreza", esProficiente: true, alcance: "C/C", notas: "Gran alcance, sutil" },
    { nombre: "Lucero del alba", dado1: "1d8", tipoDaño: "Perforante", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "-" },
    { nombre: "Mangual", dado1: "1d8", tipoDaño: "Contundente", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "-" },
    { nombre: "Martillo de guerra", dado1: "1d8", tipoDaño: "Contundente", esVersatil: true, dado2: "1d10", atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "Versátil (1d10)" },
    { nombre: "Maza a dos manos", dado1: "2d6", tipoDaño: "Contundente", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "A dos manos, pesada" },
    { nombre: "Pica", dado1: "1d10", tipoDaño: "Perforante", esVersatil: false, atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "A dos manos, gran alcance, pesada" },
    { nombre: "Pico de guerra", dado1: "1d8", tipoDaño: "Perforante", esVersatil: true, dado2: "1d10", atributo: "Fuerza", esProficiente: true, alcance: "C/C", notas: "Versátil (1d10)" },
    { nombre: "Tridente", dado1: "1d8", tipoDaño: "Perforante", esVersatil: true, dado2: "1d10", atributo: "Fuerza", esProficiente: true, alcance: "6/18m", notas: "Arrojadizo, versátil (1d10)" },

    // --- ARMAS A DISTANCIA MARCIALES ---
    { nombre: "Arco largo", dado1: "1d8", tipoDaño: "Perforante", esVersatil: false, atributo: "Destreza", esProficiente: true, alcance: "45/180m", notas: "A dos manos, munición, pesado" },
    { nombre: "Ballesta de mano", dado1: "1d6", tipoDaño: "Perforante", esVersatil: false, atributo: "Destreza", esProficiente: true, alcance: "9/36m", notas: "Ligera, munición, recarga" },
    { nombre: "Ballesta pesada", dado1: "1d10", tipoDaño: "Perforante", esVersatil: false, atributo: "Destreza", esProficiente: true, alcance: "30/120m", notas: "A dos manos, munición, pesada, recarga" },
    { nombre: "Cerbatana", dado1: "1", tipoDaño: "Perforante", esVersatil: false, atributo: "Destreza", esProficiente: true, alcance: "7.5/30m", notas: "Munición, recarga" },
    { nombre: "Mosquete", dado1: "1d12", tipoDaño: "Perforante", esVersatil: false, atributo: "Destreza", esProficiente: true, alcance: "12/36m", notas: "A dos manos, munición, recarga" },
    { nombre: "Pistola", dado1: "1d10", tipoDaño: "Perforante", esVersatil: false, atributo: "Destreza", esProficiente: true, alcance: "9/27m", notas: "Munición, recarga" }
];


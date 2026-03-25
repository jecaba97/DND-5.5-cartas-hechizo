// ==========================================
// 1. CONFIGURACIÓN Y DATOS
// ==========================================
const CLOUDINARY_BASE = "https://res.cloudinary.com/jecaba97/image/upload/f_auto,q_auto,w_400/";

// Base de datos de competencias por clase para el Roller

const competenciasClase = {
    //Clases Caster
    "Mago": ["Inteligencia", "Sabiduría"],
    "Hechicero": ["Constitución", "Carisma"],
    "Bardo": ["Destreza", "Carisma"],
    "Brujo": ["Sabiduría", "Carisma"],

    //Clases Semicaster
    "Druida": ["Inteligencia", "Sabiduría"],
    "Clérigo": ["Sabiduría", "Carisma"],
    "Explorador": ["Fuerza", "Destreza"],
    "Paladín": ["Sabiduría", "Carisma"],

    // Clases Marciales
    "Bárbaro": ["Fuerza", "Constitución"],
    "Guerrero": ["Fuerza", "Constitución"],
    "Monje": ["Fuerza", "Destreza"],
    "Pícaro": ["Destreza", "Inteligencia"],
};

const dadosDeGolpeClase = {
    "Mago": 6,
    "Hechicero": 6,
    "Bardo": 8,
    "Brujo": 8,
    "Druida": 8,
    "Clérigo": 8,
    "Explorador": 10,
    "Paladín": 10,
    "Bárbaro": 12,
    "Guerrero": 10,
    "Monje": 8,
    "Pícaro": 8
};

// Base de datos de armas y proficiencias
const armasSencillas = ["Bastón", "Daga", "Garrote", "Gran garrote", "Hacha de mano", "Hoz", "Jabalina", "Lanza", "Martillo ligero", "Maza", "Arco corto", "Ballesta ligera", "Dardo", "Honda"];

const proficienciasClaseArmas = {
    "Mago": ["Ballesta ligera", "Bastón", "Daga", "Dardo", "Honda"],
    "Hechicero": ["Ballesta ligera", "Bastón", "Daga", "Dardo", "Honda"],
    "Bardo": ["Sencilla", "Ballesta de mano", "Espada larga", "Espada corta", "Estoque"],
    "Brujo": ["Sencilla"],
    "Druida": ["Bastón", "Cimitarra", "Daga", "Dardo", "Honda", "Hoz", "Lanza", "Maza", "Garrote"],
    "Clérigo": ["Sencilla"],
    "Explorador": ["Sencilla", "Marcial"],
    "Paladín": ["Sencilla", "Marcial"],
    "Bárbaro": ["Sencilla", "Marcial"],
    "Guerrero": ["Sencilla", "Marcial"],
    "Monje": ["Sencilla", "Espada corta"],
    "Pícaro": ["Sencilla", "Ballesta de mano", "Espada corta", "Espada larga", "Estoque", "Arco corto"]
};

function esClaseProficiente(nombreClase, nombreArma) {
    const profs = proficienciasClaseArmas[nombreClase];
    if (!profs) return false;
    if (profs.includes(nombreArma)) return true;
    const cat = armasSencillas.includes(nombreArma) ? "Sencilla" : "Marcial";
    return profs.includes(cat);
}

// Base de datos de habilidades

const mapeoHabilidades = {
    "Fuerza": ["Atletismo"],
    "Destreza": ["Acrobacias", "Juego de manos", "Sigilo"],
    "Constitución": [],
    "Inteligencia": ["Conocimiento arcano", "Historia", "Investigación", "Naturaleza", "Religión"],
    "Sabiduría": ["Medicina", "Percepción", "Perspicacia", "Supervivencia", "Trato con animales"],
    "Carisma": ["Engaño", "Interpretación", "Intimidación", "Persuasión"]
};

// ==========================================
// 2. TABLAS DE PROGRESIÓN (SLOTS Y RECURSOS)
// ==========================================

const progSlotsFullCaster = {
    1: { 1: 2 },
    2: { 1: 3 },
    3: { 1: 4, 2: 2 },
    4: { 1: 4, 2: 3 },
    5: { 1: 4, 2: 3, 3: 2 },
    6: { 1: 4, 2: 3, 3: 3 },
    7: { 1: 4, 2: 3, 3: 3, 4: 1 },
    8: { 1: 4, 2: 3, 3: 3, 4: 2 },
    9: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
    10: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
    11: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
    12: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
    13: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
    14: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
    15: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 }, 16: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
    17: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 }, 18: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 },
    19: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 }, 20: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 }
};

const progSlotsMedioCaster = {
    1: {},
    2: { 1: 2 },
    3: { 1: 3 },
    4: { 1: 3 },
    5: { 1: 4, 2: 2 },
    6: { 1: 4, 2: 2 },
    7: { 1: 4, 2: 3 },
    8: { 1: 4, 2: 3 },
    9: { 1: 4, 2: 3, 3: 2 },
    10: { 1: 4, 2: 3, 3: 2 },
    11: { 1: 4, 2: 3, 3: 3 },
    12: { 1: 4, 2: 3, 3: 3 },
    13: { 1: 4, 2: 3, 3: 3, 4: 1 },
    14: { 1: 4, 2: 3, 3: 3, 4: 1 },
    15: { 1: 4, 2: 3, 3: 3, 4: 2 },
    16: { 1: 4, 2: 3, 3: 3, 4: 2 },
    17: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
    18: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
    19: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
    20: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 }
};

const progSlotsBrujo = {
    1: { 1: 1 },
    2: { 1: 2 },
    3: { 2: 2 },
    4: { 2: 2 },
    5: { 3: 2 },
    6: { 3: 2 },
    7: { 4: 2 },
    8: { 4: 2 },
    9: { 5: 2 },
    10: { 5: 2 },
    11: { 5: 3, 6: 1 },
    12: { 5: 3, 6: 1 },
    13: { 5: 3, 6: 1, 7: 1 },
    14: { 5: 3, 6: 1, 7: 1 },
    15: { 5: 3, 6: 1, 7: 1, 8: 1 },
    16: { 5: 3, 6: 1, 7: 1, 8: 1 },
    17: { 5: 4, 6: 1, 7: 1, 8: 1, 9: 1 },
    18: { 5: 4, 6: 1, 7: 1, 8: 1, 9: 1 },
    19: { 5: 4, 6: 1, 7: 1, 8: 1, 9: 1 },
    20: { 5: 4, 6: 1, 7: 1, 8: 1, 9: 1 }
};

const plantillaRecursosClase = {
    "Bárbaro": (nivel) => {
        let furias = 2;
        if (nivel >= 3) furias = 3; if (nivel >= 6) furias = 4; if (nivel >= 12) furias = 5; if (nivel >= 17) furias = 6; if (nivel >= 20) furias = 99;
        return [{ id: "furia", nombre: "Furia", maxUses: furias, resetType: 'long' }];
    },
    "Bardo": (nivel, attrs) => {
        let insp = Math.max(1, Math.floor(((attrs["Carisma"] || 10) - 10) / 2));
        return [{ id: "inspiracionBárdica", nombre: "Insp. Bárdica", maxUses: insp, resetType: nivel >= 5 ? 'short' : 'long' }];
    },
    "Clérigo": (nivel) => {
        let canalizar = 1;
        if (nivel >= 6) canalizar = 2; if (nivel >= 18) canalizar = 3;
        return [{ id: "canalizarDivinidad", nombre: "Canalizar Divinidad", maxUses: canalizar, resetType: 'short' }];
    },
    "Druida": (nivel) => {
        const res = [{ id: "formaSalvaje", nombre: "Forma Salvaje", maxUses: nivel >= 20 ? 99 : 2, resetType: 'short' }];
        return res;
    },
    "Guerrero": (nivel) => {
        const res = [{ id: "nuevasEnergias", nombre: "Nuevas Energías", maxUses: 1, resetType: 'short' }];
        if (nivel >= 2) res.push({ id: "accionTrepidante", nombre: "Acción Trepidante", maxUses: nivel >= 17 ? 2 : 1, resetType: 'short' });
        if (nivel >= 9) res.push({ id: "indomito", nombre: "Indómito", maxUses: nivel >= 17 ? 3 : (nivel >= 13 ? 2 : 1), resetType: 'long' });
        return res;
    },
    "Monje": (nivel) => {
        if (nivel < 2) return [];
        return [{ id: "ki", nombre: "Puntos de Ki", maxUses: nivel, resetType: 'short' }];
    },
    "Paladín": (nivel) => {
        const res = [{ id: "imposicionManos", nombre: "Imposición de Manos (HP)", maxUses: nivel * 5, resetType: 'long' }];
        if (nivel >= 3) res.push({ id: "canalizarDivinidad", nombre: "Canalizar Divinidad", maxUses: 1, resetType: 'short' });
        return res;
    },
    "Pícaro": (nivel) => { return []; },
    "Explorador": (nivel) => { return []; },
    "Hechicero": (nivel) => {
        if (nivel < 2) return [];
        return [{ id: "puntosHechiceria", nombre: "Puntos de Hechicería", maxUses: nivel, resetType: 'long' }];
    },
    "Mago": (nivel) => {
        return [{ id: "recuperacionArcana", nombre: "Recup. Arcana", maxUses: 1, resetType: 'long' }];
    },
    "Brujo": (nivel) => { return []; }
};


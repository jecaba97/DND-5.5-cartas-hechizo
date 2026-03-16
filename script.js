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
    "Barbaro": ["Fuerza", "Constitución"],
    "Guerrero": ["Fuerza", "Constitución"],
    "Monje": ["Fuerza", "Destreza"],
    "Pícaro": ["Destreza", "Inteligencia"]
};

// Base de datos de habilidades

const mapeoHabilidades = {
    "Fuerza": ["Atletismo"],
    "Destreza": ["Acrobacias", "Juego de manos", "Sigilo"],
    "Constitución": [],
    "Inteligencia": ["Conocimiento arcano", "Historia", "Investigación", "Naturaleza", "Religión"],
    "Sabiduría": ["Medicina", "Percepción", "Perspicacia", "Supervivencia", "Trato con animales"],
    "Carisma": ["Engaño", "Interpretación", "Intimidación", "Persuasión"]
};

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

// Base de datos de hechizos

const hechizos = [

    // BARDO
    { id: 1, nombre: "Abrir", clase: "Bardo", nivel: 2, archivo: "/v1772660970/Bardo_Abrir_kbopow.png" }, //
    { id: 2, nombre: "Agrandar/reducir", clase: "Bardo", nivel: 2, archivo: "/v1772660997/Bardo_Agrandar___Reducir_vuwh3y.png" }, //
    { id: 3, nombre: "Alterar los recuerdos", clase: "Bardo", nivel: 5, archivo: "/v1772661071/Bardo_Alterar_los_recuerdos_lkshb2.png" }, //
    { id: 4, nombre: "Alzar a los muertos", clase: "Bardo", nivel: 5, archivo: "/v1772661635/Bardo_Alzar_a_los_muertos_auuwd9.png" }, //
    { id: 5, nombre: "Amistad", clase: "Bardo", nivel: 0, archivo: "/v1772661636/Bardo_Amistad_ouso3t.png" }, //
    { id: 6, nombre: "Animar objetos", clase: "Bardo", nivel: 5, archivo: "/v1772661636/Bardo_Animar_objetos_orue3e.png" }, //
    { id: 7, nombre: "Antipatía/simpatía", clase: "Bardo", nivel: 8, archivo: "/v1772661636/Bardo_Antipat%C3%ADa_simpat%C3%ADa_xucyrj.png" }, //
    { id: 8, nombre: "Apariencia", clase: "Bardo", nivel: 5, archivo: "/v1772661637/Bardo_Apariencia_ld4llc.png" }, //
    { id: 9, nombre: "Asesino fantasmal", clase: "Bardo", nivel: 4, archivo: "/v1772661638/Bardo_Asesino_fantasmal_nnjiel.png" }, //
    { id: 10, nombre: "Atadura planar", clase: "Bardo", nivel: 5, archivo: "/v1772661639/Bardo_Atadura_planar_c2aod4.png" }, //
    { id: 11, nombre: "Auxilio", clase: "Bardo", nivel: 2, archivo: "/v1772661640/Bardo_Auxilio_flerer.png" }, //
    { id: 12, nombre: "Baile irresistible de Otto", clase: "Bardo", nivel: 6, archivo: "/v1772661641/Bardo_Baile_irresistibile_de_Otto_opzpdy.png" }, //
    { id: 13, nombre: "Boca mágica", clase: "Bardo", nivel: 2, archivo: "/v1772661642/Bardo_Boca_m%C3%A1gica_pa0m2z.png" }, //
    { id: 14, nombre: "Burla dañina", clase: "Bardo", nivel: 0, archivo: "/v1772661643/Bardo_Burla_da%C3%B1ina_b9zlth.png" }, //
    { id: 15, nombre: "Caída de pluma", clase: "Bardo", nivel: 1, archivo: "/v1772661643/Bardo_Ca%C3%ADda_de_pluma_xnvbh1.png" }, //
    { id: 16, nombre: "Calentar metal", clase: "Bardo", nivel: 2, archivo: "/v1772661644/Bardo_Calentar_metal_o3riqa.png" }, //
    { id: 17, nombre: "Calmar emociones", clase: "Bardo", nivel: 2, archivo: "/v1772661644/Bardo_Calmar_emociones_xm6a8t.png" }, //
    { id: 18, nombre: "Círculo de teletransportación", clase: "Bardo", nivel: 5, archivo: "/v1772661645/Bardo_C%C3%ADrculo_de_teletransportaci%C3%B3n_k9tfdy.png" }, //
    { id: 19, nombre: "Clarividencia", clase: "Bardo", nivel: 3, archivo: "/v1772661646/Bardo_Clarividencia_m49rsb.png" }, //
    { id: 20, nombre: "Compulsión", clase: "Bardo", nivel: 4, archivo: "/v1772661647/Bardo_Compulsi%C3%B3n_tghfsy.png" }, //
    { id: 21, nombre: "Confusión", clase: "Bardo", nivel: 4, archivo: "/v1772661648/Bardo_Confusi%C3%B3n_d8fr5l.png" }, //
    { id: 22, nombre: "Conocer las leyendas", clase: "Bardo", nivel: 5, archivo: "/v1772661649/Bardo_Conocer_las_leyendas_gdhrqu.png" }, //
    { id: 23, nombre: "Corona de la locura", clase: "Bardo", nivel: 2, archivo: "/v1772661650/Bardo_Corona_de_la_locura_ik6ih2.png" }, //
    { id: 24, nombre: "Crecimiento vegetal", clase: "Bardo", nivel: 3, archivo: "/v1772661650/Bardo_Crecimiento_vegetal_tmmabg.png" }, //
    { id: 25, nombre: "Curar heridas", clase: "Bardo", nivel: 1, archivo: "/v1772661651/Bardo_Curar_heridas_en_masa_k2mbyt.png" }, //
    { id: 26, nombre: "Curar heridas en masa", clase: "Bardo", nivel: 5, archivo: "/v1772661652/Bardo_Curar_heridas_nio3nq.png" }, //
    { id: 27, nombre: "Despertar", clase: "Bardo", nivel: 5, archivo: "/v1772661653/Bardo_Despertar_n87vje.png" }, //
    { id: 28, nombre: "Detectar magia", clase: "Bardo", nivel: 1, archivo: "/v1772661654/Bardo_Detectar_magia_qcwcud.png" }, //
    { id: 29, nombre: "Detectar pensamientos", clase: "Bardo", nivel: 2, archivo: "/v1772661654/Bardo_Detectar_pensamientos_r1pedk.png" }, //
    { id: 30, nombre: "Disfrazarse", clase: "Bardo", nivel: 1, archivo: "/v1772661655/Bardo_Disfrazarse_nmxdma.png" }, //
    { id: 31, nombre: "Disipar magia", clase: "Bardo", nivel: 3, archivo: "/v1772661656/Bardo_Disipar_magia_z80fay.png" }, //
    { id: 32, nombre: "Dominar monstruo", clase: "Bardo", nivel: 8, archivo: "/v1772661657/Bardo_Dominar_monstruo_iuqzzv.png" }, //
    { id: 33, nombre: "Dominar persona", clase: "Bardo", nivel: 5, archivo: "/v1772661658/Bardo_Dominar_persona_g08zi9.png" }, //
    { id: 34, nombre: "Don de lenguas", clase: "Bardo", nivel: 3, archivo: "/v1772661658/Bardo_Don_de_lenguas_g2axry.png" }, //
    { id: 35, nombre: "Dormir", clase: "Bardo", nivel: 1, archivo: "/v1772661659/Bardo_Dormir_ck3qp3.png" }, //
    { id: 36, nombre: "Embelesar", clase: "Bardo", nivel: 2, archivo: "/v1772661660/Bardo_Embelesar_y01cjd.png" }, //
    { id: 37, nombre: "Encontrar animal", clase: "Bardo", nivel: 1, archivo: "/v1772661661/Bardo_Encantar_animal_linkii.png" }, //
    { id: 38, nombre: "Encontrar el camino", clase: "Bardo", nivel: 6, archivo: "/v1772661668/Bardo_Encontrar_el_camino_wxowdz.png" }, //
    { id: 39, nombre: "Enlace telepático de Rary", clase: "Bardo", nivel: 5, archivo: "/v1772661672/Bardo_Enlace_telep%C3%A1tico_de_Rary_qxx6yo.png" }, //
    { id: 40, nombre: "Ensueño", clase: "Bardo", nivel: 5, archivo: "/v1772661672/Bardo_Ensue%C3%B1o_xbyekr.png" }, //
    { id: 41, nombre: "Entender idiomas", clase: "Bardo", nivel: 1, archivo: "/v1772661828/Bardo_Entender_idiomas_fjgcev.png" }, //
    { id: 42, nombre: "Escudriñar", clase: "Bardo", nivel: 5, archivo: "/v1772661829/Bardo_Escudri%C3%B1ar_h9kpji.png" }, //
    { id: 43, nombre: "Espada de Mordenkainen", clase: "Bardo", nivel: 7, archivo: "/v1772661831/Bardo_Espada_de_Mordenkainen_q5ciu4.png" }, //
    { id: 44, nombre: "Espejismo arcano", clase: "Bardo", nivel: 7, archivo: "/v1772661901/Bardo_Espejismo_arcano_dvidmj.png" }, //
    { id: 45, nombre: "Estática sináptica", clase: "Bardo", nivel: 5, archivo: "/v1772661901/Bardo_Est%C3%A1tica_sin%C3%A1ptica_hyotjd.png" }, //
    { id: 46, nombre: "Excursión etérea", clase: "Bardo", nivel: 7, archivo: "/v1772661902/Bardo_Excursi%C3%B3n_et%C3%A9rea_gdjroy.png" }, //
    { id: 47, nombre: "Festín de héroes", clase: "Bardo", nivel: 6, archivo: "/v1772661903/Bardo_Fest%C3%ADn_de_h%C3%A9roes_dohk4c.png" }, //
    { id: 48, nombre: "Fingir muerte", clase: "Bardo", nivel: 3, archivo: "/v1772661904/Bardo_Fingir_muerte_ydfkze.png" }, //
    { id: 49, nombre: "Fuego feérico", clase: "Bardo", nivel: 1, archivo: "/v1772661905/Bardo_Fuego_fe%C3%A9rico_dxmt7z.png" }, //
    { id: 50, nombre: "Fuerza fantasmal", clase: "Bardo", nivel: 2, archivo: "/v1772661906/Bardo_Fuente_de_la_luz_lunar_n01eft.png" }, //
    { id: 51, nombre: "Fuente de luz lunar", clase: "Bardo", nivel: 4, archivo: "/v1772661907/Bardo_Fuerza_fantasmal_dkropg.png" }, //
    { id: 52, nombre: "Geas", clase: "Bardo", nivel: 5, archivo: "/v1772661908/Bardo_Geas_tj0wok.png" }, //
    { id: 53, nombre: "Glifo custodio", clase: "Bardo", nivel: 3, archivo: "/v1772661908/Bardo_Glifo_custodio_ap8jrm.png" }, //
    { id: 54, nombre: "Guardia de cuchillas", clase: "Bardo", nivel: 0, archivo: "/v1772661910/Bardo_Guardia_de_cuchillas_q467ff.png" }, //
    { id: 55, nombre: "Guardas y guardias", clase: "Bardo", nivel: 6, archivo: "/v1772661909/Bardo_Guardas_y_guardias_hnkrq3.png" }, //
    { id: 56, nombre: "Hablar con las plantas", clase: "Bardo", nivel: 3, archivo: "/v1772661911/Bardo_Hablar_con_las_plantas_qgs1rv.png" }, //
    { id: 57, nombre: "Hablar con los animales", clase: "Bardo", nivel: 1, archivo: "/v1772661912/Bardo_Hablar_con_los_animales_fjvpbk.png" }, //
    { id: 58, nombre: "Hablar con los muertos", clase: "Bardo", nivel: 3, archivo: "/v1772661913/Bardo_Hablar_con_los_muertos_j7ak11.png" }, //
    { id: 59, nombre: "Hacer añicos", clase: "Bardo", nivel: 2, archivo: "/v1772661913/Bardo_Hacer_a%C3%B1icos_g5ktx8.png" }, //
    { id: 60, nombre: "Hechizar monstruo", clase: "Bardo", nivel: 4, archivo: "/v1772661914/Bardo_Hechizar_monstruo_yk4hhj.png" }, //
    { id: 61, nombre: "Hechizar persona", clase: "Bardo", nivel: 1, archivo: "/v1772661915/Bardo_Hechizar_persona_nf3ead.png" }, //
    { id: 62, nombre: "Heroísmo", clase: "Bardo", nivel: 1, archivo: "/v1772661917/Bardo_Hero%C3%ADsmo_q6wihz.png" }, //
    { id: 63, nombre: "Identificar", clase: "Bardo", nivel: 1, archivo: "/v1772661917/Bardo_Identificar_u19imf.png" }, //
    { id: 64, nombre: "Imagen mayor", clase: "Bardo", nivel: 3, archivo: "/v1772661918/Bardo_Ilusi%C3%B3n_menor_uenb7c.png" }, //
    { id: 65, nombre: "Imagen múltiple", clase: "Bardo", nivel: 2, archivo: "/v1772661919/Bardo_Ilusi%C3%B3n_programada_tsfszz.png" }, //
    { id: 66, nombre: "Ilusión menor", clase: "Bardo", nivel: 0, archivo: "/v1772661920/Bardo_Imagen_mayor_wgbjos.png" }, //
    { id: 67, nombre: "Ilusión programada", clase: "Bardo", nivel: 6, archivo: "/v1772661921/Bardo_Imagen_m%C3%BAltiple_dpqutp.png" }, //
    { id: 68, nombre: "Imagen silenciosa", clase: "Bardo", nivel: 1, archivo: "/v1772661921/Bardo_Imagen_silenciosa_mis5i1.png" }, //
    { id: 69, nombre: "Impacto certero", clase: "Bardo", nivel: 0, archivo: "/v1772661922/Bardo_Impacto_certero_i3gqbl.png" }, //
    { id: 70, nombre: "Imponer maldición", clase: "Bardo", nivel: 3, archivo: "/v1772661924/Bardo_Imponer_maldici%C3%B3n_j9kfwe.png" }, //
    { id: 71, nombre: "Indetectable", clase: "Bardo", nivel: 3, archivo: "/v1772661924/Bardo_Indetectable_pm0asb.png" }, //
    { id: 72, nombre: "Inmovilizar monstruo", clase: "Bardo", nivel: 5, archivo: "/v1772661925/Bardo_Inmovilizar_monstruo_jauc6v.png" }, //
    { id: 73, nombre: "Inmovilizar persona", clase: "Bardo", nivel: 2, archivo: "/v1772661926/Bardo_Inmovilizar_persona_vkmssy.png" }, //
    { id: 74, nombre: "Invisibilidad", clase: "Bardo", nivel: 2, archivo: "/v1772661927/Bardo_Invisibilidad_pryxdu.png" }, //
    { id: 75, nombre: "Invisibilidad mejorada", clase: "Bardo", nivel: 4, archivo: "/v1772661927/Bardo_Invisibilidad_mejorada_qjgznj.png" }, //
    { id: 76, nombre: "Jaula de fuerza", clase: "Bardo", nivel: 7, archivo: "/v1772661929/Bardo_Jaula_de_fuerza_n3iwbe.png" }, //
    { id: 77, nombre: "Labia", clase: "Bardo", nivel: 8, archivo: "/v1772661930/Bardo_Labia_psm3cn.png" }, //
    { id: 78, nombre: "Libertad de movimiento", clase: "Bardo", nivel: 4, archivo: "/v1772661930/Bardo_Libertad_de_movimiento_w10k4k.png" }, //
    { id: 79, nombre: "Localizar animales o plantas", clase: "Bardo", nivel: 2, archivo: "/v1772661931/Bardo_Localizar_animales_o_plantas_gok78o.png" }, //
    { id: 80, nombre: "Localizar criatura", clase: "Bardo", nivel: 4, archivo: "/v1772661932/Bardo_Localizar_criatura_jfbrhx.png" }, //
    { id: 81, nombre: "Localizar objeto", clase: "Bardo", nivel: 2, archivo: "/v1772661933/Bardo_Localizar_objeto_dzdmat.png" }, //
    { id: 82, nombre: "Luces danzantes", clase: "Bardo", nivel: 0, archivo: "/v1772661934/Bardo_Luces_danzantes_jsjudt.png" }, //
    { id: 83, nombre: "Luz", clase: "Bardo", nivel: 0, archivo: "/v1772661935/Bardo_Luz_nlg3zf.png" }, //
    { id: 84, nombre: "Mal de ojo", clase: "Bardo", nivel: 6, archivo: "/v1772661936/Bardo_Mal_de_ojo_cxc3rw.png" }, //
    { id: 85, nombre: "Mano de mago", clase: "Bardo", nivel: 0, archivo: "/v1772661936/Bardo_Mano_de_mago_j3l4sh.png" }, //
    { id: 86, nombre: "Mansión magnífica de Mordenkainen", clase: "Bardo", nivel: 7, archivo: "/v1772661938/Bardo_Mansi%C3%B3n_magn%C3%ADfica_de_Mordenkainen_nhuzq1.png" }, //
    { id: 87, nombre: "Mensaje", clase: "Bardo", nivel: 0, archivo: "/v1772661939/Bardo_Mensaje_tk2wtr.png" }, //
    { id: 88, nombre: "Mensajero animal", clase: "Bardo", nivel: 2, archivo: "/v1772661940/Bardo_Mensajero_animal_mr87ec.png" }, //
    { id: 89, nombre: "Mente en blanco", clase: "Bardo", nivel: 8, archivo: "/v1772661941/Bardo_Mente_en_blanco_lh8s2v.png" }, //
    { id: 90, nombre: "Muro prismático", clase: "Bardo", nivel: 9, archivo: "/v1772661941/Bardo_Muro_prism%C3%A1tico_cmr8qa.png" }, //
    { id: 91, nombre: "Nube apestosa", clase: "Bardo", nivel: 3, archivo: "/v1772661943/Bardo_Nube_apestosa_zvwhgj.png" }, //
    { id: 92, nombre: "Nube de dagas", clase: "Bardo", nivel: 2, archivo: "/v1772661942/Bardo_Nube_de_dagas_n7grtu.png" }, //
    { id: 93, nombre: "Ofuscación", clase: "Bardo", nivel: 8, archivo: "/v1772661944/Bardo_Ofuscaci%C3%B3n_bpgqzs.png" }, //
    { id: 94, nombre: "Ola atronadora", clase: "Bardo", nivel: 1, archivo: "/v1772661945/Bardo_Ola_atronadora_dnanla.png" }, //
    { id: 95, nombre: "Orden imperiosa", clase: "Bardo", nivel: 1, archivo: "/v1772661947/Bardo_Orden_imperiosa_oyrqvu.png" }, //
    { id: 96, nombre: "Palabra de curación", clase: "Bardo", nivel: 1, archivo: "/v1772661948/Bardo_Palabra_de_curaci%C3%B3n_guy6uq.png" }, //
    { id: 97, nombre: "Palabra de curación en masa", clase: "Bardo", nivel: 3, archivo: "/v1772661947/Bardo_Palabra_de_curaci%C3%B3n_en_masa_fero40.png" }, //
    { id: 98, nombre: "Palabra de poder: aturdir", clase: "Bardo", nivel: 8, archivo: "/v1772661949/Bardo_Palabra_de_poder-_aturdir_mygjqe.png" }, //
    { id: 99, nombre: "Palabra de poder: fortalecer", clase: "Bardo", nivel: 7, archivo: "/v1772661951/Bardo_Palabra_de_poder-_fortalecer_ke1tbw.png" }, //
    { id: 100, nombre: "Palabra de poder: matar", clase: "Bardo", nivel: 9, archivo: "/v1772661951/Bardo_Palabra_de_poder-_matar_ofvgcl.png" }, //
    { id: 101, nombre: "Palabra de poder: sanar", clase: "Bardo", nivel: 9, archivo: "/v1772661952/Bardo_Palabra_de_poder-_sanar_xqbap3.png" }, //
    { id: 102, nombre: "Patrón hipnótico", clase: "Bardo", nivel: 3, archivo: "/v1772661953/Bardo_Patr%C3%B3n_hipn%C3%B3tico_num64i.png" }, //
    { id: 103, nombre: "Pequeña choza de Leomund", clase: "Bardo", nivel: 3, archivo: "/v1772661954/Bardo_Peque%C3%B1a_choza_de_Leomund_cntaxp.png" }, //
    { id: 104, nombre: "Perdición", clase: "Bardo", nivel: 1, archivo: "/v1772661955/Bardo_Perdici%C3%B3n_whkpxq.png" }, //
    { id: 105, nombre: "Polimorfar", clase: "Bardo", nivel: 4, archivo: "/v1772661958/Bardo_Poliformar_e2lagp.png" }, //
    { id: 106, nombre: "Polimorfar verdadero", clase: "Bardo", nivel: 9, archivo: "/v1772661956/Bardo_Poliformar_verdadero_e3lcex.png" }, //
    { id: 107, nombre: "Potenciar característica", clase: "Bardo", nivel: 2, archivo: "/v1772661958/Bardo_Potenciar_caracter%C3%ADstica_fj7dot.png" }, //
    { id: 108, nombre: "Presencia regia de Yolande", clase: "Bardo", nivel: 5, archivo: "/v1772661960/Bardo_Presencia_regia_de_Yolande_tysj2p.png" }, //
    { id: 109, nombre: "Presciencia", clase: "Bardo", nivel: 9, archivo: "/v1772661959/Bardo_Presciencia_ahsghz.png" }, //
    { id: 110, nombre: "Prestidigitación", clase: "Bardo", nivel: 0, archivo: "/v1772661962/Bardo_Prestidigitaci%C3%B3n_anmkng.png" }, //
    { id: 111, nombre: "Proyectar imagen", clase: "Bardo", nivel: 7, archivo: "/v1772661962/Bardo_Proyectar_imagen_dqfpja.png" }, //
    { id: 112, nombre: "Puerta dimensional", clase: "Bardo", nivel: 4, archivo: "/v1772661963/Bardo_Puerta_dimensional_xftsoo.png" }, //
    { id: 113, nombre: "Ralentizar", clase: "Bardo", nivel: 3, archivo: "/v1772661963/Bardo_Ralentizar_lvqhhp.png" }, //
    { id: 114, nombre: "Recado", clase: "Bardo", nivel: 3, archivo: "/v1772661965/Bardo_Recado_f6vtim.png" }, //
    { id: 115, nombre: "Regenerar", clase: "Bardo", nivel: 7, archivo: "/v1772661966/Bardo_Regenerar_o5kdz4.png" }, //
    { id: 116, nombre: "Reparar", clase: "Bardo", nivel: 0, archivo: "/v1772661968/Bardo_Reparar_ntw8pl.png" }, //
    { id: 117, nombre: "Restablecimiento mayor", clase: "Bardo", nivel: 5, archivo: "/v1772661968/Bardo_Restablecimiento_mayor_zihsyo.png" }, //
    { id: 118, nombre: "Restablecimiento menor", clase: "Bardo", nivel: 2, archivo: "/v1772661972/Bardo_Restablecimiento_menor_kjsoru.png" }, //
    { id: 119, nombre: "Resurrección", clase: "Bardo", nivel: 7, archivo: "/v1772661970/Bardo_Resurreci%C3%B3n_lmep7r.png" }, //
    { id: 120, nombre: "Risa horrible de Tasha", clase: "Bardo", nivel: 1, archivo: "/v1772662013/Bardo_Risa_horrible_de_Tasha_wluuge.png" }, //
    { id: 121, nombre: "Rociada de color", clase: "Bardo", nivel: 1, archivo: "/v1772662013/Bardo_Rociada_de_color_zggiz0.png" }, //
    { id: 122, nombre: "Rociada prismática", clase: "Bardo", nivel: 7, archivo: "/v1772662014/Bardo_Rociada_prism%C3%A1tica_p7zlya.png" }, //
    { id: 123, nombre: "Silencio", clase: "Bardo", nivel: 2, archivo: "/v1772662015/Bardo_Silencio_nuq7rc.png" }, //
    { id: 124, nombre: "Símbolo", clase: "Bardo", nivel: 7, archivo: "/v1772662017/Bardo_S%C3%ADmbolo_pjtrfu.png" }, //
    { id: 125, nombre: "Sirviente invisible", clase: "Bardo", nivel: 1, archivo: "/v1772662017/Bardo_Sirviente_invisible_xkgdew.png" }, //
    { id: 126, nombre: "Sordera/ceguera", clase: "Bardo", nivel: 2, archivo: "/v1772662019/Bardo_Sordera_ceguera_bfqvst.png" }, //
    { id: 127, nombre: "Sugestión", clase: "Bardo", nivel: 2, archivo: "/v1772662021/Bardo_Sugesti%C3%B3n_fb3zjq.png" }, //
    { id: 128, nombre: "Sugestión en masa", clase: "Bardo", nivel: 6, archivo: "/v1772662020/Bardo_Sugesti%C3%B3n_en_masa_deglpu.png" }, //
    { id: 129, nombre: "Susurros discordantes", clase: "Bardo", nivel: 1, archivo: "/v1772662022/Bardo_Susurros_discordantes_sizwsb.png" }, //
    { id: 130, nombre: "Teletransporte", clase: "Bardo", nivel: 7, archivo: "/v1772662023/Bardo_Teletransporte_da7ozr.png" }, //
    { id: 131, nombre: "Terreno alucinatorio", clase: "Bardo", nivel: 4, archivo: "/v1772662025/Bardo_Terreno_alucinatorio_tvihsz.png" }, //
    { id: 132, nombre: "Terror", clase: "Bardo", nivel: 3, archivo: "/v1772662025/Bardo_Terror_lxpocr.png" }, //
    { id: 133, nombre: "Texto ilusorio", clase: "Bardo", nivel: 1, archivo: "/v1772662026/Bardo_Texto_ilusorio_nilgdd.png" }, //
    { id: 134, nombre: "Tronar", clase: "Bardo", nivel: 0, archivo: "/v1772662028/Bardo_Tronar_blgaqw.png" }, //
    { id: 135, nombre: "Ver invisibilidad", clase: "Bardo", nivel: 2, archivo: "/v1772662028/Bardo_Ver_invisibilidad_rmedh8.png" }, //
    { id: 136, nombre: "Visión veraz", clase: "Bardo", nivel: 6, archivo: "/v1772662029/Bardo_Visi%C3%B3n_veraz_pkmsir.png" }, //
    { id: 137, nombre: "Voluta estelar", clase: "Bardo", nivel: 0, archivo: "/v1772662031/Bardo_Voluta_estelar_uxpyfn.png" }, //
    { id: 138, nombre: "Zancada prodigiosa", clase: "Bardo", nivel: 1, archivo: "/v1772662031/Bardo_Zancada_prodigiosa_ffw9oe.png" }, //
    { id: 139, nombre: "Zona de la verdad", clase: "Bardo", nivel: 2, archivo: "/v1772661635/Bardo_Zona_de_la_verdad_zziips.png" }, //

    // CONJUROS DE BRUJO (ORDEN ALFABÉTICO)
    { id: 141, nombre: "Amistad", clase: "Brujo", nivel: 0, archivo: "/v1772793670/Brujo_Amistad_sfulj9.png" },
    { id: 153, nombre: "Armadura de Agathys", clase: "Brujo", nivel: 1, archivo: "/v1772793670/Brujo_Armadura_de_Agathys_i8k3uy.png" },
    { id: 200, nombre: "Atadura planar", clase: "Brujo", nivel: 5, archivo: "/v1772793671/Brujo_Atadura_planar_atx9ya.png" },
    { id: 154, nombre: "Brazos de Hadar", clase: "Brujo", nivel: 1, archivo: "/v1772793671/Brujo_Brazos_de_Hadar_xft46l.png" },
    { id: 209, nombre: "Caldero burbujeante de Tasha", clase: "Brujo", nivel: 6, archivo: "/v1772793671/Brujo_Caldero_burbujeante_de_Tasha_i1kyhu.png" },
    { id: 225, nombre: "Cautiverio", clase: "Brujo", nivel: 9, archivo: "/v1772793671/Brujo_Cautiverio_gr6cg0.png" },
    { id: 210, nombre: "Círculo de muerte", clase: "Brujo", nivel: 6, archivo: "/v1772793671/Brujo_C%C3%ADrculo_de_muerte_llz2yd.png" },
    { id: 201, nombre: "Círculo de teletransportación", clase: "Brujo", nivel: 5, archivo: "/v1772793671/Brujo_C%C3%ADrculo_de_teletransportaci%C3%B3n_iy6nzh.png" },
    { id: 180, nombre: "Círculo mágico", clase: "Brujo", nivel: 3, archivo: "/v1772793672/Brujo_C%C3%ADrculo_m%C3%A1gico_e9weto.png" },
    { id: 168, nombre: "Clavo mental", clase: "Brujo", nivel: 2, archivo: "/v1772793673/Brujo_Clavo_mental_mjcxkr.png" },
    { id: 202, nombre: "Contactar con otro plano", clase: "Brujo", nivel: 5, archivo: "/v1772793673/Brujo_Contactar_con_otro_plano_inr82l.png" },
    { id: 181, nombre: "Contrahechizo", clase: "Brujo", nivel: 3, archivo: "/v1772793673/Brujo_Contrahechizo_db0ens.png" },
    { id: 169, nombre: "Corona de la locura", clase: "Brujo", nivel: 2, archivo: "/v1772793674/Brujo_Corona_de_la_locura_iol7gn.png" },
    { id: 211, nombre: "Crear muerto viviente", clase: "Brujo", nivel: 6, archivo: "/v1772793674/Brujo_Crear_muerto_viviente_okpjua.png" },
    { id: 216, nombre: "Dedo de la muerte", clase: "Brujo", nivel: 7, archivo: "/v1772793676/Brujo_Dedo_de_la_muerte_acwqa5.png" },
    { id: 142, nombre: "Descarga sobrenatural", clase: "Brujo", nivel: 0, archivo: "/v1772793676/Brujo_Descarga_sobrenatural_kvsvdg.png" },
    { id: 217, nombre: "Desplazamiento entre planos", clase: "Brujo", nivel: 7, archivo: "/v1772793676/Brujo_Desplazamiento_entre_planos_tdaou4.png" },
    { id: 194, nombre: "Destierro", clase: "Brujo", nivel: 4, archivo: "/v1772793676/Brujo_Destierro_rxmtao.png" },
    { id: 155, nombre: "Detectar magia", clase: "Brujo", nivel: 1, archivo: "/v1772793677/Brujo_Detectar_magia_dmoeu5.png" },
    { id: 182, nombre: "Disipar magia", clase: "Brujo", nivel: 3, archivo: "/v1772793678/Brujo_Disipar_magia_vvrwsh.png" },
    { id: 220, nombre: "Dominar monstruo", clase: "Brujo", nivel: 8, archivo: "/v1772793679/Brujo_Dominar_monstruo_bn1bef.png" },
    { id: 183, nombre: "Don de lenguas", clase: "Brujo", nivel: 3, archivo: "/v1772793679/Brujo_Don_de_lenguas_phdqr4.png" },
    { id: 170, nombre: "Embelesar", clase: "Brujo", nivel: 2, archivo: "/v1772793679/Brujo_Embelesar_sjqvq7.png" },
    { id: 203, nombre: "Engañar", clase: "Brujo", nivel: 5, archivo: "/v1772793679/Brujo_Ensue%C3%B1o_w4bgmf.png" },
    { id: 204, nombre: "Ensueño", clase: "Brujo", nivel: 5, archivo: "/v1772793679/Brujo_Ensue%C3%B1o_w4bgmf.png" },
    { id: 156, nombre: "Entender idiomas", clase: "Brujo", nivel: 1, archivo: "/v1772793680/Brujo_Entender_idiomas_an2kgp.png" },
    { id: 205, nombre: "Escudriñar", clase: "Brujo", nivel: 5, archivo: "/v1772793681/Brujo_Escudri%C3%B1ar_gcpses.png" },
    { id: 206, nombre: "Estática sináptica", clase: "Brujo", nivel: 5, archivo: "/v1772793681/Brujo_Est%C3%A1tica_sin%C3%A1ptica_j1wten.png" },
    { id: 218, nombre: "Excursión etérea", clase: "Brujo", nivel: 7, archivo: "/v1772793682/Brujo_Excursi%C3%B3n_et%C3%A9rea_jhovb0.png" },
    { id: 184, nombre: "Forma gaseosa", clase: "Brujo", nivel: 3, archivo: "/v1772793682/Brujo_Forma_gaseosa_eduqhp.png" },
    { id: 143, nombre: "Fragmento mental", clase: "Brujo", nivel: 0, archivo: "/v1772793682/Brujo_Fragmento_mental_e2rl5o.png" },
    { id: 144, nombre: "Guardia de cuchillas", clase: "Brujo", nivel: 0, archivo: "/v1772793683/Brujo_Guardia_de_cuchillas_nkvwos.png" },
    { id: 157, nombre: "Hablar con los animales", clase: "Brujo", nivel: 1, archivo: "/v1772793685/Brujo_Hablar_con_los_animales_ktprgn.png" },
    { id: 185, nombre: "Hambre de Hadar", clase: "Brujo", nivel: 3, archivo: "/v1772793685/Brujo_Hambre_de_Hadar_jexzgz.png" },
    { id: 195, nombre: "Hechizar monstruo", clase: "Brujo", nivel: 4, archivo: "/v1772793685/Brujo_Hechizar_monstruo_zs7nhl.png" },
    { id: 158, nombre: "Hechizar persona", clase: "Brujo", nivel: 1, archivo: "/v1772793685/Brujo_Hechizar_persona_njrkoz.png" },
    { id: 145, nombre: "Ilusión menor", clase: "Brujo", nivel: 0, archivo: "/v1772793686/Brujo_Ilusi%C3%B3n_menor_b9hj0j.png" },
    { id: 186, nombre: "Imagen mayor", clase: "Brujo", nivel: 3, archivo: "/v1772793686/Brujo_Imagen_mayor_bwtkmo.png" },
    { id: 171, nombre: "Imagen múltiple", clase: "Brujo", nivel: 2, archivo: "/v1772793686/Brujo_Imagen_m%C3%BAltiple_n6dbdx.png" },
    { id: 146, nombre: "Impacto certero", clase: "Brujo", nivel: 0, archivo: "/v1772793686/Brujo_Impacto_certero_mjn0lx.png" },
    { id: 207, nombre: "Inmovilizar monstruo", clase: "Brujo", nivel: 5, archivo: "/v1772793686/Brujo_Inmovilizar_monstruo_pdqgy1.png" },
    { id: 172, nombre: "Inmovilizar persona", clase: "Brujo", nivel: 2, archivo: "/v1772793687/Brujo_Inmovilizar_persona_i4hilo.png" },
    { id: 173, nombre: "Invisibilidad", clase: "Brujo", nivel: 2, archivo: "/v1772793687/Brujo_Invisibilidad_t2wvle.png" },
    { id: 196, nombre: "Invocar aberración", clase: "Brujo", nivel: 4, archivo: "/v1772793687/Brujo_Invocar_aberraci%C3%B3n_we9jhl.png" },
    { id: 187, nombre: "Invocar feérico", clase: "Brujo", nivel: 3, archivo: "/v1772793687/Brujo_Invocar_fe%C3%A9rico_y52l1q.png" },
    { id: 212, nombre: "Invocar infernal", clase: "Brujo", nivel: 6, archivo: "/v1772793687/Brujo_Invocar_infernal_ygax8h.png" },
    { id: 188, nombre: "Invocar muerto viviente", clase: "Brujo", nivel: 3, archivo: "/v1772793688/Brujo_Invocar_muerto_viviente_z8foyy.png" },
    { id: 219, nombre: "Jaula de fuerza", clase: "Brujo", nivel: 7, archivo: "/v1772793688/Brujo_Jaula_de_fuerza_pzsm2n.png" },
    { id: 221, nombre: "Labia", clase: "Brujo", nivel: 8, archivo: "/v1772793688/Brujo_Labia_xs5sdd.png" },
    { id: 189, nombre: "Levantar maldición", clase: "Brujo", nivel: 3, archivo: "/v1772793688/Brujo_Levantar_maldici%C3%B3n_zoegsm.png" },
    { id: 213, nombre: "Mal de ojo", clase: "Brujo", nivel: 6, archivo: "/v1772793688/Brujo_Mal_de_ojo_fju4wc.png" },
    { id: 159, nombre: "Maleficio", clase: "Brujo", nivel: 1, archivo: "/v1772793689/Brujo_Maleficio_jvumrv.png" },
    { id: 147, nombre: "Mano de mago", clase: "Brujo", nivel: 0, archivo: "/v1772793689/Brujo_Mano_de_mago_a1amm7.png" },
    { id: 197, nombre: "Marchitar", clase: "Brujo", nivel: 4, archivo: "/v1772793689/Brujo_Marchitar_ltbw0e.png" },
    { id: 174, nombre: "Nube de dagas", clase: "Brujo", nivel: 2, archivo: "/v1772793689/Brujo_Nube_de_dagas_bnryiw.png" },
    { id: 222, nombre: "Ofuscación", clase: "Brujo", nivel: 8, archivo: "/v1772793689/Brujo_Ofuscaci%C3%B3n_o9x6va.png" },
    { id: 175, nombre: "Oscuridad", clase: "Brujo", nivel: 2, archivo: "/v1772793690/Brujo_Oscuridad_azcj4m.png" },
    { id: 223, nombre: "Palabra de poder: aturdir", clase: "Brujo", nivel: 8, archivo: "/v1772793690/Brujo_Palabra_de_poder-_aturdir_cxii9n.png" },
    { id: 226, nombre: "Palabra de poder: matar", clase: "Brujo", nivel: 9, archivo: "/v1772793690/Brujo_Palabra_de_poder-_matar_xzk2z0.png" },
    { id: 176, nombre: "Paso brumoso", clase: "Brujo", nivel: 2, archivo: "/v1772793690/Brujo_Paso_brumoso_uqcpa3.png" },
    { id: 190, nombre: "Patrón hipnótico", clase: "Brujo", nivel: 3, archivo: "/v1772793690/Brujo_Patr%C3%B3n_hipn%C3%B3tico_gwijwd.png" },
    { id: 160, nombre: "Perdición", clase: "Brujo", nivel: 1, archivo: "/v1772793691/Brujo_Perdici%C3%B3n_jn3dfx.png" },
    { id: 227, nombre: "Polimorfar verdadero", clase: "Brujo", nivel: 9, archivo: "/v1772793691/Brujo_Poliformar_verdadero_tpbsih.png" },
    { id: 228, nombre: "Portal", clase: "Brujo", nivel: 9, archivo: "/v1772793691/Brujo_Portal_ov7ruh.png" },
    { id: 229, nombre: "Presciencia", clase: "Brujo", nivel: 9, archivo: "/v1772793691/Brujo_Presciencia_s0fycx.png" },
    { id: 148, nombre: "Prestidigitación", clase: "Brujo", nivel: 0, archivo: "/v1772793691/Brujo_Prestidigitaci%C3%B3n_b8i8r6.png" },
    { id: 161, nombre: "Protección contra el bien y el mal", clase: "Brujo", nivel: 1, archivo: "/v1772793692/Brujo_Protecci%C3%B3n_contra_el_bien_y_el_mal_vx08jy.png" },
    { id: 230, nombre: "Proyección astral", clase: "Brujo", nivel: 9, archivo: "/v1772793692/Brujo_Proyecci%C3%B3n_astral_qwlsx1.png" },
    { id: 214, nombre: "Puerta arcana", clase: "Brujo", nivel: 6, archivo: "/v1772793692/Brujo_Puerta_arcana_l37rnf.png" },
    { id: 198, nombre: "Puerta dimensional", clase: "Brujo", nivel: 4, archivo: "/v1772793692/Brujo_Puerta_dimensional_wx4txh.png" },
    { id: 177, nombre: "Rayo debilitador", clase: "Brujo", nivel: 2, archivo: "/v1772793693/Brujo_Rayo_debilitador_pybs8c.png" },
    { id: 162, nombre: "Rayo de hechicería", clase: "Brujo", nivel: 1, archivo: "/v1772793693/Brujo_Rayo_de_hechicer%C3%ADa_meadeq.png" },
    { id: 163, nombre: "Reprensión infernal", clase: "Brujo", nivel: 1, archivo: "/v1772793693/Brujo_Reprensi%C3%B3n_infernal_dvglwg.png" },
    { id: 164, nombre: "Retirada expeditiva", clase: "Brujo", nivel: 1, archivo: "/v1772793693/Brujo_Retirada_expeditiva_sgm6ld.png" },
    { id: 165, nombre: "Risa horrible de Tasha", clase: "Brujo", nivel: 1, archivo: "/v1772793693/Brujo_Risa_horrible_de_Tasha_bqnjmi.png" },
    { id: 149, nombre: "Rociada venenosa", clase: "Brujo", nivel: 0, archivo: "/v1772793693/Brujo_Rociada_venenosa_g8ns3h.png" },
    { id: 224, nombre: "Semiplano", clase: "Brujo", nivel: 8, archivo: "/v1772793694/Brujo_Semiplano_jg1z4u.png" },
    { id: 166, nombre: "Sirviente invisible", clase: "Brujo", nivel: 1, archivo: "/v1772793694/Brujo_Sirviente_invisible_mbhyyj.png" },
    { id: 178, nombre: "Sugestión", clase: "Brujo", nivel: 2, archivo: "/v1772793694/Brujo_Sugesti%C3%B3n_uxdqhl.png" },
    { id: 150, nombre: "Tañido por los muertos", clase: "Brujo", nivel: 0, archivo: "/v1772793694/Brujo_Ta%C3%B1ido_por_los_muertos_oxjdzq.png" },
    { id: 199, nombre: "Terreno alucinatorio", clase: "Brujo", nivel: 4, archivo: "/v1772793694/Brujo_Terreno_alucinatorio_g92a0g.png" },
    { id: 191, nombre: "Terror", clase: "Brujo", nivel: 3, archivo: "/v1772793695/Brujo_Terror_kdjcip.png" },
    { id: 231, nombre: "Terror abyecto", clase: "Brujo", nivel: 9, archivo: "/v1772793695/Brujo_Terror_abyecto_ovafo6.png" },
    { id: 167, nombre: "Texto ilusorio", clase: "Brujo", nivel: 1, archivo: "/v1772793695/Brujo_Texto_ilusorio_p541xo.png" },
    { id: 151, nombre: "Toque helado", clase: "Brujo", nivel: 0, archivo: "/v1772793695/Brujo_Toque_helado_etdeav.png" },
    { id: 192, nombre: "Toque vampírico", clase: "Brujo", nivel: 3, archivo: "/v1772793695/Brujo_Toque_vamp%C3%ADrico_yjakpz.png" },
    { id: 208, nombre: "Tormenta resplandeciente de Jallarzi", clase: "Brujo", nivel: 5, archivo: "/v1772793670/Brujo_Tormenta_resplandeciente_de_Jallarzi_db38lm.png" },
    { id: 179, nombre: "Trepar cual arácnido", clase: "Brujo", nivel: 2, archivo: "/v1772793669/Brujo_Trepar_cual_ar%C3%A1cnido_rv6os9.png" },
    { id: 152, nombre: "Tronar", clase: "Brujo", nivel: 0, archivo: "/v1772793670/Brujo_Tronar_xzlpqm.png" },
    { id: 215, nombre: "Visión veraz", clase: "Brujo", nivel: 6, archivo: "/v1772793670/Brujo_Visi%C3%B3n_veraz_eyzrfq.png" },
    { id: 193, nombre: "Volar", clase: "Brujo", nivel: 3, archivo: "/v1772793670/Brujo_Volar_bgqj5i.png" },

    // CONJUROS DE CLÉRIGO (ORDEN ALFABÉTICO)
    { id: 294, nombre: "Adivinación", clase: "Clérigo", nivel: 4, archivo: "/v1772801866/Clerigo_Adiviniaci%C3%B3n_cgy6aj.png" },
    { id: 319, nombre: "Aliado planar", clase: "Clérigo", nivel: 6, archivo: "/v1772801868/Clerigo_Aliado_planar_rkue7z.png" },
    { id: 304, nombre: "Alzar a los muertos", clase: "Clérigo", nivel: 5, archivo: "/v1772801869/Clerigo_Alzar_a_los_muertos_fdouph.png" },
    { id: 273, nombre: "Animar a los muertos", clase: "Clérigo", nivel: 3, archivo: "/v1772801870/Clerigo_Animar_a_los_muertos_j46p1w.png" },
    { id: 256, nombre: "Arma espiritual", clase: "Clérigo", nivel: 2, archivo: "/v1772801872/Clerigo_Arma_espiritual_ln2baq.png" },
    { id: 305, nombre: "Atadura planar", clase: "Clérigo", nivel: 5, archivo: "/v1772801873/Clerigo_Atadura_planar_d8jjok.png" },
    { id: 257, nombre: "Augurio", clase: "Clérigo", nivel: 2, archivo: "/v1772801875/Clerigo_Augurio_rqtlaa.png" },
    { id: 295, nombre: "Aura de pureza", clase: "Clérigo", nivel: 4, archivo: "/v1772801876/Clerigo_Aura_de_pureza_cdhjto.png" },
    { id: 296, nombre: "Aura de vida", clase: "Clérigo", nivel: 4, archivo: "/v1772801878/Clerigo_Aura_de_vida_zi5lam.png" },
    { id: 274, nombre: "Aura de vitalidad", clase: "Clérigo", nivel: 3, archivo: "/v1772801879/Clerigo_Aura_de_vitalidad_yc4iil.png" },
    { id: 339, nombre: "Aura sagrada", clase: "Clérigo", nivel: 8, archivo: "/v1772801881/Clerigo_Aura_sagrada_zkm1et.png" },
    { id: 258, nombre: "Auxilio", clase: "Clérigo", nivel: 2, archivo: "/v1772801882/Clerigo_Auxilio_scw31g.png" },
    { id: 320, nombre: "Barrera de cuchillas", clase: "Clérigo", nivel: 6, archivo: "/v1772801883/Clerigo_Barrera_de_cuchillas_jhrhpj.png" },
    { id: 241, nombre: "Bendición", clase: "Clérigo", nivel: 1, archivo: "/v1772801885/Clerigo_Bendici%C3%B3n_a3oell.png" },
    { id: 259, nombre: "Calmar emociones", clase: "Clérigo", nivel: 2, archivo: "/v1772801887/Clerigo_Calmar_emociones_ugdpba.png" },
    { id: 275, nombre: "Caminar sobre el agua", clase: "Clérigo", nivel: 3, archivo: "/v1772801888/Clerigo_Caminar_sobre_el_agua_iokqhu.png" },
    { id: 340, nombre: "Campo antimagia", clase: "Clérigo", nivel: 8, archivo: "/v1772801890/Clerigo_Campo_antimagia_wlax7y.png" },
    { id: 306, nombre: "Círculo de poder", clase: "Clérigo", nivel: 5, archivo: "/v1772801891/Clerigo_C%C3%ADrculo_de_poder_udvt1u.png" },
    { id: 276, nombre: "Círculo mágico", clase: "Clérigo", nivel: 3, archivo: "/v1772801893/Clerigo_C%C3%ADrculo_m%C3%A1gico_g5nzmi.png" },
    { id: 277, nombre: "Clarividencia", clase: "Clérigo", nivel: 3, archivo: "/v1772801894/Clerigo_Clarividencia_kjnwi6.png" },
    { id: 307, nombre: "Comunión", clase: "Clérigo", nivel: 5, archivo: "/v1772801896/Clerigo_Comuni%C3%B3n_ehcj8k.png" },
    { id: 330, nombre: "Conjurar celestial", clase: "Clérigo", nivel: 7, archivo: "/v1772801898/Clerigo_Conjurar_celestial_p6q0f5.png" },
    { id: 308, nombre: "Conocer las leyendas", clase: "Clérigo", nivel: 5, archivo: "/v1772801899/Clerigo_Conocer_las_leyendas_dz5a0r.png" },
    { id: 309, nombre: "Consagrar", clase: "Clérigo", nivel: 5, archivo: "/v1772801901/Clerigo_Consagrar_egm1ma.png" },
    { id: 310, nombre: "Contagio", clase: "Clérigo", nivel: 5, archivo: "/v1772801902/Clerigo_Contagio_rt4fpb.png" },
    { id: 297, nombre: "Controlar agua", clase: "Clérigo", nivel: 4, archivo: "/v1772801903/Clerigo_Controlar_agua_cohio7.png" },
    { id: 341, nombre: "Controlar el clima", clase: "Clérigo", nivel: 8, archivo: "/v1772801905/Clerigo_Controlar_el_clima_ygrz89.png" },
    { id: 278, nombre: "Crear comida y agua", clase: "Clérigo", nivel: 3, archivo: "/v1772801906/Clerigo_Crear_comida_y_agua_ewfzdy.png" },
    { id: 321, nombre: "Crear muerto viviente", clase: "Clérigo", nivel: 6, archivo: "/v1772801908/Clerigo_Crear_muerto_viviente_bcdrca.png" },
    { id: 242, nombre: "Crear o destruir agua", clase: "Clérigo", nivel: 1, archivo: "/v1772801909/Clerigo_Crear_o_destruir_agua_f0gfqe.png" },
    { id: 322, nombre: "Curar", clase: "Clérigo", nivel: 6, archivo: "/v1772801915/Clerigo_Curar_m52aj3.png" },
    { id: 344, nombre: "Curar en masa", clase: "Clérigo", nivel: 9, archivo: "/v1772801911/Clerigo_Curar_en_masa_wkhozd.png" },
    { id: 243, nombre: "Curar heridas", clase: "Clérigo", nivel: 1, archivo: "/v1772801914/Clerigo_Curar_heridas_c75vjp.png" },
    { id: 311, nombre: "Curar heridas en masa", clase: "Clérigo", nivel: 5, archivo: "/v1772801912/Clerigo_Curar_heridas_en_masa_b8lhqu.png" },
    { id: 323, nombre: "Dañar", clase: "Clérigo", nivel: 6, archivo: "/v1772801917/Clerigo_Da%C3%B1ar_il0u61.png" },
    { id: 331, nombre: "Desplazamiento entre planos", clase: "Clérigo", nivel: 7, archivo: "/v1772801918/Clerigo_Desplazamiento_entre_planos_atb0un.png" },
    { id: 298, nombre: "Destierro", clase: "Clérigo", nivel: 4, archivo: "/v1772801919/Clerigo_Destierro_fi7v4m.png" },
    { id: 244, nombre: "Detectar el bien y el mal", clase: "Clérigo", nivel: 1, archivo: "/v1772801921/Clerigo_Detectar_el_bien_y_el_mal_br3vbs.png" },
    { id: 245, nombre: "Detectar magia", clase: "Clérigo", nivel: 1, archivo: "/v1772801923/Clerigo_Detectar_magia_gy0odr.png" },
    { id: 260, nombre: "Detectar trampas", clase: "Clérigo", nivel: 2, archivo: "/v1772801924/Clerigo_Detectar_trampas_uvbepz.png" },
    { id: 246, nombre: "Detectar venenos y enfermedades", clase: "Clérigo", nivel: 1, archivo: "/v1772801925/Clerigo_Detectar_venenos_y_enfermedades_iujejv.png" },
    { id: 312, nombre: "Disipar el bien y el mal", clase: "Clérigo", nivel: 5, archivo: "/v1772801927/Clerigo_Disipar_el_bien_y_el_mal_foips3.png" },
    { id: 279, nombre: "Disipar magia", clase: "Clérigo", nivel: 3, archivo: "/v1772801928/Clerigo_Disipar_magia_k6xlwm.png" },
    { id: 280, nombre: "Don de lenguas", clase: "Clérigo", nivel: 3, archivo: "/v1772801930/Clerigo_Don_de_lenguas_pyqnqe.png" },
    { id: 261, nombre: "Dulce descanso", clase: "Clérigo", nivel: 2, archivo: "/v1772801931/Clerigo_Dulce_descanso_e28uff.png" },
    { id: 324, nombre: "Encontrar el camino", clase: "Clérigo", nivel: 6, archivo: "/v1772801932/Clerigo_Encontrar_el_camino_pqhqxj.png" },
    { id: 247, nombre: "Escudo de fe", clase: "Clérigo", nivel: 1, archivo: "/v1772801934/Clerigo_Escudo_de_fe_zbg16y.png" },
    { id: 313, nombre: "Escudriñar", clase: "Clérigo", nivel: 5, archivo: "/v1772801935/Clerigo_Escudri%C3%B1ar_mptjrz.png" },
    { id: 281, nombre: "Espíritus guardianes", clase: "Clérigo", nivel: 3, archivo: "/v1772801937/Clerigo_Esp%C3%ADritus_guardianes_anpcsr.png" },
    { id: 332, nombre: "Excursión etérea", clase: "Clérigo", nivel: 7, archivo: "/v1772801938/Clerigo_Excursi%C3%B3n_et%C3%A9rea_b2qfjv.png" },
    { id: 342, nombre: "Explosión solar", clase: "Clérigo", nivel: 8, archivo: "/v1772801940/Clerigo_Explosion_solar_lnmmnu.png" },
    { id: 325, nombre: "Festín de héroes", clase: "Clérigo", nivel: 6, archivo: "/v1772801941/Clerigo_Fest%C3%ADn_de_h%C3%A9roes_jhkr3x.png" },
    { id: 282, nombre: "Fingir muerte", clase: "Clérigo", nivel: 3, archivo: "/v1772801943/Clerigo_Fingir_muerte_uhuof6.png" },
    { id: 283, nombre: "Fundirse con la piedra", clase: "Clérigo", nivel: 3, archivo: "/v1772801944/Clerigo_Fundirse_con_la_piedra_ftssqc.png" },
    { id: 314, nombre: "Geas", clase: "Clérigo", nivel: 5, archivo: "/v1772801946/Clerigo_Geas_n38fvh.png" },
    { id: 284, nombre: "Glifo custodio", clase: "Clérigo", nivel: 3, archivo: "/v1772801947/Clerigo_Glifo_custodio_adi0vn.png" },
    { id: 315, nombre: "Golpe flamígero", clase: "Clérigo", nivel: 5, archivo: "/v1772801948/Clerigo_Golpe_flam%C3%ADgero_eqtuzf.png" },
    { id: 299, nombre: "Guarda contra la muerte", clase: "Clérigo", nivel: 4, archivo: "/v1772801950/Clerigo_Guarda_contra_la_muerte_ssfgmk.png" },
    { id: 300, nombre: "Guardián de la fe", clase: "Clérigo", nivel: 4, archivo: "/v1772801951/Clerigo_Guardi%C3%A1n_de_la_fe_hkdvrr.png" },
    { id: 232, nombre: "Guía", clase: "Clérigo", nivel: 0, archivo: "/v1772801953/Clerigo_Gu%C3%ADa_zcfoll.png" },
    { id: 285, nombre: "Hablar con los muertos", clase: "Clérigo", nivel: 3, archivo: "/v1772801954/Clerigo_Hablar_con_los_muertos_xgh7p9.png" },
    { id: 286, nombre: "Imponer maldición", clase: "Clérigo", nivel: 3, archivo: "/v1772801956/Clerigo_Imponer_maldici%C3%B3n_p62rh4.png" },
    { id: 248, nombre: "Infligir heridas", clase: "Clérigo", nivel: 1, archivo: "/v1772801957/Clerigo_Inflingir_heridas_bryvvc.png" },
    { id: 262, nombre: "Inmovilizar persona", clase: "Clérigo", nivel: 2, archivo: "/v1772801959/Clerigo_Inmovilizar_persona_itsq1z.png" },
    { id: 316, nombre: "Invocar celestial", clase: "Clérigo", nivel: 5, archivo: "/v1772801960/Clerigo_Invocar_celestial_x3eysl.png" },
    { id: 287, nombre: "Levantar maldición", clase: "Clérigo", nivel: 3, archivo: "/v1772801961/Clerigo_Levantar_maldici%C3%B3n_ny2d33.png" },
    { id: 301, nombre: "Libertad de movimiento", clase: "Clérigo", nivel: 4, archivo: "/v1772801963/Clerigo_Libertad_de_movimiento_m21fnl.png" },
    { id: 263, nombre: "Llama permanente", clase: "Clérigo", nivel: 2, archivo: "/v1772801964/Clerigo_Llama_permanente_hxftvr.png" },
    { id: 233, nombre: "Llama sagrada", clase: "Clérigo", nivel: 0, archivo: "/v1772801966/Clerigo_Llama_sagrada_ph8vwf.png" },
    { id: 302, nombre: "Localizar criatura", clase: "Clérigo", nivel: 4, archivo: "/v1772801967/Clerigo_Localizar_criatura_dv9exd.png" },
    { id: 264, nombre: "Localizar objeto", clase: "Clérigo", nivel: 2, archivo: "/v1772801969/Clerigo_Localizar_objeto_zqhfpx.png" },
    { id: 234, nombre: "Luz", clase: "Clérigo", nivel: 0, archivo: "/v1772801970/Clerigo_Luz_del_d%C3%ADa_m8piw8.png" },
    { id: 288, nombre: "Luz del día", clase: "Clérigo", nivel: 3, archivo: "/v1772801972/Clerigo_Luz_yr8wkd.png" },
    { id: 303, nombre: "Moldear la piedra", clase: "Clérigo", nivel: 4, archivo: "/v1772801973/Clerigo_Moldear_la_piedra_vskxc4.png" },
    { id: 249, nombre: "Orden imperiosa", clase: "Clérigo", nivel: 1, archivo: "/v1772801975/Clerigo_Orden_imperiosa_pnsday.png" },
    { id: 250, nombre: "Palabra de curación", clase: "Clérigo", nivel: 1, archivo: "/v1772801977/Clerigo_Palabra_de_curaci%C3%B3n_cfhvx3.png" },
    { id: 289, nombre: "Palabra de curación en masa", clase: "Clérigo", nivel: 3, archivo: "/v1772801976/Clerigo_Palabra_de_curaci%C3%B3n_en_masa_hgowxn.png" },
    { id: 333, nombre: "Palabra de poder: fortalecer", clase: "Clérigo", nivel: 7, archivo: "/v1772801979/Clerigo_Palabra_de_poder-_fortalecer_gsmqce.png" },
    { id: 345, nombre: "Palabra de poder: sanar", clase: "Clérigo", nivel: 9, archivo: "/v1772801980/Clerigo_Palabra_de_poder-_sanar_zfyvz5.png" },
    { id: 326, nombre: "Palabra de regreso", clase: "Clérigo", nivel: 6, archivo: "/v1772801982/Clerigo_Palabra_de_regreso_opzjad.png" },
    { id: 235, nombre: "Palabra de resplandor", clase: "Clérigo", nivel: 0, archivo: "/v1772801983/Clerigo_Palabra_de_resplandor_qoqmaj.png" },
    { id: 334, nombre: "Palabra divina", clase: "Clérigo", nivel: 7, archivo: "/v1772801985/Clerigo_Palabra_divina_yp1emv.png" },
    { id: 251, nombre: "Perdición", clase: "Clérigo", nivel: 1, archivo: "/v1772801986/Clerigo_Perdici%C3%B3n_khwucr.png" },
    { id: 236, nombre: "Piedad con los moribundos", clase: "Clérigo", nivel: 0, archivo: "/v1772801988/Clerigo_Piedad_con_los_moribundos_u4qowm.png" },
    { id: 317, nombre: "Plaga de insectos", clase: "Clérigo", nivel: 5, archivo: "/v1772801989/Clerigo_Plaga_de_insectos_c3sexp.png" },
    { id: 265, nombre: "Plegaria de curación", clase: "Clérigo", nivel: 2, archivo: "/v1772801990/Clerigo_Plegaria_de_curaci%C3%B3n_fcfvbv.png" },
    { id: 346, nombre: "Portal", clase: "Clérigo", nivel: 9, archivo: "/v1772801992/Clerigo_Portal_auyvzz.png" },
    { id: 266, nombre: "Potenciar característica", clase: "Clérigo", nivel: 2, archivo: "/v1772801993/Clerigo_Potenciar_caracter%C3%ADstica_s8onw2.png" },
    { id: 327, nombre: "Prohibición", clase: "Clérigo", nivel: 6, archivo: "/v1772801995/Clerigo_Prohibici%C3%B3n_zfvfuh.png" },
    { id: 252, nombre: "Protección contra el bien y el mal", clase: "Clérigo", nivel: 1, archivo: "/v1772801997/Clerigo_Protecci%C3%B3n_contra_el_bien_y_el_mal_v1rbia.png" },
    { id: 290, nombre: "Protección contra energía", clase: "Clérigo", nivel: 3, archivo: "/v1772801998/Clerigo_Protecci%C3%B3n_contra_energ%C3%ADa_j4rndf.png" },
    { id: 267, nombre: "Protección contra veneno", clase: "Clérigo", nivel: 2, archivo: "/v1772801999/Clerigo_Protecci%C3%B3n_contra_veneno_vodvwd.png" },
    { id: 347, nombre: "Proyección astral", clase: "Clérigo", nivel: 9, archivo: "/v1772802001/Clerigo_Proyecci%C3%B3n_astral_ekydme.png" },
    { id: 253, nombre: "Purificar comida y bebida", clase: "Clérigo", nivel: 1, archivo: "/v1772802002/Clerigo_Purificar_comida_y_bebida_nont1e.png" },
    { id: 328, nombre: "Rayo solar", clase: "Clérigo", nivel: 6, archivo: "/v1772802003/Clerigo_Rayo_solar_k30pru.png" },
    { id: 291, nombre: "Recado", clase: "Clérigo", nivel: 3, archivo: "/v1772802005/Clerigo_Recado_q4lic6.png" },
    { id: 335, nombre: "Regenerar", clase: "Clérigo", nivel: 7, archivo: "/v1772802006/Clerigo_Regenerar_pjwxzg.png" },
    { id: 237, nombre: "Reparar", clase: "Clérigo", nivel: 0, archivo: "/v1772802008/Clerigo_Reparar_wwughp.png" },
    { id: 238, nombre: "Resistencia", clase: "Clérigo", nivel: 0, archivo: "/v1772802009/Clerigo_Resistencia_o6ynem.png" },
    { id: 318, nombre: "Restablecimiento mayor", clase: "Clérigo", nivel: 5, archivo: "/v1772802011/Clerigo_Restablecimiento_mayor_dn9kbj.png" },
    { id: 268, nombre: "Restablecimiento menor", clase: "Clérigo", nivel: 2, archivo: "/v1772802012/Clerigo_Restablecimiento_menor_emscbh.png" },
    { id: 336, nombre: "Resurrección", clase: "Clérigo", nivel: 7, archivo: "/v1772802015/Clerigo_Resurreci%C3%B3n_wp5obr.png" },
    { id: 348, nombre: "Resurrección verdadera", clase: "Clérigo", nivel: 9, archivo: "/v1772802014/Clerigo_Resurrecci%C3%B3n_verdadera_hrhgql.png" },
    { id: 292, nombre: "Revivir", clase: "Clérigo", nivel: 3, archivo: "/v1772802016/Clerigo_Revivir_lzsyan.png" },
    { id: 254, nombre: "Saeta guía", clase: "Clérigo", nivel: 1, archivo: "/v1772802018/Clerigo_Saeta_gu%C3%ADa_s5hzfd.png" },
    { id: 255, nombre: "Santuario", clase: "Clérigo", nivel: 1, archivo: "/v1772802019/Clerigo_Santuario_dce8tu.png" },
    { id: 293, nombre: "Señal de esperanza", clase: "Clérigo", nivel: 3, archivo: "/v1772802021/Clerigo_Se%C3%B1al_de_esperanza_uvfloh.png" },
    { id: 269, nombre: "Silencio", clase: "Clérigo", nivel: 2, archivo: "/v1772802022/Clerigo_Silencio_unn3c6.png" },
    { id: 337, nombre: "Símbolo", clase: "Clérigo", nivel: 7, archivo: "/v1772802024/Clerigo_S%C3%ADmbolo_m5hrja.png" },
    { id: 270, nombre: "Sordera/ceguera", clase: "Clérigo", nivel: 2, archivo: "/v1772802025/Clerigo_Sordera_ceguera_oyalun.png" },
    { id: 239, nombre: "Tañido por los muertos", clase: "Clérigo", nivel: 0, archivo: "/v1772802027/Clerigo_Ta%C3%B1ido_por_los_muertos_e29bso.png" },
    { id: 240, nombre: "Taumaturgia", clase: "Clérigo", nivel: 0, archivo: "/v1772802028/Clerigo_Taumaturgia_xa2obm.png" },
    { id: 343, nombre: "Terremoto", clase: "Clérigo", nivel: 8, archivo: "/v1772801859/Clerigo_Terremoto_hpnxne.png" },
    { id: 338, nombre: "Tormenta de fuego", clase: "Clérigo", nivel: 7, archivo: "/v1772801860/Clerigo_Tormenta_de_fuego_hgfkwp.png" },
    { id: 271, nombre: "Vínculo protector", clase: "Clérigo", nivel: 2, archivo: "/v1772801862/Clerigo_V%C3%ADnculo_protector_ccejfg.png" },
    { id: 329, nombre: "Visión veraz", clase: "Clérigo", nivel: 6, archivo: "/v1772801863/Clerigo_Visi%C3%B3n_veraz_putezm.png" },
    { id: 272, nombre: "Zona de la verdad", clase: "Clérigo", nivel: 2, archivo: "/v1772801865/Clerigo_Zona_de_la_verdad_plrf0x.png" },

    // CONJUROS DE DRUIDA (ORDEN ALFABÉTICO)
    { id: 420, nombre: "Adivinación", clase: "Druida", nivel: 4, archivo: "/v1772802037/Druida_Adiviniaci%C3%B3n_da6h3v.png" },
    { id: 380, nombre: "Agrandar/reducir", clase: "Druida", nivel: 2, archivo: "/v1772802039/Druida_Agrandar___Reducir_dknsco.png" },
    { id: 472, nombre: "Antipatía/simpatía", clase: "Druida", nivel: 8, archivo: "/v1772802040/Druida_Antipat%C3%ADa_simpat%C3%ADa_vlmkhu.png" },
    { id: 403, nombre: "Arma elemental", clase: "Druida", nivel: 3, archivo: "/v1772802042/Druida_Arma_elemental_kdkc7c.png" },
    { id: 473, nombre: "Aspectos animales", clase: "Druida", nivel: 8, archivo: "/v1772802043/Druida_Aspectos_animales_bd80bw.png" },
    { id: 441, nombre: "Atadura planar", clase: "Druida", nivel: 5, archivo: "/v1772802045/Druida_Atadura_planar_cwabha.png" },
    { id: 381, nombre: "Augurio", clase: "Druida", nivel: 2, archivo: "/v1772802046/Druida_Augurio_yiv53n.png" },
    { id: 404, nombre: "Aura de vitalidad", clase: "Druida", nivel: 3, archivo: "/v1772802047/Druida_Aura_de_vitalidad_ifgu0z.png" },
    { id: 382, nombre: "Auxilio", clase: "Druida", nivel: 2, archivo: "/v1772802049/Druida_Auxilio_mvxpuj.png" },
    { id: 362, nombre: "Buenas bayas", clase: "Druida", nivel: 1, archivo: "/v1772802050/Druida_Buenas_bayas_kjwrhi.png" },
    { id: 383, nombre: "Calentar metal", clase: "Druida", nivel: 2, archivo: "/v1772802052/Druida_Calentar_metal_v3ldjr.png" },
    { id: 480, nombre: "Cambiar de forma", clase: "Druida", nivel: 9, archivo: "/v1772802053/Druida_Cambiar_de_forma_vhuvup.png" },
    { id: 405, nombre: "Caminar sobre el agua", clase: "Druida", nivel: 3, archivo: "/v1772802055/Druida_Caminar_sobre_el_agua_kfavkv.png" },
    { id: 442, nombre: "Caparazón antivida", clase: "Druida", nivel: 5, archivo: "/v1772802056/Druida_Caparaz%C3%B3n_antivida_ya1otn.png" },
    { id: 443, nombre: "Comunión con la naturaleza", clase: "Druida", nivel: 5, archivo: "/v1772802058/Druida_Comuni%C3%B3n_con_la_naturaleza_l1jdr0.png" },
    { id: 421, nombre: "Confusión", clase: "Druida", nivel: 4, archivo: "/v1772802059/Druida_Confusi%C3%B3n_ieimrr.png" },
    { id: 406, nombre: "Conjurar animales", clase: "Druida", nivel: 3, archivo: "/v1772802060/Druida_Conjurar_animales_xhzjjg.png" },
    { id: 444, nombre: "Conjurar elemental", clase: "Druida", nivel: 5, archivo: "/v1772802062/Druida_Conjurar_elemental_ucnykr.png" },
    { id: 422, nombre: "Conjurar elementales menores", clase: "Druida", nivel: 4, archivo: "/v1772802063/Druida_Conjurar_elementales_menores_gft4j3.png" },
    { id: 456, nombre: "Conjurar feérico", clase: "Druida", nivel: 6, archivo: "/v1772802065/Druida_Conjurar_fe%C3%A9rico_e9xllo.png" },
    { id: 423, nombre: "Conjurar seres del bosque", clase: "Druida", nivel: 4, archivo: "/v1772802066/Druida_Conjurar_seres_del_bosque_qrygyh.png" },
    { id: 445, nombre: "Cono de frío", clase: "Druida", nivel: 5, archivo: "/v1772802068/Druida_Cono_de_fr%C3%ADo_z1ms4v.png" },
    { id: 446, nombre: "Contagio", clase: "Druida", nivel: 5, archivo: "/v1772802069/Druida_Contagio_birtwt.png" },
    { id: 424, nombre: "Controlar agua", clase: "Druida", nivel: 4, archivo: "/v1772802071/Druida_Controlar_agua_qfahad.png" },
    { id: 474, nombre: "Controlar el clima", clase: "Druida", nivel: 8, archivo: "/v1772802117/Druida_Controlar_el_clima_zxyjrn.png" },
    { id: 349, nombre: "Crear llama", clase: "Druida", nivel: 0, archivo: "/v1772802118/Druida_Crear_llama_rfoigj.png" },
    { id: 363, nombre: "Crear o destruir agua", clase: "Druida", nivel: 1, archivo: "/v1772802120/Druida_Crear_o_destruir_agua_by13q7.png" },
    { id: 384, nombre: "Crecimiento espinoso", clase: "Druida", nivel: 2, archivo: "/v1772802122/Druida_Crecimiento_espinoso_kvkn8f.png" },
    { id: 407, nombre: "Crecimiento vegetal", clase: "Druida", nivel: 3, archivo: "/v1772802123/Druida_Crecimiento_vegetal_e5vo2v.png" },
    { id: 364, nombre: "Cuchillo de hielo", clase: "Druida", nivel: 1, archivo: "/v1772802125/Druida_Cuchillo_de_hielo_zpnm72.png" },
    { id: 457, nombre: "Curar", clase: "Druida", nivel: 6, archivo: "/v1772802256/Druida_Curar_z7cz4f.png" },
    { id: 365, nombre: "Curar heridas", clase: "Druida", nivel: 1, archivo: "/v1772802128/Druida_Curar_heridas_qebi4j.png" },
    { id: 447, nombre: "Curar heridas en masa", clase: "Druida", nivel: 5, archivo: "/v1772802126/Druida_Curar_heridas_en_masa_v68qjh.png" },
    { id: 458, nombre: "De la carne a la piedra", clase: "Druida", nivel: 6, archivo: "/v1772802257/Druida_De_la_carne_a_la_piedra_r9fet2.png" },
    { id: 448, nombre: "Despertar", clase: "Druida", nivel: 5, archivo: "/v1772802259/Druida_Despertar_pt7ohi.png" },
    { id: 466, nombre: "Desplazamiento entre planos", clase: "Druida", nivel: 7, archivo: "/v1772802260/Druida_Desplazamiento_entre_planos_mgzryg.png" },
    { id: 366, nombre: "Detectar magia", clase: "Druida", nivel: 1, archivo: "/v1772802262/Druida_Detectar_magia_ehy72v.png" },
    { id: 385, nombre: "Detectar trampas", clase: "Druida", nivel: 2, archivo: "/v1772802263/Druida_Detectar_trampas_qinroz.png" },
    { id: 367, nombre: "Detectar venenos y enfermedades", clase: "Druida", nivel: 1, archivo: "/v1772802265/Druida_Detectar_venenos_y_enfermedades_htofj4.png" },
    { id: 408, nombre: "Disipar magia", clase: "Druida", nivel: 3, archivo: "/v1772802266/Druida_Disipar_magia_gpreih.png" },
    { id: 425, nombre: "Dominar bestia", clase: "Druida", nivel: 4, archivo: "/v1772802268/Druida_Dominar_bestia_gir5go.png" },
    { id: 350, nombre: "Elementalismo", clase: "Druida", nivel: 0, archivo: "/v1772802269/Druida_Elementalismo_dzzbaj.png" },
    { id: 368, nombre: "Encantar animal", clase: "Druida", nivel: 1, archivo: "/v1772802271/Druida_Encantar_animal_sb5bjz.png" },
    { id: 459, nombre: "Encontrar el camino", clase: "Druida", nivel: 6, archivo: "/v1772802272/Druida_Encontrar_el_camino_k11fww.png" },
    { id: 369, nombre: "Enmarañar", clase: "Druida", nivel: 1, archivo: "/v1772802274/Druida_Enmara%C3%B1ar_dueu2u.png" },
    { id: 426, nombre: "Enredadera", clase: "Druida", nivel: 4, archivo: "/v1772802275/Druida_Enredadera_h0xclr.png" },
    { id: 427, nombre: "Escudo de fuego", clase: "Druida", nivel: 4, archivo: "/v1772802276/Druida_Escudo_de_fuego_tmhben.png" },
    { id: 449, nombre: "Escudriñar", clase: "Druida", nivel: 5, archivo: "/v1772802278/Druida_Escudri%C3%B1ar_enma59.png" },
    { id: 386, nombre: "Esfera de llamas", clase: "Druida", nivel: 2, archivo: "/v1772802279/Druida_Esfera_de_llamas_pp4g8l.png" },
    { id: 467, nombre: "Espejismo arcano", clase: "Druida", nivel: 7, archivo: "/v1772802281/Druida_Espejismo_arcano_gmwkdz.png" },
    { id: 475, nombre: "Explosión solar", clase: "Druida", nivel: 8, archivo: "/v1772802282/Druida_Explosion_solar_wpmvyf.png" },
    { id: 460, nombre: "Festín de héroes", clase: "Druida", nivel: 6, archivo: "/v1772802284/Druida_Fest%C3%ADn_de_h%C3%A9roes_yvychf.png" },
    { id: 409, nombre: "Fingir muerte", clase: "Druida", nivel: 3, archivo: "/v1772802285/Druida_Fingir_muerte_q224zv.png" },
    { id: 370, nombre: "Fuego feérico", clase: "Druida", nivel: 1, archivo: "/v1772802287/Druida_Fuego_fe%C3%A9rico_f1juby.png" },
    { id: 428, nombre: "Fuente de luz lunar", clase: "Druida", nivel: 4, archivo: "/v1772802288/Druida_Fuente_de_la_luz_lunar_idqhmx.png" },
    { id: 410, nombre: "Fundirse con la piedra", clase: "Druida", nivel: 3, archivo: "/v1772802289/Druida_Fundirse_con_la_piedra_bz1cmi.png" },
    { id: 450, nombre: "Geas", clase: "Druida", nivel: 5, archivo: "/v1772802291/Druida_Geas_up3d5c.png" },
    { id: 351, nombre: "Guía", clase: "Druida", nivel: 0, archivo: "/v1772802292/Druida_Gu%C3%ADa_aw83zy.png" },
    { id: 411, nombre: "Hablar con las plantas", clase: "Druida", nivel: 3, archivo: "/v1772802294/Druida_Hablar_con_las_plantas_ccptxe.png" },
    { id: 371, nombre: "Hablar con los animales", clase: "Druida", nivel: 1, archivo: "/v1772802295/Druida_Hablar_con_los_animales_xaiyox.png" },
    { id: 429, nombre: "Hechizar monstruo", clase: "Druida", nivel: 4, archivo: "/v1772802297/Druida_Hechizar_monstruo_ro4gqz.png" },
    { id: 372, nombre: "Hechizar persona", clase: "Druida", nivel: 1, archivo: "/v1772802298/Druida_Hechizar_persona_s6tb1z.png" },
    { id: 387, nombre: "Hoja de fuego", clase: "Druida", nivel: 2, archivo: "/v1772802300/Druida_Hoja_de_fuego_pmv8s8.png" },
    { id: 388, nombre: "Inmovilizar persona", clase: "Druida", nivel: 2, archivo: "/v1772802301/Druida_Inmovilizar_persona_xrblz7.png" },
    { id: 430, nombre: "Insecto gigante", clase: "Druida", nivel: 4, archivo: "/v1772802303/Druida_Insecto_gigante_gx7k70.png" },
    { id: 468, nombre: "Invertir la gravedad", clase: "Druida", nivel: 7, archivo: "/v1772802304/Druida_Invertir_la_gravedad_fg7fnr.png" },
    { id: 389, nombre: "Invocar bestia", clase: "Druida", nivel: 2, archivo: "/v1772802305/Druida_Invocar_bestia_uo89xv.png" },
    { id: 431, nombre: "Invocar elemental", clase: "Druida", nivel: 4, archivo: "/v1772802307/Druida_Invocar_elemental_hhn9xt.png" },
    { id: 412, nombre: "Invocar feérico", clase: "Druida", nivel: 3, archivo: "/v1772802308/Druida_Invocar_fe%C3%A9rico_f4vnxq.png" },
    { id: 352, nombre: "Látigo de espinas", clase: "Druida", nivel: 0, archivo: "/v1772802310/Druida_L%C3%A1tigo_de_espinas_upsh35.png" },
    { id: 390, nombre: "Llama permanente", clase: "Druida", nivel: 2, archivo: "/v1772802313/Druida_Llama_permanente_oxgysz.png" },
    { id: 413, nombre: "Llamar al relámpago", clase: "Druida", nivel: 3, archivo: "/v1772802314/Druida_Llamar_al_rel%C3%A1mpago_uf4p2n.png" },
    { id: 391, nombre: "Localizar animales o plantas", clase: "Druida", nivel: 2, archivo: "/v1772802316/Druida_Localizar_animales_o_plantas_zxjah9.png" },
    { id: 433, nombre: "Localizar criatura", clase: "Druida", nivel: 4, archivo: "/v1772802317/Druida_Localizar_criatura_c83nmg.png" },
    { id: 392, nombre: "Localizar objeto", clase: "Druida", nivel: 2, archivo: "/v1772802319/Druida_Localizar_objeto_wddyyu.png" },
    { id: 414, nombre: "Luz del día", clase: "Druida", nivel: 3, archivo: "/v1772802320/Druida_Luz_del_d%C3%ADa_l3rt6c.png" },
    { id: 434, nombre: "Marchitar", clase: "Druida", nivel: 4, archivo: "/v1772802321/Druida_Marchitar_k4zrsq.png" },
    { id: 353, nombre: "Mensaje", clase: "Druida", nivel: 0, archivo: "/v1772802323/Druida_Mensaje_tqcnuz.png" },
    { id: 393, nombre: "Mensajero animal", clase: "Druida", nivel: 2, archivo: "/v1772802325/Druida_Mensajero_animal_tixlte.png" },
    { id: 435, nombre: "Moldear la piedra", clase: "Druida", nivel: 4, archivo: "/v1772802326/Druida_Moldear_la_piedra_erw4eh.png" },
    { id: 461, nombre: "Mover la tierra", clase: "Druida", nivel: 6, archivo: "/v1772802327/Druida_Mover_la_tierra_ljpuvk.png" },
    { id: 462, nombre: "Muro de espinas", clase: "Druida", nivel: 6, archivo: "/v1772802329/Druida_Muro_de_espinas_tgmqtk.png" },
    { id: 436, nombre: "Muro de fuego", clase: "Druida", nivel: 4, archivo: "/v1772802330/Druida_Muro_de_fuego_w3gcsd.png" },
    { id: 451, nombre: "Muro de piedra", clase: "Druida", nivel: 5, archivo: "/v1772802332/Druida_Muro_de_piedra_ktw27m.png" },
    { id: 415, nombre: "Muro de viento", clase: "Druida", nivel: 3, archivo: "/v1772802333/Druida_Muro_de_viento_lzoczg.png" },
    { id: 373, nombre: "Nube de oscurecimiento", clase: "Druida", nivel: 1, archivo: "/v1772802335/Druida_Nube_de_oscurecimiento_asuzqw.png" },
    { id: 476, nombre: "Nube incendiaria", clase: "Druida", nivel: 8, archivo: "/v1772802336/Druida_Nube_incendiaria_ybm14l.png" },
    { id: 477, nombre: "Ofuscación", clase: "Druida", nivel: 8, archivo: "/v1772802337/Druida_Ofuscaci%C3%B3n_x4wyfy.png" },
    { id: 374, nombre: "Ola atronadora", clase: "Druida", nivel: 1, archivo: "/v1772802339/Druida_Ola_atronadora_uipc6s.png" },
    { id: 375, nombre: "Palabra de curación", clase: "Druida", nivel: 1, archivo: "/v1772802340/Druida_Palabra_de_curaci%C3%B3n_cx0ipj.png" },
    { id: 394, nombre: "Pasar sin rastro", clase: "Druida", nivel: 2, archivo: "/v1772802342/Druida_Pasar_sin_rastro_rklkya.png" },
    { id: 452, nombre: "Paso arbóreo", clase: "Druida", nivel: 5, archivo: "/v1772802344/Druida_Paso_arb%C3%B3reo_cuf0de.png" },
    { id: 354, nombre: "Piedad con los moribundos", clase: "Druida", nivel: 0, archivo: "/v1772802345/Druida_Piedad_con_los_moribundos_rjmig0.png" },
    { id: 437, nombre: "Piel pétrea", clase: "Druida", nivel: 4, archivo: "/v1772802346/Druida_Piel_p%C3%A9trea_hx7ur2.png" },
    { id: 395, nombre: "Piel robliza", clase: "Druida", nivel: 2, archivo: "/v1772802348/Druida_Piel_robliza_nc7q2s.png" },
    { id: 453, nombre: "Plaga de insectos", clase: "Druida", nivel: 5, archivo: "/v1772802349/Druida_Plaga_de_insectos_jypggh.png" },
    { id: 438, nombre: "Polimorfar", clase: "Druida", nivel: 4, archivo: "/v1772802351/Druida_Poliformar_dznhip.png" },
    { id: 396, nombre: "Potenciar característica", clase: "Druida", nivel: 2, archivo: "/v1772802352/Druida_Potenciar_caracter%C3%ADstica_jjltki.png" },
    { id: 481, nombre: "Presciencia", clase: "Druida", nivel: 9, archivo: "/v1772802354/Druida_Presciencia_bpiasa.png" },
    { id: 376, nombre: "Protección contra el bien y el mal", clase: "Druida", nivel: 1, archivo: "/v1772802355/Druida_Protecci%C3%B3n_contra_el_bien_y_el_mal_jtd7et.png" },
    { id: 416, nombre: "Protección contra energía", clase: "Druida", nivel: 3, archivo: "/v1772802357/Druida_Protecci%C3%B3n_contra_energ%C3%ADa_wx30jd.png" },
    { id: 397, nombre: "Protección contra veneno", clase: "Druida", nivel: 2, archivo: "/v1772802358/Druida_Protecci%C3%B3n_contra_veneno_cesbgj.png" },
    { id: 377, nombre: "Purificar comida y bebida", clase: "Druida", nivel: 1, archivo: "/v1772802359/Druida_Purificar_comida_y_bebida_hhtnbo.png" },
    { id: 398, nombre: "Ráfaga de viento", clase: "Druida", nivel: 2, archivo: "/v1772802361/Druida_R%C3%A1faga_de_viento_ooeh2q.png" },
    { id: 399, nombre: "Rayo de luna", clase: "Druida", nivel: 2, archivo: "/v1772802362/Druida_Rayo_de_luna_uoz4bb.png" },
    { id: 463, nombre: "Rayo solar", clase: "Druida", nivel: 6, archivo: "/v1772802364/Druida_Rayo_solar_iwdzmu.png" },
    { id: 454, nombre: "Reencarnar", clase: "Druida", nivel: 5, archivo: "/v1772802365/Druida_Reencarnar_fvnfqr.png" },
    { id: 469, nombre: "Regenerar", clase: "Druida", nivel: 7, archivo: "/v1772802367/Druida_Regenerar_kuhhvo.png" },
    { id: 355, nombre: "Reparar", clase: "Druida", nivel: 0, archivo: "/v1772802368/Druida_Reparar_wwi6bb.png" },
    { id: 356, nombre: "Resistencia", clase: "Druida", nivel: 0, archivo: "/v1772802370/Druida_Resistencia_pb48jz.png" },
    { id: 417, nombre: "Respirar bajo el agua", clase: "Druida", nivel: 3, archivo: "/v1772802371/Druida_Respirar_bajo_el_agua_nui9sy.png" },
    { id: 455, nombre: "Restablecimiento mayor", clase: "Druida", nivel: 5, archivo: "/v1772802373/Druida_Restablecimiento_mayor_agebbd.png" },
    { id: 400, nombre: "Restablecimiento menor", clase: "Druida", nivel: 2, archivo: "/v1772802374/Druida_Restablecimiento_menor_we0wm2.png" },
    { id: 482, nombre: "Resurrección verdadera", clase: "Druida", nivel: 9, archivo: "/v1772802375/Druida_Resurrecci%C3%B3n_verdadera_bvtsoe.png" },
    { id: 418, nombre: "Revivir", clase: "Druida", nivel: 3, archivo: "/v1772802377/Druida_Revivir_hm0vbt.png" },
    { id: 357, nombre: "Rociada venenosa", clase: "Druida", nivel: 0, archivo: "/v1772802378/Druida_Rociada_venenosa_is7zf1.png" },
    { id: 358, nombre: "Saber druídico", clase: "Druida", nivel: 0, archivo: "/v1772802380/Druida_Saber_dru%C3%ADdico_b0dplo.png" },
    { id: 378, nombre: "Salto", clase: "Druida", nivel: 1, archivo: "/v1772802381/Druida_Salto_eexikm.png" },
    { id: 401, nombre: "Sentidos de la bestia", clase: "Druida", nivel: 2, archivo: "/v1772802385/Druida_Sentidos_de_la_bestia_yuprge.png" },
    { id: 359, nombre: "Shillelagh", clase: "Druida", nivel: 0, archivo: "/v1772802383/Druida_Shillelagh_qc7wsw.png" },
    { id: 470, nombre: "Símbolo", clase: "Druida", nivel: 7, archivo: "/v1772802384/Druida_S%C3%ADmbolo_yyfdkt.png" },
    { id: 478, nombre: "Terremoto", clase: "Druida", nivel: 8, archivo: "/v1772802387/Druida_Terremoto_h21tzv.png" },
    { id: 439, nombre: "Terreno alucinatorio", clase: "Druida", nivel: 4, archivo: "/v1772802388/Druida_Terreno_alucinatorio_la4lyt.png" },
    { id: 419, nombre: "Tormenta de aguanieve", clase: "Druida", nivel: 3, archivo: "/v1772802390/Druida_Tormenta_de_aguanieve_szhfy7.png" },
    { id: 471, nombre: "Tormenta de fuego", clase: "Druida", nivel: 7, archivo: "/v1772802391/Druida_Tormenta_de_fuego_epcxcp.png" },
    { id: 440, nombre: "Tormenta de hielo", clase: "Druida", nivel: 4, archivo: "/v1772802393/Druida_Tormenta_de_hielo_wkqw0k.png" },
    { id: 483, nombre: "Tormenta de la venganza", clase: "Druida", nivel: 9, archivo: "/v1772802394/Druida_Tormenta_de_la_venganza_y5bxei.png" },
    { id: 360, nombre: "Tronar", clase: "Druida", nivel: 0, archivo: "/v1772802396/Druida_Tronar_whiufp.png" },
    { id: 479, nombre: "Tsunami", clase: "Druida", nivel: 8, archivo: "/v1772802397/Druida_Tsunami_twmz6z.png" },
    { id: 464, nombre: "Viajar con el viento", clase: "Druida", nivel: 6, archivo: "/v1772802030/Druida_Viajar_con_el_viento_qvpqzd.png" },
    { id: 465, nombre: "Viajar mediante plantas", clase: "Druida", nivel: 6, archivo: "/v1772802032/Druida_Viajar_mediante_plantas_liignn.png" },
    { id: 402, nombre: "Visión en la oscuridad", clase: "Druida", nivel: 2, archivo: "/v1772802033/Druida_Visi%C3%B3n_en_la_oscuridad_tc2guf.png" },
    { id: 361, nombre: "Voluta estelar", clase: "Druida", nivel: 0, archivo: "/v1772802034/Druida_Voluta_estelar_qhrfrd.png" },
    { id: 379, nombre: "Zancada prodigiosa", clase: "Druida", nivel: 1, archivo: "/v1772802036/Druida_Zancada_prodigiosa_ttdvgu.png" },

    // CONJUROS DE EXPLORADOR (ORDEN ALFABÉTICO)
    { id: 484, nombre: "Alarma", clase: "Explorador", nivel: 1, archivo: "/v1772903574/Explorador_Alarma_h8oj31.png" },
    { id: 516, nombre: "Arma elemental", clase: "Explorador", nivel: 3, archivo: "/v1772903574/Explorador_Arma_elemental_j0bg6x.png" },
    { id: 498, nombre: "Arma mágica", clase: "Explorador", nivel: 2, archivo: "/v1772903574/Explorador_Arma_magica_qs334i.png" },
    { id: 499, nombre: "Auxilio", clase: "Explorador", nivel: 2, archivo: "/v1772903575/Explorador_Auxilio_x020lr.png" },
    { id: 485, nombre: "Buenas bayas", clase: "Explorador", nivel: 1, archivo: "/v1772903575/Explorador_Buenas_bayas_gc4li5.png" },
    { id: 517, nombre: "Caminar sobre el agua", clase: "Explorador", nivel: 3, archivo: "/v1772903575/Explorador_Caminar_sobre_el_agua_o4lhh8.png" },
    { id: 539, nombre: "Carcaj veloz", clase: "Explorador", nivel: 5, archivo: "/v1772903576/Explorador_Carcaj_veloz_o2jegj.png" },
    { id: 540, nombre: "Comunión con la naturaleza", clase: "Explorador", nivel: 5, archivo: "/v1772903576/Explorador_Comuni%C3%B3n_con_la_naturaleza_cl0u9d.png" },
    { id: 518, nombre: "Conjurar animales", clase: "Explorador", nivel: 3, archivo: "/v1772903577/Explorador_Conjurar_animales_soww9q.png" },
    { id: 519, nombre: "Conjurar descarga de proyectiles", clase: "Explorador", nivel: 3, archivo: "/v1772903578/Explorador_Conjurar_descarga_de_proyectiles_i9q3ln.png" },
    { id: 541, nombre: "Conjurar lluvia de flechas", clase: "Explorador", nivel: 5, archivo: "/v1772903578/Explorador_Conjurar_lluvia_de_flechas_h58jba.png" },
    { id: 532, nombre: "Conjurar seres del bosque", clase: "Explorador", nivel: 4, archivo: "/v1772903578/Explorador_Conjurar_seres_del_bosque_ksk8uo.png" },
    { id: 500, nombre: "Cordón de flechas", clase: "Explorador", nivel: 2, archivo: "/v1772903580/Explorador_Cord%C3%B3n_de_flechas_fwe0eg.png" },
    { id: 501, nombre: "Crecimiento espinoso", clase: "Explorador", nivel: 2, archivo: "/v1772903581/Explorador_Crecimiento_espinoso_iyzfh5.png" },
    { id: 520, nombre: "Crecimiento vegetal", clase: "Explorador", nivel: 3, archivo: "/v1772903581/Explorador_Crecimiento_vegetal_eiygu5.png" },
    { id: 486, nombre: "Curar heridas", clase: "Explorador", nivel: 1, archivo: "/v1772903582/Explorador_Curar_heridas_n7aojv.png" },
    { id: 487, nombre: "Detectar magia", clase: "Explorador", nivel: 1, archivo: "/v1772903583/Explorador_Detectar_magia_ueqbaz.png" },
    { id: 502, nombre: "Detectar trampas", clase: "Explorador", nivel: 2, archivo: "/v1772903584/Explorador_Detectar_trampas_sj8uq9.png" },
    { id: 488, nombre: "Detectar venenos y enfermedades", clase: "Explorador", nivel: 1, archivo: "/v1772903584/Explorador_Detectar_venenos_y_enfermedades_qbqaal.png" },
    { id: 521, nombre: "Disipar magia", clase: "Explorador", nivel: 3, archivo: "/v1772903584/Explorador_Disipar_magia_hhp9x2.png" },
    { id: 533, nombre: "Dominar bestia", clase: "Explorador", nivel: 4, archivo: "/v1772903585/Explorador_Dominar_bestia_rohpii.png" },
    { id: 489, nombre: "Encantar animal", clase: "Explorador", nivel: 1, archivo: "/v1772903586/Explorador_Encantar_animal_dknjph.png" },
    { id: 490, nombre: "Enmarañar", clase: "Explorador", nivel: 1, archivo: "/v1772903586/Explorador_Enmara%C3%B1ar_lpkzjl.png" },
    { id: 534, nombre: "Enredadera", clase: "Explorador", nivel: 4, archivo: "/v1772903586/Explorador_Enredadera_ewnvli.png" },
    { id: 522, nombre: "Flecha de relámpago", clase: "Explorador", nivel: 3, archivo: "/v1772903587/Explorador_Flecha_de_rel%C3%A1mpago_vj24cc.png" },
    { id: 523, nombre: "Fundirse con la piedra", clase: "Explorador", nivel: 3, archivo: "/v1772903587/Explorador_Fundirse_con_la_piedra_wfjxxq.png" },
    { id: 491, nombre: "Golpe apresador", clase: "Explorador", nivel: 1, archivo: "/v1772903588/Explorador_Golpe_apresador_ijmy0f.png" },
    { id: 542, nombre: "Golpe de viento acerado", clase: "Explorador", nivel: 5, archivo: "/v1772903588/Explorador_Golpe_de_viento_acerado_my2hmu.png" },
    { id: 524, nombre: "Hablar con las plantas", clase: "Explorador", nivel: 3, archivo: "/v1772903589/Explorador_Hablar_con_las_plantas_dim3m8.png" },
    { id: 492, nombre: "Hablar con los animales", clase: "Explorador", nivel: 1, archivo: "/v1772903589/Explorador_Hablar_con_los_animales_elwcsa.png" },
    { id: 525, nombre: "Indetectable", clase: "Explorador", nivel: 3, archivo: "/v1772903589/Explorador_Indetectable_isq3oz.png" },
    { id: 503, nombre: "Invocar bestia", clase: "Explorador", nivel: 2, archivo: "/v1772903589/Explorador_Invocar_bestia_jfpetv.png" },
    { id: 535, nombre: "Invocar elemental", clase: "Explorador", nivel: 4, archivo: "/v1772903590/Explorador_Invocar_elemental_puduho.png" },
    { id: 526, nombre: "Invocar feérico", clase: "Explorador", nivel: 3, archivo: "/v1772903590/Explorador_Invocar_fe%C3%A9rico_psntey.png" },
    { id: 536, nombre: "Libertad de movimiento", clase: "Explorador", nivel: 4, archivo: "/v1772903590/Explorador_Libertad_de_movimiento_oq1r8h.png" },
    { id: 504, nombre: "Localizar animales o plantas", clase: "Explorador", nivel: 2, archivo: "/v1772903591/Explorador_Localizar_animales_o_plantas_ppztzv.png" },
    { id: 537, nombre: "Localizar criatura", clase: "Explorador", nivel: 4, archivo: "/v1772903591/Explorador_Localizar_criatura_u6rndj.png" },
    { id: 505, nombre: "Localizar objeto", clase: "Explorador", nivel: 2, archivo: "/v1772903592/Explorador_Localizar_objeto_umx8h9.png" },
    { id: 527, nombre: "Luz del día", clase: "Explorador", nivel: 3, archivo: "/v1772903592/Explorador_Luz_del_d%C3%ADa_x4hnnc.png" },
    { id: 493, nombre: "Marca del cazador", clase: "Explorador", nivel: 1, archivo: "/v1772903592/Explorador_Marca_del_cazador_c0c0nw.png" },
    { id: 506, nombre: "Mensajero animal", clase: "Explorador", nivel: 2, archivo: "/v1772903593/Explorador_Mensajero_animal_kzmqwu.png" },
    { id: 528, nombre: "Muro de viento", clase: "Explorador", nivel: 3, archivo: "/v1772903593/Explorador_Muro_de_viento_quyq1q.png" },
    { id: 494, nombre: "Nube de oscurecimiento", clase: "Explorador", nivel: 1, archivo: "/v1772903593/Explorador_Nube_de_oscurecimiento_w5ji5j.png" },
    { id: 507, nombre: "Pasar sin rastro", clase: "Explorador", nivel: 2, archivo: "/v1772903594/Explorador_Pasar_sin_rastro_es6ghs.png" },
    { id: 543, nombre: "Paso arbóreo", clase: "Explorador", nivel: 5, archivo: "/v1772903594/Explorador_Paso_arb%C3%B3reo_aegguo.png" },
    { id: 538, nombre: "Piel pétrea", clase: "Explorador", nivel: 4, archivo: "/v1772903594/Explorador_Piel_p%C3%A9trea_wgpgnt.png" },
    { id: 508, nombre: "Piel robliza", clase: "Explorador", nivel: 2, archivo: "/v1772903596/Explorador_Piel_robliza_t4l74v.png" },
    { id: 509, nombre: "Potenciar característica", clase: "Explorador", nivel: 2, archivo: "/v1772903595/Explorador_Potenciar_caracter%C3%ADstica_lgasp5.png" },
    { id: 529, nombre: "Protección contra energía", clase: "Explorador", nivel: 3, archivo: "/v1772903596/Explorador_Protecci%C3%B3n_contra_energ%C3%ADa_iihowg.png" },
    { id: 510, nombre: "Protección contra veneno", clase: "Explorador", nivel: 2, archivo: "/v1772903596/Explorador_Protecci%C3%B3n_contra_veneno_ghqnsr.png" },
    { id: 511, nombre: "Ráfaga de viento", clase: "Explorador", nivel: 2, archivo: "/v1772903596/Explorador_R%C3%A1faga_de_viento_bmgtnl.png" },
    { id: 530, nombre: "Respirar bajo el agua", clase: "Explorador", nivel: 3, archivo: "/v1772903597/Explorador_Respirar_bajo_el_agua_xr6xja.png" },
    { id: 544, nombre: "Restablecimiento mayor", clase: "Explorador", nivel: 5, archivo: "/v1772903597/Explorador_Restablecimiento_mayor_irqvlr.png" },
    { id: 512, nombre: "Restablecimiento menor", clase: "Explorador", nivel: 2, archivo: "/v1772903597/Explorador_Restablecimiento_menor_t0cbjo.png" },
    { id: 531, nombre: "Revivir", clase: "Explorador", nivel: 3, archivo: "/v1772903597/Explorador_Revivir_kkzzmn.png" },
    { id: 495, nombre: "Salto", clase: "Explorador", nivel: 1, archivo: "/v1772903598/Explorador_Salto_jn19v7.png" },
    { id: 513, nombre: "Sentidos de la bestia", clase: "Explorador", nivel: 2, archivo: "/v1772903573/Explorador_Sentidos_de_la_bestia_yh0idq.png" },
    { id: 514, nombre: "Silencio", clase: "Explorador", nivel: 2, archivo: "/v1772903573/Explorador_Silencio_awefui.png" },
    { id: 496, nombre: "Tormenta de espinas", clase: "Explorador", nivel: 1, archivo: "/v1772903573/Explorador_Tormenta_de_espinas_ujbyvg.png" },
    { id: 515, nombre: "Visión en la oscuridad", clase: "Explorador", nivel: 2, archivo: "/v1772903573/Explorador_Visi%C3%B3n_en_la_oscuridad_badpco.png" },
    { id: 497, nombre: "Zancada prodigiosa", clase: "Explorador", nivel: 1, archivo: "/v1772903573/Explorador_Zancada_prodigiosa_lxtbjq.png" },

    // CONJUROS DE HECHICERO (ORDEN ALFABÉTICO)
    { id: 587, nombre: "Abrir", clase: "Hechicero", nivel: 2, archivo: "/v1772903633/Hechicero_Abrir_kn75cp.png" },
    { id: 617, nombre: "Acelerar", clase: "Hechicero", nivel: 3, archivo: "/v1772903634/Hechicero_Acelerar_yxugbz.png" },
    { id: 545, nombre: "Agarre electrizante", clase: "Hechicero", nivel: 0, archivo: "/v1772903634/Hechicero_Agarre_electrizante_jelhr0.png" },
    { id: 588, nombre: "Agrandar/reducir", clase: "Hechicero", nivel: 2, archivo: "/v1772903635/Hechicero_Agrandar___Reducir_ovjwkq.png" },
    { id: 589, nombre: "Aliento de dragón", clase: "Hechicero", nivel: 2, archivo: "/v1772903635/Hechicero_Aliento_de_drag%C3%B3n_jehvn2.png" },
    { id: 590, nombre: "Alterar el propio aspecto", clase: "Hechicero", nivel: 2, archivo: "/v1772903636/Hechicero_Alterar_el_propio_aspecto_v2gpdb.png" },
    { id: 546, nombre: "Amistad", clase: "Hechicero", nivel: 0, archivo: "/v1772903636/Hechicero_Amistad_ye6blh.png" },
    { id: 651, nombre: "Animar objetos", clase: "Hechicero", nivel: 5, archivo: "/v1772903638/Hechicero_Animar_objetos_e4hu7x.png" },
    { id: 652, nombre: "Apariencia", clase: "Hechicero", nivel: 5, archivo: "/v1772903638/Hechicero_Apariencia_bogkye.png" },
    { id: 591, nombre: "Arma mágica", clase: "Hechicero", nivel: 2, archivo: "/v1772903639/Hechicero_Arma_magica_lwjcku.png" },
    { id: 565, nombre: "Armadura de mago", clase: "Hechicero", nivel: 1, archivo: "/v1772903640/Hechicero_Armadura_de_mago_iklqzd.png" },
    { id: 618, nombre: "Bola de fuego", clase: "Hechicero", nivel: 3, archivo: "/v1772903641/Hechicero_Bola_de_fuego_v5ijnh.png" },
    { id: 676, nombre: "Bola de fuego de explosión retardada", clase: "Hechicero", nivel: 7, archivo: "/v1772903640/Hechicero_Bola_de_fuego_de_explosi%C3%B3n_retardada_o3ulc9.png" },
    { id: 566, nombre: "Caída de pluma", clase: "Hechicero", nivel: 1, archivo: "/v1772903641/Hechicero_Ca%C3%ADda_de_pluma_jpbi8j.png" },
    { id: 619, nombre: "Caminar sobre el agua", clase: "Hechicero", nivel: 3, archivo: "/v1772903642/Hechicero_Caminar_sobre_el_agua_hpai0n.png" },
    { id: 664, nombre: "Círculo de muerte", clase: "Hechicero", nivel: 6, archivo: "/v1772903643/Hechicero_C%C3%ADrculo_de_muerte_axkrrv.png" },
    { id: 653, nombre: "Círculo de teletransportación", clase: "Hechicero", nivel: 5, archivo: "/v1772903644/Hechicero_C%C3%ADrculo_de_teletransportaci%C3%B3n_ghsjbv.png" },
    { id: 620, nombre: "Clarividencia", clase: "Hechicero", nivel: 3, archivo: "/v1772903644/Hechicero_Clarividencia_y7krst.png" },
    { id: 592, nombre: "Clavo mental", clase: "Hechicero", nivel: 2, archivo: "/v1772903645/Hechicero_Clavo_mental_szx3f9.png" },
    { id: 638, nombre: "Confusión", clase: "Hechicero", nivel: 4, archivo: "/v1772903646/Hechicero_Confusi%C3%B3n_pix1y2.png" },
    { id: 654, nombre: "Cono de frío", clase: "Hechicero", nivel: 5, archivo: "/v1772903647/Hechicero_Cono_de_fr%C3%ADo_yzbwuc.png" },
    { id: 621, nombre: "Contrahechizo", clase: "Hechicero", nivel: 3, archivo: "/v1772903647/Hechicero_Contrahechizo_lpaq6p.png" },
    { id: 593, nombre: "Contorno borroso", clase: "Hechicero", nivel: 2, archivo: "/v1772903647/Hechicero_Contorno_borroso_mhacz2.png" },
    { id: 594, nombre: "Corona de la locura", clase: "Hechicero", nivel: 2, archivo: "/v1772903648/Hechicero_Corona_de_la_locura_drxfmu.png" },
    { id: 655, nombre: "Creación", clase: "Hechicero", nivel: 5, archivo: "/v1772903649/Hechicero_Creaci%C3%B3n_roocpx.png" },
    { id: 567, nombre: "Cuchillo de hielo", clase: "Hechicero", nivel: 1, archivo: "/v1772903649/Hechicero_Cuchillo_de_hielo_mw8dba.png" },
    { id: 665, nombre: "De la carne a la piedra", clase: "Hechicero", nivel: 6, archivo: "/v1772903651/Hechicero_De_la_carne_a_la_piedra_mrdb9j.png" },
    { id: 677, nombre: "Dedo de la muerte", clase: "Hechicero", nivel: 7, archivo: "/v1772903651/Hechicero_Dedo_de_la_muerte_gac8oy.png" },
    { id: 547, nombre: "Descarga de fuego", clase: "Hechicero", nivel: 0, archivo: "/v1772903652/Hechicero_Descarga_de_fuego_itpvmf.png" },
    { id: 690, nombre: "Deseo", clase: "Hechicero", nivel: 9, archivo: "/v1772903654/Hechicero_Deseo_faoz7w.png" },
    { id: 666, nombre: "Desintegrar", clase: "Hechicero", nivel: 6, archivo: "/v1772903655/Hechicero_Desintegrar_xytzvl.png" },
    { id: 622, nombre: "Desplazamiento", clase: "Hechicero", nivel: 3, archivo: "/v1772903656/Hechicero_Desplazamiento_jdcoqh.png" },
    { id: 678, nombre: "Desplazamiento entre planos", clase: "Hechicero", nivel: 7, archivo: "/v1772903655/Hechicero_Desplazamiento_entre_planos_hook65.png" },
    { id: 568, nombre: "Detectar magia", clase: "Hechicero", nivel: 1, archivo: "/v1772903658/Hechicero_Detectar_magia_t0zcav.png" },
    { id: 595, nombre: "Detectar pensamientos", clase: "Hechicero", nivel: 2, archivo: "/v1772903660/Hechicero_Detectar_pensamientos_ck9pgv.png" },
    { id: 569, nombre: "Disfrazarse", clase: "Hechicero", nivel: 1, archivo: "/v1772903660/Hechicero_Disfrazarse_ezyzwt.png" },
    { id: 623, nombre: "Disipar magia", clase: "Hechicero", nivel: 3, archivo: "/v1772903660/Hechicero_Disipar_magia_ej2gqx.png" },
    { id: 640, nombre: "Dominar bestia", clase: "Hechicero", nivel: 4, archivo: "/v1772903661/Hechicero_Dominar_bestia_hqxaom.png" },
    { id: 684, nombre: "Dominar monstruo", clase: "Hechicero", nivel: 8, archivo: "/v1772903661/Hechicero_Dominar_monstruo_ubwmci.png" },
    { id: 656, nombre: "Dominar persona", clase: "Hechicero", nivel: 5, archivo: "/v1772903662/Hechicero_Dominar_persona_gminiz.png" },
    { id: 624, nombre: "Don de lenguas", clase: "Hechicero", nivel: 3, archivo: "/v1772903662/Hechicero_Don_de_lenguas_yiyldf.png" },
    { id: 570, nombre: "Dormir", clase: "Hechicero", nivel: 1, archivo: "/v1772903663/Hechicero_Dormir_utu8ld.png" },
    { id: 548, nombre: "Elementalismo", clase: "Hechicero", nivel: 0, archivo: "/v1772903663/Hechicero_Elementalismo_qvb1ll.png" },
    { id: 571, nombre: "Entender idiomas", clase: "Hechicero", nivel: 1, archivo: "/v1772903664/Hechicero_Entender_idiomas_csqjkk.png" },
    { id: 572, nombre: "Escudo", clase: "Hechicero", nivel: 1, archivo: "/v1772903665/Hechicero_Escudo_bsmyu4.png" },
    { id: 641, nombre: "Escudo de fuego", clase: "Hechicero", nivel: 4, archivo: "/v1772903665/Hechicero_Escudo_de_fuego_zdlbvn.png" },
    { id: 667, nombre: "Esfera congelante de Otiluke", clase: "Hechicero", nivel: 6, archivo: "/v1772903670/Hechicero_Esfera_congelante_de_Otiluke_lqt6lf.png" },
    { id: 596, nombre: "Esfera de llamas", clase: "Hechicero", nivel: 2, archivo: "/v1772903667/Hechicero_Esfera_de_llamas_epeanm.png" },
    { id: 642, nombre: "Esfera vitriólica", clase: "Hechicero", nivel: 4, archivo: "/v1772903668/Hechicero_Esfera_vitri%C3%B3lica_cpy4cw.png" },
    { id: 549, nombre: "Estallido mágico", clase: "Hechicero", nivel: 0, archivo: "/v1772903669/Hechicero_Estallido_m%C3%A1gico_yuqxzi.png" },
    { id: 657, nombre: "Estática sináptica", clase: "Hechicero", nivel: 5, archivo: "/v1772903670/Hechicero_Est%C3%A1tica_sin%C3%A1ptica_kadbhf.png" },
    { id: 679, nombre: "Excursión etérea", clase: "Hechicero", nivel: 7, archivo: "/v1772903671/Hechicero_Excursi%C3%B3n_et%C3%A9rea_bdshqq.png" },
    { id: 685, nombre: "Explosión solar", clase: "Hechicero", nivel: 8, archivo: "/v1772903672/Hechicero_Explosion_solar_jlrh1l.png" },
    { id: 573, nombre: "Falsa vida", clase: "Hechicero", nivel: 1, archivo: "/v1772903673/Hechicero_Falsa_vida_zs1ljs.png" },
    { id: 625, nombre: "Forma gaseosa", clase: "Hechicero", nivel: 3, archivo: "/v1772903673/Hechicero_Forma_gaseosa_f0palp.png" },
    { id: 550, nombre: "Fragmento mental", clase: "Hechicero", nivel: 0, archivo: "/v1772903675/Hechicero_Fragmento_mental_od0piq.png" },
    { id: 597, nombre: "Fuerza fantasmal", clase: "Hechicero", nivel: 2, archivo: "/v1772903676/Hechicero_Fuerza_fantasmal_iu23sh.png" },
    { id: 668, nombre: "Globo de invulnerabilidad", clase: "Hechicero", nivel: 6, archivo: "/v1772903676/Hechicero_Globo_de_invulnerabilidad_ovyk1q.png" },
    { id: 574, nombre: "Grasa", clase: "Hechicero", nivel: 1, archivo: "/v1772903678/Hechicero_Grasa_xspisr.png" },
    { id: 551, nombre: "Guardia de cuchillas", clase: "Hechicero", nivel: 0, archivo: "/v1772903679/Hechicero_Guardia_de_cuchillas_sns8vu.png" },
    { id: 598, nombre: "Hacer añicos", clase: "Hechicero", nivel: 2, archivo: "/v1772903680/Hechicero_Hacer_a%C3%B1icos_wyddgt.png" },
    { id: 643, nombre: "Hechizar monstruo", clase: "Hechicero", nivel: 4, archivo: "/v1772903680/Hechicero_Hechizar_monstruo_lcxvng.png" },
    { id: 575, nombre: "Hechizar persona", clase: "Hechicero", nivel: 1, archivo: "/v1772903681/Hechicero_Hechizar_persona_ijezhg.png" },
    { id: 599, nombre: "Hoja de fuego", clase: "Hechicero", nivel: 2, archivo: "/v1772903681/Hechicero_Hoja_de_fuego_kkat0c.png" },
    { id: 552, nombre: "Ilusión menor", clase: "Hechicero", nivel: 0, archivo: "/v1772903682/Hechicero_Ilusi%C3%B3n_menor_ex5eec.png" },
    { id: 626, nombre: "Imagen mayor", clase: "Hechicero", nivel: 3, archivo: "/v1772903683/Hechicero_Imagen_mayor_n69hra.png" },
    { id: 600, nombre: "Imagen múltiple", clase: "Hechicero", nivel: 2, archivo: "/v1772903684/Hechicero_Imagen_m%C3%BAltiple_dw37zx.png" },
    { id: 576, nombre: "Imagen silenciosa", clase: "Hechicero", nivel: 1, archivo: "/v1772903685/Hechicero_Imagen_silenciosa_cg6zra.png" },
    { id: 553, nombre: "Impacto certero", clase: "Hechicero", nivel: 0, archivo: "/v1772903687/Hechicero_Impacto_certero_frcmc8.png" },
    { id: 658, nombre: "Inmovilizar monstruo", clase: "Hechicero", nivel: 5, archivo: "/v1772903687/Hechicero_Inmovilizar_monstruo_dipxmw.png" },
    { id: 601, nombre: "Inmovilizar persona", clase: "Hechicero", nivel: 2, archivo: "/v1772903687/Hechicero_Inmovilizar_persona_uohiju.png" },
    { id: 602, nombre: "Invisibilidad", clase: "Hechicero", nivel: 2, archivo: "/v1772903690/Hechicero_Invisibilidad_jfygjs.png" },
    { id: 644, nombre: "Invisibilidad mejorada", clase: "Hechicero", nivel: 4, archivo: "/v1772903690/Hechicero_Invisibilidad_mejorada_rxjwdi.png" },
    { id: 680, nombre: "Invertir la gravedad", clase: "Hechicero", nivel: 7, archivo: "/v1772903688/Hechicero_Invertir_la_gravedad_b9ykvf.png" },
    { id: 603, nombre: "Levitar", clase: "Hechicero", nivel: 2, archivo: "/v1772903690/Hechicero_Levitar_x4nxgv.png" },
    { id: 554, nombre: "Luces danzantes", clase: "Hechicero", nivel: 0, archivo: "/v1772903692/Hechicero_Luces_danzantes_n0bwox.png" },
    { id: 555, nombre: "Luz", clase: "Hechicero", nivel: 0, archivo: "/v1772903693/Hechicero_Luz_uiyukd.png" },
    { id: 627, nombre: "Luz del día", clase: "Hechicero", nivel: 3, archivo: "/v1772903692/Hechicero_Luz_del_d%C3%ADa_zmqjhe.png" },
    { id: 669, nombre: "Mal de ojo", clase: "Hechicero", nivel: 6, archivo: "/v1772903693/Hechicero_Mal_de_ojo_aaiq9g.png" },
    { id: 659, nombre: "Mano de Bigby", clase: "Hechicero", nivel: 5, archivo: "/v1772903694/Hechicero_Mano_de_Bigby_id9ay9.png" },
    { id: 556, nombre: "Mano de mago", clase: "Hechicero", nivel: 0, archivo: "/v1772903696/Hechicero_Mano_de_mago_rrze2r.png" },
    { id: 577, nombre: "Manos ardientes", clase: "Hechicero", nivel: 1, archivo: "/v1772903696/Hechicero_Manos_ardientes_qoipuw.png" },
    { id: 645, nombre: "Marchitar", clase: "Hechicero", nivel: 4, archivo: "/v1772903697/Hechicero_Marchitar_vhqdic.png" },
    { id: 557, nombre: "Mensaje", clase: "Hechicero", nivel: 0, archivo: "/v1772903697/Hechicero_Mensaje_dax6cr.png" },
    { id: 670, nombre: "Mover la tierra", clase: "Hechicero", nivel: 6, archivo: "/v1772903699/Hechicero_Mover_la_tierra_tqyron.png" },
    { id: 646, nombre: "Muro de fuego", clase: "Hechicero", nivel: 4, archivo: "/v1772903700/Hechicero_Muro_de_fuego_chm6uy.png" },
    { id: 660, nombre: "Muro de piedra", clase: "Hechicero", nivel: 5, archivo: "/v1772903701/Hechicero_Muro_de_piedra_bt95p3.png" },
    { id: 661, nombre: "Nube aniquiladora", clase: "Hechicero", nivel: 5, archivo: "/v1772903701/Hechicero_Nube_aniquiladora_baluug.png" },
    { id: 628, nombre: "Nube apestosa", clase: "Hechicero", nivel: 3, archivo: "/v1772903702/Hechicero_Nube_apestosa_rtt1ne.png" },
    { id: 604, nombre: "Nube de dagas", clase: "Hechicero", nivel: 2, archivo: "/v1772903702/Hechicero_Nube_de_dagas_d0emve.png" },
    { id: 578, nombre: "Nube de oscurecimiento", clase: "Hechicero", nivel: 1, archivo: "/v1772903704/Hechicero_Nube_de_oscurecimiento_wmmbsj.png" },
    { id: 686, nombre: "Nube incendiaria", clase: "Hechicero", nivel: 8, archivo: "/v1772903705/Hechicero_Nube_incendiaria_undtsa.png" },
    { id: 579, nombre: "Ola atronadora", clase: "Hechicero", nivel: 1, archivo: "/v1772903705/Hechicero_Ola_atronadora_gjvcfu.png" },
    { id: 580, nombre: "Orbe cromático", clase: "Hechicero", nivel: 1, archivo: "/v1772903707/Hechicero_Orbe_crom%C3%A1tico_qd5lfr.png" },
    { id: 605, nombre: "Oscuridad", clase: "Hechicero", nivel: 2, archivo: "/v1772903708/Hechicero_Oscuridad_zomz8z.png" },
    { id: 687, nombre: "Palabra de poder: aturdir", clase: "Hechicero", nivel: 8, archivo: "/v1772903709/Hechicero_Palabra_de_poder-_aturdir_uczzhe.png" },
    { id: 691, nombre: "Palabra de poder: matar", clase: "Hechicero", nivel: 9, archivo: "/v1772903710/Hechicero_Palabra_de_poder-_matar_f4niy8.png" },
    { id: 692, nombre: "Parar el tiempo", clase: "Hechicero", nivel: 9, archivo: "/v1772903710/Hechicero_Parar_el_tiempo_h2dgrg.png" },
    { id: 606, nombre: "Paso brumoso", clase: "Hechicero", nivel: 2, archivo: "/v1772903710/Hechicero_Paso_brumoso_y7qscw.png" },
    { id: 629, nombre: "Patrón hipnótico", clase: "Hechicero", nivel: 3, archivo: "/v1772903711/Hechicero_Patr%C3%B3n_hipn%C3%B3tico_hpd6id.png" },
    { id: 647, nombre: "Piel pétrea", clase: "Hechicero", nivel: 4, archivo: "/v1772903713/Hechicero_Piel_p%C3%A9trea_swvtl9.png" },
    { id: 662, nombre: "Plaga de insectos", clase: "Hechicero", nivel: 5, archivo: "/v1772903713/Hechicero_Plaga_de_insectos_lc9xgo.png" },
    { id: 648, nombre: "Polimorfar", clase: "Hechicero", nivel: 4, archivo: "/v1772903713/Hechicero_Poliformar_qqkgpt.png" },
    { id: 693, nombre: "Portal", clase: "Hechicero", nivel: 9, archivo: "/v1772903714/Hechicero_Portal_a9q9bm.png" },
    { id: 607, nombre: "Potenciar característica", clase: "Hechicero", nivel: 2, archivo: "/v1772903714/Hechicero_Potenciar_caracter%C3%ADstica_h8vidw.png" },
    { id: 558, nombre: "Prestidigitación", clase: "Hechicero", nivel: 0, archivo: "/v1772903716/Hechicero_Prestidigitaci%C3%B3n_hfcieu.png" },
    { id: 581, nombre: "Proyectil mágico", clase: "Hechicero", nivel: 1, archivo: "/v1772903717/Hechicero_Proyectil_m%C3%A1gico_yu5uja.png" },
    { id: 671, nombre: "Puerta arcana", clase: "Hechicero", nivel: 6, archivo: "/v1772903718/Hechicero_Puerta_arcana_rfzdaq.png" },
    { id: 649, nombre: "Puerta dimensional", clase: "Hechicero", nivel: 4, archivo: "/v1772903718/Hechicero_Puerta_dimensional_loqi2w.png" },
    { id: 608, nombre: "Ráfaga de viento", clase: "Hechicero", nivel: 2, archivo: "/v1772903719/Hechicero_R%C3%A1faga_de_viento_w1xtq3.png" },
    { id: 631, nombre: "Ralentizar", clase: "Hechicero", nivel: 3, archivo: "/v1772903719/Hechicero_Ralentizar_puqjkr.png" },
    { id: 609, nombre: "Rayo abrasador", clase: "Hechicero", nivel: 2, archivo: "/v1772903720/Hechicero_Rayo_abrasador_szy47h.png" },
    { id: 559, nombre: "Rayo de escarcha", clase: "Hechicero", nivel: 0, archivo: "/v1772903721/Hechicero_Rayo_de_escarcha_o5t2l1.png" },
    { id: 582, nombre: "Rayo de hechicería", clase: "Hechicero", nivel: 1, archivo: "/v1772903721/Hechicero_Rayo_de_hechicer%C3%ADa_eocwvo.png" },
    { id: 583, nombre: "Rayo nauseabundo", clase: "Hechicero", nivel: 1, archivo: "/v1772903722/Hechicero_Rayo_nauseabundo_fqogyn.png" },
    { id: 672, nombre: "Rayo solar", clase: "Hechicero", nivel: 6, archivo: "/v1772903723/Hechicero_Rayo_solar_topha6.png" },
    { id: 632, nombre: "Relámpago", clase: "Hechicero", nivel: 3, archivo: "/v1772903725/Hechicero_Rel%C3%A1mpago_sed6s1.png" },
    { id: 673, nombre: "Relámpago en cadena", clase: "Hechicero", nivel: 6, archivo: "/v1772903723/Hechicero_Rel%C3%A1mpago_en_cadena_ohobbf.png" },
    { id: 560, nombre: "Reparar", clase: "Hechicero", nivel: 0, archivo: "/v1772903725/Hechicero_Reparar_hngtgt.png" },
    { id: 633, nombre: "Respirar bajo el agua", clase: "Hechicero", nivel: 3, archivo: "/v1772903725/Hechicero_Respirar_bajo_el_agua_elhrbt.png" },
    { id: 584, nombre: "Retirada expeditiva", clase: "Hechicero", nivel: 1, archivo: "/v1772903726/Hechicero_Retirada_expeditiva_qfusxc.png" },
    { id: 585, nombre: "Rociada de color", clase: "Hechicero", nivel: 1, archivo: "/v1772903727/Hechicero_Rociada_de_color_brq9in.png" },
    { id: 681, nombre: "Rociada prismática", clase: "Hechicero", nivel: 7, archivo: "/v1772903728/Hechicero_Rociada_prism%C3%A1tica_zo9iox.png" },
    { id: 561, nombre: "Rociada venenosa", clase: "Hechicero", nivel: 0, archivo: "/v1772903728/Hechicero_Rociada_venenosa_gqwtl7.png" },
    { id: 562, nombre: "Salpicadura ácida", clase: "Hechicero", nivel: 0, archivo: "/v1772903729/Hechicero_Salpicadura_%C3%A1cida_uk6y2i.png" },
    { id: 586, nombre: "Salto", clase: "Hechicero", nivel: 1, archivo: "/v1772903730/Hechicero_Salto_zm5rn8.png" },
    { id: 688, nombre: "Semiplano", clase: "Hechicero", nivel: 8, archivo: "/v1772903730/Hechicero_Semiplano_djsh2c.png" },
    { id: 610, nombre: "Sordera/ceguera", clase: "Hechicero", nivel: 2, archivo: "/v1772903731/Hechicero_Sordera_ceguera_sjnqma.png" },
    { id: 611, nombre: "Sugestión", clase: "Hechicero", nivel: 2, archivo: "/v1772903733/Hechicero_Sugesti%C3%B3n_lmvjgk.png" },
    { id: 674, nombre: "Sugestión en masa", clase: "Hechicero", nivel: 6, archivo: "/v1772903732/Hechicero_Sugesti%C3%B3n_en_masa_te4lo0.png" },
    { id: 612, nombre: "Telaraña", clase: "Hechicero", nivel: 2, archivo: "/v1772903733/Hechicero_Telara%C3%B1a_giev0j.png" },
    { id: 663, nombre: "Telequinesis", clase: "Hechicero", nivel: 5, archivo: "/v1772903733/Hechicero_Telequinesis_ntql6p.png" },
    { id: 682, nombre: "Teletransporte", clase: "Hechicero", nivel: 7, archivo: "/v1772903734/Hechicero_Teletransporte_nneywq.png" },
    { id: 689, nombre: "Terremoto", clase: "Hechicero", nivel: 8, archivo: "/v1772903735/Hechicero_Terremoto_eceayw.png" },
    { id: 634, nombre: "Terror", clase: "Hechicero", nivel: 3, archivo: "/v1772903736/Hechicero_Terror_ajnujl.png" },
    { id: 563, nombre: "Toque helado", clase: "Hechicero", nivel: 0, archivo: "/v1772903736/Hechicero_Toque_helado_l8wlx4.png" },
    { id: 635, nombre: "Toque vampírico", clase: "Hechicero", nivel: 3, archivo: "/v1772903736/Hechicero_Toque_vamp%C3%ADrico_lfdqkl.png" },
    { id: 636, nombre: "Tormenta de aguanieve", clase: "Hechicero", nivel: 3, archivo: "/v1772903737/Hechicero_Tormenta_de_aguanieve_uycdt1.png" },
    { id: 683, nombre: "Tormenta de fuego", clase: "Hechicero", nivel: 7, archivo: "/v1772903738/Hechicero_Tormenta_de_fuego_fv9et7.png" },
    { id: 650, nombre: "Tormenta de hielo", clase: "Hechicero", nivel: 4, archivo: "/v1772903739/Hechicero_Tormenta_de_hielo_rmciqy.png" },
    { id: 694, nombre: "Tormenta de meteoritos", clase: "Hechicero", nivel: 9, archivo: "/v1772903739/Hechicero_Tormenta_de_meteoritos_xo9oke.png" },
    { id: 613, nombre: "Trepar cual arácnido", clase: "Hechicero", nivel: 2, archivo: "/v1772903740/Hechicero_Trepar_cual_ar%C3%A1cnido_a6obdz.png" },
    { id: 614, nombre: "Ver invisibilidad", clase: "Hechicero", nivel: 2, archivo: "/v1772903631/Hechicero_Ver_invisibilidad_redlut.png" },
    { id: 615, nombre: "Vigor arcano", clase: "Hechicero", nivel: 2, archivo: "/v1772903631/Hechicero_Vigor_arcano_fu4yho.png" },
    { id: 616, nombre: "Visión en la oscuridad", clase: "Hechicero", nivel: 2, archivo: "/v1772903631/Hechicero_Visi%C3%B3n_en_la_oscuridad_ojkh1w.png" },
    { id: 675, nombre: "Visión veraz", clase: "Hechicero", nivel: 6, archivo: "/v1772903632/Hechicero_Visi%C3%B3n_veraz_q194fl.png" },
    { id: 637, nombre: "Volar", clase: "Hechicero", nivel: 3, archivo: "/v1772903633/Hechicero_Volar_nmplpm.png" },

    // CONJUROS DE MAGO (ORDEN ALFABÉTICO)
    { id: 749, nombre: "Abrir", clase: "Mago", nivel: 2, archivo: "/v1772793728/Mago_Abrir_qusxrv.png" },
    { id: 788, nombre: "Acelerar", clase: "Mago", nivel: 3, archivo: "/v1772793728/Mago_Acelerar_xemprf.png" },
    { id: 820, nombre: "Adivinación", clase: "Mago", nivel: 4, archivo: "/v1772793728/Mago_Adiviniaci%C3%B3n_sdqmtg.png" },
    { id: 695, nombre: "Agarre electrizante", clase: "Mago", nivel: 0, archivo: "/v1772793729/Mago_Agarre_electrizante_tegwcr.png" },
    { id: 750, nombre: "Agrandar/reducir", clase: "Mago", nivel: 2, archivo: "/v1772793729/Mago_Agrandar___Reducir_ddk9jc.png" },
    { id: 718, nombre: "Alarma", clase: "Mago", nivel: 1, archivo: "/v1772793729/Mago_Alarma_k5wyrb.png" },
    { id: 751, nombre: "Aliento de dragón", clase: "Mago", nivel: 2, archivo: "/v1772793729/Mago_Aliento_de_drag%C3%B3n_wqjbxc.png" },
    { id: 752, nombre: "Alterar el propio aspecto", clase: "Mago", nivel: 2, archivo: "/v1772793730/Mago_Alterar_el_propio_aspecto_eoerrj.png" },
    { id: 849, nombre: "Alterar los recuerdos", clase: "Mago", nivel: 5, archivo: "/v1772793730/Mago_Alterar_los_recuerdos_lxbaoc.png" },
    { id: 696, nombre: "Amistad", clase: "Mago", nivel: 0, archivo: "/v1772793731/Mago_Amistad_h5yvym.png" },
    { id: 789, nombre: "Animar a los muertos", clase: "Mago", nivel: 3, archivo: "/v1772793731/Mago_Animar_a_los_muertos_ghfxqk.png" },
    { id: 850, nombre: "Animar objetos", clase: "Mago", nivel: 5, archivo: "/v1772793731/Mago_Animar_objetos_adg7yz.png" },
    { id: 915, nombre: "Antipatía/simpatía", clase: "Mago", nivel: 8, archivo: "/v1772793732/Mago_Antipat%C3%ADa_simpat%C3%ADa_bggay4.png" },
    { id: 851, nombre: "Apariencia", clase: "Mago", nivel: 5, archivo: "/v1772793732/Mago_Apariencia_v3qswa.png" },
    { id: 753, nombre: "Arma mágica", clase: "Mago", nivel: 2, archivo: "/v1772793733/Mago_Arma_magica_yvzxlp.png" },
    { id: 719, nombre: "Armadura de mago", clase: "Mago", nivel: 1, archivo: "/v1772793733/Mago_Armadura_de_mago_dthp4d.png" },
    { id: 821, nombre: "Asesino fantasmal", clase: "Mago", nivel: 4, archivo: "/v1772793734/Mago_Asesino_fantasmal_cyytnu.png" },
    { id: 852, nombre: "Atadura planar", clase: "Mago", nivel: 5, archivo: "/v1772793734/Mago_Atadura_planar_rgbhvs.png" },
    { id: 754, nombre: "Augurio", clase: "Mago", nivel: 2, archivo: "/v1772793735/Mago_Augurio_sgp1ym.png" },
    { id: 755, nombre: "Aura mágica de Nystul", clase: "Mago", nivel: 2, archivo: "/v1772793736/Mago_Aura_m%C3%A1gica_de_Nystul_bqxylq.png" },
    { id: 878, nombre: "Baile irresistible de Otto", clase: "Mago", nivel: 6, archivo: "/v1772793735/Mago_Baile_irresistibile_de_Otto_rpyior.png" },
    { id: 756, nombre: "Boca mágica", clase: "Mago", nivel: 2, archivo: "/v1772793736/Mago_Boca_m%C3%A1gica_n6qmvu.png" },
    { id: 790, nombre: "Bola de fuego", clase: "Mago", nivel: 3, archivo: "/v1772793738/Mago_Bola_de_fuego_qciq5x.png" },
    { id: 900, nombre: "Bola de fuego de explosión retardada", clase: "Mago", nivel: 7, archivo: "/v1772793736/Mago_Bola_de_fuego_de_explosi%C3%B3n_retardada_ddf9t3.png" },
    { id: 720, nombre: "Caída de pluma", clase: "Mago", nivel: 1, archivo: "/v1772793738/Mago_Ca%C3%ADda_de_pluma_u4v67e.png" },
    { id: 879, nombre: "Caldero burbujeante de Tasha", clase: "Mago", nivel: 6, archivo: "/v1772793738/Mago_Caldero_burbujeante_de_Tasha_trvdgn.png" },
    { id: 928, nombre: "Cambiar de forma", clase: "Mago", nivel: 9, archivo: "/v1772793739/Mago_Cambiar_de_forma_eleek3.png" },
    { id: 916, nombre: "Campo antimagia", clase: "Mago", nivel: 8, archivo: "/v1772793739/Mago_Campo_antimagia_tz7nrw.png" },
    { id: 929, nombre: "Cautiverio", clase: "Mago", nivel: 9, archivo: "/v1772793740/Mago_Cautiverio_bfa4gs.png" },
    { id: 757, nombre: "Cerradura arcana", clase: "Mago", nivel: 2, archivo: "/v1772793741/Mago_Cerradura_arcana_savygz.png" },
    { id: 880, nombre: "Círculo de muerte", clase: "Mago", nivel: 6, archivo: "/v1772793741/Mago_C%C3%ADrculo_de_muerte_kg5f8i.png" },
    { id: 853, nombre: "Círculo de poder", clase: "Mago", nivel: 5, archivo: "/v1772793742/Mago_C%C3%ADrculo_de_poder_bvlbks.png" },
    { id: 854, nombre: "Círculo de teletransportación", clase: "Mago", nivel: 5, archivo: "/v1772793742/Mago_C%C3%ADrculo_de_teletransportaci%C3%B3n_xe7ayh.png" },
    { id: 791, nombre: "Círculo mágico", clase: "Mago", nivel: 3, archivo: "/v1772793743/Mago_C%C3%ADrculo_m%C3%A1gico_ikoul8.png" },
    { id: 792, nombre: "Clarividencia", clase: "Mago", nivel: 3, archivo: "/v1772793744/Mago_Clarividencia_acmnq1.png" },
    { id: 758, nombre: "Clavo mental", clase: "Mago", nivel: 2, archivo: "/v1772793744/Mago_Clavo_mental_uovqnf.png" },
    { id: 917, nombre: "Clon", clase: "Mago", nivel: 8, archivo: "/v1772793744/Mago_Clon_iwrevu.png" },
    { id: 822, nombre: "Cofre oculto de Leomund", clase: "Mago", nivel: 4, archivo: "/v1772793745/Mago_Cofre_oculto_de_Leomund_qtxhwk.png" },
    { id: 823, nombre: "Confusión", clase: "Mago", nivel: 4, archivo: "/v1772793745/Mago_Confusi%C3%B3n_uvhvk2.png" },
    { id: 855, nombre: "Conjurar elemental", clase: "Mago", nivel: 5, archivo: "/v1772793746/Mago_Conjurar_elemental_oxmtz7.png" },
    { id: 824, nombre: "Conjurar elementales menores", clase: "Mago", nivel: 4, archivo: "/v1772793747/Mago_Conjurar_elementales_menores_ulakgg.png" },
    { id: 856, nombre: "Cono de frío", clase: "Mago", nivel: 5, archivo: "/v1772793747/Mago_Cono_de_fr%C3%ADo_ypdsyg.png" },
    { id: 857, nombre: "Conocer las leyendas", clase: "Mago", nivel: 5, archivo: "/v1772793748/Mago_Conocer_las_leyendas_fctiby.png" },
    { id: 858, nombre: "Contactar con otro plano", clase: "Mago", nivel: 5, archivo: "/v1772793748/Mago_Contactar_con_otro_plano_of1fas.png" },
    { id: 881, nombre: "Contingencia", clase: "Mago", nivel: 6, archivo: "/v1772793749/Mago_Contingencia_cbtz5q.png" },
    { id: 759, nombre: "Contorno borroso", clase: "Mago", nivel: 2, archivo: "/v1772793750/Mago_Contorno_borroso_om3h9d.png" },
    { id: 793, nombre: "Contrahechizo", clase: "Mago", nivel: 3, archivo: "/v1772793750/Mago_Contrahechizo_thp9ke.png" },
    { id: 825, nombre: "Controlar agua", clase: "Mago", nivel: 4, archivo: "/v1772793751/Mago_Controlar_agua_j1re3t.png" },
    { id: 918, nombre: "Controlar el clima", clase: "Mago", nivel: 8, archivo: "/v1772793751/Mago_Controlar_el_clima_gkfyo5.png" },
    { id: 794, nombre: "Corcel fantasma", clase: "Mago", nivel: 3, archivo: "/v1772793751/Mago_Corcel_fantasma_ceagrl.png" },
    { id: 760, nombre: "Corona de la locura", clase: "Mago", nivel: 2, archivo: "/v1772793752/Mago_Corona_de_la_locura_szpcoq.png" },
    { id: 859, nombre: "Creación", clase: "Mago", nivel: 5, archivo: "/v1772793753/Mago_Creaci%C3%B3n_twhpvr.png" },
    { id: 882, nombre: "Crear muerto viviente", clase: "Mago", nivel: 6, archivo: "/v1772793754/Mago_Crear_muerto_viviente_zpt24m.png" },
    { id: 721, nombre: "Cuchillo de hielo", clase: "Mago", nivel: 1, archivo: "/v1772793754/Mago_Cuchillo_de_hielo_nloifg.png" },
    { id: 883, nombre: "De la carne a la piedra", clase: "Mago", nivel: 6, archivo: "/v1772793754/Mago_De_la_carne_a_la_piedra_win8b1.png" },
    { id: 901, nombre: "Dedo de la muerte", clase: "Mago", nivel: 7, archivo: "/v1772793754/Mago_Dedo_de_la_muerte_gdbglq.png" },
    { id: 700, nombre: "Descarga de fuego", clase: "Mago", nivel: 0, archivo: "/v1772793756/Mago_Descarga_de_fuego_lduzxe.png" },
    { id: 930, nombre: "Deseo", clase: "Mago", nivel: 9, archivo: "/v1772793761/Mago_Deseo_iwtdao.png" },
    { id: 884, nombre: "Desintegrar", clase: "Mago", nivel: 6, archivo: "/v1772793757/Mago_Desintegrar_vzlawn.png" },
    { id: 795, nombre: "Desplazamiento", clase: "Mago", nivel: 3, archivo: "/v1772793757/Mago_Desplazamiento_rerke0.png" },
    { id: 902, nombre: "Desplazamiento entre planos", clase: "Mago", nivel: 7, archivo: "/v1772793757/Mago_Desplazamiento_entre_planos_ygfrse.png" },
    { id: 826, nombre: "Destierro", clase: "Mago", nivel: 4, archivo: "/v1772793758/Mago_Destierro_jxnxkk.png" },
    { id: 722, nombre: "Detectar magia", clase: "Mago", nivel: 1, archivo: "/v1772793759/Mago_Detectar_magia_bmjcue.png" },
    { id: 761, nombre: "Detectar pensamientos", clase: "Mago", nivel: 2, archivo: "/v1772793759/Mago_Detectar_pensamientos_wcuva7.png" },
    { id: 723, nombre: "Disco flotante de Tenser", clase: "Mago", nivel: 1, archivo: "/v1772793760/Mago_Disco_flotante_de_Tenser_jjtnf6.png" },
    { id: 724, nombre: "Disfrazarse", clase: "Mago", nivel: 1, archivo: "/v1772793760/Mago_Disfrazarse_c8z4kk.png" },
    { id: 796, nombre: "Disipar magia", clase: "Mago", nivel: 3, archivo: "/v1772793760/Mago_Disipar_magia_byqjwy.png" },
    { id: 919, nombre: "Dominar monstruo", clase: "Mago", nivel: 8, archivo: "/v1772793761/Mago_Dominar_monstruo_gn6dst.png" },
    { id: 860, nombre: "Dominar persona", clase: "Mago", nivel: 5, archivo: "/v1772793762/Mago_Dominar_persona_ukdclo.png" },
    { id: 797, nombre: "Don de lenguas", clase: "Mago", nivel: 3, archivo: "/v1772793763/Mago_Don_de_lenguas_fp2ajo.png" },
    { id: 725, nombre: "Dormir", clase: "Mago", nivel: 1, archivo: "/v1772793763/Mago_Dormir_w6gra9.png" },
    { id: 762, nombre: "Dulce descanso", clase: "Mago", nivel: 2, archivo: "/v1772793764/Mago_Dulce_descanso_zp5odg.png" },
    { id: 701, nombre: "Elementalismo", clase: "Mago", nivel: 0, archivo: "/v1772793765/Mago_Elementalismo_l0heer.png" },
    { id: 726, nombre: "Encontrar familiar", clase: "Mago", nivel: 1, archivo: "/v1772793765/Mago_Encontrar_familiar_eqomvt.png" },
    { id: 861, nombre: "Engañar", clase: "Mago", nivel: 5, archivo: "/v1772793765/Mago_Enga%C3%B1ar_ig2mae.png" },
    { id: 862, nombre: "Enlace telepático de Rary", clase: "Mago", nivel: 5, archivo: "/v1772793766/Mago_Enlace_telep%C3%A1tico_de_Rary_w5e1td.png" },
    { id: 863, nombre: "Ensueño", clase: "Mago", nivel: 5, archivo: "/v1772793767/Mago_Ensue%C3%B1o_wmnaqt.png" },
    { id: 727, nombre: "Entender idiomas", clase: "Mago", nivel: 1, archivo: "/v1772793767/Mago_Entender_idiomas_ff1km0.png" },
    { id: 728, nombre: "Escudo", clase: "Mago", nivel: 1, archivo: "/v1772793769/Mago_Escudo_t306q6.png" },
    { id: 727, nombre: "Escudo de fuego", clase: "Mago", nivel: 4, archivo: "/v1772793768/Mago_Escudo_de_fuego_qtlvu4.png" },
    { id: 864, nombre: "Escudriñar", clase: "Mago", nivel: 5, archivo: "/v1772793769/Mago_Escudri%C3%B1ar_kklc9n.png" },
    { id: 763, nombre: "Esfera de llamas", clase: "Mago", nivel: 2, archivo: "/v1772793770/Mago_Esfera_de_llamas_iiv2c1.png" },
    { id: 885, nombre: "Esfera congelante de Otiluke", clase: "Mago", nivel: 6, archivo: "/v1772793770/Mago_Esfera_congelante_de_Otiluke_ft5alx.png" },
    { id: 828, nombre: "Esfera elástica de Otiluke", clase: "Mago", nivel: 4, archivo: "/v1772793771/Mago_Esfera_el%C3%A1stica_de_Otiluke_io8ddt.png" },
    { id: 829, nombre: "Esfera vitriólica", clase: "Mago", nivel: 4, archivo: "/v1772793772/Mago_Esfera_vitri%C3%B3lica_akyick.png" },
    { id: 903, nombre: "Espada de Mordenkainen", clase: "Mago", nivel: 7, archivo: "/v1772793772/Mago_Espada_de_Mordenkainen_dii88i.png" },
    { id: 904, nombre: "Espejismo arcano", clase: "Mago", nivel: 7, archivo: "/v1772793772/Mago_Espejismo_arcano_zqk2bq.png" },
    { id: 865, nombre: "Estática sináptica", clase: "Mago", nivel: 5, archivo: "/v1772793773/Mago_Est%C3%A1tica_sin%C3%A1ptica_hdv1dq.png" },
    { id: 905, nombre: "Excursión etérea", clase: "Mago", nivel: 7, archivo: "/v1772793774/Mago_Excursi%C3%B3n_et%C3%A9rea_a6gy2c.png" },
    { id: 920, nombre: "Explosión solar", clase: "Mago", nivel: 8, archivo: "/v1772793775/Mago_Explosion_solar_ok57nd.png" },
    { id: 830, nombre: "Fabricar", clase: "Mago", nivel: 4, archivo: "/v1772793775/Mago_Fabricar_y7rspf.png" },
    { id: 729, nombre: "Falsa vida", clase: "Mago", nivel: 1, archivo: "/v1772793775/Mago_Falsa_vida_xrfden.png" },
    { id: 798, nombre: "Fingir muerte", clase: "Mago", nivel: 3, archivo: "/v1772793776/Mago_Fingir_muerte_me43n6.png" },
    { id: 764, nombre: "Flecha ácida de Melf", clase: "Mago", nivel: 2, archivo: "/v1772793776/Mago_Flecha_acida_de_Melf_lgln3h.png" },
    { id: 799, nombre: "Forma gaseosa", clase: "Mago", nivel: 3, archivo: "/v1772793778/Mago_Forma_gaseosa_ytxnkl.png" },
    { id: 702, nombre: "Fragmento mental", clase: "Mago", nivel: 0, archivo: "/v1772793778/Mago_Fragmento_mental_eon0iz.png" },
    { id: 765, nombre: "Fuerza fantasmal", clase: "Mago", nivel: 2, archivo: "/v1772793779/Mago_Fuerza_fantasmal_vixcsh.png" },
    { id: 866, nombre: "Geas", clase: "Mago", nivel: 5, archivo: "/v1772793779/Mago_Geas_rrrcds.png" },
    { id: 800, nombre: "Glifo custodio", clase: "Mago", nivel: 3, archivo: "/v1772793779/Mago_Glifo_custodio_qdw0gx.png" },
    { id: 886, nombre: "Globo de invulnerabilidad", clase: "Mago", nivel: 6, archivo: "/v1772793780/Mago_Globo_de_invulnerabilidad_aenktp.png" },
    { id: 867, nombre: "Golpe de viento acerado", clase: "Mago", nivel: 5, archivo: "/v1772793781/Mago_Golpe_de_viento_acerado_zf5g5x.png" },
    { id: 730, nombre: "Grasa", clase: "Mago", nivel: 1, archivo: "/v1772793782/Mago_Grasa_pn9fkt.png" },
    { id: 703, nombre: "Guardia de cuchillas", clase: "Mago", nivel: 0, archivo: "/v1772793782/Mago_Guardas_y_guardias_mt3uek.png" },
    { id: 887, nombre: "Guardas y guardias", clase: "Mago", nivel: 6, archivo: "/v1772793783/Mago_Guardia_de_cuchillas_yhmgxv.png" },
    { id: 801, nombre: "Hablar con los muertos", clase: "Mago", nivel: 3, archivo: "/v1772793784/Mago_Hablar_con_los_muertos_jwz70f.png" },
    { id: 766, nombre: "Hacer añicos", clase: "Mago", nivel: 2, archivo: "/v1772793784/Mago_Hacer_a%C3%B1icos_kubzsm.png" },
    { id: 831, nombre: "Hechizar monstruo", clase: "Mago", nivel: 4, archivo: "/v1772793784/Mago_Hechizar_monstruo_dlc9iy.png" },
    { id: 731, nombre: "Hechizar persona", clase: "Mago", nivel: 1, archivo: "/v1772793785/Mago_Hechizar_persona_ygm7z2.png" },
    { id: 732, nombre: "Identificar", clase: "Mago", nivel: 1, archivo: "/v1772793786/Mago_Identificar_pxiysy.png" },
    { id: 704, nombre: "Ilusión menor", clase: "Mago", nivel: 0, archivo: "/v1772793787/Mago_Ilusi%C3%B3n_menor_emh4cw.png" },
    { id: 888, nombre: "Ilusión programada", clase: "Mago", nivel: 6, archivo: "/v1772793787/Mago_Ilusi%C3%B3n_programada_ebakk0.png" },
    { id: 802, nombre: "Imagen mayor", clase: "Mago", nivel: 3, archivo: "/v1772793788/Mago_Imagen_mayor_jrrbnp.png" },
    { id: 767, nombre: "Imagen múltiple", clase: "Mago", nivel: 2, archivo: "/v1772793789/Mago_Imagen_m%C3%BAltiple_e0822k.png" },
    { id: 733, nombre: "Imagen silenciosa", clase: "Mago", nivel: 1, archivo: "/v1772793789/Mago_Imagen_silenciosa_ydcdei.png" },
    { id: 705, nombre: "Impacto certero", clase: "Mago", nivel: 0, archivo: "/v1772793789/Mago_Impacto_certero_voerfu.png" },
    { id: 803, nombre: "Imponer maldición", clase: "Mago", nivel: 3, archivo: "/v1772793790/Mago_Imponer_maldici%C3%B3n_ieldxn.png" },
    { id: 804, nombre: "Indetectable", clase: "Mago", nivel: 3, archivo: "/v1772793791/Mago_Indetectable_wraomw.png" },
    { id: 868, nombre: "Inmovilizar monstruo", clase: "Mago", nivel: 5, archivo: "/v1772793792/Mago_Inmovilizar_monstruo_dagscy.png" },
    { id: 768, nombre: "Inmovilizar persona", clase: "Mago", nivel: 2, archivo: "/v1772793792/Mago_Inmovilizar_persona_nbcnkx.png" },
    { id: 906, nombre: "Invertir la gravedad", clase: "Mago", nivel: 7, archivo: "/v1772793793/Mago_Invertir_la_gravedad_yhckxx.png" },
    { id: 769, nombre: "Invisibilidad", clase: "Mago", nivel: 2, archivo: "/v1772793795/Mago_Invisibilidad_hmtrcc.png" },
    { id: 832, nombre: "Invisibilidad mejorada", clase: "Mago", nivel: 4, archivo: "/v1772793794/Mago_Invisibilidad_mejorada_b9xcck.png" },
    { id: 889, nombre: "Invocación instantánea de Drawmij", clase: "Mago", nivel: 6, archivo: "/v1772793795/Mago_Invocaci%C3%B3n_instant%C3%A1nea_de_Drawmij_k75ovi.png" },
    { id: 833, nombre: "Invocar aberración", clase: "Mago", nivel: 4, archivo: "/v1772793795/Mago_Invocar_aberraci%C3%B3n_j8dgtn.png" },
    { id: 834, nombre: "Invocar autómata", clase: "Mago", nivel: 4, archivo: "/v1772793799/Mago_Invocar_aut%C3%B3mata_oghux4.png" },
    { id: 869, nombre: "Invocar dragón", clase: "Mago", nivel: 5, archivo: "/v1772793799/Mago_Invocar_drag%C3%B3n_iiunwp.png" },
    { id: 835, nombre: "Invocar elemental", clase: "Mago", nivel: 4, archivo: "/v1772793800/Mago_Invocar_elemental_hm4dkl.png" },
    { id: 805, nombre: "Invocar feérico", clase: "Mago", nivel: 3, archivo: "/v1772793799/Mago_Invocar_fe%C3%A9rico_frhtkg.png" },
    { id: 890, nombre: "Invocar infernal", clase: "Mago", nivel: 6, archivo: "/v1772793799/Mago_Invocar_infernal_endsnx.png" },
    { id: 806, nombre: "Invocar muerto viviente", clase: "Mago", nivel: 3, archivo: "/v1772793799/Mago_Invocar_muerto_viviente_ph7nq7.png" },
    { id: 907, nombre: "Jaula de fuerza", clase: "Mago", nivel: 7, archivo: "/v1772793800/Mago_Jaula_de_fuerza_uwzbw3.png" },
    { id: 921, nombre: "Laberinto", clase: "Mago", nivel: 8, archivo: "/v1772793800/Mago_Laberinto_zt9ggb.png" },
    { id: 807, nombre: "Levantar maldición", clase: "Mago", nivel: 3, archivo: "/v1772793800/Mago_Levantar_maldici%C3%B3n_gkp8bg.png" },
    { id: 770, nombre: "Levitar", clase: "Mago", nivel: 2, archivo: "/v1772793802/Mago_Levitar_u7zz2p.png" },
    { id: 771, nombre: "Llama permanente", clase: "Mago", nivel: 2, archivo: "/v1772793802/Mago_Llama_permanente_gh0hn3.png" },
    { id: 836, nombre: "Localizar criatura", clase: "Mago", nivel: 4, archivo: "/v1772793802/Mago_Localizar_criatura_sfkwht.png" },
    { id: 772, nombre: "Localizar objeto", clase: "Mago", nivel: 2, archivo: "/v1772793803/Mago_Localizar_objeto_ejs1gu.png" },
    { id: 706, nombre: "Luces danzantes", clase: "Mago", nivel: 0, archivo: "/v1772793803/Mago_Luces_danzantes_uwqqn0.png" },
    { id: 707, nombre: "Luz", clase: "Mago", nivel: 0, archivo: "/v1772793804/Mago_Luz_qtlgp7.png" },
    { id: 891, nombre: "Mal de ojo", clase: "Mago", nivel: 6, archivo: "/v1772793804/Mago_Mal_de_ojo_pvqrs3.png" },
    { id: 870, nombre: "Mano de Bigby", clase: "Mago", nivel: 5, archivo: "/v1772793805/Mago_Mano_de_Bigby_bqezjs.png" },
    { id: 708, nombre: "Mano de mago", clase: "Mago", nivel: 0, archivo: "/v1772793805/Mago_Mano_de_mago_cxrfd9.png" },
    { id: 734, nombre: "Manos ardientes", clase: "Mago", nivel: 1, archivo: "/v1772793806/Mago_Manos_ardientes_r2acps.png" },
    { id: 908, nombre: "Mansión magnífica de Mordenkainen", clase: "Mago", nivel: 7, archivo: "/v1772793806/Mago_Mansi%C3%B3n_magn%C3%ADfica_de_Mordenkainen_nrq4qi.png" },
    { id: 837, nombre: "Marchitar", clase: "Mago", nivel: 4, archivo: "/v1772793806/Mago_Marchitar_jrappg.png" },
    { id: 838, nombre: "Mastín fiel de Mordenkainen", clase: "Mago", nivel: 4, archivo: "/v1772793807/Mago_Mast%C3%ADn_fiel_de_Mordenkainen_po1on8.png" },
    { id: 709, nombre: "Mensaje", clase: "Mago", nivel: 0, archivo: "/v1772793807/Mago_Mensaje_djlihq.png" },
    { id: 922, nombre: "Mente en blanco", clase: "Mago", nivel: 8, archivo: "/v1772793807/Mago_Mente_en_blanco_ezzp6j.png" },
    { id: 839, nombre: "Moldear la piedra", clase: "Mago", nivel: 4, archivo: "/v1772793808/Mago_Moldear_la_piedra_jtl9dw.png" },
    { id: 892, nombre: "Mover la tierra", clase: "Mago", nivel: 6, archivo: "/v1772793809/Mago_Mover_la_tierra_bevdu6.png" },
    { id: 840, nombre: "Muro de fuego", clase: "Mago", nivel: 4, archivo: "/v1772793809/Mago_Muro_de_fuego_msa740.png" },
    { id: 871, nombre: "Muro de fuerza", clase: "Mago", nivel: 5, archivo: "/v1772793810/Mago_Muro_de_fuerza_tb1t4u.png" },
    { id: 893, nombre: "Muro de hielo", clase: "Mago", nivel: 6, archivo: "/v1772793810/Mago_Muro_de_hielo_e9gfvu.png" },
    { id: 872, nombre: "Muro de piedra", clase: "Mago", nivel: 5, archivo: "/v1772793810/Mago_Muro_de_piedra_iij7h6.png" },
    { id: 931, nombre: "Muro prismático", clase: "Mago", nivel: 9, archivo: "/v1772793811/Mago_Muro_prism%C3%A1tico_oud7e8.png" },
    { id: 873, nombre: "Nube aniquiladora", clase: "Mago", nivel: 5, archivo: "/v1772793812/Mago_Nube_aniquiladora_o5zpxm.png" },
    { id: 808, nombre: "Nube apestosa", clase: "Mago", nivel: 3, archivo: "/v1772793812/Mago_Nube_apestosa_dkj3ap.png" },
    { id: 773, nombre: "Nube de dagas", clase: "Mago", nivel: 2, archivo: "/v1772793813/Mago_Nube_de_dagas_ibvfyu.png" },
    { id: 923, nombre: "Nube incendiaria", clase: "Mago", nivel: 8, archivo: "/v1772793816/Mago_Nube_incendiaria_katwcd.png" },
    { id: 735, nombre: "Nube de oscurecimiento", clase: "Mago", nivel: 1, archivo: "/v1772793816/Mago_Nube_de_oscurecimiento_v46vyl.png" },
    { id: 924, nombre: "Ofuscación", clase: "Mago", nivel: 8, archivo: "/v1772793818/Mago_Ofuscaci%C3%B3n_tpxcxk.png" },
    { id: 841, nombre: "Ojo arcano", clase: "Mago", nivel: 4, archivo: "/v1772793818/Mago_Ojo_arcano_ytedl5.png" },
    { id: 736, nombre: "Ola atronadora", clase: "Mago", nivel: 1, archivo: "/v1772793819/Mago_Ola_atronadora_tkbxvi.png" },
    { id: 737, nombre: "Orbe cromático", clase: "Mago", nivel: 1, archivo: "/v1772793819/Mago_Orbe_crom%C3%A1tico_ujanrp.png" },
    { id: 774, nombre: "Oscuridad", clase: "Mago", nivel: 2, archivo: "/v1772793820/Mago_Oscuridad_mq8qv9.png" },
    { id: 925, nombre: "Palabra de poder: aturdir", clase: "Mago", nivel: 8, archivo: "/v1772793820/Mago_Palabra_de_poder-_aturdir_v6ie2c.png" },
    { id: 932, nombre: "Palabra de poder: matar", clase: "Mago", nivel: 9, archivo: "/v1772793824/Mago_Palabra_de_poder-_matar_f1q59f.png" },
    { id: 933, nombre: "Parar el tiempo", clase: "Mago", nivel: 9, archivo: "/v1772793824/Mago_Parar_el_tiempo_pmpxvk.png" },
    { id: 874, nombre: "Pasamuros", clase: "Mago", nivel: 5, archivo: "/v1772793826/Mago_Pasamuros_x7nem4.png" },
    { id: 775, nombre: "Paso brumoso", clase: "Mago", nivel: 2, archivo: "/v1772793827/Mago_Paso_brumoso_g2sj3f.png" },
    { id: 809, nombre: "Patrón hipnótico", clase: "Mago", nivel: 3, archivo: "/v1772793827/Mago_Patr%C3%B3n_hipn%C3%B3tico_xuicld.png" },
    { id: 810, nombre: "Pequeña choza de Leomund", clase: "Mago", nivel: 3, archivo: "/v1772793828/Mago_Peque%C3%B1a_choza_de_Leomund_kfseav.png" },
    { id: 842, nombre: "Piel pétrea", clase: "Mago", nivel: 4, archivo: "/v1772793829/Mago_Piel_p%C3%A9trea_gx55gu.png" },
    { id: 843, nombre: "Polimorfar", clase: "Mago", nivel: 4, archivo: "/v1772793830/Mago_Poliformar_mu1zlf.png" },
    { id: 934, nombre: "Polimorfar verdadero", clase: "Mago", nivel: 9, archivo: "/v1772793830/Mago_Poliformar_mu1zlf.png" },
    { id: 935, nombre: "Portal", clase: "Mago", nivel: 9, archivo: "/v1772793831/Mago_Portal_ecx0br.png" },
    { id: 776, nombre: "Potenciar característica", clase: "Mago", nivel: 2, archivo: "/v1772793831/Mago_Potenciar_caracter%C3%ADstica_eaht8n.png" },
    { id: 936, nombre: "Presciencia", clase: "Mago", nivel: 9, archivo: "/v1772793833/Mago_Presciencia_y5wd44.png" },
    { id: 875, nombre: "Presencia regia de Yolande", clase: "Mago", nivel: 5, archivo: "/v1772793833/Mago_Presencia_regia_de_Yolande_yvbaly.png" },
    { id: 710, nombre: "Prestidigitación", clase: "Mago", nivel: 0, archivo: "/v1772793833/Mago_Prestidigitaci%C3%B3n_ceencf.png" },
    { id: 738, nombre: "Protección contra el bien y el mal", clase: "Mago", nivel: 1, archivo: "/v1772793834/Mago_Protecci%C3%B3n_contra_el_bien_y_el_mal_x78mxk.png" },
    { id: 811, nombre: "Protección contra energía", clase: "Mago", nivel: 3, archivo: "/v1772793836/Mago_Protecci%C3%B3n_contra_energ%C3%ADa_qyotga.png" },
    { id: 937, nombre: "Proyección astral", clase: "Mago", nivel: 9, archivo: "/v1772793836/Mago_Proyecci%C3%B3n_astral_elsigd.png" },
    { id: 909, nombre: "Proyectar imagen", clase: "Mago", nivel: 7, archivo: "/v1772793837/Mago_Proyectar_imagen_vrwnnd.png" },
    { id: 739, nombre: "Proyectil mágico", clase: "Mago", nivel: 1, archivo: "/v1772793838/Mago_Proyectil_m%C3%A1gico_nobvbk.png" },
    { id: 894, nombre: "Puerta arcana", clase: "Mago", nivel: 6, archivo: "/v1772793838/Mago_Puerta_arcana_fn1kt1.png" },
    { id: 844, nombre: "Puerta dimensional", clase: "Mago", nivel: 4, archivo: "/v1772793839/Mago_Puerta_dimensional_bwd9vm.png" },
    { id: 777, nombre: "Ráfaga de viento", clase: "Mago", nivel: 2, archivo: "/v1772793840/Mago_R%C3%A1faga_de_viento_ncr11p.png" },
    { id: 812, nombre: "Ralentizar", clase: "Mago", nivel: 3, archivo: "/v1772793840/Mago_Ralentizar_o6i2pz.png" },
    { id: 778, nombre: "Rayo abrasador", clase: "Mago", nivel: 2, archivo: "/v1772793840/Mago_Rayo_abrasador_xhsizq.png" },
    { id: 779, nombre: "Rayo debilitador", clase: "Mago", nivel: 2, archivo: "/v1772793842/Mago_Rayo_debilitador_zfixoq.png" },
    { id: 711, nombre: "Rayo de escarcha", clase: "Mago", nivel: 0, archivo: "/v1772793841/Mago_Rayo_de_escarcha_rxzae4.png" },
    { id: 740, nombre: "Rayo de hechicería", clase: "Mago", nivel: 1, archivo: "/v1772793841/Mago_Rayo_de_hechicer%C3%ADa_whettq.png" },
    { id: 741, nombre: "Rayo nauseabundo", clase: "Mago", nivel: 1, archivo: "/v1772793843/Mago_Rayo_nauseabundo_as0a7r.png" },
    { id: 895, nombre: "Rayo solar", clase: "Mago", nivel: 6, archivo: "/v1772793843/Mago_Rayo_solar_rev4g7.png" },
    { id: 813, nombre: "Recado", clase: "Mago", nivel: 3, archivo: "/v1772793844/Mago_Recado_x6scll.png" },
    { id: 910, nombre: "Recluir", clase: "Mago", nivel: 7, archivo: "/v1772793844/Mago_Recluir_ubh6ae.png" },
    { id: 814, nombre: "Relámpago", clase: "Mago", nivel: 3, archivo: "/v1772793845/Mago_Rel%C3%A1mpago_ojkk8z.png" },
    { id: 896, nombre: "Relámpago en cadena", clase: "Mago", nivel: 6, archivo: "/v1772793844/Mago_Rel%C3%A1mpago_en_cadena_qjaswj.png" },
    { id: 712, nombre: "Reparar", clase: "Mago", nivel: 0, archivo: "/v1772793846/Mago_Reparar_kiwyrl.png" },
    { id: 815, nombre: "Respirar bajo el agua", clase: "Mago", nivel: 3, archivo: "/v1772793847/Mago_Respirar_bajo_el_agua_uvwakf.png" },
    { id: 742, nombre: "Retirada expeditiva", clase: "Mago", nivel: 1, archivo: "/v1772793847/Mago_Retirada_expeditiva_sbllpp.png" },
    { id: 743, nombre: "Risa horrible de Tasha", clase: "Mago", nivel: 1, archivo: "/v1772793848/Mago_Risa_horrible_de_Tasha_emltaf.png" },
    { id: 744, nombre: "Rociada de color", clase: "Mago", nivel: 1, archivo: "/v1772793850/Mago_Rociada_de_color_lm6e8h.png" },
    { id: 911, nombre: "Rociada prismática", clase: "Mago", nivel: 7, archivo: "/v1772793854/Mago_Rociada_prism%C3%A1tica_ssmkke.png" },
    { id: 713, nombre: "Rociada venenosa", clase: "Mago", nivel: 0, archivo: "/v1772793854/Mago_Rociada_venenosa_s0ptlm.png" },
    { id: 714, nombre: "Salpicadura ácida", clase: "Mago", nivel: 0, archivo: "/v1772793855/Mago_Salpicadura_%C3%A1cida_veuxxy.png" },
    { id: 745, nombre: "Salto", clase: "Mago", nivel: 1, archivo: "/v1772793855/Mago_Salto_bvbas8.png" },
    { id: 845, nombre: "Sanctasanctórum privado de Mordenkainen", clase: "Mago", nivel: 4, archivo: "/v1772793856/Mago_Sanctasanct%C3%B3rum_privado_de_Mordenkainen_m13uzd.png" },
    { id: 926, nombre: "Semiplano", clase: "Mago", nivel: 8, archivo: "/v1772793858/Mago_Semiplano_jckbwz.png" },
    { id: 912, nombre: "Símbolo", clase: "Mago", nivel: 7, archivo: "/v1772793859/Mago_S%C3%ADmbolo_kjrrk6.png" },
    { id: 913, nombre: "Simulacro", clase: "Mago", nivel: 7, archivo: "/v1772793859/Mago_Simulacro_frfbct.png" },
    { id: 746, nombre: "Sirviente invisible", clase: "Mago", nivel: 1, archivo: "/v1772793859/Mago_Sirviente_invisible_c84co7.png" },
    { id: 780, nombre: "Sordera/ceguera", clase: "Mago", nivel: 2, archivo: "/v1772793860/Mago_Sordera_ceguera_mgsbd6.png" },
    { id: 781, nombre: "Sugestión", clase: "Mago", nivel: 2, archivo: "/v1772793862/Mago_Sugesti%C3%B3n_en_masa_uurijl.png" },
    { id: 897, nombre: "Sugestión en masa", clase: "Mago", nivel: 6, archivo: "/v1772793863/Mago_Sugesti%C3%B3n_gkmpk7.png" },
    { id: 715, nombre: "Tañido por los muertos", clase: "Mago", nivel: 0, archivo: "/v1772793863/Mago_Ta%C3%B1ido_por_los_muertos_e5cwwn.png" },
    { id: 782, nombre: "Telaraña", clase: "Mago", nivel: 2, archivo: "/v1772793863/Mago_Telara%C3%B1a_qbynki.png" },
    { id: 927, nombre: "Telepatía", clase: "Mago", nivel: 8, archivo: "/v1772793864/Mago_Telepat%C3%ADa_omrpua.png" },
    { id: 876, nombre: "Telequinesis", clase: "Mago", nivel: 5, archivo: "/v1772793866/Mago_Telequinesis_dg4vd8.png" },
    { id: 914, nombre: "Teletransporte", clase: "Mago", nivel: 7, archivo: "/v1772793868/Mago_Teletransporte_rm9hnm.png" },
    { id: 846, nombre: "Tentáculos negros de Evard", clase: "Mago", nivel: 4, archivo: "/v1772793868/Mago_Tent%C3%A1culos_negros_de_Evard_xeaeni.png" },
    { id: 847, nombre: "Terreno alucinatorio", clase: "Mago", nivel: 4, archivo: "/v1772793869/Mago_Terreno_alucinatorio_tewsls.png" },
    { id: 816, nombre: "Terror", clase: "Mago", nivel: 3, archivo: "/v1772793872/Mago_Terror_fvzklv.png" },
    { id: 938, nombre: "Terror abyecto", clase: "Mago", nivel: 9, archivo: "/v1772793869/Mago_Terror_abyecto_dq2yjq.png" },
    { id: 747, nombre: "Texto ilusorio", clase: "Mago", nivel: 1, archivo: "/v1772793872/Mago_Texto_ilusorio_c0jltw.png" },
    { id: 716, nombre: "Toque helado", clase: "Mago", nivel: 0, archivo: "/v1772793872/Mago_Toque_helado_fpyk1y.png" },
    { id: 817, nombre: "Toque vampírico", clase: "Mago", nivel: 3, archivo: "/v1772793872/Mago_Toque_vamp%C3%ADrico_no0ogl.png" },
    { id: 818, nombre: "Tormenta de aguanieve", clase: "Mago", nivel: 3, archivo: "/v1772793873/Mago_Tormenta_de_aguanieve_mtlry3.png" },
    { id: 848, nombre: "Tormenta de hielo", clase: "Mago", nivel: 4, archivo: "/v1772793876/Mago_Tormenta_de_hielo_ddsy7r.png" },
    { id: 939, nombre: "Tormenta de meteoritos", clase: "Mago", nivel: 9, archivo: "/v1772793876/Mago_Tormenta_de_meteoritos_l7nd6e.png" },
    { id: 877, nombre: "Tormenta resplandeciente de Jallarzi", clase: "Mago", nivel: 5, archivo: "/v1772793877/Mago_Tormenta_resplandeciente_de_Jallarzi_v7iaoi.png" },
    { id: 783, nombre: "Trepar cual arácnido", clase: "Mago", nivel: 2, archivo: "/v1772793879/Mago_Trepar_cual_ar%C3%A1cnido_c64q2e.png" },
    { id: 717, nombre: "Tronar", clase: "Mago", nivel: 0, archivo: "/v1772793879/Mago_Tronar_iwhjks.png" },
    { id: 784, nombre: "Truco de la cuerda", clase: "Mago", nivel: 2, archivo: "/v1772793879/Mago_Truco_de_la_cuerda_xlusqt.png" },
    { id: 898, nombre: "Urna mágica", clase: "Mago", nivel: 6, archivo: "/v1772793879/Mago_Urna_m%C3%A1gica_xq37ex.png" },
    { id: 785, nombre: "Ver invisibilidad", clase: "Mago", nivel: 2, archivo: "/v1772793880/Mago_Ver_invisibilidad_yrvdjq.png" },
    { id: 786, nombre: "Vigor arcano", clase: "Mago", nivel: 2, archivo: "/v1772793880/Mago_Vigor_arcano_edj4sp.png" },
    { id: 787, nombre: "Visión en la oscuridad", clase: "Mago", nivel: 2, archivo: "/v1772793880/Mago_Visi%C3%B3n_en_la_oscuridad_mmqzoz.png" },
    { id: 899, nombre: "Visión veraz", clase: "Mago", nivel: 6, archivo: "/v1772793880/Mago_Visi%C3%B3n_veraz_qlx1uv.png" },
    { id: 819, nombre: "Volar", clase: "Mago", nivel: 3, archivo: "/v1772793880/Mago_Volar_n43a4y.png" },
    { id: 748, nombre: "Zancada prodigiosa", clase: "Mago", nivel: 1, archivo: "/v1772793728/Mago_Zancada_prodigiosa_m2vt4l.png" },

    // CONJUROS DE PALADÍN (ORDEN ALFABÉTICO)
    { id: 983, nombre: "Alzar a los muertos", clase: "Paladín", nivel: 5, archivo: "/v1772903607/Paladin_Alzar_a_los_muertos_z6rpdd.png" },
    { id: 967, nombre: "Arma elemental", clase: "Paladín", nivel: 3, archivo: "/v1772903607/Paladin_Arma_elemental_tpqpz1.png" },
    { id: 956, nombre: "Arma mágica", clase: "Paladín", nivel: 2, archivo: "/v1772903609/Paladin_Arma_magica_hwpyqj.png" },
    { id: 977, nombre: "Aura de pureza", clase: "Paladín", nivel: 4, archivo: "/v1772903609/Paladin_Aura_de_pureza_puyb8x.png" },
    { id: 978, nombre: "Aura de vida", clase: "Paladín", nivel: 4, archivo: "/v1772903610/Paladin_Aura_de_vida_cczkfr.png" },
    { id: 968, nombre: "Aura de vitalidad", clase: "Paladín", nivel: 3, archivo: "/v1772903610/Paladin_Aura_de_vitalidad_zufrsu.png" },
    { id: 957, nombre: "Auxilio", clase: "Paladín", nivel: 2, archivo: "/v1772903610/Paladin_Auxilio_ncfbyp.png" },
    { id: 940, nombre: "Bendición", clase: "Paladín", nivel: 1, archivo: "/v1772903611/Paladin_Bendici%C3%B3n_aw59iz.png" },
    { id: 941, nombre: "Castigo abrasador", clase: "Paladín", nivel: 1, archivo: "/v1772903611/Paladin_Castigo_abrasador_hy53aw.png" },
    { id: 979, nombre: "Castigo abrumador", clase: "Paladín", nivel: 4, archivo: "/v1772903612/Paladin_Castigo_abrumador_rkgvrs.png" },
    { id: 942, nombre: "Castigo atronador", clase: "Paladín", nivel: 1, archivo: "/v1772903612/Paladin_Castigo_atronador_ufao7t.png" },
    { id: 958, nombre: "Castigo brillante", clase: "Paladín", nivel: 2, archivo: "/v1772903612/Paladin_Castigo_brillante_kra7wv.png" },
    { id: 969, nombre: "Castigo cegador", clase: "Paladín", nivel: 3, archivo: "/v1772903613/Paladin_Castigo_cegador_eo1mrj.png" },
    { id: 984, nombre: "Castigo desterrador", clase: "Paladín", nivel: 5, archivo: "/v1772903613/Paladin_Castigo_desterrador_gwffab.png" },
    { id: 943, nombre: "Castigo divino", clase: "Paladín", nivel: 1, archivo: "/v1772903614/Paladin_Castigo_divino_qhwvwp.png" },
    { id: 944, nombre: "Castigo furioso", clase: "Paladín", nivel: 1, archivo: "/v1772903614/Paladin_Castigo_furioso_rdvgbn.png" },
    { id: 985, nombre: "Círculo de poder", clase: "Paladín", nivel: 5, archivo: "/v1772903614/Paladin_C%C3%ADrculo_de_poder_dddxti.png" },
    { id: 970, nombre: "Círculo mágico", clase: "Paladín", nivel: 3, archivo: "/v1772903615/Paladin_C%C3%ADrculo_m%C3%A1gico_cvkz4h.png" },
    { id: 971, nombre: "Crear comida y agua", clase: "Paladín", nivel: 3, archivo: "/v1772903615/Paladin_Crear_comida_y_agua_wje75s.png" },
    { id: 945, nombre: "Curar heridas", clase: "Paladín", nivel: 1, archivo: "/v1772903616/Paladin_Curar_heridas_ksfqy1.png" },
    { id: 980, nombre: "Destierro", clase: "Paladín", nivel: 4, archivo: "/v1772903616/Paladin_Destierro_iye3yo.png" },
    { id: 946, nombre: "Detectar el bien y el mal", clase: "Paladín", nivel: 1, archivo: "/v1772903617/Paladin_Detectar_el_bien_y_el_mal_knpxuu.png" },
    { id: 947, nombre: "Detectar magia", clase: "Paladín", nivel: 1, archivo: "/v1772903617/Paladin_Detectar_magia_rmly35.png" },
    { id: 948, nombre: "Detectar venenos y enfermedades", clase: "Paladín", nivel: 1, archivo: "/v1772903617/Paladin_Detectar_venenos_y_enfermedades_llcapb.png" },
    { id: 986, nombre: "Disipar el bien y el mal", clase: "Paladín", nivel: 5, archivo: "/v1772903618/Paladin_Disipar_el_bien_y_el_mal_pq3ljk.png" },
    { id: 972, nombre: "Disipar magia", clase: "Paladín", nivel: 3, archivo: "/v1772903618/Paladin_Disipar_magia_ipfhcp.png" },
    { id: 949, nombre: "Duelo forzado", clase: "Paladín", nivel: 1, archivo: "/v1772903618/Paladin_Duelo_forzado_bkmdjl.png" },
    { id: 959, nombre: "Dulce descanso", clase: "Paladín", nivel: 2, archivo: "/v1772903619/Paladin_Dulce_descanso_r10eso.png" },
    { id: 950, nombre: "Escudo de fe", clase: "Paladín", nivel: 1, archivo: "/v1772903619/Paladin_Escudo_de_fe_hbnq6b.png" },
    { id: 951, nombre: "Favor divino", clase: "Paladín", nivel: 1, archivo: "/v1772903620/Paladin_Favor_divino_gcl70c.png" },
    { id: 987, nombre: "Geas", clase: "Paladín", nivel: 5, archivo: "/v1772903620/Paladin_Geas_r6qjoe.png" },
    { id: 981, nombre: "Guarda contra la muerte", clase: "Paladín", nivel: 4, archivo: "/v1772903620/Paladin_Guarda_contra_la_muerte_j7p4lb.png" },
    { id: 960, nombre: "Hallar corcel", clase: "Paladín", nivel: 2, archivo: "/v1772903621/Paladin_Hallar_corcel_wsqrrn.png" },
    { id: 952, nombre: "Heroísmo", clase: "Paladín", nivel: 1, archivo: "/v1772903621/Paladin_Hero%C3%ADsmo_nxn1gy.png" },
    { id: 988, nombre: "Invocar celestial", clase: "Paladín", nivel: 5, archivo: "/v1772903621/Paladin_Invocar_celestial_h6f924.png" },
    { id: 973, nombre: "Levantar maldición", clase: "Paladín", nivel: 3, archivo: "/v1772903622/Paladin_Levantar_maldici%C3%B3n_pstx2l.png" },
    { id: 982, nombre: "Localizar criatura", clase: "Paladín", nivel: 4, archivo: "/v1772903623/Paladin_Localizar_criatura_ggyuma.png" },
    { id: 961, nombre: "Localizar objeto", clase: "Paladín", nivel: 2, archivo: "/v1772903623/Paladin_Localizar_objeto_gmilcd.png" },
    { id: 974, nombre: "Luz del día", clase: "Paladín", nivel: 3, archivo: "/v1772903623/Paladin_Luz_del_d%C3%ADa_hjkmko.png" },
    { id: 975, nombre: "Manto del cruzado", clase: "Paladín", nivel: 3, archivo: "/v1772903623/Paladin_Manto_del_cruzado_u41m6i.png" },
    { id: 989, nombre: "Ola destructora", clase: "Paladín", nivel: 5, archivo: "/v1772903624/Paladin_Ola_destructora_cngaoy.png" },
    { id: 953, nombre: "Orden imperiosa", clase: "Paladín", nivel: 1, archivo: "/v1772903624/Paladin_Orden_imperiosa_z8ppkv.png" },
    { id: 962, nombre: "Plegaria de curación", clase: "Paladín", nivel: 2, archivo: "/v1772903625/Paladin_Plegaria_de_curaci%C3%B3n_oosll2.png" },
    { id: 954, nombre: "Protección contra el bien y el mal", clase: "Paladín", nivel: 1, archivo: "/v1772903603/Paladin_Protecci%C3%B3n_contra_el_bien_y_el_mal_swnrv9.png" },
    { id: 963, nombre: "Protección contra veneno", clase: "Paladín", nivel: 2, archivo: "/v1772903604/Paladin_Protecci%C3%B3n_contra_veneno_hcconw.png" },
    { id: 955, nombre: "Purificar comida y bebida", clase: "Paladín", nivel: 1, archivo: "/v1772903604/Paladin_Purificar_comida_y_bebida_pjybhw.png" },
    { id: 990, nombre: "Restablecimiento mayor", clase: "Paladín", nivel: 5, archivo: "/v1772903605/Paladin_Restablecimiento_mayor_ehtd2k.png" },
    { id: 964, nombre: "Restablecimiento menor", clase: "Paladín", nivel: 2, archivo: "/v1772903605/Paladin_Restablecimiento_menor_vp9jk5.png" },
    { id: 976, nombre: "Revivir", clase: "Paladín", nivel: 3, archivo: "/v1772903605/Paladin_Revivir_ob8pki.png" },
    { id: 965, nombre: "Vínculo protector", clase: "Paladín", nivel: 2, archivo: "/v1772903606/Paladin_V%C3%ADnculo_protector_bawnei.png" },
    { id: 966, nombre: "Zona de la verdad", clase: "Paladín", nivel: 2, archivo: "/v1772903606/Paladin_Zona_de_la_verdad_tiyv5i.png" },

];

// ==========================================
// 2. ESTADO GLOBAL DEL PERSONAJE
// ==========================================

let personaje = {
    nombre: "",
    clase: "Mago",
    pb: 2,
    ca: 10,
    hpMax: 10,
    hpActual: 10,
    atributos: {
        Fuerza: 10, Destreza: 10, Constitución: 10,
        Inteligencia: 10, Sabiduría: 10, Carisma: 10
    },
    habilidadesProficientes: [],
    modificadoresHabilidades: {},
    atributoMagico: "Inteligencia",
    salvacionesManuales: [],
    favoritos: JSON.parse(localStorage.getItem('hechizosFavoritos')) || [],
    equipo: []
};

// Variables de control de la Interfaz (No se guardan en el JSON)
let listaActual = [];
let indiceActual = 0;
let modalBS;
let hechizosPorPagina = 20;
let cantidadMostrada = 20;
let filtroClaseHechizos = 'todos'; // UNIFICADO: Solo usaremos esta para el Grimorio

// ==========================================
// 3. NAVEGACIÓN SPA
// ==========================================

function mostrarSeccion(seccion) {
    const secciones = ['setup', 'roller', 'actions', 'spellbook'];

    secciones.forEach(s => {
        document.getElementById(`${s}-section`)?.classList.toggle('d-none', s !== seccion);
        document.getElementById(`btn-nav-${s}`)?.classList.toggle('active', s === seccion);
    });

    // ACTUALIZACIÓN: Al cambiar de sección, refrescamos el tema visual
    actualizarTemaWeb();

    if (seccion === 'actions') actualizarPestañaAcciones();
    if (seccion === 'roller') actualizarUI();
}

// ==========================================
// 4. LÓGICA DEL ROLLER (ATRIBUTOS Y HABILIDADES)
// ==========================================

const acordeonesAbiertos = { setup: {}, roller: {} }; // Mantiene abiertos los desplegables al actualizar

function actualizarUI() {
    const rpb = document.getElementById('roller-pb');
    if (rpb) rpb.innerText = '+' + (personaje.pb || 2);

    generarAmbosPanelesAtributos();
    generarPanelSlotsSetup(); // Sincroniza los slots al actualizar
    actualizarPestañaAcciones();
}

function generarPanelSlotsSetup() {
    const container = document.getElementById('setup-slots-grid');
    if (!container) return;

    if (!personaje.slotsMax) personaje.slotsMax = {};

    let html = '';
    for (let i = 1; i <= 9; i++) {
        const max = personaje.slotsMax[i] || 0;
        html += `
        <div class="text-center bg-dark p-2 rounded border border-secondary shadow-sm" style="width: 75px;">
            <label class="form-label small text-info fw-bold mb-1 d-block" style="font-size: 0.75rem;">Nivel ${i}</label>
            <input type="number" class="form-control form-control-sm text-center fw-bold text-gold bg-black border-dark" 
                value="${max}" min="0" max="10" onchange="setSlotMax(${i}, this.value)">
        </div>`;
    }
    container.innerHTML = html;
}

function generarAmbosPanelesAtributos() {
    generarPanelAtributos('setup');
    generarPanelAtributos('roller');
}

function generarPanelAtributos(modo) {
    const isSetup = modo === 'setup';
    const gridId = isSetup ? 'setup-stats-grid' : 'stats-grid';
    const statsGrid = document.getElementById(gridId);
    if (!statsGrid) return;
    statsGrid.innerHTML = '';

    const atributos = ["Fuerza", "Destreza", "Constitución", "Inteligencia", "Sabiduría", "Carisma"];
    const salvacionesClase = competenciasClase[personaje.clase] || [];

    atributos.forEach(attr => {
        const esProficienteSalva = salvacionesClase.includes(attr) || (personaje.salvacionesManuales && personaje.salvacionesManuales.includes(attr));
        const habilidades = mapeoHabilidades[attr] || [];
        const tieneHabilidades = habilidades.length > 0;

        const cardAtributo = document.createElement('div');
        cardAtributo.className = 'card-atributo animacion-magica';

        // --- DIFERENCIA 1: Checkbox Editable vs Escudo Fijo ---
        let htmlSalvacion = isSetup
            ? `<input type="checkbox" class="form-check-input check-prof-hab m-0" 
                   id="check-save-${modo}-${attr}" ${esProficienteSalva ? 'checked' : ''}
                   onclick="event.stopPropagation(); toggleSalvacion('${attr}')">`
            : `<div class="text-center" style="width: 25px; font-size: 1.1rem;">${esProficienteSalva ? '🛡️' : ''}</div>`;

        // --- DIFERENCIA 2: Input de número vs Etiqueta Visual (Readonly) ---
        // Cálculo del modificador basado en D&D 5e
        const valorAttr = personaje.atributos[attr] || 10;
        const modAttr = Math.floor((valorAttr - 10) / 2);
        const modTexto = modAttr >= 0 ? '+' + modAttr : modAttr;

        // --- DIFERENCIA 2: Input de Puntos + Modificador fijo (Setup) vs Solo Modificador (Roller) ---
        let htmlValorAttr = isSetup
            ? `<div class="d-flex align-items-center gap-1">
                   <input type="number" value="${valorAttr}" min="1" max="30"
                       onchange="personaje.atributos['${attr}'] = parseInt(this.value) || 10; actualizarUI();" 
                       class="form-control form-control-sm text-center bg-dark text-light border-secondary p-0"
                       style="width: 42px; height: 32px; font-weight: bold; font-size: 0.95rem;" title="Puntuación base">
                   <div class="badge bg-black border border-secondary text-gold d-flex align-items-center justify-content-center shadow-sm" 
                       style="width: 35px; height: 32px; font-size: 0.9rem;" title="Modificador">${modTexto}</div>
               </div>`
            : `<div class="badge bg-dark border border-secondary text-gold d-flex align-items-center justify-content-center" 
                   style="width: 45px; height: 32px; font-size: 1rem;">${modTexto}</div>`;

        // --- DIFERENCIA 3: Botón de tirada (Solo en el Roller) ---
        let btnDadoAttr = isSetup ? '' : `<button class="btn btn-sm btn-primary py-1 px-2 btn-dice-large" onclick="event.stopPropagation(); lanzarD20('${attr}')">🎲</button>`;

        let htmlHabilidades = habilidades.map(hab => {
            const modExtra = (personaje.modificadoresHabilidades && personaje.modificadoresHabilidades[hab]) || 0;
            const esProfHab = personaje.habilidadesProficientes.includes(hab);

            let checkHab = isSetup
                ? `<input type="checkbox" class="form-check-input check-prof-hab m-0" 
                       id="check-${modo}-${hab}" ${esProfHab ? 'checked' : ''}
                       onchange="toggleCompetenciaHabilidad('${hab}')" style="width:16px; height:16px;">`
                : `<div style="width:12px; height:12px; display:inline-block; border-radius:50%; border:2px solid var(--dnd-gold); background-color:${esProfHab ? 'var(--dnd-gold)' : 'transparent'}"></div>`;

            let inputMod = isSetup
                ? `<input type="number" value="${modExtra}" 
                       class="form-control form-control-sm bg-dark text-gold border-secondary text-center px-1" 
                       style="width: 45px; height: 28px; font-weight: bold; font-size: 0.85rem;"
                       onchange="personaje.modificadoresHabilidades['${hab}'] = parseInt(this.value) || 0; actualizarUI();">`
                : `<div class="badge bg-dark border border-secondary text-gold d-flex align-items-center justify-content-center" 
                       style="width: 35px; height: 25px; font-size: 0.85rem;">${modExtra >= 0 ? '+' + modExtra : modExtra}</div>`;

            let btnDadoHab = isSetup ? '' : `<button class="btn btn-sm p-0 px-1 text-gold" onclick="event.stopPropagation(); lanzarHabilidad('${hab}', '${attr}')" style="font-size: 1.2rem;">🎲</button>`;

            return `
            <div class="d-flex justify-content-between align-items-center py-2 border-bottom border-dark border-opacity-50">
                <div class="d-flex align-items-center gap-2">
                    ${checkHab}
                    <label class="form-check-label m-0" style="font-size: 0.8rem; color: ${esProfHab && !isSetup ? 'var(--dnd-gold)' : '#e0e0e0'}; font-weight: ${esProfHab && !isSetup ? 'bold' : 'normal'};" for="check-${modo}-${hab}">${hab}</label>
                </div>
                <div class="d-flex align-items-center gap-2">
                    ${inputMod}
                    ${btnDadoHab}
                </div>
            </div>`;
        }).join('');

        const isOpen = acordeonesAbiertos[modo] && acordeonesAbiertos[modo][attr];
        const altura = isOpen ? '500px' : '0px';
        const giro = isOpen ? 'rotate(90deg)' : 'rotate(0deg)';

        cardAtributo.innerHTML = `
            <div class="bg-secondary rounded p-2 px-3 shadow-sm ${isSetup ? '' : 'border-left-clase'}">
                <div class="d-flex justify-content-between align-items-center" style="min-height: 45px;">
                    <div class="d-flex align-items-center flex-grow-1" onclick="toggleAcordeon('${modo}', '${attr}')" style="cursor:pointer">
                        <div style="width: 30px;" class="text-center d-flex justify-content-center align-items-center me-1">
                            ${htmlSalvacion}
                        </div>
                        <span class="fw-bold text-uppercase small me-1" style="letter-spacing: 0.5px;">${attr}</span>
                        <div style="width: 20px;" class="text-gold small text-center" id="icon-${modo}-${attr}" style="transform: ${giro}; transition: transform 0.3s;">
                            ${tieneHabilidades ? '▶' : ''}
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-3">
                        ${htmlValorAttr}
                        ${btnDadoAttr}
                    </div>
                </div>
                <div id="skills-${modo}-${attr}" class="skills-accordion overflow-hidden" style="max-height: ${altura}; transition: max-height 0.3s ease-out;">
                    <div class="pt-2 mt-1 border-top border-dark border-opacity-50">
                        ${htmlHabilidades}
                    </div>
                </div>
            </div>`;
        statsGrid.appendChild(cardAtributo);
    });
}

function toggleAcordeon(modo, attr) {
    const content = document.getElementById(`skills-${modo}-${attr}`);
    const icon = document.getElementById(`icon-${modo}-${attr}`);
    if (!content) return;

    const isClosed = content.style.maxHeight === "0px" || content.style.maxHeight === "";
    if (isClosed) {
        content.style.maxHeight = "500px";
        if (icon) icon.style.transform = "rotate(90deg)";
        if (!acordeonesAbiertos[modo]) acordeonesAbiertos[modo] = {};
        acordeonesAbiertos[modo][attr] = true;
    } else {
        content.style.maxHeight = "0px";
        if (icon) icon.style.transform = "rotate(0deg)";
        if (!acordeonesAbiertos[modo]) acordeonesAbiertos[modo] = {};
        acordeonesAbiertos[modo][attr] = false;
    }
}

function toggleCompetenciaHabilidad(hab) {
    const index = personaje.habilidadesProficientes.indexOf(hab);
    if (index > -1) personaje.habilidadesProficientes.splice(index, 1);
    else personaje.habilidadesProficientes.push(hab);
    actualizarUI();
}

function toggleSalvacion(attr) {
    if (!personaje.salvacionesManuales) personaje.salvacionesManuales = [];
    const index = personaje.salvacionesManuales.indexOf(attr);
    if (index > -1) personaje.salvacionesManuales.splice(index, 1);
    else personaje.salvacionesManuales.push(attr);
    actualizarUI();
}
// Motores de Tirada
// Motores de Tirada
function lanzarD20(attr) {
    const puntuacion = personaje.atributos[attr] || 10;
    const mod = Math.floor((puntuacion - 10) / 2); // Fórmula D&D

    // Verificamos si es proficiente por clase o por salvación manual
    const esProficiente = (competenciasClase[personaje.clase] && competenciasClase[personaje.clase].includes(attr)) ||
        (personaje.salvacionesManuales && personaje.salvacionesManuales.includes(attr));
    const pb = esProficiente ? personaje.pb : 0;

    ejecutarTirada(
        total => total + mod + pb,
        `Salvación ${attr}`,
        `${mod} (Mod) + ${pb} (PB)`
    );
}

function lanzarHabilidad(hab, attrPadre) {
    const puntuacion = personaje.atributos[attrPadre] || 10;
    const modAttr = Math.floor((puntuacion - 10) / 2); // Fórmula D&D

    const esProficiente = personaje.habilidadesProficientes.includes(hab);
    const pb = esProficiente ? personaje.pb : 0;

    const modExtra = (personaje.modificadoresHabilidades && personaje.modificadoresHabilidades[hab]) || 0;

    ejecutarTirada(
        total => total + modAttr + pb + modExtra,
        hab,
        `${modAttr} (${attrPadre}) + ${pb} (PB) + ${modExtra} (Extra)`
    );
}

function ejecutarTirada(calculoTotal, titulo, infoExtra) {
    const resultDivs = [document.getElementById('dice-result'), document.getElementById('dice-result-actions')];
    const logs = [document.getElementById('roll-log'), document.getElementById('roll-log-actions')];

    // Leemos los botones de ventaja de ambas pestañas
    const checkAdv = document.getElementById('check-advantage')?.checked || document.getElementById('check-adv-actions')?.checked;
    const checkDis = document.getElementById('check-disadvantage')?.checked || document.getElementById('check-dis-actions')?.checked;

    let d1 = Math.floor(Math.random() * 20) + 1;
    let d2 = Math.floor(Math.random() * 20) + 1;
    let dFinal = d1;
    let textoDados = `${d1}`;

    if (checkAdv) { dFinal = Math.max(d1, d2); textoDados = `Mayor de (${d1}, ${d2})`; }
    else if (checkDis) { dFinal = Math.min(d1, d2); textoDados = `Menor de (${d1}, ${d2})`; }

    const total = calculoTotal(dFinal);

    resultDivs.forEach(div => {
        if (div) {
            div.innerText = total;
            div.style.color = dFinal === 20 ? "#28a745" : (dFinal === 1 ? "#dc3545" : "var(--dnd-gold)");
        }
    });

    logs.forEach(log => {
        if (log) {
            const entrada = document.createElement('div');
            entrada.className = "border-bottom border-secondary py-2 animacion-magica";
            entrada.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <span class="text-gold fw-bold text-uppercase" style="font-size: 0.8rem;">${titulo}</span>
                    <span class="badge bg-dark border border-gold" style="font-size: 1rem;">${total}</span>
                </div>
                <div class="small text-muted mt-1" style="font-size: 0.75rem;">
                    Dado: ${textoDados} + ${infoExtra}
                </div>
            `;
            log.prepend(entrada);
        }
    });
}

function limpiarLogTiradas() {
    const logs = [document.getElementById('roll-log'), document.getElementById('roll-log-actions')];
    const results = [document.getElementById('dice-result'), document.getElementById('dice-result-actions')];

    logs.forEach(log => { if (log) log.innerHTML = '<p class="text-muted small text-center mt-2">El historial de tiradas aparecerá aquí...</p>'; });
    results.forEach(res => { if (res) { res.innerText = '--'; res.style.color = 'var(--dnd-gold)'; } });
}

// ==========================================
// 5. ACCIONES Y CONEXIÓN CON GRIMORIO
// ==========================================

function actualizarPestañaAcciones() {
    const contenedorAtaques = document.getElementById('lista-equipo');
    const panelConjuros = document.getElementById('panel-conjuros-contenido');

    // 1. Actualizar CA y HP (Igual que antes)
    const displayCa = document.getElementById('display-ca');
    if (displayCa) displayCa.innerText = `🛡️ ${personaje.ca || 10}`;
    const displayHp = document.getElementById('display-hp');
    if (displayHp) {
        displayHp.innerText = `${personaje.hpActual} / ${personaje.hpMax}`;
        displayHp.style.color = (personaje.hpActual <= personaje.hpMax / 4) ? "#ff0000" : "var(--dnd-bright-red)";
    }

    // 2. Renderizar Ataques (Igual que antes)
    if (contenedorAtaques) {
        contenedorAtaques.innerHTML = personaje.equipo.length ? '' : '<p class="text-muted small text-center mt-3">Sin armas equipadas.</p>';
        personaje.equipo.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'card bg-dark border-secondary p-3 mb-3 shadow animacion-magica';
            const attrValor = personaje.atributos[item.atributo || "Fuerza"] || 10;
            const modAttr = Math.floor((attrValor - 10) / 2);
            const modAtk = modAttr + (item.esProficiente !== false ? parseInt(personaje.pb || 2) : 0);
            const modDanio = modAttr + (parseInt(item.modDanio) || 0);

            const modAtkStr = modAtk >= 0 ? `+${modAtk}` : `${modAtk}`;
            const modDanioStr = modDanio >= 0 ? `+${modDanio}` : `${modDanio}`;
            const dPrinc = item.dado1 || item.daño || "1";

            let botonesDaño = `<button class="btn btn-sm btn-danger fw-bold shadow-sm" onclick="lanzarDaño(${index}, false)">Daño (${dPrinc}${modDanioStr}) 🩸</button>`;
            if (item.esVersatil && item.dado2 && item.dado2 !== "-") {
                botonesDaño += `<button class="btn btn-sm btn-outline-danger fw-bold shadow-sm ms-2" onclick="lanzarDaño(${index}, true)">2 Manos (${item.dado2}${modDanioStr}) 🩸</button>`;
            }

            const detalles = [];
            if (item.alcance) detalles.push(`Alcance: ${item.alcance}`);
            if (item.tipoDaño) detalles.push(item.tipoDaño);
            if (item.notas) detalles.push(`*${item.notas}*`);

            div.innerHTML = `
                <div class="d-flex justify-content-between align-items-start mb-1">
                    <h4 class="h6 text-gold mb-0 text-uppercase fw-bold">${item.nombre}</h4>
                    <span class="badge bg-black border border-secondary text-info shadow-sm py-1 px-2">ATK: ${modAtkStr}</span>
                </div>
                ${detalles.length > 0 ? `<small class="text-muted d-block mb-3" style="font-size: 0.8rem;">${detalles.join(' | ')}</small>` : ''}
                <div class="d-flex flex-wrap gap-2 border-top border-secondary border-opacity-50 pt-3">
                    <button class="btn btn-sm btn-primary fw-bold shadow-sm" onclick="lanzarAtaque(${index})">Atacar 🎲</button>
                    ${botonesDaño}
                </div>`;
            contenedorAtaques.appendChild(div);
        });
    }

    // 3. Renderizar Grimorio y Slots
    if (panelConjuros) {

        // --- NUEVO: CABECERA DE ESTADÍSTICAS MÁGICAS ---
        const attrMagico = personaje.atributoMagico || "Inteligencia";
        const valAttrMagico = personaje.atributos[attrMagico] || 10;
        const modMagico = Math.floor((valAttrMagico - 10) / 2);
        const pbMagico = parseInt(personaje.pb || 2);

        const modAtaqueConjuro = modMagico + pbMagico;
        const cdSalvacion = 8 + modMagico + pbMagico;
        const modAtaqueStr = modAtaqueConjuro >= 0 ? `+${modAtaqueConjuro}` : `${modAtaqueConjuro}`;

        const statsMagicosHtml = `
            <div class="d-flex flex-wrap justify-content-center align-items-center gap-4 mb-4 p-3 bg-black rounded border border-info shadow-sm animacion-magica">
                <div class="text-center">
                    <span class="d-block small text-muted fw-bold mb-1" style="font-size:0.7rem; letter-spacing:1px;">ATAQUE DE CONJURO</span>
                    <button class="btn btn-sm btn-outline-info fw-bold fs-6 px-4" onclick="lanzarAtaqueConjuro()">ATK ${modAtaqueStr} 🎲</button>
                </div>
                <div class="border-start border-secondary h-100 d-none d-sm-block" style="min-height: 40px;"></div>
                <div class="text-center">
                    <span class="d-block small text-muted fw-bold mb-1" style="font-size:0.7rem; letter-spacing:1px;">CD DE SALVACIÓN</span>
                    <button class="btn btn-sm btn-outline-warning fw-bold fs-6 px-4" onclick="anunciarCDConjuro()">CD ${cdSalvacion} 📢</button>
                </div>
            </div>
        `;

        panelConjuros.innerHTML = statsMagicosHtml; // Insertamos la cabecera en lugar de vaciarlo a ''
        // -----------------------------------------------

        const preparados = hechizos.filter(h => personaje.favoritos.includes(h.id));

        // Agrupar conjuros por nivel
        const porNivel = {};
        preparados.forEach(h => {
            if (!porNivel[h.nivel]) porNivel[h.nivel] = [];
            porNivel[h.nivel].push(h);
        });

        if (!personaje.slotsMax) personaje.slotsMax = { 1: 0 };
        if (!personaje.slotsActuales) personaje.slotsActuales = { 1: 0 };

        // Renderizar del Nivel 0 al 9
        for (let i = 0; i <= 9; i++) {
            const tieneConjuros = porNivel[i] && porNivel[i].length > 0;
            const tieneSlotsDefinidos = (personaje.slotsMax[i] || 0) > 0;

            if (tieneConjuros || tieneSlotsDefinidos || (i === 0 && tieneConjuros)) {
                if (i === 0 && !tieneConjuros) continue;

                const divNivel = document.createElement('div');
                divNivel.className = 'mb-4 bg-black p-3 rounded border border-secondary shadow-sm';

                // HEADER DEL NIVEL CON GESTOR DE SLOTS (LIMPIO)
                let headerHtml = `<h4 class="h6 text-gold border-bottom border-secondary pb-2 mb-3 text-uppercase">`;
                if (i === 0) {
                    headerHtml += `Trucos (Nivel 0)</h4>`;
                } else {
                    const maxSlots = personaje.slotsMax[i] || 0;
                    const actual = personaje.slotsActuales[i] || 0;
                    headerHtml += `
                        <div class="d-flex justify-content-between align-items-center">
                            <span>Nivel ${i}</span>
                            <div class="d-flex align-items-center gap-2" style="font-size: 0.85rem;">
                                <span class="text-muted small d-none d-sm-inline">Slots:</span>
                                <button class="btn btn-sm btn-outline-info py-0 px-2 fw-bold" onclick="cambiarSlot(${i}, -1)">-</button>
                                <span class="text-light fw-bold mx-1 text-center" style="min-width: 45px;">
                                    <span class="fs-5 text-info">${actual}</span> <span class="text-muted">/ ${maxSlots}</span>
                                </span>
                                <button class="btn btn-sm btn-outline-info py-0 px-2 fw-bold" onclick="cambiarSlot(${i}, 1)">+</button>
                            </div>
                        </div></h4>`;
                }

                // GRID DE CONJUROS
                let gridHtml = `<div class="row row-cols-2 g-2">`;
                if (tieneConjuros) {
                    porNivel[i].forEach(h => {
                        gridHtml += `
                            <div class="col">
                                <div class="card bg-dark border-info p-2 h-100 shadow-sm animacion-magica" style="cursor:pointer" onclick="abrirModalPorId(${h.id})">
                                    <div class="small text-info fw-bold text-uppercase text-center" style="font-size: 0.75rem; letter-spacing:0.5px;">${h.nombre}</div>
                                </div>
                            </div>`;
                    });
                } else {
                    gridHtml += `<div class="col-12"><p class="text-muted small mb-0 text-center">Sin conjuros preparados de nivel ${i}.</p></div>`;
                }
                gridHtml += `</div>`;

                divNivel.innerHTML = headerHtml + gridHtml;
                panelConjuros.appendChild(divNivel);
            }
        }
    }
}

// Funciones de Vida
function cambiarHP(cantidad) {
    personaje.hpActual = Math.min(personaje.hpMax, Math.max(0, personaje.hpActual + cantidad));
    actualizarPestañaAcciones();
}

function siHpSuperaMaximo() {
    if (personaje.hpActual > personaje.hpMax) {
        personaje.hpActual = personaje.hpMax;
    }
}

// ==========================================
// FUNCIONES DE CONTROL DE SLOTS Y PESTAÑAS (NUEVO)
// ==========================================

function toggleCombateTab(tab) {
    const pAtaques = document.getElementById('panel-ataques');
    const pConjuros = document.getElementById('panel-conjuros');
    const btnAtaques = document.getElementById('btn-tab-ataques');
    const btnConjuros = document.getElementById('btn-tab-conjuros');

    if (tab === 'ataques') {
        pAtaques.classList.remove('d-none'); pConjuros.classList.add('d-none');
        btnAtaques.classList.add('active'); btnConjuros.classList.remove('active');
    } else {
        pAtaques.classList.add('d-none'); pConjuros.classList.remove('d-none');
        btnAtaques.classList.remove('active'); btnConjuros.classList.add('active');
    }
}

function cambiarSlot(nivel, cantidad) {
    const max = personaje.slotsMax[nivel] || 0;
    let actual = personaje.slotsActuales[nivel] || 0;
    personaje.slotsActuales[nivel] = Math.min(max, Math.max(0, actual + cantidad));
    actualizarPestañaAcciones();
}

function setSlotMax(nivel, valor) {
    if (!personaje.slotsMax) personaje.slotsMax = {};
    if (!personaje.slotsActuales) personaje.slotsActuales = {};

    const max = Math.max(0, parseInt(valor) || 0);
    personaje.slotsMax[nivel] = max;

    // Si al bajar el máximo, los actuales son mayores, los recortamos
    if ((personaje.slotsActuales[nivel] || 0) > max) {
        personaje.slotsActuales[nivel] = max;
    }

    actualizarUI();
    actualizarPestañaAcciones();
}

// Puedes borrar por completo la función añadirNivelSlot()

// Funciones de Tiradas de Combate
function lanzarAtaque(index) {
    const item = personaje.equipo[index];
    const atributo = item.atributo || "Fuerza";
    const puntuacion = personaje.atributos[atributo] || 10;
    const mod = Math.floor((puntuacion - 10) / 2);

    const pb = (item.esProficiente !== false) ? parseInt(personaje.pb || 2) : 0;
    const modTexto = pb > 0 ? `${mod} (${atributo}) + ${pb} (PB)` : `${mod} (${atributo})`;

    // Usamos la función global de d20 que ya gestiona ventajas
    ejecutarTirada(total => total + mod + pb, `Ataque: ${item.nombre}`, modTexto);
}

function lanzarDaño(index, esDosManos) {
    const item = personaje.equipo[index];
    const dadoStr = esDosManos ? item.dado2 : (item.dado1 || item.daño || "1");
    const atributo = item.atributo || "Fuerza";
    const puntuacion = personaje.atributos[atributo] || 10;
    const modAttr = Math.floor((puntuacion - 10) / 2);
    const modExtra = parseInt(item.modDanio) || 0;
    const modTotal = modAttr + modExtra;

    let cantDados = 1;
    let carasDado = 0;

    // Detectar formato (ej: "2d6", "1d8", o "1" plano de la cerbatana)
    if (dadoStr.includes('d')) {
        const partes = dadoStr.split('d');
        cantDados = parseInt(partes[0]) || 1;
        carasDado = parseInt(partes[1]) || 20;
    } else {
        cantDados = parseInt(dadoStr) || 1;
        carasDado = 0; // Indicador de daño plano
    }

    const tipoStr = item.tipoDaño ? ` [${item.tipoDaño}]` : "";
    const titulo = `${item.nombre}${tipoStr}`;
    const infoMod = modExtra !== 0 ? `Mod ${atributo}: ${modAttr} | Extra: ${modExtra}` : `Mod ${atributo}: ${modAttr}`;

    ejecutarTiradaDaño(cantDados, carasDado, modTotal, titulo, infoMod);
}

// Motor Especial para Daño (No usa d20 ni ventaja)
function ejecutarTiradaDaño(cantDados, carasDado, modTotal, titulo, infoExtra) {
    const resultDivs = [document.getElementById('dice-result'), document.getElementById('dice-result-actions')];
    const logs = [document.getElementById('roll-log'), document.getElementById('roll-log-actions')];

    let sumaDados = 0; let textoDados = [];

    if (carasDado > 0) {
        for (let i = 0; i < cantDados; i++) {
            const tirada = Math.floor(Math.random() * carasDado) + 1;
            sumaDados += tirada; textoDados.push(tirada);
        }
    } else { sumaDados = cantDados; textoDados.push(cantDados); }

    const totalFinal = Math.max(0, sumaDados + modTotal);

    resultDivs.forEach(div => {
        if (div) { div.innerText = totalFinal; div.style.color = "var(--dnd-bright-red)"; }
    });

    logs.forEach(log => {
        if (log) {
            const carasStr = carasDado > 0 ? `d${carasDado}` : "Plano";
            const tiradasStr = carasDado > 0 ? `(${textoDados.join(' + ')})` : `${sumaDados}`;
            const modStr = modTotal >= 0 ? `+ ${modTotal}` : `- ${Math.abs(modTotal)}`;

            const entrada = document.createElement('div');
            entrada.className = "border-bottom border-danger border-opacity-50 py-2 animacion-magica";
            entrada.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <span class="text-danger fw-bold text-uppercase" style="font-size: 0.8rem;">Daño: ${titulo}</span>
                    <span class="badge bg-dark border border-danger text-danger" style="font-size: 1rem;">${totalFinal}</span>
                </div>
                <div class="small text-muted mt-1" style="font-size: 0.75rem;">
                    [${cantDados}${carasStr}] ${tiradasStr} ${modStr} <br>${infoExtra}
                </div>
            `;
            log.prepend(entrada);
        }
    });
}

// Funciones de Magia
function lanzarAtaqueConjuro() {
    const attr = personaje.atributoMagico || "Inteligencia";
    const valAttr = personaje.atributos[attr] || 10;
    const mod = Math.floor((valAttr - 10) / 2);
    const pb = parseInt(personaje.pb || 2);

    // Usa la función de tirada principal (con ventajas y desventajas sincronizadas)
    ejecutarTirada(total => total + mod + pb, `Ataque Mágico`, `Mod ${attr}: ${mod} + PB: ${pb}`);
}

function anunciarCDConjuro() {
    const attr = personaje.atributoMagico || "Inteligencia";
    const valAttr = personaje.atributos[attr] || 10;
    const mod = Math.floor((valAttr - 10) / 2);
    const pb = parseInt(personaje.pb || 2);
    const cd = 8 + mod + pb;

    // Imprimimos la alerta directamente en ambos historiales
    const logs = [document.getElementById('roll-log'), document.getElementById('roll-log-actions')];
    logs.forEach(log => {
        if (log) {
            const entrada = document.createElement('div');
            entrada.className = "border-bottom border-warning border-opacity-50 py-2 animacion-magica";
            entrada.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <span class="text-warning fw-bold text-uppercase" style="font-size: 0.8rem;">📢 CD de Salvación</span>
                    <span class="badge bg-dark border border-warning text-warning fs-6 px-2">${cd}</span>
                </div>
                <div class="small text-muted mt-1" style="font-size: 0.75rem;">
                    Exiges superación de CD ${cd} <br>
                    [Base: 8 + Mod ${attr}: ${mod} + PB: ${pb}]
                </div>
            `;
            log.prepend(entrada);
        }
    });
}

// ==========================================
// 6. GESTIÓN DE DATOS (JSON) Y EQUIPO
// ==========================================

// --- FUNCIONES DE GUARDADO Y CARGA (Intactas) ---
function descargarPersonaje() {
    const inputNombre = document.getElementById('char-name');
    if (inputNombre) personaje.nombre = inputNombre.value;
    const inputPb = document.getElementById('setup-pb');
    if (inputPb) personaje.pb = parseInt(inputPb.value) || 2;
    const inputCa = document.getElementById('setup-ca');
    if (inputCa) personaje.ca = parseInt(inputCa.value) || 10;
    const inputHpMax = document.getElementById('setup-hp-max');
    if (inputHpMax) personaje.hpMax = parseInt(inputHpMax.value) || 10;

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(personaje));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `${personaje.nombre || 'personaje'}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    document.body.removeChild(dlAnchor);
}

function cargarPersonaje(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const datosCargados = JSON.parse(e.target.result);

            personaje = {
                nombre: "", clase: "Mago", pb: 2, ca: 10, hpMax: 10, hpActual: 10, inspiracion: false,
                ...datosCargados
            };

            personaje.atributos = { ...{ Fuerza: 10, Destreza: 10, Constitución: 10, Inteligencia: 10, Sabiduría: 10, Carisma: 10 }, ...(datosCargados.atributos || {}) };
            personaje.habilidadesProficientes = datosCargados.habilidadesProficientes || [];
            personaje.modificadoresHabilidades = datosCargados.modificadoresHabilidades || {};
            personaje.salvacionesManuales = datosCargados.salvacionesManuales || [];
            personaje.equipo = datosCargados.equipo || [];
            personaje.favoritos = datosCargados.favoritos || [];
            personaje.slotsMax = datosCargados.slotsMax || { 1: 0 };
            personaje.atributoMagico = datosCargados.atributoMagico || "Inteligencia";
            personaje.slotsActuales = datosCargados.slotsActuales || { 1: 0 };

            document.getElementById('char-name').value = personaje.nombre;
            document.getElementById('setup-ca').value = personaje.ca;
            document.getElementById('setup-pb').value = personaje.pb;
            document.getElementById('setup-hp-max').value = personaje.hpMax;
            const selectMagico = document.getElementById('setup-attr-magico');
            if (selectMagico) selectMagico.value = personaje.atributoMagico;


            localStorage.setItem('hechizosFavoritos', JSON.stringify(personaje.favoritos));

            document.querySelectorAll('.btn-clase-roller').forEach(b => {
                b.classList.toggle('active', b.dataset.clase === personaje.clase);
            });

            actualizarTemaWeb();
            actualizarUI();
            actualizarListaGestionEquipo();
            actualizarIndicadorInspiracion();
            renderizar();

            alert("¡Héroe cargado con éxito! ⚔️");
        } catch (error) {
            alert("Hubo un error al leer el archivo JSON.");
            console.error(error);
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// --- FUNCIONES DE INSPIRACIÓN (Intactas) ---
function actualizarIndicadorInspiracion() {
    const avisos = [document.getElementById('aviso-inspiracion'), document.getElementById('aviso-inspiracion-actions')];
    avisos.forEach(aviso => { if (aviso) aviso.classList.toggle('d-none', !personaje.inspiracion); });

    const checks = [document.getElementById('check-inspiracion'), document.getElementById('check-inspiracion-actions')];
    checks.forEach(check => { if (check) check.checked = personaje.inspiracion; });
}

// --- NUEVAS FUNCIONES DE EQUIPO ---
function cargarOpcionesArmasPredefinidas() {
    const select = document.getElementById('select-armas-predefinidas');
    if (!select) return;
    select.innerHTML = '<option value="" disabled selected>Selecciona un arma...</option>'; // Limpiar antes de cargar
    listaArmasPredefinidas.forEach((arma, index) => {
        const option = document.createElement('option');
        option.value = index;
        const dSecTexto = arma.esVersatil ? ` / ${arma.dado2}` : "";
        option.text = `${arma.nombre} (${arma.dado1}${dSecTexto} - ${arma.tipoDaño})`;
        select.add(option);
    });
}

function toggleSubmenúEquipo(opción) {
    const contenedorElegir = document.getElementById('contenedor-elegir-arma');
    const contenedorCrear = document.getElementById('contenedor-crear-arma');
    const btnElegir = document.getElementById('btn-elegir-arma');
    const btnCrear = document.getElementById('btn-crear-arma');

    btnElegir.classList.remove('active');
    btnCrear.classList.remove('active');

    if (opción === 'elegir') {
        contenedorElegir.classList.remove('d-none');
        contenedorCrear.classList.add('d-none');
        btnElegir.classList.add('active');
    } else {
        contenedorElegir.classList.add('d-none');
        contenedorCrear.classList.remove('d-none');
        btnCrear.classList.add('active');
    }
}

function agregarArmaPredefinida() {
    const select = document.getElementById('select-armas-predefinidas');
    const index = select.value;
    if (index === "") { alert("Por favor, selecciona un arma de la lista. 📜"); return; }

    const arma = { ...listaArmasPredefinidas[index], modDanio: 0 };
    personaje.equipo.push(arma);
    select.value = "";
    actualizarListaGestionEquipo();
}

function agregarEquipo() {
    const nombre = document.getElementById('eq-nombre').value;
    const alcance = document.getElementById('eq-alcance').value || "C/C";
    const atributo = document.getElementById('eq-attr').value;
    const esProficiente = document.getElementById('eq-proficiente').checked;
    const esVersatil = document.getElementById('eq-versatil').checked;
    const dado1 = document.getElementById('eq-dado1').value;
    const dado2 = document.getElementById('eq-dado2').value;
    const modDanio = parseInt(document.getElementById('eq-mod').value) || 0;
    const notas = document.getElementById('eq-notas').value;

    if (!nombre) { alert("Por favor, rellena el nombre del arma. ⚔️"); return; }

    personaje.equipo.push({
        nombre, alcance, atributo, esProficiente, esVersatil, dado1,
        dado2: esVersatil ? dado2 : "-", modDanio, notas, tipoDaño: "Manual"
    });

    document.getElementById('eq-nombre').value = '';
    document.getElementById('eq-alcance').value = '';
    document.getElementById('eq-notas').value = '';
    document.getElementById('eq-mod').value = '0';
    document.getElementById('eq-versatil').checked = false;
    document.getElementById('eq-dado2').disabled = true;

    actualizarListaGestionEquipo();
}

function actualizarListaGestionEquipo() {
    const lista = document.getElementById('lista-gestion-equipo');
    if (!lista) return;

    lista.innerHTML = personaje.equipo.map((item, i) => {
        const dPrinc = item.dado1 || item.daño || "1d4";
        const dSec = item.esVersatil && item.dado2 && item.dado2 !== "-" ? ` / ${item.dado2}` : "";
        const iconoProf = item.esProficiente !== false ? "🎯" : "";
        const notasDiv = item.notas ? `<br><small class="text-info" style="font-size: 0.7rem;">* ${item.notas}</small>` : "";
        const modDiv = item.modDanio && item.modDanio !== 0 ? ` (+${item.modDanio})` : "";
        const tDañoDiv = item.tipoDaño ? ` [${item.tipoDaño}]` : "";

        return `
        <span class="badge bg-dark border border-gold p-2 text-start position-relative pe-4 shadow" style="font-size: 0.85rem; line-height: 1.4;">
            <strong class="text-gold text-uppercase">${item.nombre}</strong> ${iconoProf} ${tDañoDiv}<br>
            <small class="text-muted">${item.atributo || "Fuerza"} | Alcance: ${item.alcance || "C/C"}</small><br>
            <small class="text-muted">Daño: ${dPrinc}${dSec}${modDiv}</small>
            ${notasDiv}
            <span class="text-danger position-absolute top-50 end-0 translate-middle-y me-2" style="cursor:pointer; font-size: 1.1rem;" onclick="personaje.equipo.splice(${i}, 1); actualizarListaGestionEquipo();">✖</span>
        </span>
    `}).join('');
}

// ==========================================
// 7. FUNCIONES DEL GRIMORIO (CORE)
// ==========================================

function renderizar(opcion) {
    const galeria = document.getElementById('galeria');
    const buscador = document.getElementById('buscadorNombre');
    if (!galeria || !buscador) return;

    const esCargaMas = (opcion === true);
    if (!esCargaMas) {
        galeria.innerHTML = '';
        cantidadMostrada = hechizosPorPagina;
    }

    // Obtenemos los niveles del slider
    const min = parseInt(document.getElementById('nivelMin')?.value || 0);
    const max = parseInt(document.getElementById('nivelMax')?.value || 9);

    // FILTRADO ROBUSTO
    listaActual = hechizos.filter(h => {
        const coincideNombre = h.nombre.toLowerCase().includes(buscador.value.toLowerCase());
        const coincideClase = filtroClaseHechizos === 'todos' || h.clase === filtroClaseHechizos;
        const coincideNivel = h.nivel >= min && h.nivel <= max;

        // CORRECCIÓN: Usar personaje.favoritos
        const coincideFav = !document.getElementById('filtroFavoritos').checked || personaje.favoritos.includes(h.id);

        return coincideNombre && coincideClase && coincideNivel && coincideFav;
    });

    // ORDENACIÓN
    const criterio = document.getElementById('ordenarPor')?.value;
    listaActual.sort((a, b) => (criterio === 'nivelAsc' ? a.nivel - b.nivel : a.nombre.localeCompare(b.nombre)));

    // DIBUJADO
    const fragmento = listaActual.slice(esCargaMas ? cantidadMostrada : 0, esCargaMas ? cantidadMostrada + hechizosPorPagina : cantidadMostrada);

    fragmento.forEach((h, i) => {
        const indexReal = esCargaMas ? cantidadMostrada + i : i;
        const esFav = personaje.favoritos.includes(h.id);
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="card bg-dark border-secondary h-100 card-hechizo" onclick="abrirModal(${indexReal})">
                <img src="${h.archivo.startsWith('http') ? h.archivo : CLOUDINARY_BASE + h.archivo}" class="card-img-top img-spell" loading="lazy">
                <div class="card-body p-2 d-flex align-items-center justify-content-center gap-2">
                    <div class="btn-favorito-inline" onclick="event.stopPropagation(); toggleFavorito(${h.id})">
                        ${esFav ? '📖' : '📕'}
                    </div>
                    <small class="text-gold fw-bold">${h.nombre}</small>
                </div>
            </div>`;
        galeria.appendChild(col);
    });

    // Actualizar estados finales
    document.getElementById('btnCargarMas')?.classList.toggle('d-none', cantidadMostrada >= listaActual.length);
    const contador = document.getElementById('contador');
    if (contador) contador.innerText = `Hechizos: ${listaActual.length}`;
}

function toggleFavorito(id) {
    const index = personaje.favoritos.indexOf(id);
    if (index > -1) personaje.favoritos.splice(index, 1);
    else personaje.favoritos.push(id);
    localStorage.setItem('hechizosFavoritos', JSON.stringify(personaje.favoritos));
    renderizar();
}

function copiarPreparados() {
    // 1. Obtener los nombres de los hechizos que coinciden con los IDs favoritos
    const nombresFavs = hechizos
        .filter(h => personaje.favoritos.includes(h.id))
        .map(h => h.nombre);

    if (nombresFavs.length === 0) {
        alert("No tienes hechizos preparados para copiar. 📖");
        return;
    }

    // 2. Unirlos en un texto separado por saltos de línea
    const textoACopiar = "MIS HECHIZOS PREPARADOS:\n" + nombresFavs.join("\n");

    // 3. Usar la API del portapapeles
    navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("¡Lista de hechizos copiada al portapapeles! 📋");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}

// ==========================================
// 8. MODAL Y SLIDER
// ==========================================

function abrirModal(index) { indiceActual = index; actualizarImagenModal(); modalBS.show(); }
function abrirModalPorId(id) {
    const index = hechizos.findIndex(h => h.id === id);
    if (index !== -1) { listaActual = hechizos; abrirModal(index); }
}
function actualizarImagenModal() {
    const h = listaActual[indiceActual];
    const img = document.getElementById('imgModal');
    img.src = (h.archivo.startsWith('http') ? h.archivo : CLOUDINARY_BASE + h.archivo).replace('w_400', 'w_1080');
}
function siguiente() { indiceActual = (indiceActual + 1) % listaActual.length; actualizarImagenModal(); }
function anterior() { indiceActual = (indiceActual - 1 + listaActual.length) % listaActual.length; actualizarImagenModal(); }

function actualizarSliderVisual() {
    const minInput = document.getElementById('nivelMin');
    const maxInput = document.getElementById('nivelMax');
    const track = document.querySelector('.slider-track');
    const texto = document.getElementById('valorRango');

    if (!minInput || !maxInput || !track) return;

    let minVal = parseInt(minInput.value);
    let maxVal = parseInt(maxInput.value);

    // Evitar que los deslizadores se crucen de forma inteligente
    if (minVal > maxVal) {
        if (document.activeElement === minInput) {
            minInput.value = maxVal; // Topamos el mínimo
            minVal = maxVal;
        } else {
            maxInput.value = minVal; // Topamos el máximo
            maxVal = minVal;
        }
    }

    const minP = (minVal / 9) * 100;
    const maxP = (maxVal / 9) * 100;

    track.style.left = minP + "%";
    track.style.width = (maxP - minP) + "%";

    if (texto) texto.innerText = `${minVal} - ${maxVal}`;
}

// FUNCIÓN ÚNICA PARA EL TEMA VISUAL
function actualizarTemaWeb() {
    // 1. Limpiar todos los temas anteriores del body
    document.body.classList.forEach(c => {
        if (c.startsWith('tema-')) document.body.classList.remove(c);
    });

    // 2. Decidir qué clase manda:
    // Si estamos en el Grimorio y hay un filtro puesto, manda el filtro.
    // Si no, manda la clase de tu personaje.
    let claseParaTema = personaje.clase;

    // Comprobamos si la sección del grimorio es la que está visible
    const spellbookSec = document.getElementById('spellbook-section');
    if (spellbookSec && !spellbookSec.classList.contains('d-none') && filtroClaseHechizos !== 'todos') {
        claseParaTema = filtroClaseHechizos;
    }

    // 3. Aplicar el tema (limpiando tildes y poniendo en minúsculas)
    const temaFormateado = claseParaTema.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    document.body.classList.add(`tema-${temaFormateado}`);
}
// ==========================================
// 9. VISTA DE GALERÍA MÓVIL
// ==========================================
function cambiarVistaGrid(columnas) {
    const galeria = document.getElementById('galeria');
    const btn1 = document.getElementById('btn-vista-1');
    const btn2 = document.getElementById('btn-vista-2');
    
    if (!galeria) return;

    if (columnas === 1) {
        galeria.classList.remove('row-cols-2');
        galeria.classList.add('row-cols-1');
        btn1.classList.add('active');
        btn2.classList.remove('active');
    } else {
        galeria.classList.remove('row-cols-1');
        galeria.classList.add('row-cols-2');
        btn1.classList.remove('active');
        btn2.classList.add('active');
    }
}

// ==========================================
// 10. INICIALIZACIÓN Y EVENTOS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    modalBS = new bootstrap.Modal(document.getElementById('modalHechizo'));

    // Inicialización
    mostrarSeccion('setup');
    actualizarSliderVisual();
    actualizarUI();
    renderizar();
    actualizarIndicadorInspiracion();
    cargarOpcionesArmasPredefinidas();

    // EVENTOS DE FILTRO DE HECHIZOS (GRIMORIO)
    document.querySelectorAll('.btn-clase').forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Gestión estética de los botones
            document.querySelectorAll('.btn-clase').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Actualizar la variable de filtro
            filtroClaseHechizos = btn.dataset.clase;

            // 3. Ejecutar funciones
            renderizar();        // Filtra y dibuja las cartas
            actualizarTemaWeb();  // Cambia el color de la web según el filtro
        });
    });

    // EVENTO DE VACIADO DE HECHIZOS PREPARADOS
    document.getElementById('btnVaciarPreparados').addEventListener('click', () => {
        if (confirm("¿Seguro que quieres borrar todos tus hechizos preparados? 📕")) {
            // 1. Limpiar el array dentro del objeto personaje
            personaje.favoritos = [];

            // 2. Sincronizar con el almacenamiento local
            localStorage.setItem('hechizosFavoritos', JSON.stringify(personaje.favoritos));

            // 3. Refrescar la interfaz
            renderizar();
            actualizarPestañaAcciones(); // Para que también se borren de la pestaña de combate
        }
    });

    // Eventos de Clase de Personaje (Roller y Setup)
    document.querySelectorAll('.btn-clase-roller').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.btn-clase-roller').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            personaje.clase = btn.dataset.clase;

            // REINICIAR salvaciones manuales para que coincidan con la nueva clase por defecto
            personaje.salvacionesManuales = [];

            actualizarTemaWeb(); // Usar la función unificada que arreglamos antes
            actualizarUI();
        });
    });

    // Evento para el botón de copiar
    document.getElementById('btnCopiar')?.addEventListener('click', copiarPreparados);

    document.getElementById('btnVaciarPreparados')?.addEventListener('click', () => {
        if (confirm("¿Seguro que quieres borrar todos tus hechizos preparados? 📕")) {
            personaje.favoritos = [];
            localStorage.setItem('hechizosFavoritos', JSON.stringify(personaje.favoritos));
            renderizar();
            actualizarPestañaAcciones();
        }
    });

    // Botón de Ver Preparados
    document.getElementById('filtroFavoritos').addEventListener('change', () => renderizar());

    // --- SINCRONIZACIÓN MAGISTRAL DE VENTAJA Y DESVENTAJA ---
    const adv1 = document.getElementById('check-advantage');
    const dis1 = document.getElementById('check-disadvantage');
    const adv2 = document.getElementById('check-adv-actions');
    const dis2 = document.getElementById('check-dis-actions');

    function syncChecks(origen, destino, rival1, rival2) {
        if (origen) {
            origen.addEventListener('change', () => {
                if (destino) destino.checked = origen.checked; // Copia el estado a la otra pestaña
                if (origen.checked) {
                    if (rival1) rival1.checked = false;        // Apaga la desventaja si pones ventaja
                    if (rival2) rival2.checked = false;
                }
            });
        }
    }

    syncChecks(adv1, adv2, dis1, dis2);
    syncChecks(adv2, adv1, dis1, dis2);
    syncChecks(dis1, dis2, adv1, adv2);
    syncChecks(dis2, dis1, adv1, adv2);

    // Eventos Limpiar Log Sincronizados
    document.getElementById('btn-limpiar-log')?.addEventListener('click', limpiarLogTiradas);
    document.getElementById('btn-limpiar-log-actions')?.addEventListener('click', limpiarLogTiradas);

    // Evento Botón Buscador Nombre Hechizos
    document.getElementById('buscadorNombre').addEventListener('input', () => renderizar());

    // EVENTOS DE LOS DESLIZADORES DE NIVEL
    const minIn = document.getElementById('nivelMin');
    const maxIn = document.getElementById('nivelMax');

    if (minIn && maxIn) {
        minIn.addEventListener('input', () => {
            actualizarSliderVisual();
            renderizar();
        });
        maxIn.addEventListener('input', () => {
            actualizarSliderVisual();
            renderizar();
        });
    }

    // Evento Botón Cargar Más
    document.getElementById('btnCargarMas').onclick = () => {
        cantidadMostrada += hechizosPorPagina;
        renderizar(true);
    };

    // Evento Limpiar Filtros
    document.getElementById('btnLimpiar').addEventListener('click', () => {
        document.getElementById('buscadorNombre').value = '';
        document.getElementById('nivelMin').value = 0;
        document.getElementById('nivelMax').value = 9;
        document.getElementById('filtroFavoritos').checked = false;
        document.getElementById('ordenarPor').value = 'nombreAsc';

        filtroClaseHechizos = 'todos';

        document.querySelectorAll('.btn-clase').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-clase="todos"]')?.classList.add('active');

        actualizarSliderVisual();
        actualizarTemaWeb();
        renderizar();
    });

}); // <-- ESTA DEBE SER RIGUROSAMENTE LA ÚLTIMA LÍNEA DE TU ARCHIVO. NO PUEDE HABER NADA DEBAJO.
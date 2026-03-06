// ==========================================
// 1. CONFIGURACIÓN Y DATOS
// ==========================================
const CLOUDINARY_BASE = "https://res.cloudinary.com/jecaba97/image/upload/f_auto,q_auto,w_400/";

const hechizos = [

    // BARDO (NIVEL 0)
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
    { id: 96, nombre: "Palabra de curación", clase: "Bardo", nivel: 1, archivo: "" }, //
    { id: 97, nombre: "Palabra de curación en masa", clase: "Bardo", nivel: 3, archivo: "" }, //
    { id: 98, nombre: "Palabra de poder: aturdir", clase: "Bardo", nivel: 8, archivo: "" }, //
    { id: 99, nombre: "Palabra de poder: fortalecer", clase: "Bardo", nivel: 7, archivo: "" }, //
    { id: 100, nombre: "Palabra de poder: matar", clase: "Bardo", nivel: 9, archivo: "" }, //
    { id: 101, nombre: "Palabra de poder: sanar", clase: "Bardo", nivel: 9, archivo: "" }, //
    { id: 102, nombre: "Patrón hipnótico", clase: "Bardo", nivel: 3, archivo: "" }, //
    { id: 103, nombre: "Pequeña choza de Leomund", clase: "Bardo", nivel: 3, archivo: "" }, //
    { id: 104, nombre: "Perdición", clase: "Bardo", nivel: 1, archivo: "" }, //
    { id: 105, nombre: "Polimorfar", clase: "Bardo", nivel: 4, archivo: "" }, //
    { id: 106, nombre: "Polimorfar verdadero", clase: "Bardo", nivel: 9, archivo: "" }, //
    { id: 107, nombre: "Potenciar característica", clase: "Bardo", nivel: 2, archivo: "" }, //
    { id: 108, nombre: "Presencia regia de Yolande", clase: "Bardo", nivel: 5, archivo: "" }, //
    { id: 109, nombre: "Presciencia", clase: "Bardo", nivel: 9, archivo: "" }, //
    { id: 110, nombre: "Prestidigitación", clase: "Bardo", nivel: 0, archivo: "" }, //
    { id: 111, nombre: "Proyectar imagen", clase: "Bardo", nivel: 7, archivo: "" }, //
    { id: 112, nombre: "Puerta dimensional", clase: "Bardo", nivel: 4, archivo: "" }, //
    { id: 113, nombre: "Ralentizar", clase: "Bardo", nivel: 3, archivo: "" }, //
    { id: 114, nombre: "Recado", clase: "Bardo", nivel: 3, archivo: "" }, //
    { id: 115, nombre: "Regenerar", clase: "Bardo", nivel: 7, archivo: "" }, //
    { id: 116, nombre: "Reparar", clase: "Bardo", nivel: 0, archivo: "" }, //
    { id: 117, nombre: "Restablecimiento mayor", clase: "Bardo", nivel: 5, archivo: "" }, //
    { id: 118, nombre: "Restablecimiento menor", clase: "Bardo", nivel: 2, archivo: "" }, //
    { id: 119, nombre: "Resurrección", clase: "Bardo", nivel: 7, archivo: "" }, //
    { id: 120, nombre: "Risa horrible de Tasha", clase: "Bardo", nivel: 1, archivo: "" }, //
    { id: 121, nombre: "Rociada de color", clase: "Bardo", nivel: 1, archivo: "" }, //
    { id: 122, nombre: "Rociada prismática", clase: "Bardo", nivel: 7, archivo: "" }, //
    { id: 123, nombre: "Silencio", clase: "Bardo", nivel: 2, archivo: "" }, //
    { id: 124, nombre: "Símbolo", clase: "Bardo", nivel: 7, archivo: "" }, //
    { id: 125, nombre: "Sirviente invisible", clase: "Bardo", nivel: 1, archivo: "" }, //
    { id: 126, nombre: "Sordera/ceguera", clase: "Bardo", nivel: 2, archivo: "" }, //
    { id: 127, nombre: "Sugestión", clase: "Bardo", nivel: 2, archivo: "" }, //
    { id: 128, nombre: "Sugestión en masa", clase: "Bardo", nivel: 6, archivo: "" }, //
    { id: 129, nombre: "Susurros discordantes", clase: "Bardo", nivel: 1, archivo: "" }, //
    { id: 130, nombre: "Teletransporte", clase: "Bardo", nivel: 7, archivo: "" }, //
    { id: 131, nombre: "Terreno alucinatorio", clase: "Bardo", nivel: 4, archivo: "" }, //
    { id: 132, nombre: "Terror", clase: "Bardo", nivel: 3, archivo: "" }, //
    { id: 133, nombre: "Texto ilusorio", clase: "Bardo", nivel: 1, archivo: "" }, //
    { id: 134, nombre: "Tronar", clase: "Bardo", nivel: 0, archivo: "" }, //
    { id: 135, nombre: "Ver invisibilidad", clase: "Bardo", nivel: 2, archivo: "" }, //
    { id: 136, nombre: "Visión veraz", clase: "Bardo", nivel: 6, archivo: "" }, //
    { id: 137, nombre: "Voluta estelar", clase: "Bardo", nivel: 0, archivo: "" }, //
    { id: 138, nombre: "Zancada prodigiosa", clase: "Bardo", nivel: 1, archivo: "" }, //
    { id: 139, nombre: "Zona de la verdad", clase: "Bardo", nivel: 2, archivo: "" }, //

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

    // TRUCOS DE CLÉRIGO (NIVEL 0)
    { id: 232, nombre: "Guía", clase: "Clérigo", nivel: 0, archivo: "" },
    { id: 233, nombre: "Llama sagrada", clase: "Clérigo", nivel: 0, archivo: "" },
    { id: 234, nombre: "Luz", clase: "Clérigo", nivel: 0, archivo: "" },
    { id: 235, nombre: "Palabra de resplandor", clase: "Clérigo", nivel: 0, archivo: "" },
    { id: 236, nombre: "Piedad con los moribundos", clase: "Clérigo", nivel: 0, archivo: "" },
    { id: 237, nombre: "Reparar", clase: "Clérigo", nivel: 0, archivo: "" },
    { id: 238, nombre: "Resistencia", clase: "Clérigo", nivel: 0, archivo: "" },
    { id: 239, nombre: "Tañido por los muertos", clase: "Clérigo", nivel: 0, archivo: "" },
    { id: 240, nombre: "Taumaturgia", clase: "Clérigo", nivel: 0, archivo: "" },

    // CONJUROS DE CLÉRIGO DE NIVEL 1
    { id: 241, nombre: "Bendición", clase: "Clérigo", nivel: 1, archivo: "" },
    { id: 242, nombre: "Crear o destruir agua", clase: "Clérigo", nivel: 1, archivo: "" },
    { id: 243, nombre: "Curar heridas", clase: "Clérigo", nivel: 1, archivo: "" },
    { id: 244, nombre: "Detectar el bien y el mal", clase: "Clérigo", nivel: 1, archivo: "" },
    { id: 245, nombre: "Detectar magia", clase: "Clérigo", nivel: 1, archivo: "" },
    { id: 246, nombre: "Detectar venenos y enfermedades", clase: "Clérigo", nivel: 1, archivo: "" },
    { id: 247, nombre: "Escudo de fe", clase: "Clérigo", nivel: 1, archivo: "" },
    { id: 248, nombre: "Infligir heridas", clase: "Clérigo", nivel: 1, archivo: "" },
    { id: 249, nombre: "Orden imperiosa", clase: "Clérigo", nivel: 1, archivo: "" },
    { id: 250, nombre: "Palabra de curación", clase: "Clérigo", nivel: 1, archivo: "" },
    { id: 251, nombre: "Perdición", clase: "Clérigo", nivel: 1, archivo: "" },
    { id: 252, nombre: "Protección contra el bien y el mal", clase: "Clérigo", nivel: 1, archivo: "" },
    { id: 253, nombre: "Purificar comida y bebida", clase: "Clérigo", nivel: 1, archivo: "" },
    { id: 254, nombre: "Saeta guía", clase: "Clérigo", nivel: 1, archivo: "" },
    { id: 255, nombre: "Santuario", clase: "Clérigo", nivel: 1, archivo: "" },

    // CONJUROS DE CLÉRIGO DE NIVEL 2
    { id: 256, nombre: "Arma espiritual", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 257, nombre: "Augurio", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 258, nombre: "Auxilio", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 259, nombre: "Calmar emociones", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 260, nombre: "Detectar trampas", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 261, nombre: "Dulce descanso", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 262, nombre: "Inmovilizar persona", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 263, nombre: "Llama permanente", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 264, nombre: "Localizar objeto", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 265, nombre: "Plegaria de curación", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 266, nombre: "Potenciar característica", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 267, nombre: "Protección contra veneno", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 268, nombre: "Restablecimiento menor", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 269, nombre: "Silencio", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 270, nombre: "Sordera/ceguera", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 271, nombre: "Vínculo protector", clase: "Clérigo", nivel: 2, archivo: "" },
    { id: 272, nombre: "Zona de la verdad", clase: "Clérigo", nivel: 2, archivo: "" },

    // CONJUROS DE CLÉRIGO DE NIVEL 3
    { id: 273, nombre: "Animar a los muertos", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 274, nombre: "Aura de vitalidad", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 275, nombre: "Caminar sobre el agua", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 276, nombre: "Círculo mágico", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 277, nombre: "Clarividencia", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 278, nombre: "Crear comida y agua", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 279, nombre: "Disipar magia", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 280, nombre: "Don de lenguas", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 281, nombre: "Espíritus guardianes", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 282, nombre: "Fingir muerte", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 283, nombre: "Fundirse con la piedra", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 284, nombre: "Glifo custodio", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 285, nombre: "Hablar con los muertos", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 286, nombre: "Imponer maldición", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 287, nombre: "Levantar maldición", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 288, nombre: "Luz del día", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 289, nombre: "Palabra de curación en masa", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 290, nombre: "Protección contra energía", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 291, nombre: "Recado", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 292, nombre: "Revivir", clase: "Clérigo", nivel: 3, archivo: "" },
    { id: 293, nombre: "Señal de esperanza", clase: "Clérigo", nivel: 3, archivo: "" },

    // CONJUROS DE CLÉRIGO DE NIVEL 4
    { id: 294, nombre: "Adivinación", clase: "Clérigo", nivel: 4, archivo: "" },
    { id: 295, nombre: "Aura de pureza", clase: "Clérigo", nivel: 4, archivo: "" },
    { id: 296, nombre: "Aura de vida", clase: "Clérigo", nivel: 4, archivo: "" },
    { id: 297, nombre: "Controlar agua", clase: "Clérigo", nivel: 4, archivo: "" },
    { id: 298, nombre: "Destierro", clase: "Clérigo", nivel: 4, archivo: "" },
    { id: 299, nombre: "Guarda contra la muerte", clase: "Clérigo", nivel: 4, archivo: "" },
    { id: 300, nombre: "Guardián de la fe", clase: "Clérigo", nivel: 4, archivo: "" },
    { id: 301, nombre: "Libertad de movimiento", clase: "Clérigo", nivel: 4, archivo: "" },
    { id: 302, nombre: "Localizar criatura", clase: "Clérigo", nivel: 4, archivo: "" },
    { id: 303, nombre: "Moldear la piedra", clase: "Clérigo", nivel: 4, archivo: "" },

    // CONJUROS DE CLÉRIGO DE NIVEL 5
    { id: 304, nombre: "Alzar a los muertos", clase: "Clérigo", nivel: 5, archivo: "" },
    { id: 305, nombre: "Atadura planar", clase: "Clérigo", nivel: 5, archivo: "" },
    { id: 306, nombre: "Círculo de poder", clase: "Clérigo", nivel: 5, archivo: "" },
    { id: 307, nombre: "Comunión", clase: "Clérigo", nivel: 5, archivo: "" },
    { id: 308, nombre: "Conocer las leyendas", clase: "Clérigo", nivel: 5, archivo: "" },
    { id: 309, nombre: "Consagrar", clase: "Clérigo", nivel: 5, archivo: "" },
    { id: 310, nombre: "Contagio", clase: "Clérigo", nivel: 5, archivo: "" },
    { id: 311, nombre: "Curar heridas en masa", clase: "Clérigo", nivel: 5, archivo: "" },
    { id: 312, nombre: "Disipar el bien y el mal", clase: "Clérigo", nivel: 5, archivo: "" },
    { id: 313, nombre: "Escudriñar", clase: "Clérigo", nivel: 5, archivo: "" },
    { id: 314, nombre: "Geas", clase: "Clérigo", nivel: 5, archivo: "" },
    { id: 315, nombre: "Golpe flamígero", clase: "Clérigo", nivel: 5, archivo: "" },
    { id: 316, nombre: "Invocar celestial", clase: "Clérigo", nivel: 5, archivo: "" },
    { id: 317, nombre: "Plaga de insectos", clase: "Clérigo", nivel: 5, archivo: "" },
    { id: 318, nombre: "Restablecimiento mayor", clase: "Clérigo", nivel: 5, archivo: "" },

    // CONJUROS DE CLÉRIGO DE NIVEL 6
    { id: 319, nombre: "Aliado planar", clase: "Clérigo", nivel: 6, archivo: "" },
    { id: 320, nombre: "Barrera de cuchillas", clase: "Clérigo", nivel: 6, archivo: "" },
    { id: 321, nombre: "Crear muerto viviente", clase: "Clérigo", nivel: 6, archivo: "" },
    { id: 322, nombre: "Curar", clase: "Clérigo", nivel: 6, archivo: "" },
    { id: 323, nombre: "Dañar", clase: "Clérigo", nivel: 6, archivo: "" },
    { id: 324, nombre: "Encontrar el camino", clase: "Clérigo", nivel: 6, archivo: "" },
    { id: 325, nombre: "Festín de héroes", clase: "Clérigo", nivel: 6, archivo: "" },
    { id: 326, nombre: "Palabra de regreso", clase: "Clérigo", nivel: 6, archivo: "" },
    { id: 327, nombre: "Prohibición", clase: "Clérigo", nivel: 6, archivo: "" },
    { id: 328, nombre: "Rayo solar", clase: "Clérigo", nivel: 6, archivo: "" },
    { id: 329, nombre: "Visión veraz", clase: "Clérigo", nivel: 6, archivo: "" },

    // CONJUROS DE CLÉRIGO DE NIVEL 7
    { id: 330, nombre: "Conjurar celestial", clase: "Clérigo", nivel: 7, archivo: "" },
    { id: 331, nombre: "Desplazamiento entre planos", clase: "Clérigo", nivel: 7, archivo: "" },
    { id: 332, nombre: "Excursión etérea", clase: "Clérigo", nivel: 7, archivo: "" },
    { id: 333, nombre: "Palabra de poder: fortalecer", clase: "Clérigo", nivel: 7, archivo: "" },
    { id: 334, nombre: "Palabra divina", clase: "Clérigo", nivel: 7, archivo: "" },
    { id: 335, nombre: "Regenerar", clase: "Clérigo", nivel: 7, archivo: "" },
    { id: 336, nombre: "Resurrección", clase: "Clérigo", nivel: 7, archivo: "" },
    { id: 337, nombre: "Símbolo", clase: "Clérigo", nivel: 7, archivo: "" },
    { id: 338, nombre: "Tormenta de fuego", clase: "Clérigo", nivel: 7, archivo: "" },

    // CONJUROS DE CLÉRIGO DE NIVEL 8
    { id: 339, nombre: "Aura sagrada", clase: "Clérigo", nivel: 8, archivo: "" },
    { id: 340, nombre: "Campo antimagia", clase: "Clérigo", nivel: 8, archivo: "" },
    { id: 341, nombre: "Controlar el clima", clase: "Clérigo", nivel: 8, archivo: "" },
    { id: 342, nombre: "Explosión solar", clase: "Clérigo", nivel: 8, archivo: "" },
    { id: 343, nombre: "Terremoto", clase: "Clérigo", nivel: 8, archivo: "" },

    // CONJUROS DE CLÉRIGO DE NIVEL 9
    { id: 344, nombre: "Curar en masa", clase: "Clérigo", nivel: 9, archivo: "" },
    { id: 345, nombre: "Palabra de poder: sanar", clase: "Clérigo", nivel: 9, archivo: "" },
    { id: 346, nombre: "Portal", clase: "Clérigo", nivel: 9, archivo: "" },
    { id: 347, nombre: "Proyección astral", clase: "Clérigo", nivel: 9, archivo: "" },
    { id: 348, nombre: "Resurrección verdadera", clase: "Clérigo", nivel: 9, archivo: "" },

    // TRUCOS DE DRUIDA (NIVEL 0)
    { id: 349, nombre: "Crear llama", clase: "Druida", nivel: 0, archivo: "" },
    { id: 350, nombre: "Elementalismo", clase: "Druida", nivel: 0, archivo: "" },
    { id: 351, nombre: "Guía", clase: "Druida", nivel: 0, archivo: "" },
    { id: 352, nombre: "Látigo de espinas", clase: "Druida", nivel: 0, archivo: "" },
    { id: 353, nombre: "Mensaje", clase: "Druida", nivel: 0, archivo: "" },
    { id: 354, nombre: "Piedad con los moribundos", clase: "Druida", nivel: 0, archivo: "" },
    { id: 355, nombre: "Reparar", clase: "Druida", nivel: 0, archivo: "" },
    { id: 356, nombre: "Resistencia", clase: "Druida", nivel: 0, archivo: "" },
    { id: 357, nombre: "Rociada venenosa", clase: "Druida", nivel: 0, archivo: "" },
    { id: 358, nombre: "Saber druídico", clase: "Druida", nivel: 0, archivo: "" },
    { id: 359, nombre: "Shillelagh", clase: "Druida", nivel: 0, archivo: "" },
    { id: 360, nombre: "Tronar", clase: "Druida", nivel: 0, archivo: "" },
    { id: 361, nombre: "Voluta estelar", clase: "Druida", nivel: 0, archivo: "" },

    // CONJUROS DE DRUIDA DE NIVEL 1
    { id: 362, nombre: "Buenas bayas", clase: "Druida", nivel: 1, archivo: "" },
    { id: 363, nombre: "Crear o destruir agua", clase: "Druida", nivel: 1, archivo: "" },
    { id: 364, nombre: "Cuchillo de hielo", clase: "Druida", nivel: 1, archivo: "" },
    { id: 365, nombre: "Curar heridas", clase: "Druida", nivel: 1, archivo: "" },
    { id: 366, nombre: "Detectar magia", clase: "Druida", nivel: 1, archivo: "" },
    { id: 367, nombre: "Detectar venenos y enfermedades", clase: "Druida", nivel: 1, archivo: "" },
    { id: 368, nombre: "Encantar animal", clase: "Druida", nivel: 1, archivo: "" },
    { id: 369, nombre: "Enmarañar", clase: "Druida", nivel: 1, archivo: "" },
    { id: 370, nombre: "Fuego feérico", clase: "Druida", nivel: 1, archivo: "" },
    { id: 371, nombre: "Hablar con los animales", clase: "Druida", nivel: 1, archivo: "" },
    { id: 372, nombre: "Hechizar persona", clase: "Druida", nivel: 1, archivo: "" },
    { id: 373, nombre: "Nube de oscurecimiento", clase: "Druida", nivel: 1, archivo: "" },
    { id: 374, nombre: "Ola atronadora", clase: "Druida", nivel: 1, archivo: "" },
    { id: 375, nombre: "Palabra de curación", clase: "Druida", nivel: 1, archivo: "" },
    { id: 376, nombre: "Protección contra el bien y el mal", clase: "Druida", nivel: 1, archivo: "" },
    { id: 377, nombre: "Purificar comida y bebida", clase: "Druida", nivel: 1, archivo: "" },
    { id: 378, nombre: "Salto", clase: "Druida", nivel: 1, archivo: "" },
    { id: 379, nombre: "Zancada prodigiosa", clase: "Druida", nivel: 1, archivo: "" },

    // CONJUROS DE DRUIDA DE NIVEL 2
    { id: 380, nombre: "Agrandar/reducir", clase: "Druida", nivel: 2, archivo: "" },
    { id: 381, nombre: "Augurio", clase: "Druida", nivel: 2, archivo: "" },
    { id: 382, nombre: "Auxilio", clase: "Druida", nivel: 2, archivo: "" },
    { id: 383, nombre: "Calentar metal", clase: "Druida", nivel: 2, archivo: "" },
    { id: 384, nombre: "Crecimiento espinoso", clase: "Druida", nivel: 2, archivo: "" },
    { id: 385, nombre: "Detectar trampas", clase: "Druida", nivel: 2, archivo: "" },
    { id: 386, nombre: "Esfera de llamas", clase: "Druida", nivel: 2, archivo: "" },
    { id: 387, nombre: "Hoja de fuego", clase: "Druida", nivel: 2, archivo: "" },
    { id: 388, nombre: "Inmovilizar persona", clase: "Druida", nivel: 2, archivo: "" },
    { id: 389, nombre: "Invocar bestia", clase: "Druida", nivel: 2, archivo: "" },
    { id: 390, nombre: "Llama permanente", clase: "Druida", nivel: 2, archivo: "" },
    { id: 391, nombre: "Localizar animales o plantas", clase: "Druida", nivel: 2, archivo: "" },
    { id: 392, nombre: "Localizar objeto", clase: "Druida", nivel: 2, archivo: "" },
    { id: 393, nombre: "Mensajero animal", clase: "Druida", nivel: 2, archivo: "" },
    { id: 394, nombre: "Pasar sin rastro", clase: "Druida", nivel: 2, archivo: "" },
    { id: 395, nombre: "Piel robliza", clase: "Druida", nivel: 2, archivo: "" },
    { id: 396, nombre: "Potenciar característica", clase: "Druida", nivel: 2, archivo: "" },
    { id: 397, nombre: "Protección contra veneno", clase: "Druida", nivel: 2, archivo: "" },
    { id: 398, nombre: "Ráfaga de viento", clase: "Druida", nivel: 2, archivo: "" },
    { id: 399, nombre: "Rayo de luna", clase: "Druida", nivel: 2, archivo: "" },
    { id: 400, nombre: "Restablecimiento menor", clase: "Druida", nivel: 2, archivo: "" },
    { id: 401, nombre: "Sentidos de la bestia", clase: "Druida", nivel: 2, archivo: "" },
    { id: 402, nombre: "Visión en la oscuridad", clase: "Druida", nivel: 2, archivo: "" },

    // CONJUROS DE DRUIDA DE NIVEL 3
    { id: 403, nombre: "Arma elemental", clase: "Druida", nivel: 3, archivo: "" },
    { id: 404, nombre: "Aura de vitalidad", clase: "Druida", nivel: 3, archivo: "" },
    { id: 405, nombre: "Caminar sobre el agua", clase: "Druida", nivel: 3, archivo: "" },
    { id: 406, nombre: "Conjurar animales", clase: "Druida", nivel: 3, archivo: "" },
    { id: 407, nombre: "Crecimiento vegetal", clase: "Druida", nivel: 3, archivo: "" },
    { id: 408, nombre: "Disipar magia", clase: "Druida", nivel: 3, archivo: "" },
    { id: 409, nombre: "Fingir muerte", clase: "Druida", nivel: 3, archivo: "" },
    { id: 410, nombre: "Fundirse con la piedra", clase: "Druida", nivel: 3, archivo: "" },
    { id: 411, nombre: "Hablar con las plantas", clase: "Druida", nivel: 3, archivo: "" },
    { id: 412, nombre: "Invocar feérico", clase: "Druida", nivel: 3, archivo: "" },
    { id: 413, nombre: "Llamar al relámpago", clase: "Druida", nivel: 3, archivo: "" },
    { id: 414, nombre: "Luz del día", clase: "Druida", nivel: 3, archivo: "" },
    { id: 415, nombre: "Muro de viento", clase: "Druida", nivel: 3, archivo: "" },
    { id: 416, nombre: "Protección contra energía", clase: "Druida", nivel: 3, archivo: "" },
    { id: 417, nombre: "Respirar bajo el agua", clase: "Druida", nivel: 3, archivo: "" },
    { id: 418, nombre: "Revivir", clase: "Druida", nivel: 3, archivo: "" },
    { id: 419, nombre: "Tormenta de aguanieve", clase: "Druida", nivel: 3, archivo: "" },

    // CONJUROS DE DRUIDA DE NIVEL 4
    { id: 420, nombre: "Adivinación", clase: "Druida", nivel: 4, archivo: "" },
    { id: 421, nombre: "Confusión", clase: "Druida", nivel: 4, archivo: "" },
    { id: 422, nombre: "Conjurar elementales menores", clase: "Druida", nivel: 4, archivo: "" },
    { id: 423, nombre: "Conjurar seres del bosque", clase: "Druida", nivel: 4, archivo: "" },
    { id: 424, nombre: "Controlar agua", clase: "Druida", nivel: 4, archivo: "" },
    { id: 425, nombre: "Dominar bestia", clase: "Druida", nivel: 4, archivo: "" },
    { id: 426, nombre: "Enredadera", clase: "Druida", nivel: 4, archivo: "" },
    { id: 427, nombre: "Escudo de fuego", clase: "Druida", nivel: 4, archivo: "" },
    { id: 428, nombre: "Fuente de luz lunar", clase: "Druida", nivel: 4, archivo: "" },
    { id: 429, nombre: "Hechizar monstruo", clase: "Druida", nivel: 4, archivo: "" },
    { id: 430, nombre: "Insecto gigante", clase: "Druida", nivel: 4, archivo: "" },
    { id: 431, nombre: "Invocar elemental", clase: "Druida", nivel: 4, archivo: "" },
    { id: 432, nombre: "Libertad de movimiento", clase: "Druida", nivel: 4, archivo: "" },
    { id: 433, nombre: "Localizar criatura", clase: "Druida", nivel: 4, archivo: "" },
    { id: 434, nombre: "Marchitar", clase: "Druida", nivel: 4, archivo: "" },
    { id: 435, nombre: "Moldear la piedra", clase: "Druida", nivel: 4, archivo: "" },
    { id: 436, nombre: "Muro de fuego", clase: "Druida", nivel: 4, archivo: "" },
    { id: 437, nombre: "Piel pétrea", clase: "Druida", nivel: 4, archivo: "" },
    { id: 438, nombre: "Polimorfar", clase: "Druida", nivel: 4, archivo: "" },
    { id: 439, nombre: "Terreno alucinatorio", clase: "Druida", nivel: 4, archivo: "" },
    { id: 440, nombre: "Tormenta de hielo", clase: "Druida", nivel: 4, archivo: "" },

    // CONJUROS DE DRUIDA DE NIVEL 5
    { id: 441, nombre: "Atadura planar", clase: "Druida", nivel: 5, archivo: "" },
    { id: 442, nombre: "Caparazón antivida", clase: "Druida", nivel: 5, archivo: "" },
    { id: 443, nombre: "Comunión con la naturaleza", clase: "Druida", nivel: 5, archivo: "" },
    { id: 444, nombre: "Conjurar elemental", clase: "Druida", nivel: 5, archivo: "" },
    { id: 445, nombre: "Cono de frío", clase: "Druida", nivel: 5, archivo: "" },
    { id: 446, nombre: "Contagio", clase: "Druida", nivel: 5, archivo: "" },
    { id: 447, nombre: "Curar heridas en masa", clase: "Druida", nivel: 5, archivo: "" },
    { id: 448, nombre: "Despertar", clase: "Druida", nivel: 5, archivo: "" },
    { id: 449, nombre: "Escudriñar", clase: "Druida", nivel: 5, archivo: "" },
    { id: 450, nombre: "Geas", clase: "Druida", nivel: 5, archivo: "" },
    { id: 451, nombre: "Muro de piedra", clase: "Druida", nivel: 5, archivo: "" },
    { id: 452, nombre: "Paso arbóreo", clase: "Druida", nivel: 5, archivo: "" },
    { id: 453, nombre: "Plaga de insectos", clase: "Druida", nivel: 5, archivo: "" },
    { id: 454, nombre: "Reencarnar", clase: "Druida", nivel: 5, archivo: "" },
    { id: 455, nombre: "Restablecimiento mayor", clase: "Druida", nivel: 5, archivo: "" },

    // CONJUROS DE DRUIDA DE NIVEL 6
    { id: 456, nombre: "Conjurar feérico", clase: "Druida", nivel: 6, archivo: "" },
    { id: 457, nombre: "Curar", clase: "Druida", nivel: 6, archivo: "" },
    { id: 458, nombre: "De la carne a la piedra", clase: "Druida", nivel: 6, archivo: "" },
    { id: 459, nombre: "Encontrar el camino", clase: "Druida", nivel: 6, archivo: "" },
    { id: 460, nombre: "Festín de héroes", clase: "Druida", nivel: 6, archivo: "" },
    { id: 461, nombre: "Mover la tierra", clase: "Druida", nivel: 6, archivo: "" },
    { id: 462, nombre: "Muro de espinas", clase: "Druida", nivel: 6, archivo: "" },
    { id: 463, nombre: "Rayo solar", clase: "Druida", nivel: 6, archivo: "" },
    { id: 464, nombre: "Viajar con el viento", clase: "Druida", nivel: 6, archivo: "" },
    { id: 465, nombre: "Viajar mediante plantas", clase: "Druida", nivel: 6, archivo: "" },

    // CONJUROS DE DRUIDA DE NIVEL 7
    { id: 466, nombre: "Desplazamiento entre planos", clase: "Druida", nivel: 7, archivo: "" },
    { id: 467, nombre: "Espejismo arcano", clase: "Druida", nivel: 7, archivo: "" },
    { id: 468, nombre: "Invertir la gravedad", clase: "Druida", nivel: 7, archivo: "" },
    { id: 469, nombre: "Regenerar", clase: "Druida", nivel: 7, archivo: "" },
    { id: 470, nombre: "Símbolo", clase: "Druida", nivel: 7, archivo: "" },
    { id: 471, nombre: "Tormenta de fuego", clase: "Druida", nivel: 7, archivo: "" },

    // CONJUROS DE DRUIDA DE NIVEL 8
    { id: 472, nombre: "Antipatía/simpatía", clase: "Druida", nivel: 8, archivo: "" },
    { id: 473, nombre: "Aspectos animales", clase: "Druida", nivel: 8, archivo: "" },
    { id: 474, nombre: "Controlar el clima", clase: "Druida", nivel: 8, archivo: "" },
    { id: 475, nombre: "Explosión solar", clase: "Druida", nivel: 8, archivo: "" },
    { id: 476, nombre: "Nube incendiaria", clase: "Druida", nivel: 8, archivo: "" },
    { id: 477, nombre: "Ofuscación", clase: "Druida", nivel: 8, archivo: "" },
    { id: 478, nombre: "Terremoto", clase: "Druida", nivel: 8, archivo: "" },
    { id: 479, nombre: "Tsunami", clase: "Druida", nivel: 8, archivo: "" },

    // CONJUROS DE DRUIDA DE NIVEL 9
    { id: 480, nombre: "Cambiar de forma", clase: "Druida", nivel: 9, archivo: "" },
    { id: 481, nombre: "Presciencia", clase: "Druida", nivel: 9, archivo: "" },
    { id: 482, nombre: "Resurrección verdadera", clase: "Druida", nivel: 9, archivo: "" },
    { id: 483, nombre: "Tormenta de la venganza", clase: "Druida", nivel: 9, archivo: "" },

// CONJUROS DE EXPLORADOR DE NIVEL 1
    { id: 484, nombre: "Alarma", clase: "Explorador", nivel: 1, archivo: "" },
    { id: 485, nombre: "Buenas bayas", clase: "Explorador", nivel: 1, archivo: "" },
    { id: 486, nombre: "Curar heridas", clase: "Explorador", nivel: 1, archivo: "" },
    { id: 487, nombre: "Detectar magia", clase: "Explorador", nivel: 1, archivo: "" },
    { id: 488, nombre: "Detectar venenos y enfermedades", clase: "Explorador", nivel: 1, archivo: "" },
    { id: 489, nombre: "Encantar animal", clase: "Explorador", nivel: 1, archivo: "" },
    { id: 490, nombre: "Enmarañar", clase: "Explorador", nivel: 1, archivo: "" },
    { id: 491, nombre: "Golpe apresador", clase: "Explorador", nivel: 1, archivo: "" },
    { id: 492, nombre: "Hablar con los animales", clase: "Explorador", nivel: 1, archivo: "" },
    { id: 493, nombre: "Marca del cazador", clase: "Explorador", nivel: 1, archivo: "" },
    { id: 494, nombre: "Nube de oscurecimiento", clase: "Explorador", nivel: 1, archivo: "" },
    { id: 495, nombre: "Salto", clase: "Explorador", nivel: 1, archivo: "" },
    { id: 496, nombre: "Tormenta de espinas", clase: "Explorador", nivel: 1, archivo: "" },
    { id: 497, nombre: "Zancada prodigiosa", clase: "Explorador", nivel: 1, archivo: "" },

    // CONJUROS DE EXPLORADOR DE NIVEL 2
    { id: 498, nombre: "Arma mágica", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 499, nombre: "Auxilio", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 500, nombre: "Cordón de flechas", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 501, nombre: "Crecimiento espinoso", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 502, nombre: "Detectar trampas", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 503, nombre: "Invocar bestia", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 504, nombre: "Localizar animales o plantas", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 505, nombre: "Localizar objeto", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 506, nombre: "Mensajero animal", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 507, nombre: "Pasar sin rastro", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 508, nombre: "Piel robliza", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 509, nombre: "Potenciar característica", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 510, nombre: "Protección contra veneno", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 511, nombre: "Ráfaga de viento", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 512, nombre: "Restablecimiento menor", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 513, nombre: "Sentidos de la bestia", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 514, nombre: "Silencio", clase: "Explorador", nivel: 2, archivo: "" },
    { id: 515, nombre: "Visión en la oscuridad", clase: "Explorador", nivel: 2, archivo: "" },

    // CONJUROS DE EXPLORADOR DE NIVEL 3
    { id: 516, nombre: "Arma elemental", clase: "Explorador", nivel: 3, archivo: "" },
    { id: 517, nombre: "Caminar sobre el agua", clase: "Explorador", nivel: 3, archivo: "" },
    { id: 518, nombre: "Conjurar animales", clase: "Explorador", nivel: 3, archivo: "" },
    { id: 519, nombre: "Conjurar descarga de proyectiles", clase: "Explorador", nivel: 3, archivo: "" },
    { id: 520, nombre: "Crecimiento vegetal", clase: "Explorador", nivel: 3, archivo: "" },
    { id: 521, nombre: "Disipar magia", clase: "Explorador", nivel: 3, archivo: "" },
    { id: 522, nombre: "Flecha de relámpago", clase: "Explorador", nivel: 3, archivo: "" },
    { id: 523, nombre: "Fundirse con la piedra", clase: "Explorador", nivel: 3, archivo: "" },
    { id: 524, nombre: "Hablar con las plantas", clase: "Explorador", nivel: 3, archivo: "" },
    { id: 525, nombre: "Indetectable", clase: "Explorador", nivel: 3, archivo: "" },
    { id: 526, nombre: "Invocar feérico", clase: "Explorador", nivel: 3, archivo: "" },
    { id: 527, nombre: "Luz del día", clase: "Explorador", nivel: 3, archivo: "" },
    { id: 528, nombre: "Muro de viento", clase: "Explorador", nivel: 3, archivo: "" },
    { id: 529, nombre: "Protección contra energía", clase: "Explorador", nivel: 3, archivo: "" },
    { id: 530, nombre: "Respirar bajo el agua", clase: "Explorador", nivel: 3, archivo: "" },
    { id: 531, nombre: "Revivir", clase: "Explorador", nivel: 3, archivo: "" },

    // CONJUROS DE EXPLORADOR DE NIVEL 4
    { id: 532, nombre: "Conjurar seres del bosque", clase: "Explorador", nivel: 4, archivo: "" },
    { id: 533, nombre: "Dominar bestia", clase: "Explorador", nivel: 4, archivo: "" },
    { id: 534, nombre: "Enredadera", clase: "Explorador", nivel: 4, archivo: "" },
    { id: 535, nombre: "Invocar elemental", clase: "Explorador", nivel: 4, archivo: "" },
    { id: 536, nombre: "Libertad de movimiento", clase: "Explorador", nivel: 4, archivo: "" },
    { id: 537, nombre: "Localizar criatura", clase: "Explorador", nivel: 4, archivo: "" },
    { id: 538, nombre: "Piel pétrea", clase: "Explorador", nivel: 4, archivo: "" },

    // CONJUROS DE EXPLORADOR DE NIVEL 5
    { id: 539, nombre: "Carcaj veloz", clase: "Explorador", nivel: 5, archivo: "" },
    { id: 540, nombre: "Comunión con la naturaleza", clase: "Explorador", nivel: 5, archivo: "" },
    { id: 541, nombre: "Conjurar lluvia de flechas", clase: "Explorador", nivel: 5, archivo: "" },
    { id: 542, nombre: "Golpe de viento acerado", clase: "Explorador", nivel: 5, archivo: "" },
    { id: 543, nombre: "Paso arbóreo", clase: "Explorador", nivel: 5, archivo: "" },
    { id: 544, nombre: "Restablecimiento mayor", clase: "Explorador", nivel: 5, archivo: "" },

    // TRUCOS DE HECHICERO (NIVEL 0)
    { id: 545, nombre: "Agarre electrizante", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 546, nombre: "Amistad", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 547, nombre: "Descarga de fuego", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 548, nombre: "Elementalismo", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 549, nombre: "Estallido mágico", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 550, nombre: "Fragmento mental", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 551, nombre: "Guardia de cuchillas", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 552, nombre: "Ilusión menor", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 553, nombre: "Impacto certero", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 554, nombre: "Luces danzantes", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 555, nombre: "Luz", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 556, nombre: "Mano de mago", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 557, nombre: "Mensaje", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 558, nombre: "Prestidigitación", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 559, nombre: "Rayo de escarcha", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 560, nombre: "Reparar", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 561, nombre: "Rociada venenosa", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 562, nombre: "Salpicadura ácida", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 563, nombre: "Toque helado", clase: "Hechicero", nivel: 0, archivo: "" },
    { id: 564, nombre: "Tronar", clase: "Hechicero", nivel: 0, archivo: "" },

    // CONJUROS DE HECHICERO DE NIVEL 1
    { id: 565, nombre: "Armadura de mago", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 566, nombre: "Caída de pluma", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 567, nombre: "Cuchillo de hielo", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 568, nombre: "Detectar magia", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 569, nombre: "Disfrazarse", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 570, nombre: "Dormir", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 571, nombre: "Entender idiomas", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 572, nombre: "Escudo", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 573, nombre: "Falsa vida", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 574, nombre: "Grasa", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 575, nombre: "Hechizar persona", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 576, nombre: "Imagen silenciosa", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 577, nombre: "Manos ardientes", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 578, nombre: "Nube de oscurecimiento", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 579, nombre: "Ola atronadora", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 580, nombre: "Orbe cromático", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 581, nombre: "Proyectil mágico", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 582, nombre: "Rayo de hechicería", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 583, nombre: "Rayo nauseabundo", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 584, nombre: "Retirada expeditiva", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 585, nombre: "Rociada de color", clase: "Hechicero", nivel: 1, archivo: "" },
    { id: 586, nombre: "Salto", clase: "Hechicero", nivel: 1, archivo: "" },

    // CONJUROS DE HECHICERO DE NIVEL 2
    { id: 587, nombre: "Abrir", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 588, nombre: "Agrandar/reducir", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 589, nombre: "Aliento de dragón", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 590, nombre: "Alterar el propio aspecto", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 591, nombre: "Arma mágica", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 592, nombre: "Clavo mental", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 593, nombre: "Contorno borroso", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 594, nombre: "Corona de la locura", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 595, nombre: "Detectar pensamientos", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 596, nombre: "Esfera de llamas", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 597, nombre: "Fuerza fantasmal", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 598, nombre: "Hacer añicos", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 599, nombre: "Hoja de fuego", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 600, nombre: "Imagen múltiple", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 601, nombre: "Inmovilizar persona", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 602, nombre: "Invisibilidad", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 603, nombre: "Levitar", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 604, nombre: "Nube de dagas", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 605, nombre: "Oscuridad", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 606, nombre: "Paso brumoso", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 607, nombre: "Potenciar característica", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 608, nombre: "Ráfaga de viento", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 609, nombre: "Rayo abrasador", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 610, nombre: "Sordera/ceguera", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 611, nombre: "Sugestión", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 612, nombre: "Telaraña", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 613, nombre: "Trepar cual arácnido", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 614, nombre: "Ver invisibilidad", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 615, nombre: "Vigor arcano", clase: "Hechicero", nivel: 2, archivo: "" },
    { id: 616, nombre: "Visión en la oscuridad", clase: "Hechicero", nivel: 2, archivo: "" },

    // CONJUROS DE HECHICERO DE NIVEL 3
    { id: 617, nombre: "Acelerar", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 618, nombre: "Bola de fuego", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 619, nombre: "Caminar sobre el agua", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 620, nombre: "Clarividencia", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 621, nombre: "Contrahechizo", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 622, nombre: "Desplazamiento", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 623, nombre: "Disipar magia", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 624, nombre: "Don de lenguas", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 625, nombre: "Forma gaseosa", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 626, nombre: "Imagen mayor", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 627, nombre: "Luz del día", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 628, nombre: "Nube apestosa", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 629, nombre: "Patrón hipnótico", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 630, nombre: "Protección contra energía", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 631, nombre: "Ralentizar", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 632, nombre: "Relámpago", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 633, nombre: "Respirar bajo el agua", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 634, nombre: "Terror", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 635, nombre: "Toque vampírico", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 636, nombre: "Tormenta de aguanieve", clase: "Hechicero", nivel: 3, archivo: "" },
    { id: 637, nombre: "Volar", clase: "Hechicero", nivel: 3, archivo: "" },

    // CONJUROS DE HECHICERO DE NIVEL 4
    { id: 638, nombre: "Confusión", clase: "Hechicero", nivel: 4, archivo: "" },
    { id: 639, nombre: "Destierro", clase: "Hechicero", nivel: 4, archivo: "" },
    { id: 640, nombre: "Dominar bestia", clase: "Hechicero", nivel: 4, archivo: "" },
    { id: 641, nombre: "Escudo de fuego", clase: "Hechicero", nivel: 4, archivo: "" },
    { id: 642, nombre: "Esfera vitriólica", clase: "Hechicero", nivel: 4, archivo: "" },
    { id: 643, nombre: "Hechizar monstruo", clase: "Hechicero", nivel: 4, archivo: "" },
    { id: 644, nombre: "Invisibilidad mejorada", clase: "Hechicero", nivel: 4, archivo: "" },
    { id: 645, nombre: "Marchitar", clase: "Hechicero", nivel: 4, archivo: "" },
    { id: 646, nombre: "Muro de fuego", clase: "Hechicero", nivel: 4, archivo: "" },
    { id: 647, nombre: "Piel pétrea", clase: "Hechicero", nivel: 4, archivo: "" },
    { id: 648, nombre: "Polimorfar", clase: "Hechicero", nivel: 4, archivo: "" },
    { id: 649, nombre: "Puerta dimensional", clase: "Hechicero", nivel: 4, archivo: "" },
    { id: 650, nombre: "Tormenta de hielo", clase: "Hechicero", nivel: 4, archivo: "" },

    // CONJUROS DE HECHICERO DE NIVEL 5
    { id: 651, nombre: "Animar objetos", clase: "Hechicero", nivel: 5, archivo: "" },
    { id: 652, nombre: "Apariencia", clase: "Hechicero", nivel: 5, archivo: "" },
    { id: 653, nombre: "Círculo de teletransportación", clase: "Hechicero", nivel: 5, archivo: "" },
    { id: 654, nombre: "Cono de frío", clase: "Hechicero", nivel: 5, archivo: "" },
    { id: 655, nombre: "Creación", clase: "Hechicero", nivel: 5, archivo: "" },
    { id: 656, nombre: "Dominar persona", clase: "Hechicero", nivel: 5, archivo: "" },
    { id: 657, nombre: "Estática sináptica", clase: "Hechicero", nivel: 5, archivo: "" },
    { id: 658, nombre: "Inmovilizar monstruo", clase: "Hechicero", nivel: 5, archivo: "" },
    { id: 659, nombre: "Mano de Bigby", clase: "Hechicero", nivel: 5, archivo: "" },
    { id: 660, nombre: "Muro de piedra", clase: "Hechicero", nivel: 5, archivo: "" },
    { id: 661, nombre: "Nube aniquiladora", clase: "Hechicero", nivel: 5, archivo: "" },
    { id: 662, nombre: "Plaga de insectos", clase: "Hechicero", nivel: 5, archivo: "" },
    { id: 663, nombre: "Telequinesis", clase: "Hechicero", nivel: 5, archivo: "" },

    // CONJUROS DE HECHICERO DE NIVEL 6
    { id: 664, nombre: "Círculo de muerte", clase: "Hechicero", nivel: 6, archivo: "" },
    { id: 665, nombre: "De la carne a la piedra", clase: "Hechicero", nivel: 6, archivo: "" },
    { id: 666, nombre: "Desintegrar", clase: "Hechicero", nivel: 6, archivo: "" },
    { id: 667, nombre: "Esfera congelante de Otiluke", clase: "Hechicero", nivel: 6, archivo: "" },
    { id: 668, nombre: "Globo de invulnerabilidad", clase: "Hechicero", nivel: 6, archivo: "" },
    { id: 669, nombre: "Mal de ojo", clase: "Hechicero", nivel: 6, archivo: "" },
    { id: 670, nombre: "Mover la tierra", clase: "Hechicero", nivel: 6, archivo: "" },
    { id: 671, nombre: "Puerta arcana", clase: "Hechicero", nivel: 6, archivo: "" },
    { id: 672, nombre: "Rayo solar", clase: "Hechicero", nivel: 6, archivo: "" },
    { id: 673, nombre: "Relámpago en cadena", clase: "Hechicero", nivel: 6, archivo: "" },
    { id: 674, nombre: "Sugestión en masa", clase: "Hechicero", nivel: 6, archivo: "" },
    { id: 675, nombre: "Visión veraz", clase: "Hechicero", nivel: 6, archivo: "" },

    // CONJUROS DE HECHICERO DE NIVEL 7
    { id: 676, nombre: "Bola de fuego de explosión retardada", clase: "Hechicero", nivel: 7, archivo: "" },
    { id: 677, nombre: "Dedo de la muerte", clase: "Hechicero", nivel: 7, archivo: "" },
    { id: 678, nombre: "Desplazamiento entre planos", clase: "Hechicero", nivel: 7, archivo: "" },
    { id: 679, nombre: "Excursión etérea", clase: "Hechicero", nivel: 7, archivo: "" },
    { id: 680, nombre: "Invertir la gravedad", clase: "Hechicero", nivel: 7, archivo: "" },
    { id: 681, nombre: "Rociada prismática", clase: "Hechicero", nivel: 7, archivo: "" },
    { id: 682, nombre: "Teletransporte", clase: "Hechicero", nivel: 7, archivo: "" },
    { id: 683, nombre: "Tormenta de fuego", clase: "Hechicero", nivel: 7, archivo: "" },

    // CONJUROS DE HECHICERO DE NIVEL 8
    { id: 684, nombre: "Dominar monstruo", clase: "Hechicero", nivel: 8, archivo: "" },
    { id: 685, nombre: "Explosión solar", clase: "Hechicero", nivel: 8, archivo: "" },
    { id: 686, nombre: "Nube incendiaria", clase: "Hechicero", nivel: 8, archivo: "" },
    { id: 687, nombre: "Palabra de poder: aturdir", clase: "Hechicero", nivel: 8, archivo: "" },
    { id: 688, nombre: "Semiplano", clase: "Hechicero", nivel: 8, archivo: "" },
    { id: 689, nombre: "Terremoto", clase: "Hechicero", nivel: 8, archivo: "" },

    // CONJUROS DE HECHICERO DE NIVEL 9
    { id: 690, nombre: "Deseo", clase: "Hechicero", nivel: 9, archivo: "" },
    { id: 691, nombre: "Palabra de poder: matar", clase: "Hechicero", nivel: 9, archivo: "" },
    { id: 692, nombre: "Parar el tiempo", clase: "Hechicero", nivel: 9, archivo: "" },
    { id: 693, nombre: "Portal", clase: "Hechicero", nivel: 9, archivo: "" },
    { id: 694, nombre: "Tormenta de meteoritos", clase: "Hechicero", nivel: 9, archivo: "" },

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

    // CONJUROS DE PALADÍN DE NIVEL 1
    { id: 940, nombre: "Bendición", clase: "Paladín", nivel: 1, archivo: "" },
    { id: 941, nombre: "Castigo abrasador", clase: "Paladín", nivel: 1, archivo: "" },
    { id: 942, nombre: "Castigo atronador", clase: "Paladín", nivel: 1, archivo: "" },
    { id: 943, nombre: "Castigo divino", clase: "Paladín", nivel: 1, archivo: "" },
    { id: 944, nombre: "Castigo furioso", clase: "Paladín", nivel: 1, archivo: "" },
    { id: 945, nombre: "Curar heridas", clase: "Paladín", nivel: 1, archivo: "" },
    { id: 946, nombre: "Detectar el bien y el mal", clase: "Paladín", nivel: 1, archivo: "" },
    { id: 947, nombre: "Detectar magia", clase: "Paladín", nivel: 1, archivo: "" },
    { id: 948, nombre: "Detectar venenos y enfermedades", clase: "Paladín", nivel: 1, archivo: "" },
    { id: 949, nombre: "Duelo forzado", clase: "Paladín", nivel: 1, archivo: "" },
    { id: 950, nombre: "Escudo de fe", clase: "Paladín", nivel: 1, archivo: "" },
    { id: 951, nombre: "Favor divino", clase: "Paladín", nivel: 1, archivo: "" },
    { id: 952, nombre: "Heroísmo", clase: "Paladín", nivel: 1, archivo: "" },
    { id: 953, nombre: "Orden imperiosa", clase: "Paladín", nivel: 1, archivo: "" },
    { id: 954, nombre: "Protección contra el bien y el mal", clase: "Paladín", nivel: 1, archivo: "" },
    { id: 955, nombre: "Purificar comida y bebida", clase: "Paladín", nivel: 1, archivo: "" },

    // CONJUROS DE PALADÍN DE NIVEL 2
    { id: 956, nombre: "Arma mágica", clase: "Paladín", nivel: 2, archivo: "" },
    { id: 957, nombre: "Auxilio", clase: "Paladín", nivel: 2, archivo: "" },
    { id: 958, nombre: "Castigo brillante", clase: "Paladín", nivel: 2, archivo: "" },
    { id: 959, nombre: "Dulce descanso", clase: "Paladín", nivel: 2, archivo: "" },
    { id: 960, nombre: "Hallar corcel", clase: "Paladín", nivel: 2, archivo: "" },
    { id: 961, nombre: "Localizar objeto", clase: "Paladín", nivel: 2, archivo: "" },
    { id: 962, nombre: "Plegaria de curación", clase: "Paladín", nivel: 2, archivo: "" },
    { id: 963, nombre: "Protección contra veneno", clase: "Paladín", nivel: 2, archivo: "" },
    { id: 964, nombre: "Restablecimiento menor", clase: "Paladín", nivel: 2, archivo: "" },
    { id: 965, nombre: "Vínculo protector", clase: "Paladín", nivel: 2, archivo: "" },
    { id: 966, nombre: "Zona de la verdad", clase: "Paladín", nivel: 2, archivo: "" },

    // CONJUROS DE PALADÍN DE NIVEL 3
    { id: 967, nombre: "Arma elemental", clase: "Paladín", nivel: 3, archivo: "" },
    { id: 968, nombre: "Aura de vitalidad", clase: "Paladín", nivel: 3, archivo: "" },
    { id: 969, nombre: "Castigo cegador", clase: "Paladín", nivel: 3, archivo: "" },
    { id: 970, nombre: "Círculo mágico", clase: "Paladín", nivel: 3, archivo: "" },
    { id: 971, nombre: "Crear comida y agua", clase: "Paladín", nivel: 3, archivo: "" },
    { id: 972, nombre: "Disipar magia", clase: "Paladín", nivel: 3, archivo: "" },
    { id: 973, nombre: "Levantar maldición", clase: "Paladín", nivel: 3, archivo: "" },
    { id: 974, nombre: "Luz del día", clase: "Paladín", nivel: 3, archivo: "" },
    { id: 975, nombre: "Manto del cruzado", clase: "Paladín", nivel: 3, archivo: "" },
    { id: 976, nombre: "Revivir", clase: "Paladín", nivel: 3, archivo: "" },

    // CONJUROS DE PALADÍN DE NIVEL 4
    { id: 977, nombre: "Aura de pureza", clase: "Paladín", nivel: 4, archivo: "" },
    { id: 978, nombre: "Aura de vida", clase: "Paladín", nivel: 4, archivo: "" },
    { id: 979, nombre: "Castigo abrumador", clase: "Paladín", nivel: 4, archivo: "" },
    { id: 980, nombre: "Destierro", clase: "Paladín", nivel: 4, archivo: "" },
    { id: 981, nombre: "Guarda contra la muerte", clase: "Paladín", nivel: 4, archivo: "" },
    { id: 982, nombre: "Localizar criatura", clase: "Paladín", nivel: 4, archivo: "" },

    // CONJUROS DE PALADÍN DE NIVEL 5
    { id: 983, nombre: "Alzar a los muertos", clase: "Paladín", nivel: 5, archivo: "" },
    { id: 984, nombre: "Castigo desterrador", clase: "Paladín", nivel: 5, archivo: "" },
    { id: 985, nombre: "Círculo de poder", clase: "Paladín", nivel: 5, archivo: "" },
    { id: 986, nombre: "Disipar el bien y el mal", clase: "Paladín", nivel: 5, archivo: "" },
    { id: 987, nombre: "Geas", clase: "Paladín", nivel: 5, archivo: "" },
    { id: 988, nombre: "Invocar celestial", clase: "Paladín", nivel: 5, archivo: "" },
    { id: 989, nombre: "Ola destructora", clase: "Paladín", nivel: 5, archivo: "" },
    { id: 990, nombre: "Restablecimiento mayor", clase: "Paladín", nivel: 5, archivo: "" },

];

// VARIABLES GLOBALES PARA LA GALERÍA AMPLIADA
let listaActual = []; // Guardará los hechizos que ves en pantalla tras filtrar
let indiceActual = 0; // Sabrá qué hechizo estás viendo en el modal
let modalBS;          // Instancia del modal de Bootstrap
let hechizosPorPagina = 20; 
let cantidadMostrada = 20;
const btnCargarMas = document.getElementById('btnCargarMas');


// ==========================================
// 2. REFERENCIAS AL DOM
// ==========================================

const galeria = document.getElementById('galeria');
const filtroClase = document.getElementById('filtroClase');
const filtroNivel = document.getElementById('filtroNivel');
const buscadorNombre = document.getElementById('buscadorNombre');
const contador = document.getElementById('contador');
const btnLimpiar = document.getElementById('btnLimpiar');
const ordenarPor = document.getElementById('ordenarPor');

// Cargar favoritos de localStorage al iniciar
let favoritos = JSON.parse(localStorage.getItem('hechizosFavoritos')) || [];
const filtroFavoritos = document.getElementById('filtroFavoritos');

// ==========================================
// 3. FUNCIONES
// ==========================================

function renderizar(opcion) {
    if (!galeria || !ordenarPor) return; // Seguridad: si no encuentra el selector, no sigue
  
// 0. RETARDO EN LA CARGA
    const esCargaMas = (opcion === true);
    if (!esCargaMas) {
        galeria.innerHTML = '';
        cantidadMostrada = hechizosPorPagina;
    }

// 1. FILTRAR
    listaActual = hechizos.filter(h => {
        const coincideNombre = h.nombre.toLowerCase().includes(buscadorNombre.value.toLowerCase());
        const cumpleClase = filtroClase.value === 'todos' || h.clase === filtroClase.value;
        const cumpleNivel = filtroNivel.value === 'todos' || h.nivel.toString() === filtroNivel.value;
        const cumpleFavorito = !filtroFavoritos.checked || favoritos.includes(h.id);
        return coincideNombre && cumpleClase && cumpleNivel && cumpleFavorito;
    });

// 2. ORDENAR (NUEVO)
    const criterio = ordenarPor.value;
    listaActual.sort((a, b) => {
        if (criterio === 'nombreAsc') return a.nombre.localeCompare(b.nombre);
        if (criterio === 'nombreDesc') return b.nombre.localeCompare(a.nombre);
        
        // Para el nivel, restamos los números. Si son iguales (0), ordena por nombre.
        if (criterio === 'nivelAsc') return (a.nivel - b.nivel) || a.nombre.localeCompare(b.nombre);
        if (criterio === 'nivelDesc') return (b.nivel - a.nivel) || a.nombre.localeCompare(b.nombre);
        
        return 0;
    });

// 3. RENDERIZADO    
contador.innerText = `Mostrando ${Math.min(cantidadMostrada, listaActual.length)} de ${listaActual.length}`;
    const fragmento = listaActual.slice(esCargaMas ? cantidadMostrada - hechizosPorPagina : 0, cantidadMostrada);

    if (listaActual.length === 0) {
        galeria.innerHTML = '<div class="col-12 text-center mt-5"><h4>No hay resultados 🎲</h4></div>';
        btnCargarMas.classList.add('d-none');
        return;
    }

    fragmento.forEach((h, index) => {
        const indiceReal = esCargaMas ? (cantidadMostrada - hechizosPorPagina) + index : index;
        const urlImagen = h.archivo.startsWith('http') ? h.archivo : CLOUDINARY_BASE + h.archivo;
        const esFav = favoritos.includes(h.id);
        const icono = esFav ? '📖' : '📕';

        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="card bg-dark border-secondary h-100 card-hechizo" onclick="abrirModal(${indiceReal})">
                <img src="${urlImagen}" class="card-img-top img-spell" alt="${h.nombre}" loading="lazy">
                <div class="card-body p-2 d-flex align-items-center justify-content-center gap-2">
                    <div class="btn-favorito-inline" onclick="event.stopPropagation(); toggleFavorito(${h.id})">
                        ${icono}
                    </div>
                    <small class="text-info">${h.nombre}</small>
                </div>
            </div>
        `;
        galeria.appendChild(col);
    });

    // Gestionar botón de carga
    if (cantidadMostrada < listaActual.length) {
        btnCargarMas.classList.remove('d-none');
    } else {
        btnCargarMas.classList.add('d-none');
    }
}


//Toggle Favorito
function toggleFavorito(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(favId => favId !== id);
    } else {
        favoritos.push(id);
    }
    // Guardar en el navegador
    localStorage.setItem('hechizosFavoritos', JSON.stringify(favoritos));
    // Repintar para que cambie el color del icono
    renderizar();
}

// Evento para el filtro de favoritos
filtroFavoritos.addEventListener('change', () => renderizar());

// FUNCIONES DEL MODAL (GALERÍA AMPLIADA)
function abrirModal(index) {
    indiceActual = index;
    actualizarImagenModal();
    modalBS.show();
}

function actualizarImagenModal() {
    const hechizo = listaActual[indiceActual];
    const imgModal = document.getElementById('imgModal');
    
    // Obtenemos la URL que ya tenemos configurada (la de 400px)
    const urlBase = hechizo.archivo.startsWith('http') ? hechizo.archivo : CLOUDINARY_BASE + hechizo.archivo;

    // TRUCO DE DAW: Reemplazamos 'w_400' por 'w_1080' para que Cloudinary nos sirva la imagen en alta calidad
    const urlAltaCalidad = urlBase.replace('w_400', 'w_1080');

    imgModal.src = urlAltaCalidad;
}

function siguiente() {
    // Si llegamos al final, volvemos al principio (0)
    indiceActual = (indiceActual + 1) % listaActual.length;
    actualizarImagenModal();
}

function anterior() {
    // Si estamos al principio, vamos al último
    indiceActual = (indiceActual - 1 + listaActual.length) % listaActual.length;
    actualizarImagenModal();
}

// ==========================================
// 4. EVENTOS
// ==========================================

ordenarPor.addEventListener('change', () => renderizar());
filtroClase.addEventListener('change', () => renderizar());
filtroNivel.addEventListener('change', () => renderizar());
buscadorNombre.addEventListener('input', () => renderizar());
filtroFavoritos.addEventListener('change', () => renderizar());

// Escuchador del botón cargar más
btnCargarMas.addEventListener('click', () => {
    cantidadMostrada += hechizosPorPagina;
    renderizar(true);
});

btnLimpiar.addEventListener('click', () => {
    buscadorNombre.value = '';
    filtroClase.value = 'todos';
    filtroNivel.value = 'todos';
    ordenarPor.value = 'nombreAsc';
    filtroFavoritos.checked = false; // Añadido para resetear también el switch
    renderizar(); 
});

// Inicialización cuando el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
    modalBS = new bootstrap.Modal(document.getElementById('modalHechizo'));
    renderizar();
});

// Navegación por teclado 
document.addEventListener('keydown', (e) => {
    const modalElement = document.getElementById('modalHechizo');
    if (modalElement && modalElement.classList.contains('show')) {
        if (e.key === "ArrowRight") siguiente();
        if (e.key === "ArrowLeft") anterior();
    }
});
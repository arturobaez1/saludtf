import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export interface Producto {
  nombre: string;
  pvp: string;
  precio: string;
  imagen: string;
  caracteristicas1?: string;
  caracteristicas2?: string;
  caracteristicas3?: string;
  caracteristicas4?: string;
  linea: string;
}
export class ProductosService {

  private productos: Producto[] = [
    {
      nombre: 'Transfer Factor Plus',
      pvp: '$246.800,00',
      precio: '$186.000,00',
      imagen: 'assets/img/TF-Plus-1.jpg',
      caracteristicas1: '• Educa, fortalece y equilibra el sistema inmunitario con la exclusiva Tri - Factor Formula',
      caracteristicas2: '• Incrementa la actividad de las células asesinas naturales hasta en un 437%*',
      caracteristicas3: '• Contiene UltraFactor XF®, OvoFactor®',
      caracteristicas4: ' • Contiene 4Life Transfer Factor® certificado para aumentar el cociente intelectual de tu sistema inmunitario',
      linea: 'transfer',
    },

    {
      nombre: 'Tri Factor Formula',
      pvp: '$185.700,00',
      precio: '$139.200,00',
      imagen: 'assets/img/TF-Regular-1.jpg',
      caracteristicas1: '• Educa, mejora y equilibra el sistema inmunitario con la exclusiva Tri-Factor Formula',
      caracteristicas2: '• Impulsa la actividad de las células asesinas naturales hasta un 283%*',
      caracteristicas3: 'Contiene extracto de UltraFactor XF®, OvoFactor® y NanoFactor® para la cantidad más alta de 4Life Transfer Factor® por porción–600 miligramos*',
      caracteristicas4: ' • Contiene 4Life Transfer Factor® certificado para aumentar el cociente intelectual de tu sistema inmunitario',
      linea: 'transfer',
    },

    {
      nombre: 'RioVida®',
      pvp: '$259.400,00',
      precio: '$194.500,00',
      imagen: 'assets/img/Rio-Vida-Botella-1.jpg',
      caracteristicas1: ' • Respalda la habilidad natural del sistema inmunitario para reconocer, responder, y recordar amenazas potenciales con 600 mg de 4Life Transfer Factor*',
      caracteristicas2: ' • Incluye una combinación exclusiva de antioxidantes y jugos de frutas ricos en bioflavonoides naturales, incluyendo açaí, granada, arándano, y baya del saúco*',
      caracteristicas3: ' • Contiene Vitamina C, aminoácidos, ácidos grasos, y polifenoles',
      caracteristicas4: ' • Contiene 4Life Transfer Factor® certificado para aumentar el cociente intelectual de tu sistema inmunitario*',
      linea: 'transfer',
    },

    {
      nombre: 'RioVida BURST®',
      pvp: '$136.200,00',
      precio: '$102.000,00',
      imagen: 'assets/img/Rio-Vida-Burst-1.jpg',
      caracteristicas1: ' • Ofrece una deliciosa fuente de vitaminas, minerales, aminoácidos, ácidos grasos y polifenoles esenciales de respaldo para llevar contigo*',
      caracteristicas2: ' • Contiene una porción completa de 4Life Transfer Factor® Tri-Factor® Fórmula y una combinación exclusiva de antioxidantes y jugos naturales de frutas, ricos en bioflavonoides como açaí, granada, arándano azul y baya del saúco*',
      caracteristicas3: ' • Es fácil de compartir',
      caracteristicas4: ' • Contiene 4Life Transfer Factor® certificado para aumentar el cociente intelectual de tu sistema inmunitario®*',
      linea: 'transfer',
    },

{
      nombre: 'RioVida STIX™',
      pvp: '$115.800,00',
      precio: '$87.000,00',
      imagen: 'assets/img/Rio-vida-stix-1.jpg',
      caracteristicas1: '• Respalda el sistema inmunitario con 600 mg de 4Life Transfer Factor® certificado con UltraFactor XF®*',
      caracteristicas2: ' • Estimula la actividad de las células asesinas naturales hasta un 283%*',
      caracteristicas3: '• Contiene ingredientes que proporcionan un respaldo antioxidante poderoso para el sistema inmunitario, el bienestar y el sistema cardiovascular*',
      caracteristicas4: ' • Sin sabores, edulcorantes ni conservantes artificiales',
      linea: 'transfer',
    },

{
      nombre: 'Premier Pack Plus',
      pvp: '$614.200,00',
      precio: '$461.000,00',
      imagen: 'assets/img/Premier-pack-plus.jpg',
      caracteristicas1: '• Educa, fortalece y equilibra el sistema inmunitario con la exclusiva Tri-Factor Formula',
      caracteristicas2: ' • Incrementa la actividad de las células asesinas naturales hasta en un 437%*',
      caracteristicas3: '• Contiene UltraFactor XF®, OvoFactor®',
      caracteristicas4: '• Contiene 4Life Transfer Factor® certificado para aumentar el cociente intelectual de tu sistema inmunitario',
      linea: 'transfer',
    },

{
      nombre: 'Transfer Factor® Oral Spray',
      pvp: '$117.000,00',
      precio: '$88.000,00',
      imagen: 'assets/img/Inmune-Spray-Menta-1.jpg',
      caracteristicas1: '• Respalda la habilidad del sistema inmunitario para reconocer, responder y recordar amenazas potenciales a la salud*',
      caracteristicas2: '•Incrementa el número de células inmunitarias en el cuerpo, promoviendo un sistema inmunitario más fuerte y resistente*',
      caracteristicas3: '• No contiene colores, sabores, edulcorantes ni conservantes artificiales',
      linea: 'transfer',
    },

{
      nombre: 'RiteStart® Mujer',
      pvp: '$349.000,00',
      precio: '$262.000,00',
      imagen: 'assets/img/Rite-Start-Women-1.jpg',
      caracteristicas1: '• Respalda el sistema inmunitario con el poder de 4Life® Transfer Factor Plus® Tri-Factor® Formula*',
      caracteristicas2: ' • Provee respaldo específico para el sistema femenino*',
      caracteristicas3: ' • Promueve huesos y articulaciones saludables*',
      caracteristicas4: ' • Incluye respaldo para un balance hormonal saludable*',
      linea: 'transfer',
    },

{
      nombre: 'RiteStart® Hombre',
      pvp: '$349.000,00',
      precio: '$262.000,00',
      imagen: 'assets/img/Rite-Start-Men-1.jpg',
      caracteristicas1: '• Respalda el sistema inmunitario con el poder de 4Life® Transfer Factor Plus® Tri-Factor® Formula*',
      caracteristicas2: ' • Provee respaldo específico para el sistema masculino*',
      caracteristicas3: ' • Promueve huesos y articulaciones saludables*',
      caracteristicas4: ' • Provee una mezcla potente de antioxidantes*',
      linea: 'transfer',
    },

{
      nombre: 'RiteStart®',
      pvp: '$277.300,00',
      precio: '$208.000,00',
      imagen: 'assets/img/Rite-Start.jpg',
      caracteristicas1: '• Respalda el sistema inmunitario con el poder de 4Life® Transfer Factor Plus® Tri-Factor® Formula*',
      caracteristicas2: ' • Respalda una piel saludable*',
      caracteristicas3: ' • Promueve huesos y articulaciones saludables*',
      caracteristicas4: ' • Provee una mezcla potente de antioxidantes*',
      linea: 'transfer',
    },

{
      nombre: 'RiteStart® Niños y Adolescentes',
      pvp: '$277.000,00',
      precio: '$208.000,00',
      imagen: 'assets/img/Rite-Start-Kids-1.jpg',
      caracteristicas1: '• Respalda los huesos fuertes, la función muscular y la visión saludable*',
      caracteristicas2: ' • Contiene 22 vitaminas y minerales esenciales*',
      caracteristicas3: ' • Promueve la función de las células inmunitarias asesinas naturales con 4Life Transfer Factor® Tri-Factor® Tri-Factor® Formula*',
      caracteristicas4: '• Aporta vitaminas y minerales esenciales para ayudar a garantizar que los niños y adolescentes reciban la nutrición necesaria para el crecimiento adecuado y la salud general*',
      linea: 'transfer',
    },

{
      nombre: 'Transfer Factor® Chewable Formula',
      pvp: '$191.500,00',
      precio: '$144.000,00',
      imagen: 'assets/img/Chewable-1.jpg',
      caracteristicas1: '• Educa, fortalece y balancea el sistema inmunitario con la exclusiva Tri-Factor Formula*',
      caracteristicas2: ' • Representa una excelente opción para quienes prefieren no tomar cápsulas',
      caracteristicas3: ' • Tiene un delicioso sabor cítrico cremoso',
      caracteristicas4: '• Contiene 4Life Transfer Factor® certificado para aumentar el cociente intelectual de tu sistema inmunitario®*',
      linea: 'transfer',
    },

{
      nombre: 'Transfer Factor™ RenewAll™',
      pvp: '$191.500,00',
      precio: '$144.000,00',
      imagen: 'assets/img/RenewAll.jpg',
      caracteristicas1: '• Contiene ingredientes que promueven una piel hermosa',
      caracteristicas2: ' • Incluye sábila, romero, manzanilla y lavanda',
      linea: 'transfer',
    },

{
      nombre: 'Transfer Factor Cardio',
      pvp: '$310.500,00',
      precio: '$233.000,00',
      imagen: 'assets/img/TF-Cardio-1.jpg',
      caracteristicas1: '• Contiene 4Life Transfer Factor® certificado para educar las células inmunitarias*',
      caracteristicas2: '• Respalda las funciones cardiovasculares y los niveles saludables de colesterol que ya están en un rango normal*',
      caracteristicas3: ' • Contiene una mezcla cardiovascular exclusiva de coenzima Q-10, ginkgo biloba, ajo, extracto de levadura de arroz rojo y aceite de jengibre*',
      linea: 'targeted',
    },

{
      nombre: 'Transfer Factor® ReCall®',
      pvp: '$297.000,00',
      precio: '$223.000,00',
      imagen: 'assets/img/TF-Recall-1.jpg',
      caracteristicas1: '•Contiene 4Life Transfer Factor® certificado para educar las células inmunitarias*',
      caracteristicas2: '•Promueve la función saludable del cerebro a través del respaldo de la circulación de la sangre*',
      caracteristicas3: '•Contiene ingredientes comprobados para respaldar la salud del cerebro, tales como vinpocetina, Huperzi serrata, Bacopa monnieri y Ginkgo biloba*',
      linea: 'targeted',
    },

{
      nombre: 'Glutamine Prime®',
      pvp: '$224.000,00',
      precio: '$168.000,00',
      imagen: 'assets/img/Glutamine-Prime-1.jpg',
      caracteristicas1: '•Abastece de energía a las células inmunitarias con glutamina, un importante aminoácido*',
      caracteristicas2: '•Mejora la comunicación entre las células inmunitarias con el extracto de NanoFactor® para una respuesta inmunitaria más coordinada en ocasiones de estrés*',
      caracteristicas3: '•Provee respaldo inmune sinérgico cuando se toma con otros productos 4Life Transfer Factor®*',
      linea: 'targeted',
    },

{
      nombre: ' Transfer Factor® KBU®',
      pvp: '$284.000,00',
      precio: '$213.000,00',
      imagen: 'assets/img/TF-KBU-1.jpg',
      caracteristicas1: ' •Contiene 4Life Transfer Factor® certificado para educar las células inmunitarias*',
      caracteristicas2: ' •Respalda la vejiga con ingredientes limpiadores como arándano, moras azules, lingonberry y manosa*',
      caracteristicas3: ' •Respalda la salud de los riñones y las funciones del tracto urinario con hojas de diente de león, baya de enebro, chanca piedra, varuna y IP-6*',
      linea: 'targeted',
    },


{
      nombre: ' Transfer Factor® MalePro®',
      pvp: '$284.000,00',
      precio: '$213.000,00',
      imagen: 'assets/img/TF-Malepro-1.jpg',
      caracteristicas1: ' • Contiene 4Life Transfer Factor® certificado para educar las células inmunitarias*',
      caracteristicas2: ' •Respalda la salud de la próstata con una mezcla sinérgica de palma enana Americana, licopeno, isoflavones, extracto de broccoli y antioxidantes*',
      linea: 'targeted',
    },

{
      nombre: ' Transfer Factor® Glucoach®',
      pvp: '$223.800,00',
      precio: '$168.000,00',
      imagen: 'assets/img/Glucoach-1.jpg',
      caracteristicas1: ' •Contiene 4Life Transfer Factor® certificado para educar las células inmunitarias*',
      caracteristicas2: ' •Incluye minerales, hierbas y fitonutrientes para respaldar la producción saludable de las hormonas, los niveles saludables de la glucosa y la salud pancreática*',
      caracteristicas3: ' •Respalda la habilidad del cuerpo de metabolizar la glucosa y mantener los niveles saludables del azúcar en la sangre*',
      linea: 'targeted',
    },

{
      nombre: ' Transfer Factor® Belle Vie®',
      pvp: '$211.400,00',
      precio: '$159.000,00',
      imagen: 'assets/img/TF-Belle-Vie-1.jpg',
      caracteristicas1: ' • Contiene 4Life Transfer Factor® certificado para educar las células inmunitarias, y promover el crecimiento y funcionamiento saludable de las células*',
      caracteristicas2: ' • Incluye una mezcla de antioxidantes herbarios, fitoestrógenos, índoles y calcio d-glucarato para respaldar el sistema endocrino de las mujeres*',
      caracteristicas3: '• Promueve la salud general del sistema reproductor femenino*',
      linea: 'targeted',
    },

{
      nombre: ' Transfer Factor® Vistari®',
      pvp: '$208.000,00',
      precio: '$156.000,00',
      imagen: 'assets/img/Vistari.jpg',
      caracteristicas1: '•Contiene 4Life Transfer Factor® certificado para educar a las células inmunitarias*',
      caracteristicas2: ' •Incluye ingredientes como luteína y zeaxantina para ayudar a reducir los efectos oxidativos del sol y la exposición excesiva a la luz azul en la mácula de los ojos*',
      caracteristicas3: '•Promueve las funciones saludables de los ojos, incluyendo la agudeza visual y la nitidez*',
      linea: 'targeted',
    },

{
      nombre: ' Transfer Factor® Colageno',
      pvp: '$219.000,00',
      precio: '$164.000,00',
      imagen: 'assets/img/Colageno.jpg',
      caracteristicas1: '• Ayuda a reponer los niveles de colágeno para respaldar las articulaciones, los músculos y la piel saludables*',
      caracteristicas2: ' • Respalda la función del sistema inmunitario con 4Life Transfer Factor*',
      caracteristicas3: '• Proporciona respaldo para un envejecimiento saludable de todo el cuerpo con un refrescante sabor a fresa y mango*',
      caracteristicas4: '• Evaluado clínicamente para mejorar la hidratación de la piel, la firmeza, las líneas finas y las arrugas en adultos saludables*',
      linea: 'targeted',
    }, 
{
      nombre: ' Transfer Factor® BCV',
      pvp: '$219.000,00',
      precio: '$164.000,00',
      imagen: 'assets/img/BCV.jpg',
      caracteristicas1: '• Contiene 4Life Transfer Factor® certificado para educar las células inmunitarias*',
      caracteristicas2: ' • Respalda las funciones cardiovasculares y los niveles saludables de colesterol que ya están en un rango normal*',
      linea: 'targeted',
    }, 

    {
      nombre: ' BioEFA™ with CLA',
      pvp: '$169.000,00',
      precio: '$127.000,00',
      imagen: 'assets/img/Bioefa-1.jpg',
      caracteristicas1: '• Contiene potentes ácidos grasos omega-3 y omega-6 provenientes de aceite de pescado, aceite de semilla de borraja, aceite de linaza aceite de girasol',
      caracteristicas2: '• Promueve la salud general del sistema cardiovascular y las membranas celulares fuertes*',
      caracteristicas3: '• Respalda la salud del sistema circulatorio y cardiovascular*',
      caracteristicas4: ' • Incluye 1,000 mg de aceite de pescado por porción',
      linea: 'bienestar',
    }, 

{
      nombre: ' Bountiful Harvest',
      pvp: '$224.000,00',
      precio: '$168.000,00',
      imagen: 'assets/img/Bountiful-Harvest-Plus-1.jpg',
      caracteristicas1: '• Contiene concentrados densos en nutrientes provenientes de alga verde-azul y espirulina',
      caracteristicas2: ' • Provee concentrados de vitaminas, minerales y otros fitonutrientes',
      caracteristicas3: '• Contiene propiedades de formación alcalina que ayudan a balancear los niveles del pH*',
      linea: 'bienestar',
    }, 

{
      nombre: ' BioEFA™',
      pvp: '$92.000,00',
      precio: '$69.100,00',
      imagen: 'assets/img/Bioefa-Colombia.jpg',
      caracteristicas1: '• Promueve la salud general del sistema cardiovascular y las membranas celulares fuertes*',
      caracteristicas2: '• Respalda la salud del sistema circulatorio y cardiovascular*',
      linea: 'bienestar',
    }, 

{
      nombre: ' Flex4Life® – cápsulas',
      pvp: '$217.000,00',
      precio: '$163.000,00',
      imagen: 'assets/img/Flex-capsulas-1.jpg',
      caracteristicas1: '• Respalda tejido articular saludable, y la flexibilidad de las coyunturas en general*',
      caracteristicas2: ' • Ayuda a mantener la movilidad para un rango de movimiento más completo*',
      caracteristicas3: '• Respalda la salud de los músculos y las coyunturas*',
      caracteristicas4: ' • Ahora contiene Terminalia chebula, ácido hialurónico y cúrcuma, los cuales han demostrado respaldar la función saludable de las rodillas en adultos activos durante los estudios clínicos*',
      linea: 'bienestar',
    },

{
      nombre: ' Flex4Life™ – crema',
      pvp: '$162.000,00',
      precio: '$122.000,00',
      imagen: 'assets/img/Flex-crema-1.jpg',
      caracteristicas1: '• Combina mentol, extracto de menta y vitamina E natural',
      caracteristicas2: ' • Ofrece respaldo para los músculos y las articulaciones cuando lo combinas con las Flex4Life® cápsulas*',
      caracteristicas3: '• Provee una mezcla tópica calmante',
      linea: 'bienestar',
    },

{
      nombre: ' BioGenistein Ultra®',
      pvp: '$197.000,00',
      precio: '$148.000,00',
      imagen: 'assets/img/Biogenistein-Ultra-1.jpg',
      caracteristicas1: '• Contiene isoflavonas de soya, cohosh negro y árbol casto para promover la salud femenina y los niveles hormonales saludables*',
      caracteristicas2: ' • Respalda un estado de ánimo positivo con cohosh negro, l-teanina y árbol casto*',
      caracteristicas3: '• Provee respaldo antioxidante con quercetina y cúrcuma*',
      linea: 'bienestar',
    },

{
      nombre: ' CM Super™',
      pvp: '$150.000,00',
      precio: '$113.000,00',
      imagen: 'assets/img/CM-Super-1.jpg',
      caracteristicas1: '• Contiene una poderosa ración diaria de más de 600 mg de calcio, 2000 IU de vitamina D y 270 mg de magnesio',
      caracteristicas2: ' • Respalda el crecimiento y la salud de los huesos en las personas de todas las edades*',
      caracteristicas3: '• Provee cuatro fuentes de calcio',
      linea: 'bienestar',
    },

{
      nombre: ' Fibro AMJ® Fórmula Diurna',
      pvp: '$193.000,00',
      precio: '$145.000,00',
      imagen: 'assets/img/Fibro-AMJ-1.jpg',
      caracteristicas1: '• Contiene poderosos metabolitos—magnesio y ácido málico—para respaldar la producción de energía*',
      caracteristicas2: ' • Incluye clorhidrato de glucosamina y and metilsulfonilmetano (MSM) para el respaldo de las articulaciones*',
      caracteristicas3: '• Incluye Boswellia serrata para respaldo adicional*',
      linea: 'bienestar',
    },

{
      nombre: ' SleepRite AMJ®',
      pvp: '$193.000,00',
      precio: '$145.000,00',
      imagen: 'assets/img/SleepRite-AMJ-1.jpg',
      caracteristicas1: '• Contiene raíz valeriana para respaldar el balance del sistema nervioso*',
      caracteristicas2: ' • Incluye menta para aliviar el malestar del estómago asociado con el estrés*',
      caracteristicas3: '• Provee respaldo esencial para manejar cómodamente el estrés diario*',
      linea: 'bienestar',
    },

{
      nombre: ' Multiplex™',
      pvp: '$169.000,00',
      precio: '$127.000,00',
      imagen: 'assets/img/Multiplex-1.jpg',
      caracteristicas1: '• Contiene 21 vitaminas y minerales esenciales para la salud y el bienestar general*',
      caracteristicas2: '• Contiene extractos herbales y bioflavonoides cítricos para impulsar los niveles de energía*',
      caracteristicas3: '• Provee una alta cantidad de las esenciales vitaminas B*',
      linea: 'bienestar',
    },

{
      nombre: ' MusculoSkeletal Formula™',
      pvp: '$184.000,00',
      precio: '$138.000,00',
      imagen: 'assets/img/Musculo-Skeletal-1.jpg',
      caracteristicas1: '• Contiene ingredientes claves que respaldan la reparación de los músculos*',
      caracteristicas2: '• Incluye ingredientes que respaldan los tejidos suaves de los músculos, tendones, ligamentos y nervios sobrecargados*',
      caracteristicas3: '• Provee respaldo nutricional para el sistema estructural*',
      linea: 'bienestar',
    },

{
      nombre: ' Stress Formula™',
      pvp: '$169.000,00',
      precio: '$127.000,00',
      imagen: 'assets/img/Stress-Formula-1.jpg',
      caracteristicas1: '• Contiene raíz valeriana para respaldar el balance del sistema nervioso*',
      caracteristicas2: '• Incluye menta para aliviar el malestar del estómago asociado con el estrés*',
      caracteristicas3: '• Provee respaldo esencial para manejar cómodamente el estrés diario*',
      linea: 'bienestar',
    },

{
      nombre: 'Gurmar',
      pvp: '$162.000,00',
      precio: '$122.000,00',
      imagen: 'assets/img/Gurmar-1.jpg',
      caracteristicas1: '• Respalda el sistema endocrino para balancear los niveles saludables de glucosa en el cuerpo*',
      caracteristicas2: '• Ofrece gurmar, o Gymnema sylvestre, para ayudar a mantener los niveles saludables de glucosa*',
      linea: 'bienestar',
    },

{
      nombre: ' Inner Sun®',
      pvp: '$193.000,00',
      precio: '$145.000,00',
      imagen: 'assets/img/Inner-Sun-1.jpg',
      caracteristicas1: '• Contiene una mezcla de hierba de San Juan, manzanilla, romero y Espino para promover un estado de ánimo positivo*',
      caracteristicas2: '• Incluye un potente complejo de vitamina B para respaldar los niveles de energía saludables*',
      linea: 'bienestar',
    },

{
      nombre: ' Life C®',
      pvp: '$150.000,00',
      precio: '$113.000,00',
      imagen: 'assets/img/Life-C-1.jpg',
      caracteristicas1: '• Contiene siete formas activas de vitamina C natural',
      caracteristicas2: '• Respalda las funciones antioxidantes y el funcionamiento saludable de varios sistemas del cuerpo*',
      caracteristicas3: '• Promueve la salud del tejido de la encía y cicatrización de las heridas*',
      linea: 'bienestar',
    },

{
      nombre: ' Choice 50®',
      pvp: '$217.000,00',
      precio: '$163.000,00',
      imagen: 'assets/img/Choice-50-1.jpg',
      caracteristicas1: '• Ofrece una mezcla de potentes antioxidantes, incluyendo extracto de semillas de uva*',
      caracteristicas2: '• Respalda la salud del sistema cardiovascular y circulatorio*',
      caracteristicas3: '• Provee respaldo adicional para las articulaciones, los músculos, el cerebro y los ojos*',
      linea: 'bienestar',
    },

{
      nombre: ' Male Formula™',
      pvp: '$169.000,00',
      precio: '$127.000,00',
      imagen: 'assets/img/Male-Formula-1.jpg',
      caracteristicas1: '• Respalda las funciones sexuales saludables, los niveles de energía y la fuerza*',
      caracteristicas2: '• Contiene zinc para las necesidades nutricionales únicas de los hombres*',
      caracteristicas3: '• Incluye Tribulus terrestris para respaldo antioxidante*',
      linea: 'bienestar',
    },

{
      nombre: ' Aloe Vera',
      pvp: '$230.000,00',
      precio: '$173.000,00',
      imagen: 'assets/img/Aloe-Vera-1.jpg',
      caracteristicas1: '• Respalda la recuperación de las dietas desintoxicantes y de las limpiezas intestinales con electrolitos y una mayor absorción de vitaminas*',
      caracteristicas2: '• Promueve el funcionamiento gastrointestinal saludable*',
      caracteristicas3: '• Promueve el funcionamiento saludable del sistema inmunitario*',
      linea: 'digestiva',
    },

{
      nombre: ' Pre/o Biotics™',
      pvp: '$237.000,00',
      precio: '$178.000,00',
      imagen: 'assets/img/Preobiotics-1.jpg',
      caracteristicas1: '• Promueve el crecimiento de la flora intestinal beneficiosa con cinco cepas de probióticos ampliamente investigados*',
      caracteristicas2: '• Contiene tres tipos de prebióticos para optimizar el crecimiento de los probióticos saludables*',
      caracteristicas3: '• Estimula el crecimiento de los probióticos encontrados en Pre/o Biotics™ hasta por un 868% con la incorporación deTri-Factor® Formula*',
      caracteristicas4: ' • Aumenta la cantidad y longevidad de la flora intestinal beneficiosa hasta 1000 veces más que una administración estándar*',
      linea: 'digestiva',
    },

{
      nombre: 'Digestive Enzymes',
      pvp: '$197.000,00',
      precio: '$148.000,00',
      imagen: 'assets/img/Enzimas-Digestivas-1.jpg',
      caracteristicas1: '• Respalda la digestión saludable de la comida*',
      caracteristicas2: '• Reduce las molestias asociadas con la digestión de la comida*',
      caracteristicas3: '• Respalda la salud digestiva en general*',
      linea: 'digestiva',
    },

{
      nombre: 'Super Detox®',
      pvp: '$193.000,00',
      precio: '$145.000,00',
      imagen: 'assets/img/Super-Detox-1.jpg',
      caracteristicas1: '• Incluye cardo de leche, conocido por el respaldo ofrecido para la función del hígado*',
      caracteristicas2: '• Contiene trébol rojo y alcachofa para ayudar en la desintoxicación y fortalecimiento del hígado*',
      caracteristicas3: '• Provee respaldo antioxidante a través del N-acetil cisteína (NAC)*',
      linea: 'digestiva',
    },

{
      nombre: 'Fibre System Plus™',
      pvp: '$184.000,00',
      precio: '$138.000,00',
      imagen: 'assets/img/Fibre-System-Plus-1.jpg',
      caracteristicas1: '• Contiene 24 ingredientes herbales para proveer una limpieza y purificación intestinal profunda pero placentera*',
      caracteristicas2: '• Provee una excelente limpieza gastrointestinal para comenzar cualquier régimen nutricional*',
      caracteristicas3: '• Contiene cáscara sagrada, frángula, ciruelas pasa, piña, papaína y bromelaina',
      linea: 'digestiva',
    },

{
      nombre: 'Fibre System™',
      pvp: '$126.700,00',
      precio: '$95.000,00',
      imagen: 'assets/img/Fibre-System-Colombia.jpg',
      caracteristicas1: '• Provee una excelente limpieza gastrointestinal para comenzar cualquier régimen nutricional*',
      linea: 'digestiva',
    },

{
      nombre: 'PhytoLax®',
      pvp: '$169.000,00',
      precio: '$127.000,00',
      imagen: 'assets/img/Phytolax-1.jpg',
      caracteristicas1: '• Contiene hierbas como la cáscara sagrada y jengibre para activar la eliminación digestiva de forma segura*',
      caracteristicas2: '• Promueve la regularidad saludable*',
      caracteristicas3: '• Contiene cáscara sagrada, frángula, ciruelas pasa, piña, papaína y bromelaina',
      linea: 'digestiva',
    },

{
      nombre: 'Tea4Life®',
      pvp: '$157.000,00',
      precio: '$118.000,00',
      imagen: 'assets/img/Tea-4Life-1.jpg',
      caracteristicas1: '• Contiene hierbas para respaldar la salud del colon*',
      caracteristicas2: '• Ofrece una alternativa herbal para una limpieza intestinal saludable*',
      caracteristicas3: '• Posee un agradable sabor a manzana y canela sin colorantes, saborizantes, ni edulcorantes artificiales',
      linea: 'digestiva',
    },

{
      nombre: ' NutraStart®',
      pvp: '$158.700,00',
      precio: '$119.000,00',
      imagen: 'assets/img/NutraStart-chocolate-1.jpg',
      caracteristicas1: ' • Provee una nutrición balanceada para respaldar un sistema de control de peso saludable*',
      caracteristicas2: ' • Incluye 4Life Transfer Factor® para respaldar el sistema inmunitario*',
      linea: 'peso',
    },

{
      nombre: 'MetaboLite™',
      pvp: '$184.000,00',
      precio: '$138.000,00',
      imagen: 'assets/img/Metabolite-1.jpg',
      caracteristicas1: '• Promueve una tiroides saludable*',
      caracteristicas2: '• Contiene enzimas de papaya y piña para respaldar las funciones del sistema digestivo*',
      caracteristicas3: '• Incluye una gran variedad de fitonutrientes provenientes de espirulina para nutrir las células*',
      linea: 'peso',
    },

{
      nombre: 'ChitoLite®',
      pvp: '$169.000,00',
      precio: '$127.000,00',
      imagen: 'assets/img/Chitolite-1.jpg',
      caracteristicas1: '• Respalda el control de peso al comprimir la grasa antes de que tu cuerpo la absorba*',
      caracteristicas2: '• Incorpora tecnología patentada para comprimir una cantidad significativamente mayor de grasa que el quitosano estándar*',
      caracteristicas3: '• Contiene ácido l-ascórbico, ácido eritórbico y aloe vera*',
      linea: 'peso',
    },
{
      nombre: 'Energy Go Stix®',
      pvp: '$193.700,00',
      precio: '$145.000,00',
      imagen: 'assets/img/Energy-1.jpg',
      caracteristicas1: '• Impulsa los niveles saludables de energía con una mezcla sinérgica de aminoácidos, hierba mate, extracto de té verde y tres formas de ginseng*',
      caracteristicas2: '• Contiene 4Life Transfer Factor® para respaldar al sistema inmunitario*',
      caracteristicas3: '• Respalda la memoria, el estado de alerta y el estado de ánimo*',
      linea: 'peso',
    },

{
      nombre: 'PRO – TF ®',
      pvp: '$307.900,00',
      precio: '$231.000,00',
      imagen: 'assets/img/Pro-Tf-Colombia.jpg',
      caracteristicas1: '• Provee 10 gramos de la Fórmula Proteínica 4LifeTransform® con patente pendiente, una de las proteínas más avanzadas y efectivas disponibles para ayudarte a transformar tu cuerpo, optimizar tu rendimiento y promover la salud*',
      caracteristicas2: '• Reduce los antojos hasta por un 62% hasta por tres horas*',
      caracteristicas3: '• Estimula los marcadores de la quema de grasa de las “grasas malas” acumuladas por hasta por un 564% hasta por tres horas*',
      linea: 'transform',
    },

{
      nombre: 'Transfer Factor Renuvo®',
      pvp: '$227.000,00',
      precio: '$170.200,00',
      imagen: 'assets/img/Renuvo-Colombia.jpg',
      caracteristicas1: '• Promueve el envejecimiento saludable, la agudeza mental saludable y la recuperación total del cuerpo*',
      caracteristicas2: '• Promueve la vitalidad sexual saludable y la energía*',
      caracteristicas3: '• Provee respaldo para una respuesta más juvenil a los estresantes diarios, como una dieta no saludable, ejercicio intenso o estrés mental*',
      linea: 'transform',
    },

{
      nombre: 'Transform Burn®',
      pvp: '$284.000,00',
      precio: '$213.000,00',
      imagen: 'assets/img/Burn-1.jpg',
      caracteristicas1: '• Respalda una forma acelerada para la transformación de tu cuerpo al impulsar la quema de grasas y disminuir el apetito*',
      caracteristicas2: '• Ayuda a los adultos de todas las edades a alcanzar un cuerpo más delgado, esbelto y saludable*',
      caracteristicas3: '• Provee respaldo energético para impulsar tu rutina de ejercicios para lograr un desempeño óptimo*',
      caracteristicas4: ' • Acelera el metabolismo y duplica la habilidad de tu cuerpo para quemar grasas*',
      linea: 'transform',
    },

{
      nombre: 'Transform® Hombre',
      pvp: '$224.000,00',
      precio: '$168.000,00',
      imagen: 'assets/img/Man-1.jpg',
      caracteristicas1: '• Respalda el rendimiento sexual saludable*',
      caracteristicas2: '• Aumenta la resistencia física*',
      caracteristicas3: '• Promueve la masa y la fuerza muscular*',
      caracteristicas4: ' • Respalda los niveles saludables de testosterona*',
      linea: 'transform',
    },

{
      nombre: 'Transform® Mujer',
      pvp: '$224.000,00',
      precio: '$168.000,00',
      imagen: 'assets/img/Woman-1.jpg',
      caracteristicas1: '• Respalda la transformación del cuerpo para una vida más juvenil y activa*',
      caracteristicas2: '• Diseñado específicamente para la mujer',
      caracteristicas3: '• Promueve la libido saludable, la intimidad sexual y los niveles hormonales saludables*',
      caracteristicas4: ' • Respalda un cuerpo energético y una vida gratificante*',
      linea: 'transform',
    },

    {
      nombre: 'Premier Pack Plus',
      pvp: '$614.200,00',
      precio: '$461.000,00',
      imagen: 'assets/img/Premier-pack-plus.jpg',
      linea: 'promo',
    },

{
      nombre: 'Rio Vida Plus Premier',
      pvp: '$626.800,00',
      precio: '$470.100,00',
      imagen: 'assets/img/Riovida-Plus-Premier.jpg',
      linea: 'promo',
    },

{
      nombre: 'Factor mas Premier',
      pvp: '$666.400,00',
      precio: '$499.800,00',
      imagen: 'assets/img/Factor-mas-premier.jpg',
      linea: 'promo',
    },

{
      nombre: 'Factor Plus Energy Premier',
      pvp: '$690.300,00',
      precio: '$517.700,00',
      imagen: 'assets/img/Factor-plus-energy-premier.jpg',
      linea: 'promo',
    },

{
      nombre: 'Pack Mejorado Premier',
      pvp: '$642.700,00',
      precio: '$482.000,00',
      imagen: 'assets/img/Pack-Mejorado-Premier.jpg',
      linea: 'promo',
    },

{
      nombre: 'Flash Promo',
      pvp: '$437.300,00',
      precio: '$422.450,00',
      imagen: 'assets/img/Flash-Promo.jpg',
      linea: 'promo',
    },




  ];


constructor() {
    console.log('servicio listo');
  }

  getProducto() {
    return this.productos;
  }
}

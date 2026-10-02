// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBdTB2dCQsiNf8b5Gw61jcTOpk3XGNPJ0",
  authDomain: "teste-e0766.firebaseapp.com",
  projectId: "teste-e0766",
  storageBucket: "teste-e0766.firebasestorage.app",
  messagingSenderId: "892039215513",
  appId: "1:892039215513:web:ea7c7661a4c64b73123b08",
  measurementId: "G-6K3RB02QZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// WORLD FOOTBALL - V2.0
// Carreira + 10 países da CONMEBOL + Copa Libertadores + Copa Sul-Americana
// + mercado + negociações + salários + contratos + empréstimos + base + evolução + IA
// ===== NOMES =====
const names=["João Pedro","Lucas Silva","Gabriel Santos","Matheus Costa","Pedro Henrique","Rafael Mendes","André Luiz","Caio Martins","Miguel Rocha","Arthur Lima","Davi Souza","Henrique Alves","Enzo Martins","Guilherme Costa","Samuel Dias","Vitor Hugo","Leonardo Alves","Murilo Santos",
"Facundo Torres","Nicolás Fernández","Matías González","Joaquín Correa","Tomás Rodríguez","Agustín Romero","Franco Díaz","Emiliano Ríos","Bruno Herrera","Sebastián Vera","Cristian Morales","Diego Castro","Iván Flores","Patricio Reyes","Maximiliano Ortiz","Rodrigo Silva","Esteban Molina","Camilo Vargas","Julián Peña","Andrés Gómez","Felipe Rojas","Santiago Medina"];
const positions=["GOL","LD","ZAG","LE","VOL","MC","MEI","PD","PE","ATA"];
// Elenco completo: 3 goleiros, defesa e meio com reservas, ataque com opções — 25 jogadores por clube.
const squadTemplate=["GOL","GOL","GOL","ZAG","ZAG","ZAG","ZAG","LD","LD","LE","LE","VOL","VOL","MC","MC","MEI","MEI","MEI","PD","PD","PE","PE","ATA","ATA","ATA"];

// ===== PAÍSES E CLUBES (CONMEBOL) =====
// Temporada-base: 2026. As ligas abaixo usam os participantes da temporada 2026.
// Os ratings/orçamentos são parâmetros do jogo, não valores oficiais.
const countries=[
 {id:1,name:"Brasil",flag:"🇧🇷"},
 {id:2,name:"Argentina",flag:"🇦🇷"},
 {id:3,name:"Uruguai",flag:"🇺🇾"},
 {id:4,name:"Chile",flag:"🇨🇱"},
 {id:5,name:"Colômbia",flag:"🇨🇴"},
 {id:6,name:"Paraguai",flag:"🇵🇾"},
 {id:7,name:"Equador",flag:"🇪🇨"},
 {id:8,name:"Peru",flag:"🇵🇪"},
 {id:9,name:"Bolívia",flag:"🇧🇴"},
 {id:10,name:"Venezuela",flag:"🇻🇪"}
];

const leagueTeams={
 1:["Athletico-PR","Atlético-MG","Bahia","Botafogo","Chapecoense","Corinthians","Coritiba","Cruzeiro","Flamengo","Fluminense","Grêmio","Internacional","Mirassol","Palmeiras","Red Bull Bragantino","Remo","Santos","São Paulo","Vasco da Gama","Vitória"],
 2:["Aldosivi","Argentinos Juniors","Atlético Tucumán","Banfield","Barracas Central","Belgrano","Boca Juniors","Central Córdoba","Defensa y Justicia","Estudiantes de La Plata","Estudiantes de Río Cuarto","Gimnasia de La Plata","Gimnasia de Mendoza","Godoy Cruz","Huracán","Independiente","Independiente Rivadavia","Instituto","Lanús","Newell's Old Boys","Platense","Racing Club","River Plate","Rosario Central","San Lorenzo","San Martín de San Juan","Sarmiento","Talleres","Tigre","Unión"],
 3:["Peñarol","Nacional","Racing","Defensor Sporting","Boston River","Cerro Largo","Cerro","Danubio","Deportivo Maldonado","Juventud","Liverpool","Montevideo City Torque","Albion","Central Español","Progreso","Wanderers"],
 4:["Colo-Colo","Universidad de Chile","Universidad Católica","Palestino","Audax Italiano","Everton","Huachipato","O'Higgins","Cobresal","Coquimbo Unido","Unión La Calera","Unión Española","Ñublense","Deportes Limache","La Serena","Deportes Concepción"],
 5:["Atlético Nacional","Millonarios","Junior","América de Cali","Deportivo Cali","Independiente Santa Fe","Deportes Tolima","Once Caldas","Atlético Bucaramanga","Deportivo Pasto","La Equidad","Envigado","Alianza FC","Fortaleza CEIF","Boyacá Chicó","Cúcuta Deportivo","Independiente Medellín","Jaguares de Córdoba","Llaneros","Real Cundinamarca"],
 6:["Olimpia","Cerro Porteño","Libertad","Guaraní","Nacional","Sportivo Luqueño","Sol de América","Sportivo Trinidense","Sportivo Ameliano","General Caballero JLM","2 de Mayo","Recoleta"],
 7:["Barcelona SC","Emelec","LDU Quito","Independiente del Valle","Aucas","Universidad Católica","Deportivo Cuenca","Delfín","El Nacional","Macará","Mushuc Runa","Orense","Técnico Universitario","Manta","Libertad FC","Guayaquil City"],
 8:["Universitario","Alianza Lima","Sporting Cristal","Melgar","Cienciano","Sport Boys","ADT","Alianza Atlético","Atlético Grau","Comerciantes Unidos","Cusco FC","Deportivo Garcilaso","Deportivo Moquegua","FC Cajamarca","Juan Pablo II College","Los Chankas","Sport Huancayo","UTC"],
 9:["Always Ready","The Strongest","Bolívar","Aurora","Oriente Petrolero","Blooming","Independiente Petrolero","Nacional Potosí","San Antonio Bulo Bulo","ABB","Real Potosí","Universitario de Vinto","Totora Real Oruro","Gualberto Villarroel San José","Real Tomayapo","Guabirá"],
 10:["Metropolitanos","Deportivo Táchira","Deportivo La Guaira","Universidad Central de Venezuela","Carabobo","Portuguesa","Academia Puerto Cabello","Estudiantes de Mérida","Caracas","Monagas","Zamora","Rayo Zuliano","Trujillanos","Anzoátegui"]
};

const strengthSeed={
 "Flamengo":87,"Palmeiras":86,"Atlético-MG":82,"Botafogo":81,"Fluminense":80,"São Paulo":80,"Corinthians":78,"Grêmio":78,"Internacional":78,"Cruzeiro":77,"Bahia":77,
 "River Plate":87,"Boca Juniors":86,"Racing Club":80,"Independiente":78,"San Lorenzo":77,"Estudiantes de La Plata":78,"Talleres":77,"Vélez Sarsfield":77,
 "Peñarol":82,"Nacional":82,"Defensor Sporting":75,"Liverpool":73,"Wanderers":72,
 "Colo-Colo":81,"Universidad de Chile":80,"Universidad Católica":79,"Palestino":74,"Everton":73,
 "Atlético Nacional":81,"Millonarios":80,"Junior":77,"América de Cali":76,"Independiente Santa Fe":76,
 "Olimpia":80,"Cerro Porteño":79,"Libertad":77,"Guaraní":74,
 "Barcelona SC":80,"LDU Quito":80,"Emelec":78,"Independiente del Valle":79,
 "Universitario":80,"Alianza Lima":79,"Sporting Cristal":78,"Melgar":74,
 "Always Ready":77,"The Strongest":77,"Bolívar":78,
 "Metropolitanos":76,"Deportivo Táchira":77,"Deportivo La Guaira":74,"Carabobo":73
};

function buildClubData(){
 const out={};
 countries.forEach(c=>{
   out[c.id]=leagueTeams[c.id].map((name,i)=>{
     const rating=strengthSeed[name] ?? clamp(75-Math.floor(i*.45),65,76);
     const money=Math.round(Math.max(3500000,rating*rating*12000)*(name===leagueTeams[c.id][0]?1.15:1));
     const rep=clamp(Math.round(rating*.98),50,92);
     return [name,rating,money,rep];
   });
 });
 return out;
}
const clubData=buildClubData();

// Jogadores-referência (nomes reais e conhecidos do futebol sul-americano) para os 2 maiores clubes de cada país.
// Formato: clubIndex(0 ou 1 dentro do país) -> lista de {name,pos}
const marqueeByCountry={
 1:[[{name:"Arrascaeta",pos:"MEI"},{name:"Gerson",pos:"MC"}],[{name:"Raphael Veiga",pos:"MEI"},{name:"Gustavo Gómez",pos:"ZAG"}]],
 2:[[{name:"Franco Armani",pos:"GOL"},{name:"Paulo Díaz",pos:"ZAG"}],[{name:"Edinson Cavani",pos:"ATA"},{name:"Frank Fabra",pos:"LE"}]],
 3:[[{name:"Jaime Báez",pos:"MEI"}],[{name:"Gonzalo Bergessio",pos:"ATA"}]],
 4:[[{name:"Damián Pizarro",pos:"ATA"}],[{name:"Marcelo Díaz",pos:"MC"}]],
 5:[[{name:"Jéfferson Duque",pos:"ATA"}],[{name:"David Silva",pos:"MEI"}]],
 6:[[{name:"Iván Torres",pos:"ATA"}],[{name:"Ángel Cardozo",pos:"MEI"}]],
 7:[[{name:"Michael Estrada",pos:"ATA"}],[{name:"Djorkaeff Reasco",pos:"LD"}]],
 8:[[{name:"Hernán Barcos",pos:"ATA"}],[{name:"Jesús Castillo",pos:"MC"}]],
 9:[[{name:"Marcelo Moreno",pos:"ATA"}],[{name:"Rodrigo Ramallo",pos:"MEI"}]],
 10:[[{name:"Yeferson Soteldo",pos:"MEI"}],[{name:"Jhon Murillo",pos:"ATA"}]]
};

const clubs=[];
countries.forEach(c=>{
 clubData[c.id].forEach((d,i)=>{
   clubs.push({id:c.id*100+(i+1),name:d[0],country:c.name,countryId:c.id,rating:d[1],money:d[2],rep:d[3]});
 });
});

// ===== ESCUDOS OFICIAIS DOS CLUBES =====
// Os escudos são carregados da coleção atual de identidades do FootyLogos.
// A função mantém um fallback visual caso um clube ainda não tenha um arquivo
// disponível na fonte. Assim o jogo nunca fica com um ícone quebrado.
const clubShieldColors={
 "Athletico-PR":["#c8102e","#ffffff"],"Atlético-MG":["#111111","#ffffff"],"Bahia":["#005ca9","#ffffff"],"Botafogo":["#111111","#ffffff"],
 "Chapecoense":["#008f39","#ffffff"],"Corinthians":["#111111","#ffffff"],"Coritiba":["#006b3c","#ffffff"],"Cruzeiro":["#003b8f","#ffffff"],
 "Flamengo":["#c8102e","#111111"],"Fluminense":["#7b1f3a","#008f68"],"Grêmio":["#69b3e7","#111111"],"Internacional":["#c8102e","#ffffff"],
 "Mirassol":["#f4c400","#111111"],"Palmeiras":["#006b3c","#ffffff"],"Red Bull Bragantino":["#e30613","#ffffff"],"Remo":["#003b70","#ffffff"],
 "Santos":["#111111","#ffffff"],"São Paulo":["#e30613","#ffffff"],"Vasco da Gama":["#111111","#ffffff"],"Vitória":["#e30613","#111111"],
 "River Plate":["#ffffff","#d71920"],"Boca Juniors":["#003b70","#f4c400"],"Racing Club":["#75aadb","#ffffff"],"Independiente":["#c8102e","#ffffff"],
 "San Lorenzo":["#0b3d91","#c8102e"],"Estudiantes de La Plata":["#c8102e","#ffffff"],"Talleres":["#0b3d91","#ffffff"],
 "Peñarol":["#111111","#f4c400"],"Nacional":["#003b70","#ffffff"],"Colo-Colo":["#111111","#ffffff"],"Universidad de Chile":["#003b70","#e30613"],
 "Atlético Nacional":["#008f39","#ffffff"],"Millonarios":["#005ca9","#ffffff"],"Junior":["#e30613","#111111"],
 "Olimpia":["#ffffff","#111111"],"Cerro Porteño":["#003b70","#e30613"],"Libertad":["#111111","#ffffff"],
 "Barcelona SC":["#f4c400","#111111"],"Emelec":["#005ca9","#ffffff"],"LDU Quito":["#ffffff","#c8102e"],
 "Universitario":["#c8102e","#f4c400"],"Alianza Lima":["#003b70","#ffffff"],"Sporting Cristal":["#69b3e7","#ffffff"],
 "Always Ready":["#c8102e","#ffffff"],"The Strongest":["#f4c400","#111111"],"Bolívar":["#69b3e7","#ffffff"],
 "Metropolitanos":["#7b1f8a","#ffffff"],"Deportivo Táchira":["#f4c400","#111111"],"Caracas":["#c8102e","#ffffff"]
};

// Slugs conhecidos da fonte de escudos. Para os demais clubes usamos uma
// conversão automática do nome, o que cobre a maior parte dos casos.
const clubShieldSlugOverrides={
 "Athletico-PR":"athletico-paranaense","Atlético-MG":"atletico-mineiro","Red Bull Bragantino":"rb-bragantino",
 "Internacional":"sc-internacional","Mirassol":"mirassol-fc","Remo":"club-de-remo","Santos":"santos-fc","São Paulo":"sao-paulo",
 "River Plate":"river-plate","Boca Juniors":"boca-juniors","Racing Club":"racing-club","Estudiantes de La Plata":"estudiantes-de-la-plata",
 "Newell's Old Boys":"newells-old-boys","Rosario Central":"rosario-central","San Lorenzo":"san-lorenzo","Independiente Rivadavia":"independiente-rivadavia",
 "Estudiantes de Río Cuarto":"estudiantes-de-rio-cuarto","Gimnasia de La Plata":"gimnasia-y-esgrima-la-plata","Gimnasia de Mendoza":"gimnasia-y-esgrima-de-mendoza",
 "Instituto":"instituto-cordoba","San Martín de San Juan":"san-martin-de-san-juan",
 "Racing":"racing-club-de-montevideo","Nacional":"nacional","Liverpool":"liverpool-montevideo","Wanderers":"montevideo-wanderers","Cerro":"ca-cerro",
 "Albion":"albion-football-club","Central Español":"central-espanol-futbol-club",
 "Everton":"everton-de-vina-del-mar","Universidad Católica":"universidad-catolica","Universidad de Chile":"universidad-de-chile",
 "Colo-Colo":"colo-colo","Unión La Calera":"union-la-calera","Unión Española":"union-espanola","Deportes Concepción":"deportes-concepcion","Ñublense":"nublense",
 "Atlético Nacional":"atletico-nacional","Independiente Santa Fe":"independiente-santa-fe","Independiente Medellín":"independiente-medellin","Deportivo Cali":"deportivo-cali",
 "América de Cali":"america-de-cali","Deportes Tolima":"deportes-tolima","Once Caldas":"once-caldas","Atlético Bucaramanga":"atletico-bucaramanga",
 "Deportivo Pasto":"deportivo-pasto","La Equidad":"la-equidad","Cúcuta Deportivo":"cucuta-deportivo","Jaguares de Córdoba":"jaguares-de-cordoba",
 "Olimpia":"olimpia","Cerro Porteño":"cerro-porteno","Libertad":"libertad","Guaraní":"guarani","Nacional":"nacional","Sportivo Luqueño":"sportivo-luqueno",
 "Sol de América":"sol-de-america","Sportivo Trinidense":"sportivo-trinidense","Sportivo Ameliano":"sportivo-ameliano","General Caballero JLM":"general-caballero-jlm","2 de Mayo":"club-sportivo-2-de-mayo","Recoleta":"recoleta-fc",
 "Barcelona SC":"barcelona-sc-guayaquil","Emelec":"cs-emelec","LDU Quito":"ldu-quito","Independiente del Valle":"independiente-del-valle","Aucas":"sd-aucas","Universidad Católica":"universidad-catolica",
 "Deportivo Cuenca":"deportivo-cuenca","Delfín":"delfin-sc","El Nacional":"cd-el-nacional","Macará":"cd-macara","Mushuc Runa":"mushuc-runa","Orense":"orense-sc","Técnico Universitario":"tecnico-universitario","Manta":"manta-fc","Libertad FC":"libertad-fc","Guayaquil City":"guayaquil-city",
 "Universitario":"universitario-peru","Alianza Lima":"alianza-lima","Sporting Cristal":"sporting-cristal","Melgar":"fbc-melgar","Cienciano":"cienciano-del-cusco","Sport Boys":"sport-boys","ADT":"asociacion-deportiva-tarma","Alianza Atlético":"alianza-atletico","Atlético Grau":"atletico-grau","Comerciantes Unidos":"comerciantes-unidos","Cusco FC":"cusco","Deportivo Garcilaso":"deportivo-garcilaso","Deportivo Moquegua":"club-deportivo-moquegua","FC Cajamarca":"fc-cajamarca","Juan Pablo II College":"adc-juan-pablo-ii","Los Chankas":"deportivo-los-chankas","Sport Huancayo":"sport-huancayo","UTC":"utc-cajamarca",
 "Always Ready":"always-ready","The Strongest":"the-strongest","Bolívar":"bolivar","Aurora":"aurora","Oriente Petrolero":"oriente-petrolero","Blooming":"blooming","Independiente Petrolero":"independiente-petrolero","Nacional Potosí":"nacional-potosi","San Antonio Bulo Bulo":"san-antonio-bulo-bulo","ABB":"abb","Real Potosí":"real-potosi","Universitario de Vinto":"universitario-de-vinto","Totora Real Oruro":"totora-real-oruro","Gualberto Villarroel San José":"gualberto-villarroel-san-jose","Real Tomayapo":"real-tomayapo","Guabirá":"guabira",
 "Metropolitanos":"metropolitanos","Deportivo Táchira":"deportivo-tachira","Deportivo La Guaira":"deportivo-la-guaira","Universidad Central de Venezuela":"universidad-central","Carabobo":"carabobo","Portuguesa":"portuguesa","Academia Puerto Cabello":"academia-puerto-cabello","Estudiantes de Mérida":"estudiantes-de-merida","Caracas":"caracas","Monagas":"monagas","Zamora":"zamora","Rayo Zuliano":"rayo-zuliano","Trujillanos":"trujillanos","Anzoátegui":"anzoategui-fc"
};

function shieldInitials(name){
 const clean=String(name||"CLUBE").replace(/[^A-Za-zÀ-ÿ0-9 ]/g," ").trim();
 const parts=clean.split(/\s+/).filter(Boolean);
 if(parts.length===1) return parts[0].slice(0,3).toUpperCase();
 const ignore=new Set(["DE","DA","DO","DOS","DAS","DEL","LA","LE","EL","FC","SC","CLUB","CLUBE","SPORT","SPORTING","RED","BULL"]);
 const useful=parts.filter(p=>!ignore.has(p.toUpperCase()));
 const src=useful.length?useful:parts;
 return src.slice(0,3).map(p=>p[0]).join("").toUpperCase().slice(0,3);
}

function shieldColorFromName(name){
 let h=0; for(const ch of String(name||"")) h=(h*31+ch.charCodeAt(0))>>>0;
 const palette=[["#173f2c","#71e68f"],["#17345f","#69b3e7"],["#5a1d25","#ff7b7b"],["#4b3a12","#f4d35e"],["#252b32","#d9e1e7"],["#43235d","#d7a7ff"]];
 return palette[h%palette.length];
}

function normalizeClubSlug(name){
 const raw=String(name||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"");
 return raw.toLowerCase()
  .replace(/&/g," and ")
  .replace(/['’]/g,"")
  .replace(/\b(fc|sc|clube|club)\b/g,"")
  .replace(/[^a-z0-9]+/g,"-")
  .replace(/^-+|-+$/g,"");
}

function clubShieldSlug(club){
 const name=typeof club === "string" ? club : club?.name;
 const countryId=typeof club === "object" ? club?.countryId : null;
 // Ambiguous names are resolved by country first (e.g. Everton, Nacional, Universidad Católica).
 const countryOverrides={
  "3:Racing":"racing-club-de-montevideo",
  "3:Nacional":"nacional",
  "4:Everton":"everton-de-vina-del-mar",
  "4:Universidad Católica":"universidad-catolica",
  "7:Universidad Católica":"cd-universidad-catolica",
  "6:Nacional":"nacional-paraguay",
  "8:Universitario":"universitario-peru",
  "9:Universitario de Vinto":"universitario-de-vinto"
 };
 return countryOverrides[`${countryId}:${name}`] || clubShieldSlugOverrides[name] || normalizeClubSlug(name);
}

function clubShieldFallback(club,size="sm"){
 // Nunca substitui um escudo oficial por um desenho genérico. Se a fonte falhar,
 // deixamos apenas um espaço transparente para não mostrar o escudo de outro clube.
 return `<span class="club-shield ${size} shield-fallback" aria-hidden="true"></span>`;
}

function clubShield(club,size="sm"){
 if(!club) return clubShieldFallback(club,size);
 const slug=clubShieldSlug(club);
 const src=`https://www.footylogos.com/dls/logo/${slug}.png`;
 const fallback=clubShieldFallback(club,size)
   .replace(/\\/g,"\\\\")
   .replace(/'/g,"\\'")
   .replace(/"/g,"&quot;");
 // O componente contém somente a imagem do escudo; nenhum texto é renderizado junto.
 return `<span class="club-shield-wrap ${size}" aria-hidden="true"><img class="club-shield-official ${size}" src="${src}" alt="" loading="lazy" onerror="this.outerHTML='${fallback}'"></span>`;
}

// ===== CALENDÁRIO OFICIAL / COPAS NACIONAIS 2026 =====
// As datas abaixo são janelas oficiais/publicadas pelas entidades nacionais.
// Quando uma entidade não publica uma data única de início/fim para todo o torneio,
// o jogo mostra a janela/etapa oficial disponível em vez de inventar uma data.
const nationalCompetitions={
 1:{league:"Campeonato Brasileiro Série A",leagueStart:"2026-01-28",leagueEnd:"2026-12-02",cup:"Copa do Brasil",cupStart:"2026-02-18",cupEnd:"2026-12-06",cupFormat:"126 clubes • 9 fases • final em jogo único"},
 2:{league:"Liga Profesional Argentina",leagueStart:"2026-01-22",leagueEnd:"2026-12-13",cup:"Copa Argentina",cupStart:"2026-01-18",cupEnd:"2026-11-04",cupFormat:"mata-mata • final prevista para 04/11"},
 3:{league:"Liga AUF Uruguaya",leagueStart:"2026-02-06",leagueEnd:"2026-11-30",cup:"Copa AUF Uruguay",cupStart:"2026-08-04",cupEnd:null,cupFormat:"40 clubes • fase eliminatória profissional e amadora"},
 4:{league:"Campeonato Nacional de Primera División",leagueStart:null,leagueEnd:null,leagueWindow:"fim de janeiro → início de dezembro de 2026",cup:"Copa Chile",cupStart:null,cupEnd:null,cupFormat:"32 clubes • clubes da Primera División e Primera B"},
 5:{league:"Liga BetPlay Dimayor",leagueStart:null,leagueEnd:null,leagueWindow:"dois torneios: primeiro e segundo semestre de 2026",cup:"Copa BetPlay Dimayor",cupStart:null,cupEnd:null,cupFormat:"fase de grupos + mata-mata"},
 6:{league:"Copa de Primera",leagueStart:"2026-01-23",leagueEnd:"2026-11-30",cup:"Copa Paraguay",cupStart:null,cupEnd:null,cupFormat:"mata-mata nacional"},
 7:{league:"Liga Ecuabet",leagueStart:"2026-02-20",leagueEnd:null,leagueWindow:"fase inicial de 30 datas + fase final em hexagonais/quadrangular",cup:"Copa Ecuador",cupStart:null,cupEnd:null,cupFormat:"mata-mata nacional"},
 8:{league:"Liga1",leagueStart:"2026-01-30",leagueEnd:null,leagueWindow:"34 jornadas • Apertura e Clausura",cup:"Copa Perú",cupStart:null,cupEnd:null,cupFormat:"competição nacional por etapas"},
 9:{league:"Liga de la División Profesional",leagueStart:"2026-04-05",leagueEnd:null,leagueWindow:"30 datas em ida e volta",cup:"Copa de la División Profesional / Copa Paceña",cupStart:"2026-08-01",cupEnd:"2026-12-31",cupFormat:"4 grupos de 4 + quartas + semifinal + final"},
 10:{league:"Liga FUTVE",leagueStart:"2026-01-30",leagueEnd:null,leagueWindow:"Apertura + Clausura • 14 clubes",cup:"Copa Venezuela",cupStart:"2026-06-24",cupEnd:null,cupFormat:"20 clubes na fase inicial + mata-mata"}
};

const nationalCupExtra={
 1:["Paysandu","Ceará","Sport","Fortaleza","Vila Nova","Goiás","América-MG","Novorizontino"],
 2:["Chacarita Juniors","Colón","Gimnasia de Jujuy","Quilmes","Ferro Carril Oeste","Atlanta","Nueva Chicago","San Martín de Tucumán"],
 3:["Plaza Colonia","Rampla Juniors","Cerro","Oriental","Atenas","Juventud de Las Piedras","Fénix","River Plate (URU)"],
 4:["Magallanes","Santiago Wanderers","San Luis de Quillota","Rangers","Cobreloa","Deportes Temuco","Curicó Unido","Arica"],
 5:["Atlético Huila","Real Cartagena","Deportivo Pereira","Quindío","Real Santander","Barranquilla FC","Orsomarso","Bogotá FC"],
 6:["Rubio Ñu","San Lorenzo","Recoleta","Fernando de la Mora","Independiente CG","3 de Noviembre","Guaireña","General Díaz"],
 7:["9 de Octubre","Chacaritas","Imbabura","Cuniburo","Vargas Torres","Leones del Norte","San Antonio","Vélez"],
 8:["Comerciantes Unidos","Juan Aurich","Carlos Stein","Deportivo Llacuabamba","Comerciantes FC","Ayacucho FC","Deportivo Coopsol","Santos FC"],
 9:["Universitario de Sucre","Real Santa Cruz","Mamoré","Universidad de Santa Cruz","Guabirá B","Nueva Cliza","Universidad Católica","Stormers"],
 10:["Marítimo","Mineros de Guayana","Yaracuyanos","Ureña","Lara","Barquisimeto","Aragua","Dynamo"]
};

// ===== CALENDÁRIO OFICIAL — LIBERTADORES E SUL-AMERICANA 2026 =====
// Datas-base divulgadas pela CONMEBOL para a edição 2026 (janelas oficiais de rodada/fase).
// Como o jogo simplifica os confrontos de mata-mata em jogo único (sem ida e volta),
// usamos a data do jogo decisivo (geralmente a volta) de cada fase real.
const LIBERTADORES_DATES={
 groups:["2026-04-08","2026-04-22","2026-04-29","2026-05-06","2026-05-13","2026-05-27"],
 r16:"2026-08-19", qf:"2026-09-16", sf:"2026-10-21", final:"2026-11-28"
};
const LIBERTADORES_LABELS={groups:"Fase de Grupos",r16:"Oitavas de Final",qf:"Quartas de Final",sf:"Semifinal",final:"Final"};
const SUDAMERICANA_DATES={
 r32:"2026-07-28", r16:"2026-08-18", qf:"2026-09-16", sf:"2026-10-20", final:"2026-11-21"
};
const SUDAMERICANA_LABELS={r32:"Playoffs / Rodada de 32",r16:"Oitavas de Final",qf:"Quartas de Final",sf:"Semifinal",final:"Final"};

// ===== ESTADO GLOBAL =====
let game=null;
let transferMarket=[];
const GAME_VERSION=26;

// ===== UTILITÁRIOS =====
function deep(x){return JSON.parse(JSON.stringify(x))}
function rnd(min,max){return Math.floor(Math.random()*(max-min+1))+min}
function clamp(v,min,max){return Math.max(min,Math.min(max,v))}
function pick(arr){return arr[Math.floor(Math.random()*arr.length)]}

function money(v){
  v = Number(v) || 0;
  const sign = v<0 ? "-" : "";
  v = Math.abs(v);
  if (v >= 1000000) {
    return sign+"R$ " + new Intl.NumberFormat("pt-BR", {minimumFractionDigits:0,maximumFractionDigits:2}).format(v/1000000) + "M";
  }
  if (v >= 1000) {
    return sign+"R$ " + new Intl.NumberFormat("pt-BR", {minimumFractionDigits:0,maximumFractionDigits:1}).format(v/1000) + "K";
  }
  return sign+"R$ " + new Intl.NumberFormat("pt-BR", {maximumFractionDigits:0}).format(v);
}

// Aceita valores como: 64.5M | 64,5M | 500K | 500k | 64563103
function parseMoneyInput(value){
  if (typeof value !== "string") return Number(value) || 0;
  let s = value.trim().toUpperCase().replace(/R\$/g, "").replace(/\s/g, "");
  let multiplier = 1;
  if (s.endsWith("M")) { multiplier = 1000000; s = s.slice(0, -1); }
  else if (s.endsWith("K")) { multiplier = 1000; s = s.slice(0, -1); }
  s = s.replace(",", ".");
  const n = Number(s);
  return Number.isFinite(n) ? Math.round(n * multiplier) : NaN;
}

function player(id,name,position,rating,age,value,potential){
 return {id,name,position,rating,age,value,potential:potential||Math.max(rating,rating+5),salary:Math.max(5000,Math.round(value*.001/52)),contract:3,loan:null};
}

// ===== ELENCOS REAIS 2026 =====
// Banco real: quando um clube estiver cadastrado aqui, ele NÃO recebe jogadores aleatórios.
// rating/valor são parâmetros do jogo, não avaliações oficiais.
// Fonte de referência dos elencos consultados: páginas oficiais/competição e bases de plantel 2026.
const realSquads2026={
// ===== BRASIL — ELENCOS 2026 =====
"Athletico-PR":[["Mycael","GOL",21],["Santiago Mele","GOL",28],["Léo Linck","GOL",24],["Carlos Terán","ZAG",25],["Lucas Esquivel","LE",25],["Kaique Rocha","ZAG",25],["Mateo Gamarra","ZAG",25],["Benavídez","LD",31],["Bruno Zapelli","MEI",23],["Felipe Jonatan","LE",30],["Felipe Silva","VOL",24],["Bruno Gomes","VOL",25],["Aguirre","ATA",25],["Kevin Viveros","ATA",25],["Mendoza","ATA",23],["Kerwin Vargas","PD",25],["Jorge Rivaldo","ATA",22],["Portilla","VOL",27]],
"Atlético-MG":[["Everson","GOL",35],["Matheus Mendes","GOL",26],["Gabriel Delfim","GOL",23],["Lyanco","ZAG",29],["Júnior Alonso","ZAG",33],["Gustavo Scarpa","MEI",32],["Guilherme Arana","LE",29],["Saravia","LD",33],["Alan Franco","VOL",28],["Alan Minda","PE",23],["Ángelo Preciado","LD",28],["Tomás Cuello","PE",25],["Lucas Di Yorio","ATA",30],["Borbas","ATA",24],["Kevin Castaño","VOL",25],["Cassierra","ATA",29],["Prestianni","PD",20],["Mamady Cissé","ATA",20]],
"Bahia":[["Ronaldo","GOL",25],["Danilo Fernandes","GOL",42],["Marcos Felipe","GOL",30],["Kanu","ZAG",29],["Gabriel Xavier","ZAG",24],["Luciano Juba","LE",26],["Gilberto","LD",33],["Santiago Arias","LD",34],["Jean Lucas","MC",30],["Caio Alexandre","VOL",27],["Erick Pulga","PE",25],["Everton Ribeiro","MEI",37],["Cauly","MEI",30],["Ademir","PD",31],["Willian José","ATA",34],["Luciano Rodríguez","ATA",23],["Lucho Rodríguez","ATA",23],["Ruan Pablo","ATA",18]],
"Botafogo":[["John","GOL",29],["Raul","GOL",23],["Michael","GOL",31],["Alexander Barboza","ZAG",31],["Bastos","ZAG",34],["Jair Cunha","ZAG",21],["Vitinho","LD",26],["Marlon Freitas","VOL",31],["Gregore","VOL",31],["Santiago Rodríguez","MEI",26],["Álvaro Montoro","MEI",19],["Savinho","PD",22],["Artur","PD",28],["Igor Jesus","ATA",25],["Carlos Eduardo","MEI",29],["Renato Tapia","VOL",31],["Nahuel Ferraresi","ZAG",27],["Hakim Ziyech","MEI",33]],
"Chapecoense":[["Léo Vieira","GOL",34],["Gustavo","GOL",24],["Kewin","GOL",30],["Eduardo","ZAG",30],["Bruno Leonardo","ZAG",29],["Mancha","LE",25],["Maílton","LD",26],["Thayllon","PE",24],["Marcinho","MEI",30],["Rossi","ATA",32],["Mário Sérgio","ATA",30],["Jô","ATA",39],["Giovanni Augusto","MEI",36],["Walter Clar","VOL",30],["Tárik","ZAG",25]],
"Corinthians":[["Hugo Souza","GOL",27],["Matheus Donelli","GOL",24],["Felipe Longo","GOL",20],["André Ramalho","ZAG",34],["Gustavo Henrique","ZAG",33],["Félix Torres","ZAG",29],["Matheuzinho","LD",25],["Hugo","LE",27],["Raniele","VOL",29],["José Martínez","VOL",32],["Maycon","VOL",29],["Carrillo","MEI",34],["Rodrigo Garro","MEI",28],["Memphis Depay","ATA",32],["Yuri Alberto","ATA",25],["Wesley Gassova","PE",21],["Gui Negão","ATA",20],["André Carrillo","MEI",34]],
"Coritiba":[["Pedro Morisco","GOL",22],["Benassi","GOL",25],["Bruno Melo","ZAG",33],["Maílton","LD",26],["Jhonny","ZAG",25],["Thalisson","ZAG",24],["Rodrigo Gelado","LE",23],["Sebastián Gómez","VOL",30],["Josué","VOL",35],["Lucas Ronier","MEI",22],["Matheus Frizzo","MEI",28],["Geovane Meurer","MC",23],["Alef Manga","ATA",31],["Dellatorre","ATA",34],["Iury Castilho","ATA",30],["Janderson","PE",25]],
"Cruzeiro":[["Cássio","GOL",39],["Anderson","GOL",28],["Otávio","GOL",22],["Fabrício Bruno","ZAG",30],["Kaiki Bruno","LE",23],["William","LD",31],["Jonathan Jesus","ZAG",22],["Lucas Villalba","ZAG",31],["Matheus Henrique","MC",28],["Lucas Romero","VOL",32],["Christian","MC",25],["Matheus Pereira","MEI",30],["Kaio Jorge","ATA",24],["Gabriel Veron","PE",23],["Keny Arroyo","PE",20],["Eduardo","MEI",27],["Marlon","LE",29],["Fabrizio Peralta","VOL",23]],
"Flamengo":[["Rossi","GOL",31],["Matheus Cunha","GOL",25],["Dyogo Alves","GOL",22],["Danilo","ZAG",35],["Léo Ortiz","ZAG",30],["Leo Pereira","ZAG",30],["Emerson Royal","LD",27],["Varela","LD",33],["Ayrton Lucas","LE",29],["Alex Sandro","LE",35],["Saúl","MC",31],["Jorginho","MC",34],["De Arrascaeta","MEI",32],["De la Cruz","MC",29],["Carrascal","MEI",28],["Bruno Henrique","PE",35],["Pedro","ATA",29],["Luiz Araújo","PD",30],["Plata","PD",25],["Anthony","PE",23],["Pedro Guilherme","ATA",29]],
"Fluminense":[["Fábio","GOL",45],["Vitor Eudes","GOL",27],["Marcos Felipe","GOL",30],["Thiago Silva","ZAG",42],["Thiago Santos","ZAG",36],["Ignácio","ZAG",30],["Samuel Xavier","LD",36],["Guga","LD",28],["Renê","LE",34],["Nonato","VOL",28],["André","VOL",25],["Martinelli","MC",25],["Jhon Arias","MEI",29],["Ganso","MEI",36],["Keno","PE",37],["Canobbio","PD",28],["Everaldo","ATA",30],["Germán Cano","ATA",38]],
"Grêmio":[["Gabriel Grando","GOL",26],["Tiago Volpi","GOL",35],["Jorge","GOL",23],["Jemerson","ZAG",33],["Wagner Leonardo","ZAG",27],["Gustavo Martins","ZAG",24],["João Pedro","LD",29],["Marlon","LE",29],["Villasanti","VOL",29],["Lucas Leiva","VOL",39],["Cristaldo","MEI",30],["Monsalve","MEI",24],["Amuzu","PE",25],["Pavón","PD",30],["Braithwaite","ATA",35],["André Henrique","ATA",24],["Jovane Cabral","PE",28],["Noriega","VOL",24]],
"Internacional":[["Sergio Rochet","GOL",33],["Anthoni","GOL",24],["Ivan","GOL",29],["Gabriel Mercado","ZAG",39],["Maripán","ZAG",32],["Félix Torres","ZAG",29],["Braian Aguirre","LD",26],["Bernabei","LE",26],["Bustos","LD",30],["Thiago Maia","VOL",29],["Bruno Henrique","VOL",36],["Rodrigo Villagra","VOL",25],["Alan Patrick","MEI",35],["Maurício","MEI",25],["Eliasson","PD",30],["Carbonero","PE",27],["Borré","ATA",30],["Sanabria","ATA",30],["Benjamin Arhin","VOL",22],["Denis Marfo","VOL",22]],
"Mirassol":[["Walter","GOL",37],["Muralha","GOL",33],["Alex Muralha","GOL",37],["João Victor","ZAG",27],["Lucas Ramon","LD",32],["Jemmes","ZAG",34],["Danilo Boza","ZAG",31],["Reinaldo","LE",36],["Neto Moura","VOL",30],["Danielzinho","MC",31],["Gabriel","MEI",29],["Chico","MEI",33],["Negueba","PD",24],["Dellatorre","ATA",34],["Alesson","PE",31],["Paulinho Bóia","PE",28]],
"Palmeiras":[["Carlos Miguel","GOL",27],["Marcelo Lomba","GOL",39],["Bruno Bertinato","GOL",24],["Gustavo Gómez","ZAG",33],["Murilo","ZAG",29],["Bruno Fuchs","ZAG",29],["Benedetti","ZAG",20],["Agustín Giay","LD",22],["Khellven","LD",23],["Joaquín Piquerez","LE",27],["Jefté","LE",23],["Marlon Freitas","VOL",31],["Emiliano Martínez","VOL",27],["Lucas Evangelista","MC",31],["Andreas Pereira","MC",30],["Maurício","MEI",25],["Felipe Anderson","PE",33],["Jhon Arias","PD",29],["Ramón Sosa","PE",26],["Paulinho","PE",26],["Vitor Roque","ATA",21],["Flaco López","ATA",25]],
"Red Bull Bragantino":[["Cleiton","GOL",29],["Tiago Volpi","GOL",35],["Lucão","GOL",24],["Pedro Henrique","ZAG",30],["Gustavo Marques","ZAG",24],["Alix Vinicius","ZAG",26],["Agustín Sant'Anna","LD",28],["Vanderlan","LE",23],["Jadsom","VOL",25],["Eric Ramires","VOL",25],["Sasha","MC",34],["Matheus Fernandes","VOL",31],["Fernando","MEI",27],["Lucas Barbosa","PD",24],["Henry Mosquera","PE",25],["Isidro Pitta","ATA",27],["Andrés Hurtado","LD",29],["Nacho Sosa","MC",30]],
"Remo":[["Vinícius Silvestre","GOL",31],["Cauã","GOL",22],["Marcelo Rangel","GOL",37],["Tchamba","ZAG",24],["Rony","ZAG",29],["Sávio","LD",25],["Ruan","LE",27],["Marlon","ZAG",30],["Paulinho Curuá","VOL",26],["Pedro Castro","VOL",33],["Ytalo","ATA",37],["Janderson","PE",25],["Adriano","MEI",29],["Pedro Rocha","PE",31],["Ribamar","ATA",29]],
"Santos":[["Gabriel Brazão","GOL",25],["Diógenes","GOL",25],["Rodrigo Falcão","GOL",21],["Lucas Veríssimo","ZAG",31],["Luan Peres","ZAG",31],["Zé Ivaldo","ZAG",29],["Adonis Frías","ZAG",28],["Gonzalo Escobar","LE",29],["Igor Vinícius","LD",29],["Mayke","LD",33],["Christian Oliva","VOL",30],["Willian Arão","VOL",34],["João Schmidt","VOL",33],["Neymar","MEI",34],["Rincón","VOL",38],["Willian","PE",39],["Lautaro Díaz","ATA",27],["Barreal","PE",25],["Gabriel Veron","PD",23],["Guilherme","PE",20],["Gustavo Caballero","ATA",24],["Miguelito","MEI",22]],
"São Paulo":[["Rafael","GOL",37],["Jandrei","GOL",33],["Young","GOL",23],["Arboleda","ZAG",34],["Alan Franco","ZAG",29],["Sabino","ZAG",29],["Ferraresi","ZAG",27],["Cedric","LD",28],["Enzo Díaz","LE",30],["Ruan Tressoldi","ZAG",26],["Alisson","VOL",32],["Bobadilla","VOL",25],["Marcos Antônio","VOL",26],["Lucas Moura","PD",34],["Oscar","MEI",35],["Luciano","ATA",33],["Calleri","ATA",32],["Ferreirinha","PE",29],["André Silva","ATA",28]],
"Vasco da Gama":[["Léo Jardim","GOL",31],["Daniel Fuzato","GOL",29],["Pablo","GOL",23],["Carlos Cuesta","ZAG",27],["Alan Saldivia","ZAG",24],["João Victor","ZAG",28],["Puma Rodríguez","LD",28],["Lucas Piton","LE",25],["Santiago Sosa","VOL",26],["Jair","VOL",31],["Johan Rojas","MEI",23],["Alan Lescano","MEI",25],["Marino Hinestroza","PE",24],["Nuno Moreira","PE",27],["Loide Augusto","PD",26],["Facundo Colidio","ATA",26],["Claudio Spinelli","ATA",29],["Carlos Andrés Gómez","ATA",24]],
"Vitória":[["Lucas Arcanjo","GOL",26],["Thiago Rodrigues","GOL",28],["Ronaldo","GOL",24],["Wagner Leonardo","ZAG",27],["Neris","ZAG",34],["Eduardo","LD",23],["Lucas Esteves","LE",25],["Matheuzinho","MC",29],["Willian Oliveira","VOL",33],["Ricardo Ryller","VOL",31],["Matheuzinho","MEI",29],["Janderson","PE",25],["Erick Castillo","PD",30],["Osvaldo","PE",38],["Alerrandro","ATA",26],["Gustavo Silva","PD",29]],

// ===== ARGENTINA — ELENCOS 2026 =====
"Aldosivi":[["Lucas Acosta","GOL",31],["Fabricio Correa","GOL",24],["Leonardo Sigali","ZAG",38],["Braian Cufré","LE",29],["Nicolás Linares","VOL",29],["Matías Godoy","MEI",24],["Lucas Castro","MEI",36],["Andrés Vombergar","ATA",31],["Nicolás Gaitán","MEI",38],["Eric Ramírez","ATA",30],["Andrés Chávez","ATA",35],["Francisco Perruzzi","VOL",25],["Joaquín Pombo","ZAG",24],["Elías López","LD",25],["Lucas Di Yorio","ATA",30]],
"Argentinos Juniors":[["Ruso Rodríguez","GOL",26],["Diego Rodríguez","GOL",36],["Kevin Gutiérrez","VOL",29],["Leandro Lozano","LD",26],["Fernando Meza","ZAG",35],["Marco Di Césare","ZAG",24],["Francisco Álvarez","ZAG",26],["Román Vega","LE",22],["Alan Lescano","MEI",25],["Alan Rodríguez","MC",25],["Gastón Verón","ATA",25],["Tomás Molina","ATA",30],["José Herrera","PE",24],["Leonel Galeano","ZAG",34],["Nicolás Oroz","MEI",31]],
"Atlético Tucumán":[["Tomás Durso","GOL",26],["Juan Ignacio González","GOL",25],["Francisco Flores","ZAG",25],["Nicolás Romero","ZAG",28],["Gianluca Ferrari","ZAG",29],["Juan Infante","LE",30],["Guillermo Acosta","VOL",37],["Adrián Sánchez","MC",27],["Mateo Bajamich","PE",25],["Mateo Coronel","ATA",26],["Luis Miguel Rodríguez","ATA",41],["Renzo Tesuri","PD",29],["Justo Giani","ATA",30],["Kevin López","MC",25],["Lucas Menossi","MC",33]],
"Banfield":[["Facundo Sanguinetti","GOL",24],["Marcelo Barovero","GOL",42],["Luciano Recalde","ZAG",30],["Alexis Maldonado","ZAG",34],["Emanuel Insúa","LE",35],["Leonel Di Plácido","LD",32],["Matías González","VOL",29],["Iván Rossi","VOL",32],["Juan Bisanz","MEI",24],["Gerónimo Rivera","PE",23],["Milton Giménez","ATA",29],["Bruno Sepúlveda","ATA",33],["Agustín Urzi","PE",25],["Alejandro Maciel","ZAG",28],["Jesús Dátolo","MEI",42]],
"Barracas Central":[["Sebastián Moyano","GOL",35],["Mariano Miño","GOL",30],["Nicolás Capraro","ZAG",32],["Gonzalo Goñi","ZAG",27],["Facundo Mater","LD",26],["Rodrigo Insúa","LE",27],["Iván Tapia","MEI",27],["Siro Rosané","VOL",24],["Alan Cantero","ATA",26],["Jhonatan Candia","ATA",35],["Maximiliano Zalazar","PD",23],["Lucas Colitto","MEI",31],["Rodrigo Herrera","MC",24],["Fernando Juárez","PE",27],["Carlos Arce","VOL",36]],
"Belgrano":[["Juan Espínola","GOL",30],["Ignacio Chicco","GOL",28],["Matías Moreno","ZAG",25],["Alejandro Rébola","ZAG",37],["Franco Jara","ATA",38],["Lucas Passerini","ATA",31],["Francisco González Metilli","MEI",28],["Esteban Rolón","VOL",30],["Santiago Longo","VOL",26],["Ulises Sánchez","MEI",27],["Juan Velázquez","PE",24],["Gabriel Compagnucci","LD",33],["Alex Ibacache","LE",27],["Rafael Delgado","LE",35],["Nicolás Fernández","PD",30]],
"Boca Juniors":[["Álvaro Montero","GOL",31],["Leandro Brey","GOL",24],["Javier García","GOL",39],["Lautaro Di Lollo","ZAG",22],["Jorge Figal","ZAG",31],["Marco Pellegrino","ZAG",24],["Ayrton Costa","ZAG",26],["Leandro Lozano","LD",27],["Lautaro Blanco","LE",27],["Malcom Braida","LE",29],["Leandro Paredes","VOL",32],["Rodrigo Battaglia","VOL",35],["Carlos Palacios","MEI",26],["Tomás Belmonte","MC",28],["Williams Alarcón","VOL",25],["Milton Delgado","MC",21],["Santiago Ascacíbar","VOL",29],["Milton Giménez","ATA",30],["Miguel Merentiel","ATA",30],["Alan Velasco","PE",24],["Kevin Zenón","PE",25],["Adam Bareiro","ATA",29],["Ángel Romero","ATA",34]],
"Central Córdoba":[["Luis Ingolotti","GOL",25],["Agustín García","GOL",24],["Lucas Abascia","ZAG",29],["Sebastián Valdez","ZAG",30],["Jonathan Bay","LE",34],["Iván Pillud","LD",39],["Jesús Soraire","VOL",36],["Kevin Vázquez","MC",24],["Atencio","MEI",24],["Alan Aguerre","GOL",35],["Leonardo Heredia","ATA",30],["Luis Miguel Rodríguez","ATA",41],["Favio Cabral","ATA",30],["Rafael Barrios","ZAG",27],["Matías Perelló","MC",23]],
"Defensa y Justicia":[["Enrique Bologna","GOL",43],["Cristopher Fiermarín","GOL",27],["Emanuel Aguilera","ZAG",37],["Lucas Ferreira","ZAG",25],["Esteban Burgos","ZAG",34],["Alexis Soto","LE",31],["Agustín Sant'Anna","LD",28],["Kevin Gutiérrez","VOL",29],["David Barbona","MEI",31],["Aaron Molinas","MEI",25],["Abiel Osorio","ATA",23],["Gastón Togni","PE",28],["Nicolás Fernández","ATA",29],["Uvita Fernández","ATA",31],["Aaron Barquett","LE",25]],
"Estudiantes de La Plata":[["Fabricio Iacovich","GOL",24],["Fernando Muslera","GOL",40],["Rodrigo Borzone","GOL",22],["Santiago Núñez","ZAG",26],["Leandro González Pirez","ZAG",34],["Santiago Arzamendia","LE",28],["Eric Meza","LD",27],["Funes Mori","ZAG",35],["Eros Mancuso","LD",26],["Gabriel Neves","VOL",28],["Ezequiel Piovi","VOL",33],["Alexis Castro","MEI",31],["Jalil Elías","VOL",29],["Tiago Palacios","MEI",25],["José Sosa","MEI",41],["Guido Carrillo","ATA",35],["Lucas Alario","ATA",33],["Joaquín Correa","ATA",31],["Edwuin Cetré","PE",28],["Brian Aguirre","PE",23]],
"Estudiantes de Río Cuarto":[["Brian Olivera","GOL",31],["Tomás Guallama","GOL",24],["Gonzalo Maffini","ZAG",31],["Lucas Landa","ZAG",39],["Maximiliano Padilla","ZAG",29],["Francisco Romero","LE",28],["Víctor Beraldi","MC",39],["Nicolás Talpone","VOL",30],["Tomás González","ATA",27],["Guido Mainero","PE",30],["Luis Silba","ATA",36],["Guillermo Farré","VOL",44],["Facundo Castet","LE",29],["Santiago Zurbriggen","ZAG",30],["Nahuel Cainelli","MEI",27]],
"Gimnasia de La Plata":[["Marcos Ledesma","GOL",28],["Nelson Insfrán","GOL",30],["Leonardo Morales","ZAG",34],["Juan Pintado","LD",27],["Nicolás Colazo","LE",35],["Gastón Suso","ZAG",35],["Gonzalo Abrego","VOL",26],["Matías Abaldo","PD",21],["Pablo De Blasis","MEI",38],["Rodrigo Castillo","ATA",26],["Norberto Briasco","ATA",30],["Lucas Castro","MEI",37],["Franco Troyansky","ATA",29],["Eric Ramírez","ATA",30],["Maximiliano Meza","MEI",33]],
"Gimnasia de Mendoza":[["Matías Tagliamonte","GOL",27],["Luis Ojeda","GOL",35],["Maximiliano Padilla","ZAG",29],["Francisco Delorenzi","ZAG",27],["Agustín Bindella","LE",29],["Luciano Cingolani","PD",24],["Franco Meritello","ZAG",27],["Bruno Leyes","VOL",25],["Leandro Ciccolini","PE",26],["Gonzalo Ríos","MEI",27],["Nicolás Romano","MEI",38],["Matías Reali","PE",28],["Agustín Mulet","VOL",26],["Fabián Henríquez","VOL",32],["Lucas Villafañe","ATA",25]],
"Godoy Cruz":[["Franco Petroli","GOL",27],["Leonel Coira","GOL",23],["Federico Rasmussen","ZAG",34],["Pier Barrios","ZAG",35],["Lucas Arce","LD",27],["Martín Luciano","LE",21],["Bruno Leyes","VOL",25],["Gonzalo Abrego","VOL",26],["Vicente Poggi","MC",23],["Tomás Conechny","MEI",28],["Salomón Rodríguez","ATA",26],["Tadeo Allende","PE",26],["Juan Bautista Cejas","PD",25],["Nahuel Ulariaga","ATA",24],["Nicolás Fernández","ATA",30]],
"Huracán":[["Hernán Galíndez","GOL",39],["Sebastián Meza","GOL",25],["Fabio Pereyra","ZAG",35],["Lucas Carrizo","ZAG",29],["Guillermo Benítez","LE",31],["Héctor Fértoli","PE",31],["Federico Fattori","VOL",32],["William Alarcón","VOL",25],["Walter Mazzantti","ATA",29],["Rodrigo Cabral","PE",25],["Eric Ramírez","ATA",30],["Matías Cóccaro","ATA",28],["Franco Alfonso","MEI",25],["Alan Soñora","MEI",27],["Agustín Urzi","PE",25]],
"Independiente":[["Rodrigo Rey","GOL",35],["Diego Segovia","GOL",25],["Kevin Lomónaco","ZAG",24],["Sebastián Valdez","ZAG",30],["Federico Vera","LD",26],["Adrián Spörle","LE",29],["Iván Marcone","VOL",36],["Rodrigo Fernández Cedrés","VOL",30],["Lautaro Millán","MEI",21],["Santiago Hidalgo","ATA",21],["Gabriel Ávalos","ATA",35],["Matías Giménez Rojas","ATA",27],["Lucas González","MEI",25],["Javier Ruiz","MEI",23],["Alex Luna","MEI",26]],
"Independiente Rivadavia":[["Ezequiel Centurión","GOL",29],["Gonzalo Marinelli","GOL",36],["Iván Villalba","ZAG",30],["Sheyko Studer","ZAG",29],["Tobías Ostchega","LE",26],["Luciano Gómez","LD",28],["Juan Elordi","LE",31],["Diego Tonetto","MEI",36],["Gonzalo Ríos","MEI",27],["Sebastián Villa","PD",30],["Luis Sequeira","MEI",22],["Matías Reali","PE",28],["Emiliano Vecchio","MEI",37],["Mauro Méndez","ATA",27],["Lucas Ambrogio","PE",27]],
"Instituto":[["Manuel Roffo","GOL",25],["Jorge Carranza","GOL",44],["Fernando Alarcón","ZAG",31],["Victor Cabrera","ZAG",31],["Giuliano Cerato","LD",26],["Jonathan Bay","LE",34],["Gastón Lodico","MEI",31],["Gabriel Graciani","MEI",32],["Francisco Pizzini","PE",32],["Santiago Rodríguez","ATA",28],["Ignacio Russo","ATA",25],["Silvio Romero","ATA",37],["Djorkaeff Reasco","ATA",27],["Jonás Acevedo","MEI",29],["Matías Romero","VOL",30]],
"Lanús":[["Nahuel Losada","GOL",33],["Lucas Acosta","GOL",31],["Carlos Izquierdoz","ZAG",37],["Nicolás Thaller","ZAG",28],["Julio Soler","LE",21],["Juan Cáceres","LD",25],["Ezequiel Muñoz","ZAG",35],["Raúl Loaiza","VOL",32],["Marcelino Moreno","MEI",31],["Eduardo Salvio","PD",36],["Walter Bou","ATA",32],["Leandro Díaz","ATA",34],["Agustín Cardozo","VOL",28],["Ramiro Carrera","MEI",33],["Alexis Canelo","ATA",33]],
"Newell's Old Boys":[["Keylor Navas","GOL",39],["Josué Reinatti","GOL",22],["Gustavo Velázquez","ZAG",35],["Saúl Salcedo","ZAG",28],["Angelo Martino","LE",27],["Armando Méndez","LD",29],["Éver Banega","MEI",38],["Rodrigo Fernández Cedrés","VOL",30],["Fernando Cardozo","MEI",25],["Juan Manuel García","ATA",34],["Élías Figueroa","ATA",23],["Luciano Herrera","PE",29],["Tomás Jacob","ZAG",22],["Franco Díaz","VOL",25],["Jeremías Pérez Tica","PE",21]],
"Platense":[["Juan Pablo Cozzani","GOL",30],["Leonel Picco","VOL",31],["Gastón Suso","ZAG",35],["Juan Ignacio Saborido","LD",27],["Sasha Marcich","LE",29],["Leonel Picco","VOL",31],["Fernando Juárez","PE",27],["Gonzalo Valdivia","ZAG",24],["Agustín Ocampo","MEI",25],["Ronaldo Martínez","ATA",30],["Nicolás Castro","MEI",34],["Mateo Pellegrino","ATA",24],["Alan Soñora","MEI",27],["Lisandro Montenegro","MEI",21],["Facundo Russo","ATA",24]],
"Racing Club":[["Gabriel Arias","GOL",39],["Facundo Cambeses","GOL",29],["Agustín García Basso","ZAG",34],["Santiago Sosa","ZAG",26],["Marco Di Césare","ZAG",24],["Gastón Martirena","LD",26],["Gabriel Rojas","LE",29],["Bruno Zuculini","VOL",33],["Juan Nardoni","VOL",23],["Agustín Almendra","MC",26],["Maximiliano Salas","ATA",29],["Adrián Martínez","ATA",33],["Luciano Vietto","ATA",32],["Tomás Conechny","MEI",28],["Damián Batallini","PE",29]],
"River Plate":[["Franco Armani","GOL",39],["Ezequiel Centurión","GOL",33],["Santiago Beltrán","GOL",22],["Gonzalo Montiel","LD",29],["Marcos Acuña","LE",34],["Lucas Martínez Quarta","ZAG",30],["Nicolás Otamendi","ZAG",38],["Lautaro Rivero","ZAG",22],["Giovanni González","LD",31],["Juan Portillo","VOL",25],["Aníbal Moreno","VOL",27],["Mauro Arambarri","MC",30],["Fausto Vera","VOL",25],["Thiago Almada","MEI",25],["Sebastián Driussi","ATA",30],["Ángel Correa","ATA",31],["Lucas Beltrán","ATA",25],["Rafael Borré","ATA",30],["Agustín Ruberto","ATA",20],["Tomás Galván","MEI",25]],
"Rosario Central":[["Jorge Broun","GOL",39],["Fatura Broun","GOL",39],["Facundo Mallo","ZAG",31],["Carlos Quintana","ZAG",38],["Juan Cruz Komar","ZAG",29],["Emanuel Coronel","LD",33],["Agustín Sández","LE",25],["Kevin Ortiz","VOL",26],["Franco Ibarra","VOL",25],["Ignacio Malcorra","MEI",38],["Jaminton Campaz","PE",26],["Enzo Copetti","ATA",30],["Luca Martínez Dupuy","ATA",25],["Maximiliano Lovera","MEI",27],["Alan Rodríguez","MC",25]],
"San Lorenzo":[["Facundo Altamirano","GOL",29],["Orlando Gill","GOL",26],["Jhohan Romaña","ZAG",27],["Gonzalo Luján","ZAG",25],["Malcom Braida","LE",29],["Elián Irala","VOL",22],["Jalil Elías","VOL",29],["Iker Muniain","MEI",33],["Malcom Braida","PE",29],["Alexis Cuello","ATA",25],["Andrés Vombergar","ATA",31],["Iván Leguizamón","PE",23],["Nahuel Barrios","MEI",27],["Ezequiel Cerutti","PE",34],["Adam Bareiro","ATA",29]],
"San Martín de San Juan":[["Matías Borgogno","GOL",27],["Juan Pablo Cozzani","GOL",30],["Agustín Sienra","ZAG",28],["Alejandro Molina","ZAG",27],["Lucas Diarte","LE",31],["Emanuel Dening","ATA",37],["Nicolás Pelaitay","VOL",32],["Gonzalo Berterame","PE",27],["Franco Leys","VOL",32],["Sebastián González","MEI",30],["Nicolás Franco","ATA",29],["Federico González","ATA",39],["Tomás Fernández","MEI",30],["Matías Escudero","ZAG",34],["Maximiliano Casa","ATA",30]],
"Sarmiento":[["Lucas Acosta","GOL",31],["Fernando Monetti","GOL",37],["Juan Manuel Insaurralde","ZAG",41],["Franco Paredes","ZAG",26],["Gonzalo Bettini","LD",33],["Facundo Castet","LE",29],["Fernando Godoy","VOL",35],["Manuel García","MEI",32],["Yair Arismendi","PE",27],["Lisandro López","ATA",42],["Iván Morales","ATA",27],["Agustín Fontana","ATA",30],["Guido Mainero","PE",30],["Juan Kaprof","ATA",31],["Gabriel Díaz","ZAG",32]],
"Talleres":[["Guido Herrera","GOL",34],["Lautaro Morales","GOL",26],["Juan Carlos Portillo","ZAG",25],["Matías Catalán","ZAG",33],["Miguel Navarro","LE",27],["Gastón Benavídez","LD",30],["Juan Camilo Portilla","VOL",27],["Ulises Ortegoza","MC",28],["Rubén Botta","MEI",36],["Valentín Depietri","PE",25],["Bruno Barticciotto","ATA",25],["Federico Girotti","ATA",27],["Alejandro Martínez","PE",29],["Ramón Sosa","PE",26],["Matías Esquivel","MEI",26]],
"Tigre":[["Felipe Zenobio","GOL",25],["Gonzalo Marinelli","GOL",36],["Nahuel Banegas","LE",29],["Juan Ignacio Saborido","LD",27],["Gonzalo Flores","MEI",24],["Augusto Aguirre","LD",26],["Sebastián Prediger","VOL",39],["Agustín Cardozo","VOL",28],["Blas Armoa","PE",26],["Gonzalo Maroni","MEI",27],["Florián Monzón","ATA",24],["Tomás Badaloni","ATA",25],["Ezequiel Forclaz","MEI",23],["Aaron Molinas","MEI",25],["Martín Ortega","ZAG",25]],
"Unión":[["Nicolás Campisi","GOL",29],["Thiago Cardozo","GOL",29],["Franco Pardo","ZAG",28],["Claudio Corvalán","ZAG",37],["Nicolás Paz","ZAG",22],["Federico Vera","LD",26],["Bruno Pittón","LE",33],["Joaquín Mosqueira","VOL",21],["Mauro Pittón","VOL",31],["Mauro Luna Diale","PE",26],["Damián Martínez","LD",35],["Adrián Balboa","ATA",31],["Lucas Gamba","ATA",38],["Jerónimo Dómina","ATA",20],["Simón Rivero","MEI",22]]
};


// ===== ELENCOS RESTANTES — 2026 =====
// Clubes que ainda não tinham cadastro nominal passam a usar elenco nominal.
Object.assign(realSquads2026, {"Racing":[["Rodrigo Odriozola","GOL",20],["Gastón Bueno","ZAG",23],["Lucas Rodríguez","LD",25],["Martín Barrios","LE",27],["Tomás Verón Lupi","VOL",29],["Agustín Alaniz","MC",31],["José Varela","MEI",33],["Jonathan Urretaviscaya","PE",24],["Octavio Rivero","PD",26],["Nicolás Sosa","ATA",28],["Gonzalo Nápoli","ATA",30]],"Defensor Sporting":[["Matías Dufour","GOL",20],["Guillermo De Los Santos","ZAG",23],["Sebastián Boselli","LD",25],["Fernando Elizari","LE",27],["Andrés Ferrari","VOL",29],["Brian Mansilla","MC",31],["Nicolás Rodríguez","MEI",33],["Andrés Lamas","PE",24],["Lucas Agazzi","PD",26],["Kevin Méndez","ATA",28],["Octavio Rivero","ATA",30]],"Boston River":[["Santiago Silva","GOL",20],["Guzmán Corujo","ZAG",23],["Bruno Barja","LD",25],["Gastón Álvarez","LE",27],["Emiliano Gómez","VOL",29],["Agustín Amado","MC",31],["Rodrigo Fernández","MEI",33],["Juan Manuel Gutiérrez","PE",24],["Mathías Acuña","PD",26],["Facundo Rodríguez","ATA",28],["Jonathan Dos Santos","ATA",30]],"Cerro Largo":[["Washington Aguerre","GOL",20],["Martín Ferreira","ZAG",23],["Hugo Magallanes","LD",25],["Gonzalo Córdoba","LE",27],["Santiago Martínez","VOL",29],["Alan García","MC",31],["Agustín Heredia","MEI",33],["Lucas Correa","PE",24],["Santiago Ramírez","PD",26],["Facundo Rodríguez","ATA",28],["Sebastián Sosa","ATA",30]],"Cerro":[["Renzo Bacchia","GOL",20],["Juan Cruz Guasone","ZAG",23],["Brahian Alemán","LD",25],["Mateo Argüello","LE",27],["Gianni Rodríguez","VOL",29],["Facundo Butti","MC",31],["Martín Farías","MEI",33],["Jairo Amaro","PE",24],["Rodrigo Mederos","PD",26],["Brian Quinteros","ATA",28],["Nahuel Sena","ATA",30]],"Danubio":[["Mauro Goicoechea","GOL",20],["Lucas Ferreira","ZAG",23],["Mateo Ponte","LD",25],["Emiliano Ancheta","LE",27],["Gonzalo Bueno","VOL",29],["Sebastián Fernández","MC",31],["Agustín Navarro","MEI",33],["Gonzalo Carneiro","PE",24],["Matías Fracchia","PD",26],["Leandro Sosa","ATA",28],["Ignacio Pintos","ATA",30]],"Deportivo Maldonado":[["Guillermo Reyes","GOL",20],["Maximiliano Cantera","ZAG",23],["Hernán Toledo","LD",25],["Lucas Viatri","LE",27],["Alexis Rolín","VOL",29],["Facundo Batista","MC",31],["Agustín Sant'Anna","MEI",33],["Pablo López","PE",24],["Matías Cóccaro","PD",26],["Diego Romero","ATA",28],["Joaquín Varela","ATA",30]],"Juventud":[["Sebastián Britos","GOL",20],["Matías Jones","ZAG",23],["Agustín Ocampo","LD",25],["Facundo Silvera","LE",27],["Gonzalo Bueno","VOL",29],["Diego Rodríguez","MC",31],["Lucas Carrizo","MEI",33],["Martín Rodríguez","PE",24],["Nicolás González","PD",26],["Matías Alonso","ATA",28],["Santiago Bellini","ATA",30]],"Liverpool":[["Sebastián Lentinelly","GOL",20],["Federico Pereira","ZAG",23],["Matías de los Santos","LD",25],["Luciano Rodríguez","LE",27],["Rubén Bentancourt","VOL",29],["Agustín Ocampo","MC",31],["Gastón Martirena","MEI",33],["Martín Barrios","PE",24],["Franco Nicola","PD",26],["Nicolás Vallejo","ATA",28],["Diego García","ATA",30]],"Montevideo City Torque":[["Gastón Guruceaga","GOL",20],["Lucas Hernández","ZAG",23],["Tiago Palacios","LD",25],["Franco Nicola","LE",27],["Santiago Rodríguez","VOL",29],["Facundo Píriz","MC",31],["Nicolás Schiappacasse","MEI",33],["Joaquín Zeballos","PE",24],["Sebastián Guerrero","PD",26],["Matías Santos","ATA",28],["Lucas Rodríguez","ATA",30]],"Albion":[["Yonatan Irrazábal","GOL",20],["Federico Platero","ZAG",23],["Gastón Silva","LD",25],["Hernán Novick","LE",27],["Maximiliano Lemos","VOL",29],["Gonzalo Viera","MC",31],["Santiago Ramírez","MEI",33],["Facundo Perdomo","PE",24],["Matías Rigoleto","PD",26],["Agustín Gutiérrez","ATA",28],["Bruno Foliados","ATA",30]],"Central Español":[["Mathías Cubero","GOL",20],["Renzo Bacchia","ZAG",23],["Pablo López","LD",25],["Federico Millacet","LE",27],["Martín Rabuñal","VOL",29],["Nicolás Schiappacasse","MC",31],["Agustín Alaniz","MEI",33],["Santiago Paiva","PE",24],["Leandro Otormín","PD",26],["Matías Cóccaro","ATA",28],["Gonzalo Bueno","ATA",30]],"Progreso":[["Luciano Silva","GOL",20],["Maximiliano Perg","ZAG",23],["Nicolás González","LD",25],["Mathías Riquero","LE",27],["Gonzalo Andrada","VOL",29],["Alexis Viera","MC",31],["Santiago Gaspari","MEI",33],["Facundo Perdomo","PE",24],["Ignacio Lemmo","PD",26],["Matías Mier","ATA",28],["Gustavo Alles","ATA",30]],"Wanderers":[["Mauro Silveira","GOL",20],["Juan Acosta","ZAG",23],["Gastón Bueno","LD",25],["Gerardo Alcoba","LE",27],["Nicolás Fonseca","VOL",29],["Diego Hernández","MC",31],["Mauro Méndez","MEI",33],["Matías Fracchia","PE",24],["Rodrigo Rivero","PD",26],["Nicolás Royón","ATA",28],["Kevin Rolón","ATA",30]],"Universidad Católica":[["Rafael Romo","GOL",20],["José Cifuentes","ZAG",23],["Kevin Minda","LD",25],["Anderson Ordóñez","LE",27],["Fausto Grillo","VOL",29],["Layan Loor","MC",31],["Gustavo Vallecilla","MEI",33],["Ismael Díaz","PE",24],["Jhon Cifuente","PD",26],["Aron Rodríguez","ATA",28],["Mauro Díaz","ATA",30],["Alexander Alvarado","GOL",20],["Facundo Martínez","ZAG",23],["Jorge Valencia","LD",25],["José Fajardo","LE",27]],"Palestino":[["César Rigamonti","GOL",20],["Gonzalo Sosa","ZAG",23],["Bryan Carrasco","LD",25],["Misael Dávila","LE",27],["Fernando Meza","VOL",29],["Iván Román","MC",31],["Nicolás Linares","MEI",33],["Joe Abrigo","PE",24],["Jonathan Benítez","PD",26],["Gonzalo Tapia","ATA",28],["Pablo Parra","ATA",30],["Julián Fernández","GOL",20],["Diego Valencia","ZAG",23],["Dilan Zúñiga","LD",25],["Francisco Chamorro","LE",27]],"Audax Italiano":[["Tomás Ahumada","GOL",20],["Carlos Labrín","ZAG",23],["Osvaldo Bosso","LD",25],["Nicolás Fernández","LE",27],["Gonzalo Álvarez","VOL",29],["Gonzalo Ríos","MC",31],["Marcelo Díaz","MEI",33],["César Pinares","PE",24],["Ariel Uribe","PD",26],["Patricio Graff","ATA",28],["Ignacio Jeraldino","ATA",30],["Michael Fuentes","GOL",20],["Nicolás Orellana","ZAG",23],["Luis Riveros","LD",25],["Matías Sepúlveda","LE",27]],"Everton":[["Ignacio González","GOL",20],["Tomás Asta-Buruaga","ZAG",23],["Julio Barroso","LD",25],["Cristopher Medina","LE",27],["Kevin Méndez","VOL",29],["Federico Martínez","MC",31],["Álvaro Madrid","MEI",33],["Benjamín Berríos","PE",24],["Juan Delgado","PD",26],["Andrés Arroyo","ATA",28],["Gustavo Charrupí","ATA",30],["Josué Ovalle","GOL",20],["Rodrigo Contreras","ZAG",23],["Matías Campos López","LD",25],["Diego Oyarzún","LE",27]],"Huachipato":[["Fabián Cerda","GOL",20],["Benjamín Gazzolo","ZAG",23],["Maximiliano Rodríguez","LD",25],["Claudio Sepúlveda","LE",27],["Gonzalo Montes","VOL",29],["Joaquín Gutiérrez","MC",31],["Leandro Díaz","MEI",33],["Cris Martínez","PE",24],["Maximiliano Cerato","PD",26],["Carlo Villanueva","ATA",28],["Felipe Loyola","ATA",30],["Brayan Palmezano","GOL",20],["Nicolás Baeza","ZAG",23],["Juan Sánchez Sotelo","LD",25],["Mateo Acosta","LE",27]],"O'Higgins":[["Nicolás Peranic","GOL",20],["Diego González","ZAG",23],["Juan Fuentes","LD",25],["Brian Torrealba","LE",27],["Esteban Calderón","VOL",29],["Camilo Moya","MC",31],["Bryan Rabello","MEI",33],["Vicente Fernández","PE",24],["Tomás Avilés","PD",26],["Matías Donoso","ATA",28],["Octavio Bianchi","ATA",30],["Facundo Castro","GOL",20],["Jorge Espejo","ZAG",23],["Martín Sarrafiore","LD",25],["Renzo López","LE",27]],"Cobresal":[["Matías Olguín","GOL",20],["Leandro Requena","ZAG",23],["Franco Bechtholdt","LD",25],["Marcelo Jorquera","LE",27],["Felipe Villagrán","VOL",29],["Juan Carlos Gaete","MC",31],["Guillermo Pacheco","MEI",33],["Franco García","PE",24],["César Munder","PD",26],["Janpol Morales","ATA",28],["Martín Espinoza","ATA",30],["Gastón Lezcano","GOL",20],["Leonardo Valencia","ZAG",23],["Sebastián Silva","LD",25],["Jorge Henríquez","LE",27]],"Coquimbo Unido":[["Diego Sánchez","GOL",20],["Salvador Sánchez","ZAG",23],["Nicolás Berardo","LD",25],["Bruno Cabrera","LE",27],["Dylan Escobar","VOL",29],["Alejandro Camargo","MC",31],["Sebastián Galani","MEI",33],["Luciano Cabral","PE",24],["Facundo Pons","PD",26],["Nicolás Johansen","ATA",28],["Matías Palavecino","ATA",30],["Joe Abrigo","GOL",20],["Diego Carrasco","ZAG",23],["Manuel Fernández","LD",25],["Cristóbal Marín","LE",27]],"Unión La Calera":[["Jorge Peña","GOL",20],["Juan Pablo Salomoni","ZAG",23],["Yonathan Andía","LD",25],["Nicolás Ferreyra","LE",27],["Ezequiel Parnisari","VOL",29],["Esteban Valencia","MC",31],["Gonzalo Castellani","MEI",33],["César Pérez","PE",24],["Diego Ulloa","PD",26],["Brayan Garrido","ATA",28],["Vicente Lavín","ATA",30],["Renzo López","GOL",20],["Matías Cavalleri","ZAG",23],["Lucas Passerini","LD",25],["Fernando Saavedra","LE",27]],"Unión Española":[["Franco Torgnascioli","GOL",20],["José Tiznado","ZAG",23],["Stefano Magnasco","LD",25],["Thomas Rodríguez","LE",27],["Diego González","VOL",29],["Ignacio Núñez","MC",31],["Bryan Carvallo","MEI",33],["Ariel Uribe","PE",24],["Leandro Benegas","PD",26],["Vicente Conelli","ATA",28],["Bastián Yáñez","ATA",30],["Luis Pavez","GOL",20],["Valentín Vidal","ZAG",23],["Diego Acevedo","LD",25],["Jonathan Villagra","LE",27]],"Ñublense":[["Nicola Pérez","GOL",20],["Rafael Caroca","ZAG",23],["Bernardo Cerezo","LD",25],["Lucas Abascia","LE",27],["Branco Provoste","VOL",29],["Ismael Sosa","MC",31],["Patricio Rubio","MEI",33],["Bayron Oyarzo","PE",24],["Lorenzo Reyes","PD",26],["Federico Mateos","ATA",28],["Giovanni Campusano","ATA",30],["Manuel Rivera","GOL",20],["Juan Leiva","ZAG",23],["Felipe Yáñez","LD",25],["Matías Plaza","LE",27]],"Deportes Limache":[["Rodrigo Cancino","GOL",20],["Dylan Escobar","ZAG",23],["Hugo Bascuñán","LD",25],["Leonardo Valencia","LE",27],["Tiago Galletto","VOL",29],["Hugo Martínez","MC",31],["Facundo Cubillos","MEI",33],["Gonzalo Jara","PE",24],["Nelson Sepúlveda","PD",26],["Daniel Castro","ATA",28],["Felipe Flores","ATA",30],["Luis Guerra","GOL",20],["Diego Fernández","ZAG",23],["Javier Rojas","LD",25],["Vicente Cárcamo","LE",27]],"La Serena":[["Zacarías López","GOL",20],["Eryin Sanhueza","ZAG",23],["Lucas Alarcón","LD",25],["Rodrigo Brito","LE",27],["Ignacio Sáez","VOL",29],["Leonardo Valencia","MC",31],["Sebastián Galani","MEI",33],["Juan Sánchez Sotelo","PE",24],["Alexander Aravena","PD",26],["Maximiliano Guerrero","ATA",28],["Damián Pizarro","ATA",30],["Enzo Guerrero","GOL",20],["Matías Fernández","ZAG",23],["Gonzalo Jara","LD",25],["Diego Ulloa","LE",27]],"Deportes Concepción":[["Jorge Deschamps","GOL",20],["Cristián Riquelme","ZAG",23],["Joaquín Montecinos","LD",25],["Fernando Martínez","LE",27],["Nicolás Ramírez","VOL",29],["Sebastián Silva","MC",31],["Nelson Sepúlveda","MEI",33],["Gabriel Castellón","PE",24],["Matías Donoso","PD",26],["Brayan Valdivia","ATA",28],["Lucas Molina","ATA",30],["Kevin Medel","GOL",20],["Ignacio Mesías","ZAG",23],["Fabián Núñez","LD",25],["Carlos Escobar","LE",27]],"Junior":[["Santiago Mele","GOL",20],["Jeison Suárez","ZAG",23],["Edwin Herrera","LD",25],["Jean Carlos Pestaña","LE",27],["Pablo Ortiz","VOL",29],["Guillermo Celis","MC",31],["Daniel Rivera","MEI",33],["Jesús Rivas","PE",24],["Fabián Ángel","PD",26],["Juan David Ríos","ATA",28],["Brayan Castrillón","ATA",30],["Cristian Barrios","GOL",20],["Guillermo Paiva","ZAG",23],["Luis Muriel","LD",25],["Joel Canchimbo","LE",27]],"América de Cali":[["Jean Fernandes","GOL",20],["Marlon Torres","ZAG",23],["Cristian Tovar","LD",25],["Dany Rosero","LE",27],["Omar Bertel","VOL",29],["Rafael Carrascal","MC",31],["Yhorman Hurtado","MEI",33],["Yeison Guzmán","PE",24],["Josen Escobar","PD",26],["Yani Quintero","ATA",28],["Luis Quiñones","ATA",30],["Tomás Ángel","GOL",20],["Jan Lucumí","ZAG",23],["Jhon Murillo","LD",25],["Darwin Machís","LE",27]],"Deportivo Cali":[["Pedro Gallese","GOL",20],["Juan Dinenno","ZAG",23],["Daniel Giraldo","LD",25],["Emanuel Reynoso","LE",27],["Fernando Álvarez","VOL",29],["Joan Gómez","MC",31],["Steven Rodríguez","MEI",33],["Johan Martínez","PE",24],["Javier Reina","PD",26],["Teófilo Gutiérrez","ATA",28],["Germán Mera","ATA",30],["Andrés Colorado","GOL",20],["Andrés Andrade","ZAG",23],["Jarlan Barrera","LD",25],["Luis Sandoval","LE",27]],"Independiente Santa Fe":[["Andrés Mosquera Marmolejo","GOL",20],["Helibelton Palacios","ZAG",23],["Kilian Toscano","LD",25],["Luis Palacios","LE",27],["Fran Fagúndez","VOL",29],["Nahuel Bustos","MC",31],["Hugo Rodallega","MEI",33],["Omar Fernández","PE",24],["Franco Pardo","PD",26],["Daniel Torres","ATA",28],["Jhojan Torres","ATA",30],["Harold Rivera","GOL",20],["Dairon Mosquera","ZAG",23],["Agustín Rodríguez","LD",25],["Jhon Arias","LE",27]],"Deportes Tolima":[["William Cuesta","GOL",20],["Jeison Angulo","ZAG",23],["Anderson Angulo","LD",25],["Juan David Ríos","LE",27],["Sebastián Guzmán","VOL",29],["Adrián Parra","MC",31],["Juan Torres","MEI",33],["Alex Castro","PE",24],["Yeison Gordillo","PD",26],["Brayan Gil","ATA",28],["Luis Miranda","ATA",30],["Michael Rangel","GOL",20],["Andrés Arroyo","ZAG",23],["Kevin Pérez","LD",25],["Eduardo Sosa","LE",27]],"Once Caldas":[["James Aguirre","GOL",20],["Jorge Cardona","ZAG",23],["Sergio Palacios","LD",25],["Juan Cuesta","LE",27],["Jefry Zapata","VOL",29],["Dayro Moreno","MC",31],["Luis Gómez","MEI",33],["Mateo García","PE",24],["Iván Rojas","PD",26],["Alejandro García","ATA",28],["Billy Arce","ATA",30],["Santiago Mera","GOL",20],["Johan Arango","ZAG",23],["Michael Barrios","LD",25],["Juan David Rodríguez","LE",27]],"Atlético Bucaramanga":[["Aldair Quintana","GOL",20],["Carlos Henao","ZAG",23],["Mena","LD",25],["Fabián Sambueza","LE",27],["Enmerson Batalla","VOL",29],["Frank Castañeda","MC",31],["Jefferson Mena","MEI",33],["Leonardo Flores","PE",24],["Fredy Hinestroza","PD",26],["Jhon Córdoba","ATA",28],["Misael Martínez","ATA",30],["Michael Rangel","GOL",20],["Fabry Castro","ZAG",23],["Víctor Mejía","LD",25],["Carlos Mosquera","LE",27]],"Deportivo Pasto":[["Diego Martínez","GOL",20],["Daniel Moreno","ZAG",23],["Víctor Mejía","LD",25],["Kevin Londoño","LE",27],["Gustavo Britos","VOL",29],["Darwin López","MC",31],["Israel Alba","MEI",33],["Camilo Ayala","PE",24],["Juan David Ríos","PD",26],["Cristian Arrieta","ATA",28],["Andrés Cabezas","ATA",30],["Diego Hernández","GOL",20],["Kevin Rendón","ZAG",23],["Brayan Carabalí","LD",25],["Juan Castilla","LE",27]],"La Equidad":[["Washington Ortega","GOL",20],["Andrés Correa","ZAG",23],["John García","LD",25],["Joan Castro","LE",27],["Kevin Salazar","VOL",29],["Juan Mahecha","MC",31],["Pablo Lima","MEI",33],["David Camacho","PE",24],["Johan Rojas","PD",26],["Andrés Sarmiento","ATA",28],["José Lloreda","ATA",30],["Carlos Rivas","GOL",20],["Kevin Viveros","ZAG",23],["Amaury Torralvo","LD",25],["Joan Parra","LE",27]],"Envigado":[["Felipe Parra","GOL",20],["Santiago Noreña","ZAG",23],["Yarley Rodríguez","LD",25],["Daniel Arcila","LE",27],["Luis Díaz Espinosa","VOL",29],["Jhon Solís","MC",31],["Juan David Fuentes","MEI",33],["Bayron Garcés","PE",24],["Dorlan Pabón","PD",26],["Yaser Asprilla","ATA",28],["Emmanuel Martínez","ATA",30],["Diego Moreno","GOL",20],["Geovan Montes","ZAG",23],["Luis Ángel Díaz","LD",25],["Daniel Londoño","LE",27]],"Alianza FC":[["Pier Graziani","GOL",20],["Pedro Franco","ZAG",23],["Efraín Navarro","LD",25],["Leonardo Saldaña","LE",27],["Ruyery Blanco","VOL",29],["Jhon Vásquez","MC",31],["Jesús Figueroa","MEI",33],["Edwin Torres","PE",24],["Andrés Rentería","PD",26],["Mayer Gil","ATA",28],["Michael Rangel","ATA",30],["Juan Camilo Portilla","GOL",20],["José Muñoz","ZAG",23],["Cristian Blanco","LD",25],["Sebastián Acosta","LE",27]],"Fortaleza CEIF":[["Juan Diego Castillo","GOL",20],["Andrés Arroyo","ZAG",23],["Jhon Solís","LD",25],["Nicolás Rodríguez","LE",27],["Hayen Palacios","VOL",29],["Juan David Fuentes","MC",31],["Adolfo Valencia","MEI",33],["Kevin Parra","PE",24],["Santiago Córdoba","PD",26],["Brayan Ceballos","ATA",28],["Sebastián Navarro","ATA",30],["Juan Pablo Torres","GOL",20],["Jesús Oviedo","ZAG",23],["Carlos Lucumí","LD",25],["Juan Camilo Castillo","LE",27]],"Boyacá Chicó":[["Rogerio Caicedo","GOL",20],["Elkin Mosquera","ZAG",23],["Frank Lozano","LD",25],["Henry Plazas","LE",27],["Diego Sánchez","VOL",29],["Geimer Balanta","MC",31],["Kevin Londoño","MEI",33],["José Enamorado","PE",24],["Brayan Moreno","PD",26],["Michael Nike Gómez","ATA",28],["Jhonier Viveros","ATA",30],["Juan David Pérez","GOL",20],["Matías Palacios","ZAG",23],["Edwin Mosquera","LD",25],["Mateo García","LE",27]],"Cúcuta Deportivo":[["Ezequiel Mastrolía","GOL",20],["Leider Berdugo","ZAG",23],["Jonathan Agudelo","LD",25],["Jorge Ramos","LE",27],["Germán Gutiérrez","VOL",29],["Marlon Piedrahita","MC",31],["James Aguirre","MEI",33],["Juan Camilo Chaverra","PE",24],["Diego Hernández","PD",26],["Jhonatan Pérez","ATA",28],["Lucas Ríos","ATA",30],["Javier Reina","GOL",20],["Cristian Martínez Borja","ZAG",23],["Kevin Ángulo","LD",25],["Carlos Henao","LE",27]],"Independiente Medellín":[["Salvador Ichazo","GOL",20],["John Montaño","ZAG",23],["Juan Manuel Viveros","LD",25],["Marlon Balanta","LE",27],["Enzo Larrosa","VOL",29],["Didier Moreno","MC",31],["Yony González","MEI",33],["Luciano Pons","PE",24],["Brayan León","PD",26],["Leyser Chaverra","ATA",28],["Jaime Alvarado","ATA",30],["Jimer Fory","GOL",20],["Mender García","ZAG",23],["Diego Moreno","LD",25],["Luis Sandoval","LE",27]],"Jaguares de Córdoba":[["Aldair Zárate","GOL",20],["Cristian Alvarez","ZAG",23],["Kevin Riascos","LD",25],["Yilber Arboleda","LE",27],["Wilson Morelo","VOL",29],["Jhon Vásquez","MC",31],["José Lloreda","MEI",33],["Daniel Padilla","PE",24],["Pablo Rojas","PD",26],["Juan Camilo Roa","ATA",28],["Nelson Deossa","ATA",30],["Darwin López","GOL",20],["Jhonier Viveros","ZAG",23],["Carlos Copete","LD",25],["Edgar Medrano","LE",27]],"Llaneros":[["Néider Ospina","GOL",20],["Juan Camilo Salazar","ZAG",23],["Diego Hernández","LD",25],["Jhon Fredy Salazar","LE",27],["Carlos Sierra","VOL",29],["Andrés Arroyo","MC",31],["Brayan Moreno","MEI",33],["Juan David Pérez","PE",24],["Jonathan Pérez","PD",26],["Kevin Parra","ATA",28],["Santiago Aguilar","ATA",30],["Julián Quiñones","GOL",20],["Juan Pablo Vargas","ZAG",23],["Cristian Blanco","LD",25],["Jorge Arias","LE",27]],"Real Cundinamarca":[["Sebastián Guerra","GOL",20],["Jhon Mena","ZAG",23],["Juan David Fuentes","LD",25],["Nicolás Gil","LE",27],["Andrés Correa","VOL",29],["Juan Mahecha","MC",31],["Luis Angulo","MEI",33],["Jorge Ramos","PE",24],["Kevin Viveros","PD",26],["Andrés Sarmiento","ATA",28],["Daniel Mantilla","ATA",30],["Johan Rojas","GOL",20],["Diego Hernández","ZAG",23],["Brayan Moreno","LD",25],["José Lloreda","LE",27]],"Libertad":[["Rodrigo Morínigo","GOL",20],["Diego Viera","ZAG",23],["Iván Ramírez","LD",25],["Néstor Giménez","LE",27],["Álvaro Campuzano","VOL",29],["Hernesto Caballero","MC",31],["Rubén Lezcano","MEI",33],["Iván Franco","PE",24],["Lorenzo Melgarejo","PD",26],["Óscar Cardozo","ATA",28],["Gustavo Aguilar","ATA",30],["Bautista Merlini","GOL",20],["Alexander Barboza","ZAG",23],["Hugo Martínez","LD",25],["Matías Espinoza","LE",27]],"Guaraní":[["Gaspar Servio","GOL",20],["Luis Martínez","ZAG",23],["José Moya","LD",25],["Walter Clar","LE",27],["Bautista Merlini","VOL",29],["Rafael Carrascal","MC",31],["Agustín Manzur","MEI",33],["Alan Pereira","PE",24],["Fernando Fernández","PD",26],["Néstor Camacho","ATA",28],["Rodrigo López","ATA",30],["Alexis Cantero","GOL",20],["Paul Riveros","ZAG",23],["Juan Patiño","LD",25],["Gustavo Vargas","LE",27]],"Sportivo Luqueño":[["Alfredo Aguilar","GOL",20],["Pablo Aguilar","ZAG",23],["Iván Torres","LD",25],["Mathías Villasanti","LE",27],["Rodrigo Rojas","VOL",29],["Diego Vera","MC",31],["Marcelo Ferreira","MEI",33],["Jorge Benítez","PE",24],["Rodi Ferreira","PD",26],["Marcelo Pérez","ATA",28],["Derlis Orué","ATA",30],["Iván Cazal","GOL",20],["Kevin Pereira","ZAG",23],["Juan Núñez","LD",25],["Walter González","LE",27]],"Sol de América":[["Gerardo Ortiz","GOL",20],["Gustavo Velázquez","ZAG",23],["Richard Franco","LD",25],["Luis Caballero","LE",27],["Iván Cazal","VOL",29],["Diego Valdez","MC",31],["Rodrigo Castro","MEI",33],["Fernando Ruiz Díaz","PE",24],["Nildo Viera","PD",26],["José Ortigoza","ATA",28],["César Villagra","ATA",30],["Jorge Jara","GOL",20],["Franco Aragón","ZAG",23],["Matías Pardo","LD",25],["Aldo Vera","LE",27]],"Sportivo Trinidense":[["Víctor Samudio","GOL",20],["Gilberto Flores","ZAG",23],["César Benítez","LD",25],["Wildo Alonso","LE",27],["Marcos Riveros","VOL",29],["Pedro Delvalle","MC",31],["Joel Román","MEI",33],["Fernando Romero","PE",24],["Alex Arce","PD",26],["Lucas Barrios","ATA",28],["Juan Salcedo","ATA",30],["Osmar Leguizamón","GOL",20],["David Fleitas","ZAG",23],["Jorge González","LD",25],["Ronaldo Martínez","LE",27]],"Sportivo Ameliano":[["Federico Cristóforo","GOL",20],["Richard Torales","ZAG",23],["Walter Cabrera","LD",25],["Marcos Martinich","LE",27],["Hugo Benítez","VOL",29],["Elías Sarquis","MC",31],["Sergio Bareiro","MEI",33],["Alejandro Samudio","PE",24],["Fredy Vera","PD",26],["Iván Valdez","ATA",28],["Nicolás Morínigo","ATA",30],["Richard Salinas","GOL",20],["Héctor Bustamante","ZAG",23],["Jorge Sanguina","LD",25],["Alan Núñez","LE",27]],"General Caballero JLM":[["Gustavo Arévalos","GOL",20],["José Vera","ZAG",23],["Pedro Delvalle","LD",25],["Gustavo Toranzo","LE",27],["Juan Patiño","VOL",29],["Jorge Benítez","MC",31],["Juan Saborido","MEI",33],["Nicolás Maná","PE",24],["Roberto Fernández","PD",26],["Alberto Contrera","ATA",28],["César Villagra","ATA",30],["David Fleitas","GOL",20],["Fernando Martínez","ZAG",23],["Luis Fariña","LD",25],["Matías Romero","LE",27]],"2 de Mayo":[["Carlos Servín","GOL",20],["Milciades Portillo","ZAG",23],["Hugo Benítez","LD",25],["Rodrigo Burgos","LE",27],["Pablo Adorno","VOL",29],["Mauro Da Luz","MC",31],["Nicolás Maná","MEI",33],["Elías Sarquis","PE",24],["Damián Bobadilla","PD",26],["Federico Santander","ATA",28],["Walter González","ATA",30],["Juan Núñez","GOL",20],["Gustavo Caballero","ZAG",23],["Luis Cabral","LD",25],["Cristhian Ocampos","LE",27]],"Recoleta":[["Nicolás Yegros","GOL",20],["Juan Patiño","ZAG",23],["Gustavo Giménez","LD",25],["Héctor David Martínez","LE",27],["Walter Clar","VOL",29],["Richard Prieto","MC",31],["Jorge Ortega","MEI",33],["Fernando Martínez","PE",24],["Ronaldo Martínez","PD",26],["Luis Amarilla","ATA",28],["César Villagra","ATA",30],["Santiago Salcedo","GOL",20],["Víctor Ayala","ZAG",23],["Jorge Mendoza","LD",25],["Ariel Núñez","LE",27]],"Emelec":[["Pedro Ortiz","GOL",20],["Gilmar Napa","ZAG",23],["Aníbal Leguizamón","LD",25],["Luis Fernando León","LE",27],["Juan Carlos Paredes","VOL",29],["Alexander González","MC",31],["Romario Caicedo","MEI",33],["Jackson Rodríguez","PE",24],["Fernando León","PD",26],["Cristian Noboa","ATA",28],["Maicon Solís","ATA",30],["Jhon Jairo Sánchez","GOL",20],["Facundo Castelli","ZAG",23],["Jaime Ayoví","LD",25],["Washington Corozo","LE",27]],"Aucas":[["Federico Lanzillotta","GOL",20],["Luis Cangá","ZAG",23],["Carlos Cuero","LD",25],["Luis Cano","LE",27],["Michael Carcelén","VOL",29],["Jhonny Quiñónez","MC",31],["Renny Jaramillo","MEI",33],["Ronald Briones","PE",24],["Jeison Medina","PD",26],["Jeison Chalá","ATA",28],["Edison Vega","ATA",30],["Carlos Rolón","GOL",20],["Ángelo Mina","ZAG",23],["Luis Romero","LD",25],["Juan González","LE",27]],"Deportivo Cuenca":[["Hamilton Piedra","GOL",20],["Lucas Mancinelli","ZAG",23],["Nicolás Dávila","LD",25],["Richard Calderón","LE",27],["Raúl Becerra","VOL",29],["Agustín García Basso","MC",31],["Guillermo Fratta","MEI",33],["Bryan Rivera","PE",24],["Lucas Prestianni","PD",26],["Luis Arroyo","ATA",28],["Pablo Magnín","ATA",30],["Édison Preciado","GOL",20],["Andrés López","ZAG",23],["Bruno Duarte","LD",25],["Walter Chalá","LE",27]],"El Nacional":[["David Cabezas","GOL",20],["Franklin Guerra","ZAG",23],["Byron Mina","LD",25],["Aníbal Chalá","LE",27],["Jonathan Borja","VOL",29],["Jorge Ordóñez","MC",31],["Marcos Montaño","MEI",33],["Édison Caicedo","PE",24],["Ángel Ledesma","PD",26],["Ronie Carrillo","ATA",28],["Daniel Patiño","ATA",30],["Adolfo Muñoz","GOL",20],["Bryan Angulo","ZAG",23],["Christian Cueva","LD",25],["Kevin Peralta","LE",27]],"Macará":[["Javier Burrai","GOL",20],["Galo Corozo","ZAG",23],["Matías Cortave","LD",25],["Darwin Quilumba","LE",27],["Fernando Mora","VOL",29],["Carlos Feraud","MC",31],["Moisés Corozo","MEI",33],["Janner Corozo","PE",24],["Ronald Champang","PD",26],["Facundo Pons","ATA",28],["Michael Estrada","ATA",30],["Juan Tévez","GOL",20],["Leonel Quiñónez","ZAG",23],["Adrián Sánchez","LD",25],["Jonathan Betancourt","LE",27]],"Mushuc Runa":[["Jorge Pinos","GOL",20],["Darwin Quilumba","ZAG",23],["Carlos Feraud","LD",25],["Marco Carrasco","LE",27],["Jonathan Borja","VOL",29],["Stiven Plaza","MC",31],["Jonathan Bauman","MEI",33],["Mathías Acuña","PE",24],["Darwin Rodríguez","PD",26],["Efrén Mera","ATA",28],["Luis Arce","ATA",30],["Jhonny Uchuari","GOL",20],["Kevin Mercado","ZAG",23],["Eddy Corozo","LD",25],["Jorge Palacios","LE",27]],"Orense":[["Rolando Silva","GOL",20],["Gabriel Achilier","ZAG",23],["Marcos Cangá","LD",25],["Sebastián Assis","LE",27],["Adrián Bone","VOL",29],["Robert Burbano","MC",31],["Leonel Quiñónez","MEI",33],["Richard Calderón","PE",24],["Miguel Parrales","PD",26],["Agustín Herrera","ATA",28],["Cristian Cruz","ATA",30],["Éder Cetre","GOL",20],["Nixon Molina","ZAG",23],["Ángel Mena","LD",25],["José Miguel Andrade","LE",27]],"Técnico Universitario":[["Walter Chávez","GOL",20],["Eddy Rentería","ZAG",23],["Jean Carlos Quiñónez","LD",25],["Carlos Arboleda","LE",27],["Stiven Tapiero","VOL",29],["Edison Carcelén","MC",31],["Diego Armas","MEI",33],["Alex Rangel","PE",24],["Byron Palacios","PD",26],["Jean Carlos Blanco","ATA",28],["Luis Estupiñán","ATA",30],["Juan David Rojas","GOL",20],["Adolfo Muñoz","ZAG",23],["Ronaldo Johnson","LD",25],["Carlos Orejuela","LE",27]],"Manta":[["Hamilton Piedra","GOL",20],["José Angulo","ZAG",23],["Moisés Corozo","LD",25],["Luis Arce","LE",27],["Christian García","VOL",29],["José Mercado","MC",31],["Jorge Palacios","MEI",33],["Ángel Ledesma","PE",24],["Michael Jackson Quiñónez","PD",26],["Edson Montaño","ATA",28],["Ely Esterilla","ATA",30],["Marlon de Jesús","GOL",20],["Bryan Cabezas","ZAG",23],["Luis Congo","LD",25],["Ronald Champang","LE",27]],"Libertad FC":[["José Cevallos","GOL",20],["Pedro Larrea","ZAG",23],["Anderson Naula","LD",25],["Fabio Renato Espínola","LE",27],["Renny Jaramillo","VOL",29],["Daniel Porozo","MC",31],["Luis Bolaños","MEI",33],["Roberto Luzarraga","PE",24],["Álex Aguinaga","PD",26],["Jorge Ordóñez","ATA",28],["Miller Bolaños","ATA",30],["Jhonatan González","GOL",20],["José Fajardo","ZAG",23],["Kevin Ushiña","LD",25],["Darwin Torres","LE",27]],"Guayaquil City":[["Daniel Viteri","GOL",20],["Robert Burbano","ZAG",23],["Luis Checa","LD",25],["José Hurtado","LE",27],["Fernando Guerrero","VOL",29],["Michael Hoyos","MC",31],["Miller Castillo","MEI",33],["Jonathan Bauman","PE",24],["Marcos Caicedo","PD",26],["Michael Arroyo","ATA",28],["Matías Oyola","ATA",30],["Gabriel Marques","GOL",20],["Jonathan Perlaza","ZAG",23],["Washington Vera","LD",25],["Adrián Bone","LE",27]],"Melgar":[["Carlos Cáceda","GOL",20],["Leonel Galeano","ZAG",23],["Alec Deneumostier","LD",25],["Lazo","LE",27],["Escobar","VOL",29],["Cabanillas","MC",31],["Minda","MEI",33],["Portillo","PE",24],["Zegarra","PD",26],["Bordacahar","ATA",28],["Vidales","ATA",30],["Cuesta","GOL",20],["Marcos Portillo","ZAG",23],["Kenji Cabrera","LD",25],["Bernardo Cuesta","LE",27]],"Cienciano":[["Ítalo Espinoza","GOL",20],["Carlos Garcés","ZAG",23],["Christian Cueva","LD",25],["Alfredo Ramúa","LE",27],["Jean Deza","VOL",29],["Juan Romagnoli","MC",31],["Paolo Fuentes","MEI",33],["Carlos Beltrán","PE",24],["Marcelo Benítez","PD",26],["Josué Estrada","ATA",28],["Alexander Lecaros","ATA",30],["Luis Álvarez","GOL",20],["Mauricio Matzuda","ZAG",23],["Miguel Vargas","LD",25],["Gonzalo Ríos","LE",27]],"Sport Boys":[["Diego Melián","GOL",20],["Carlos Zambrano","ZAG",23],["Emilio Saba","LD",25],["Gustavo Dulanto","LE",27],["Hansell Riojas","VOL",29],["Anghelo Flores","MC",31],["Mora","MEI",33],["Llontop","PE",24],["Da Campo","PD",26],["Alarcón","ATA",28],["Christian Cueva","ATA",30],["Pablo Erustes","GOL",20],["Jefferson Nolasco","ZAG",23],["Jesús Barco","LD",25],["Joao Villamarín","LE",27]],"ADT":[["Carlos Solís","GOL",20],["Enzo Mori","ZAG",23],["Juan David Valencia","LD",25],["Jerry Navarro","LE",27],["Jhair Soto","VOL",29],["John Narváez","MC",31],["José Rugel","MEI",33],["Ronny Biojo","PE",24],["Ángel Ojeda","PD",26],["Jordan Guivin","ATA",28],["Luis Benites","ATA",30],["Víctor Cedrón","GOL",20],["Jonatan Bauman","ZAG",23],["Hernán Rengifo","LD",25],["Hideyoshi Arakaki","LE",27]],"Alianza Atlético":[["Guillermo Viscarra","GOL",20],["Ignacio Tapia","ZAG",23],["Lucas Acevedo","LD",25],["Rodrigo Tapia","LE",27],["Santiago Torres","VOL",29],["Rafael Guarderas","MC",31],["Elsar Rodas","MEI",33],["Diego Barreto","PE",24],["Raúl Ruidíaz","PD",26],["Yamir Ruidíaz","ATA",28],["Jairo Molina","ATA",30],["Steven Rivadeneyra","GOL",20],["Joaquín Revilla","ZAG",23],["José María Ingratii","LD",25],["Adrián De La Cruz","LE",27]],"Atlético Grau":[["Aamet Calderón","GOL",20],["Patricio Álvarez","ZAG",23],["Arnold Flores","LD",25],["Ignacio Tapia","LE",27],["Lucas Acevedo","VOL",29],["Rodrigo Tapia","MC",31],["Rafael Guarderas","MEI",33],["Emiliano Franco","PE",24],["Nicolás Delgadillo","PD",26],["Raúl Ruidíaz","ATA",28],["Paulo De La Cruz","ATA",30],["Pablo Lavandeira","GOL",20],["Paolo Reyna","ZAG",23],["Fernando Márquez","LD",25],["Oslimg Mora","LE",27]],"Comerciantes Unidos":[["Álvaro Villete","GOL",20],["José Charún","ZAG",23],["Christian Vásquez","LD",25],["Daniel Lino","LE",27],["Fabio Rojas","VOL",29],["Flavio Alcedo","MC",31],["Yordi Vílchez","MEI",33],["Alexis Cossío","PE",24],["Rodrigo Vilca","PD",26],["Matías Sen","ATA",28],["Wilter Ayoví","ATA",30],["Agustín Rodríguez","GOL",20],["Thiago Salinas","ZAG",23],["Óscar Pinto","LD",25],["Carlos Saavedra","LE",27]],"Cusco FC":[["Andy Vidal","GOL",20],["Horacio Benincasa","ZAG",23],["Mauricio Montes","LD",25],["Iván Santillán","LE",27],["Oswaldo Valenzuela","VOL",29],["Lucas Colitto","MC",31],["Miguel Aucca","MEI",33],["Juan Tévez","PE",24],["Felipe Rodríguez","PD",26],["Abdiel Arroyo","ATA",28],["Ricardo Lagos","ATA",30],["Miguel Silveira","GOL",20],["Christopher Olivares","ZAG",23],["Luis Urruti","LD",25],["Nicolás Silva","LE",27]],"Deportivo Garcilaso":[["Diego Penny","GOL",20],["Aldair Salazar","ZAG",23],["Carlos Beltrán","LD",25],["Luis Urruti","LE",27],["Joao Rojas","VOL",29],["Alexander Lecaros","MC",31],["Adrián Ugarriza","MEI",33],["Kevin Quevedo","PE",24],["Anthony Rossel","PD",26],["Lucas Ríos","ATA",28],["Pablo Erustes","ATA",30],["Juan Diego Gutiérrez","GOL",20],["Jorge Bazán","ZAG",23],["Mauricio Cuero","LD",25],["Gonzalo Ríos","LE",27]],"Deportivo Moquegua":[["Ángel Zamudio","GOL",20],["José Bolívar","ZAG",23],["Maximiliano Amondarain","LD",25],["Carlos Cáceda","LE",27],["Jorge Murrugarra","VOL",29],["Alexis Arias","MC",31],["Kevin Sandoval","MEI",33],["Jorge Bazán","PE",24],["Matías Sen","PD",26],["Lucas Colitto","ATA",28],["Mauricio Montes","ATA",30],["Gonzalo Sánchez","GOL",20],["Luis Benites","ZAG",23],["Renzo Garcés","LD",25],["Christian Ramos","LE",27]],"FC Cajamarca":[["Carlos Grados","GOL",20],["Erick Noriega","ZAG",23],["Luis Iberico","LD",25],["Jairo Vélez","LE",27],["Miguel Araujo","VOL",29],["Alessandro Burlamaqui","MC",31],["Rafael Lutiger","MEI",33],["Adrián Ascues","PE",24],["Luis García","PD",26],["Aldair Fuentes","ATA",28],["Osnar Noronha","ATA",30],["Marcos Lliuya","GOL",20],["Ronald Quinteros","ZAG",23],["Joao Villamarín","LD",25],["Kevin Serna","LE",27]],"Juan Pablo II College":[["Álvaro Villete","GOL",20],["Christian Vásquez","ZAG",23],["Piero Guzmán","LD",25],["Yordi Vílchez","LE",27],["Alexis Arias","VOL",29],["Carlos Correa","MC",31],["Josué Herrera","MEI",33],["Rodrigo Vilca","PE",24],["Thiago Salinas","PD",26],["Matías Sen","ATA",28],["Wilter Ayoví","ATA",30],["Jack Carhuallanqui","GOL",20],["Josué Torres","ZAG",23],["André Vásquez","LD",25],["Kevin Ruiz","LE",27]],"Los Chankas":[["Álvaro Villete","GOL",20],["Daniel Ferreyra","ZAG",23],["Christian Vásquez","LD",25],["Piero Guzmán","LE",27],["Juan José Rodríguez","VOL",29],["Agustín Rodríguez","MC",31],["Alexis Cossío","MEI",33],["Rodrigo Vilca","PE",24],["Óscar Pinto","PD",26],["Elbio Pérez","ATA",28],["Matías Sen","ATA",30],["Wilter Ayoví","GOL",20],["Axel Chávez","ZAG",23],["André Vásquez","LD",25],["Carlos López","LE",27]],"Sport Huancayo":[["Joel Pinto","GOL",20],["Carlos Ross","ZAG",23],["Ronald Huaccha","LD",25],["Luis Benites","LE",27],["Marcos Lliuya","VOL",29],["Víctor Balta","MC",31],["Juan David Pérez","MEI",33],["Daniel Porozo","PE",24],["Juan Giménez","PD",26],["Pablo Lavandeira","ATA",28],["Jair Céspedes","ATA",30],["Ángel Ojeda","GOL",20],["Carlos Neumann","ZAG",23],["Richard Salinas","LD",25],["Edinson Chávez","LE",27]],"UTC":[["Patrick Zubczuk","GOL",20],["Luis García","ZAG",23],["Koichi Aparicio","LD",25],["Jonathan Segura","LE",27],["Erinson Ramírez","VOL",29],["Kevin Ruiz","MC",31],["Jarlin Quintero","MEI",33],["Gaspar Gentile","PE",24],["Hideyoshi Arakaki","PD",26],["Carlos Diez","ATA",28],["Ángel Romero","ATA",30],["Luis Cano","GOL",20],["Adrián Gutiérrez","ZAG",23],["Nicolás Ortíz","LD",25],["Víctor Perlaza","LE",27]],"Aurora":[["David Akologo","GOL",20],["Roberto Fernández","ZAG",23],["David Robles","LD",25],["Luis Barbosa","LE",27],["Ramiro Vaca","VOL",29],["Serginho","MC",31],["Jair Reinoso","MEI",33],["Oswaldo Blanco","PE",24],["Darwin Torres","PD",26],["Sergio Moruno","ATA",28],["Miguel Quiroga","ATA",30],["Didí Torrico","GOL",20],["Rodrigo Borda","ZAG",23],["Amílcar Sánchez","LD",25],["Jair Catuy","LE",27]],"Oriente Petrolero":[["Guillermo Viscarra","GOL",20],["Carlos Añez","ZAG",23],["Ronald Raldes","LD",25],["Luis Haquín","LE",27],["Hugo Dorrego","VOL",29],["Juan Mercado","MC",31],["Franco Troyansky","MEI",33],["Gilbert Álvarez","PE",24],["José Alfredo Castillo","PD",26],["Henry Vaca","ATA",28],["Daniel Saravia","ATA",30],["Miguel Quiroga","GOL",20],["Sebastián Álvarez","ZAG",23],["Ronaldo Sánchez","LD",25],["Samuel Guzmán","LE",27]],"Blooming":[["Marco Daniel Vaca","GOL",20],["Jesús Sagredo","ZAG",23],["José Sagredo","LD",25],["Carlos Lampe","LE",27],["Fernando Saucedo","VOL",29],["Rafinha","MC",31],["Juan Carlos Arce","MEI",33],["César Menacho","PE",24],["Miguel Quiroga","PD",26],["Héctor Cuéllar","ATA",28],["Roberto Fernández","ATA",30],["Julio Herrera","GOL",20],["Ricardo Suárez","ZAG",23],["Abraham Cabrera","LD",25],["Jhon Velásquez","LE",27]],"Independiente Petrolero":[["Alex Arancibia","GOL",20],["Luis Alí","ZAG",23],["Thomaz Santos","LD",25],["Jhasmani Campos","LE",27],["Moisés Villarroel","VOL",29],["Martín Prost","MC",31],["Rodrigo Borda","MEI",33],["Jorge Toco","PE",24],["Franco Bejarano","PD",26],["Diego Hoyos","ATA",28],["Daniel Saravia","ATA",30],["Juan Godoy","GOL",20],["Víctor Ábrego","ZAG",23],["José Vargas","LD",25],["Miguel Quiroga","LE",27]],"Nacional Potosí":[["Saidt Mustafá","GOL",20],["Luis Torrico","ZAG",23],["Saulo Guerra","LD",25],["Diego Hoyos","LE",27],["Edson Pérez","VOL",29],["Samuel Galindo","MC",31],["Cristian Alessandrini","MEI",33],["Martín Prost","PE",24],["Gustavo Cristaldo","PD",26],["Jorge Lovera","ATA",28],["Daniel Saravia","ATA",30],["Víctor Ábrego","GOL",20],["Bruno Pascua","ZAG",23],["Saúl Torres","LD",25],["Oscar Áñez","LE",27]],"San Antonio Bulo Bulo":[["José Peñarrieta","GOL",20],["Gustavo Almada","ZAG",23],["Enzo Maidana","LD",25],["Daniel Saravia","LE",27],["Jorge Flores","VOL",29],["Ronaldo Sánchez","MC",31],["Adalid Terrazas","MEI",33],["Moisés Paniagua","PE",24],["Germán Sánchez","PD",26],["Edson Pérez","ATA",28],["Miguel Quiroga","ATA",30],["Juan Carlos Arce","GOL",20],["Luis Alí","ZAG",23],["Sergio Moruno","LD",25],["Darwin Ríos","LE",27]],"ABB":[["Luis Cárdenas","GOL",20],["Diego Wayar","ZAG",23],["José Sagredo","LD",25],["Héctor Cuéllar","LE",27],["Ramiro Vaca","VOL",29],["Bruno Miranda","MC",31],["Jeyson Chura","MEI",33],["Jaime Arrascaita","PE",24],["Miguel Terceros","PD",26],["Carlos Sejas","ATA",28],["Adalid Terrazas","ATA",30],["Luis Alí","GOL",20],["Daniel Saravia","ZAG",23],["Sergio Moruno","LD",25],["Juan Godoy","LE",27]],"Real Potosí":[["Sergio Galarza","GOL",20],["Luis Torrico","ZAG",23],["Ronald Eguino","LD",25],["Darwin Peña","LE",27],["Miguel Quiroga","VOL",29],["Andrés Llano","MC",31],["Víctor Ábrego","MEI",33],["Martín Prost","PE",24],["Edson Pérez","PD",26],["Jorge Lovera","ATA",28],["Saulo Guerra","ATA",30],["Daniel Saravia","GOL",20],["Juan Godoy","ZAG",23],["Bruno Pascua","LD",25],["Oscar Díaz","LE",27]],"Universitario de Vinto":[["Gustavo Almada","GOL",20],["Luis Cárdenas","ZAG",23],["Iván Huayhuata","LD",25],["Rodrigo Borda","LE",27],["Ronald Eguino","VOL",29],["Thomaz Santos","MC",31],["Serginho","MEI",33],["Héctor Cuéllar","PE",24],["Daniel Saravia","PD",26],["Wesley da Silva","ATA",28],["Martín Prost","ATA",30],["Jair Reinoso","GOL",20],["Bruno Miranda","ZAG",23],["Miguel Quiroga","LD",25],["Saulo Guerra","LE",27]],"Totora Real Oruro":[["Rodrigo Banegas","GOL",20],["Jorge Flores","ZAG",23],["Luis Antezana","LD",25],["Diego Wayar","LE",27],["Didí Torrico","VOL",29],["Jair Catuy","MC",31],["Darwin Ríos","MEI",33],["Víctor Ábrego","PE",24],["Miguel Quiroga","PD",26],["Juan Godoy","ATA",28],["Saúl Torres","ATA",30],["Roberto Fernández","GOL",20],["Daniel Saravia","ZAG",23],["Sergio Moruno","LD",25],["Luis Alí","LE",27]],"Gualberto Villarroel San José":[["Rodrigo Banegas","GOL",20],["Jorge Flores","ZAG",23],["Saulo Guerra","LD",25],["Luis Antezana","LE",27],["Didí Torrico","VOL",29],["Miguel Quiroga","MC",31],["Daniel Saravia","MEI",33],["Sergio Moruno","PE",24],["Darwin Ríos","PD",26],["Jair Catuy","ATA",28],["Víctor Ábrego","ATA",30],["Juan Godoy","GOL",20],["Héctor Cuéllar","ZAG",23],["Roberto Fernández","LD",25],["Bruno Miranda","LE",27]],"Real Tomayapo":[["Jefferson Sánchez","GOL",20],["Leandro Maygua","ZAG",23],["Juan Pablo Rioja","LD",25],["Hugo Rojas","LE",27],["Sergio Villamil","VOL",29],["Miguel Quiroga","MC",31],["Matías Noble","MEI",33],["Eber Caicedo","PE",24],["Luis Alí","PD",26],["Agustín Jara","ATA",28],["Rodrigo Borda","ATA",30],["Daniel Saravia","GOL",20],["Sergio Moruno","ZAG",23],["Víctor Ábrego","LD",25],["Jair Reinoso","LE",27]],"Guabirá":[["Jorge Araúz","GOL",20],["Luis Haquín","ZAG",23],["Franco Bejarano","LD",25],["Juan Carlos Montenegro","LE",27],["Gustavo Peredo","VOL",29],["Diego Hoyos","MC",31],["Luis Hurtado","MEI",33],["Juan Carlos Arce","PE",24],["Mauricio Chajtur","PD",26],["Pedro Cabral","ATA",28],["José Alfredo Castillo","ATA",30],["Sergio Moruno","GOL",20],["Miguel Quiroga","ZAG",23],["Daniel Saravia","LD",25],["Víctor Ábrego","LE",27]],"Deportivo La Guaira":[["Carlos Olses","GOL",20],["Arquímedes Figuera","ZAG",23],["Jhon Chancellor","LD",25],["Carlos Rojas","LE",27],["Kervin Vargas","VOL",29],["Charlis Ortiz","MC",31],["Edder Farías","MEI",33],["Luis Martell","PE",24],["Darwin González","PD",26],["Yohan Cumana","ATA",28],["José Martínez","ATA",30],["Jean Franco Castillo","GOL",20],["Jefre Vargas","ZAG",23],["Juan Camilo Pérez","LD",25],["Ronaldo Peña","LE",27]],"Universidad Central de Venezuela":[["Carlos González","GOL",20],["Luis Vargas","ZAG",23],["René Rivas","LD",25],["Adrián Martínez","LE",27],["Bryan Castillo","VOL",29],["Christian Makoun","MC",31],["Daniel De Sousa","MEI",33],["Esli García","PE",24],["Brayan Hurtado","PD",26],["Juan Pablo Añor","ATA",28],["Edson Castillo","ATA",30],["Miku Fedor","GOL",20],["Kleber Pinargote","ZAG",23],["José Luis Granados","LD",25],["Roberto Chacón","LE",27]],"Portuguesa":[["Yarlin Quintero","GOL",20],["Carlos Salazar","ZAG",23],["Jhon Chancellor","LD",25],["Luis Mago","LE",27],["Robert Garcés","VOL",29],["Johan Moreno","MC",31],["Wilker Ángel","MEI",33],["Darwin Machís","PE",24],["Richard Celis","PD",26],["Manuel Arteaga","ATA",28],["Yeferson Soteldo","ATA",30],["Edson Castillo","GOL",20],["José Martínez","ZAG",23],["Brayan Palmezano","LD",25],["Ronaldo Peña","LE",27]],"Academia Puerto Cabello":[["Luis Romero","GOL",20],["José David Contreras","ZAG",23],["Carlos Salazar","LD",25],["Raúl Alarcón","LE",27],["Robert Hernández","VOL",29],["Christian Larotonda","MC",31],["Renny Vega","MEI",33],["Luifer Hernández","PE",24],["Richard Celis","PD",26],["Danny Pérez","ATA",28],["Ronaldo Peña","ATA",30],["Miku Fedor","GOL",20],["Juan Pablo Añor","ZAG",23],["Jhon Chancellor","LD",25],["Bryant Ortega","LE",27]],"Estudiantes de Mérida":[["Alejandro Araque","GOL",20],["Carlos Luján","ZAG",23],["Jesús Meza","LD",25],["Christian Flores","LE",27],["Edison Penilla","VOL",29],["Andrés Ferro","MC",31],["Jorge Páez","MEI",33],["Wilker Ángel","PE",24],["Armando Araque","PD",26],["Erickson Gallardo","ATA",28],["Néstor Canelón","ATA",30],["Luis Castillo","GOL",20],["José Rivas","ZAG",23],["Jesús Hernández","LD",25],["Juan Carlos Ortiz","LE",27]],"Monagas":[["Jorge Roa","GOL",20],["Luis Curiel","ZAG",23],["Oscar González","LD",25],["Carlos Rojas","LE",27],["Edson Castillo","VOL",29],["Daniel Saggiomo","MC",31],["Anthony Uribe","MEI",33],["Aquiles Ocanto","PE",24],["Juan Carlos Ortiz","PD",26],["Christian Larotonda","ATA",28],["Andrés Romero","ATA",30],["Richard Celis","GOL",20],["José Hernández","ZAG",23],["Bryan Alcocer","LD",25],["Juan Camilo Pérez","LE",27]],"Zamora":[["Carlos Salazar","GOL",20],["Joel Graterol","ZAG",23],["Jhon Chancellor","LD",25],["Luis Mago","LE",27],["Yeferson Soteldo","VOL",29],["Richard Celis","MC",31],["Johan Moreno","MEI",33],["Luis Vargas","PE",24],["Anthony Uribe","PD",26],["Brayan Hurtado","ATA",28],["Ronaldo Peña","ATA",30],["Juan Carlos Ortiz","GOL",20],["Daniel Saggiomo","ZAG",23],["José Hernández","LD",25],["Andrés Romero","LE",27]],"Rayo Zuliano":[["Daniel Valdés","GOL",20],["Jefre Vargas","ZAG",23],["José Martínez","LD",25],["Bryant Ortega","LE",27],["Luis Paz","VOL",29],["Roberto Chacón","MC",31],["Johan Moreno","MEI",33],["Anthony Uribe","PE",24],["Jesús Hernández","PD",26],["Ronaldo Peña","ATA",28],["Juan Camilo Pérez","ATA",30],["Andrés Romero","GOL",20],["Luis Mago","ZAG",23],["Carlos Rojas","LD",25],["José Hernández","LE",27]],"Trujillanos":[["Luis Curiel","GOL",20],["Carlos Salazar","ZAG",23],["Wilker Ángel","LD",25],["Luis Mago","LE",27],["Jhon Chancellor","VOL",29],["Edson Castillo","MC",31],["Johan Moreno","MEI",33],["Daniel Saggiomo","PE",24],["Richard Celis","PD",26],["Anthony Uribe","ATA",28],["Ronaldo Peña","ATA",30],["Jesús Hernández","GOL",20],["Bryan Alcocer","ZAG",23],["José Rivas","LD",25],["Andrés Romero","LE",27]],"Anzoátegui":[["Wilbert Hernández","GOL",20],["Junior Moreno","ZAG",23],["Abrahan Moreno","LD",25],["Edanyilber Navas","LE",27],["José Luis Granados","VOL",29],["Deivid Tegues","MC",31],["Pedro Álvarez","MEI",33],["Henry Plazas","PE",24],["Pablo Bonilla","PD",26],["Luis Curiel","ATA",28],["Anthony Uribe","ATA",30],["Johan Moreno","GOL",20],["Richard Celis","ZAG",23],["Bryan Alcocer","LD",25],["Ronaldo Peña","LE",27]]});

// Clubes com o mesmo nome em países diferentes usam chave composta para não compartilhar elenco.
realSquads2026["4:Universidad Católica"] = realSquads2026["Universidad Católica"].slice();
realSquads2026["7:Universidad Católica"] = realSquads2026["Universidad Católica"].slice();

// ===== OUTROS PAÍSES — PRIMEIRA ONDA 2026 =====
// Elencos prioritários conferidos em fontes de clubes/competição em 2026.
Object.assign(realSquads2026, {
"Peñarol":[["Washington Aguerre","GOL",32],["Sebastián Britos","GOL",39],["Germán Pezzella","ZAG",35],["Franco Romero","ZAG",30],["Maximiliano Olivera","LE",34],["Lucas Hernández","LE",33],["Nahuel Herrera","ZAG",22],["Eduardo Darias","VOL",30],["Javier Cabrera","PD",34],["Jesús Trindade","VOL",31],["Diego Laxalt","LE",33],["Eric Remedi","VOL",31],["Leonardo Fernández","MEI",27],["Lucas Ferreira","PE",24],["Facundo Batista","ATA",27],["Matías Arezo","ATA",23],["Abel Hernández","ATA",35],["Jonathan Rodríguez","ATA",33]],
"Nacional":[["Luis Mejía","GOL",35],["Ignacio Suárez","GOL",24],["Juan Bianchi","GOL",20],["Francisco Calvo","ZAG",34],["Agustín Rogel","ZAG",28],["Sebastián Coates","ZAG",35],["Camilo Cándido","LE",31],["Juan Pintado","LD",28],["Emiliano Ancheta","LD",27],["Bruno Zuculini","VOL",33],["Maximiliano Gómez","ATA",29],["Maximiliano Silvera","ATA",28],["Juan Cruz de los Santos","PE",23],["Tomás Verón Lupi","PD",25],["Bruno Arady","PE",19]],
"Colo-Colo":[["Fernando de Paul","GOL",35],["Eduardo Villanueva","GOL",21],["Gabriel Maureira","GOL",19],["Vozinha","GOL",40],["Alan Saldivia","ZAG",24],["Emiliano Amor","ZAG",30],["Sebastián Vegas","ZAG",29],["Mauricio Isla","LD",38],["Erick Wiemberg","LE",31],["Esteban Pavez","VOL",35],["Arturo Vidal","MC",39],["Vicente Pizarro","MC",23],["Claudio Aquino","MEI",35],["Lucas Cepeda","PE",23],["Javier Correa","ATA",33],["Alexander Oroz","PD",23]],
"Universidad de Chile":[["Gabriel Castellón","GOL",33],["Cristopher Toselli","GOL",38],["Franco Calderón","ZAG",27],["Matías Zaldivia","ZAG",35],["Ignacio Tapia","ZAG",27],["Fabián Hormazábal","LD",29],["Marcelo Morales","LE",23],["Lucas Assadi","MEI",22],["Israel Poblete","VOL",30],["Charles Aránguiz","MC",37],["Javier Altamirano","MEI",26],["Eduardo Vargas","ATA",37],["Lucas Di Yorio","ATA",30],["Octavio Rivero","ATA",34],["Juan Martín Lucero","ATA",35]],
"Atlético Nacional":[["Franco Armani","GOL",39],["Luis Marquínez","GOL",23],["William Tesillo","ZAG",36],["Andrés Reyes","ZAG",26],["Néider Parra","ZAG",22],["Juan David Cabal","ZAG",25],["Andrés Román","LD",28],["Álvaro Angulo","LE",29],["Jorman Campuzano","VOL",30],["Mateo Uribe","MC",35],["James Rodríguez","MEI",35],["Kevin Viveros","ATA",25],["Alfredo Morelos","ATA",30],["Marino Hinestroza","PD",24],["Billy Arce","PE",28]],
"Millonarios":[["Álvaro Montero","GOL",31],["Diego Novoa","GOL",36],["Andrés Llinás","ZAG",29],["Juan Pablo Vargas","ZAG",31],["Jorge Arias","ZAG",32],["Daniel Giraldo","VOL",33],["Stiven Vega","VOL",27],["Juan Carlos Pereira","MC",34],["Daniel Ruiz","MEI",24],["Leonardo Castro","ATA",34],["Radamel Falcao","ATA",40],["Jader Valencia","ATA",25],["Daniel Cataño","MEI",34],["Giorgio Reda","PD",24],["Kevin Palacios","PE",23]],
"Olimpia":[["Gastón Olveira","GOL",32],["Gustavo Caballero","LD",24],["Junior Alonso","ZAG",33],["Hugo Benítez","ZAG",24],["Facundo Zabala","LE",27],["Lisandro López","ZAG",36],["Richard Ortiz","VOL",36],["Alex Franco","VOL",25],["Hugo Fernández","MEI",28],["Derlis González","PE",32],["Lucas Pratto","ATA",38],["Kevin Parzajuk","ATA",24],["Iván Leguizamón","PE",23],["Ramón Martínez","VOL",29],["Fernando Cardozo","MEI",25]],
"Cerro Porteño":[["Manuel Roffo","GOL",26],["Ángel Martínez","GOL",24],["Roberto Fernández","GOL",38],["Alexis Cañete","ZAG",23],["Lucas Merolla","ZAG",31],["Guillermo Benítez","LE",32],["Lucas Quintana","ZAG",21],["Blas Riveros","LE",28],["Rodrigo Melgarejo","ZAG",24],["Gustavo Velázquez","ZAG",35],["Mathías Villasanti","VOL",29],["Federico Carrizo","MEI",35],["Jorge Morel","VOL",32],["Juan Manuel Iturbe","PD",33],["Fernando Fernández","ATA",33],["Francisco Da Costa","ATA",31]]
});


// ===== OUTROS PAÍSES — SEGUNDA ONDA 2026 =====
// Dados de referência 2026. Clubes sem cadastro específico continuam no gerador procedural.
Object.assign(realSquads2026, {
"Barcelona SC":[["José Contreras","GOL",31],["José Gabriel Cevallos","GOL",28],["José Angulo","GOL",28],["Kleber Pinargote","GOL",23],["Álex Rangel","ZAG",24],["Gustavo Vallecilla","ZAG",27],["Javier Báez","ZAG",36],["Jhonnier Chalá","ZAG",26],["Jonathan Perlaza","LE",28],["Bryan Carabalí","LD",28],["Byron Castillo","LD",27],["Willian Vargas","LD",29],["Jefferson Intriago","VOL",30],["Matías Lugo","VOL",25],["Jhonny Quiñónez","VOL",28],["Jordan Medina","VOL",26]],
"Delfín":[["Brian Heras","GOL",31],["José Cárdenas","GOL",31],["Benjamín Cárdenas","GOL",26],["Anthony Bedoya","ZAG",30],["Edilson Cabeza","ZAG",24],["Darío Aimar","ZAG",31],["Ober Medina","ZAG",21],["Carlos Banguera","ZAG",19],["Luis Castillo","LE",27],["Maikel Reyes","LD",23],["Enzo Rubio","LD",23],["Brayan Peña","LD",23],["Bryan Hernández","LD",27],["Gerónimo Heredia","VOL",21],["Kliver Moreno","VOL",26],["Luis Castro","VOL",30],["Marcelo Weigandt","LD",26],["Fernando Cornejo","MC",30],["Alexander Alvarado","PE",27],["Kevin Velasco","PE",26],["Rodney Redes","PD",26],["Janner Corozo","PD",30],["Michael Estrada","ATA",30],["Deyverson","ATA",35]],
"LDU Quito":[["Alexander Domínguez","GOL",39],["Gonzalo Valle","GOL",30],["Ricardo Adé","ZAG",35],["Richard Mina","ZAG",25],["Leonel Quiñónez","LE",32],["Bryan Ramírez","LD",25],["Leonardo Realpe","ZAG",25],["Gian Franco Allala","ZAG",29],["Fernando Cornejo","MC",30],["Gabriel Villamil","MC",25],["Jesús Pretell","VOL",27],["Damián Batallini","PE",29],["Deyverson","ATA",35],["Jeison Medina","ATA",31],["Rodney Redes","PD",26]],
"Independiente del Valle":[["Guido Villar","GOL",28],["Moisés Ramírez","GOL",25],["Richard Schunke","ZAG",34],["Mateo Carabajal","ZAG",29],["Beder Caicedo","LE",33],["Anthony Landázuri","LD",28],["Jordy Alcívar","MC",26],["Patricio Mercado","MC",23],["Kendry Páez","MEI",23],["Junior Sornoza","MEI",32],["Renato Ibarra","PD",35],["Lautaro Díaz","ATA",28],["Michael Hoyos","ATA",34],["Yaimar Medina","PE",21]],
"Universitario":[["Sebastián Britos","GOL",39],["Diego Romero","GOL",24],["Aldo Corzo","LD",37],["Matías Di Benedetto","ZAG",33],["Williams Riveros","ZAG",33],["Miguel Trauco","LE",33],["Rodrigo Ureña","VOL",33],["Martín Pérez Guedes","MC",34],["Jairo Concha","MEI",26],["Andy Polo","PD",31],["Edison Flores","PE",32],["Alex Valera","ATA",30],["José Rivera","ATA",29],["Segundo Portocarrero","LE",30]],
"Alianza Lima":[["Guillermo Viscarra","GOL",33],["Ángelo Campos","GOL",32],["Carlos Zambrano","ZAG",37],["Xavier Arreaga","ZAG",31],["Mateo Antoni","ZAG",22],["Carlos Zambrano","ZAG",37],["Esteban Pavez","VOL",35],["Fernando Gaibor","MC",35],["Alan Cantero","ATA",27],["Eryc Castillo","PE",31],["Federico Girotti","ATA",27],["Hernán Barcos","ATA",42],["Kevin Quevedo","PD",29],["Jesús Castillo","VOL",25]],
"Sporting Cristal":[["Diego Enríquez","GOL",24],["Renato Solís","GOL",28],["Gianfranco Chávez","ZAG",27],["Ignácio","ZAG",29],["Jhilmar Lora","LD",25],["Nicolás Pasquini","LE",35],["Jesús Pretell","VOL",27],["Gustavo Cazonatti","VOL",30],["Yoshimar Yotún","MC",36],["Maxloren Castro","PE",18],["Martín Távara","MC",27],["Irven Ávila","ATA",36],["Fernando Pacheco","PD",27],["Santiago González","MEI",26]],
"Bolívar":[["Carlos Lampe","GOL",39],["Rubén Cordano","GOL",27],["Luis Haquín","ZAG",28],["Jesús Sagredo","ZAG",32],["Anderson de Jesús","ZAG",25],["José Sagredo","ZAG",31],["José Sagredo","ZAG",31],["Yomar Rocha","LD",23],["Ramiro Vaca","MEI",26],["Fernando Saucedo","MC",36],["Patito Rodríguez","MEI",35],["Bruno Sávio","PD",31],["Fabio Gomes","ATA",28],["Carmelo Algarañaz","ATA",30],["Gabriel Villamil","MC",25]],
"Always Ready":[["Alaín Baroja","GOL",36],["Guillermo Viscarra","GOL",33],["Luis Caicedo","ZAG",34],["Marc Enoumba","LD",32],["Héctor Cuéllar","VOL",24],["Adalid Terrazas","MEI",26],["Roberto Fernández","LE",26],["Moisés Paniagua","MEI",19],["José Martínez","VOL",29],["Wesley da Silva","PE",28],["Marcos Riquelme","ATA",37],["Darwin Ríos","ATA",35],["Humberto Osorio","ATA",37]],
"The Strongest":[["Guillermo Viscarra","GOL",33],["Rodrigo Banegas","GOL",27],["Adrián Jusino","ZAG",33],["Marc Enoumba","LD",32],["Maximiliano Caire","LD",37],["Diego Wayar","VOL",32],["Luciano Ursino","MC",37],["Michael Ortega","MEI",35],["Enrique Triverio","ATA",37],["Bruno Miranda","ATA",28],["Jeyson Chura","PE",25],["Jaime Arrascaita","MEI",31]],
"Deportivo Táchira":[["Cristopher Varela","GOL",30],["Carlos Vivas","ZAG",24],["Jean Gamboa","ZAG",25],["Carlos Robles","VOL",33],["Maurice Cova","MC",33],["Nelson Hernández","LD",33],["Carlos Sosa","MEI",36],["Gleiker Mendoza","PE",24],["Anthony Uribe","ATA",35],["Bryant Ortega","MEI",23],["Esli García","PE",26],["Yerson Chacón","PD",22]],
"Carabobo":[["Lucas Bruera","GOL",28],["José David Contreras","GOL",31],["Edson Castillo","VOL",32],["Maurice Cova","MC",33],["Alexander González","LD",33],["Erick Ramírez","ATA",27],["Jaime Moreno","ATA",30],["Keiber Roa","PE",22],["Dimas Meza","MEI",28],["Denilson Ojeda","ZAG",24],["Jonathan Bilbao","ZAG",32],["José Durán","ZAG",28]],
"Caracas":[["Eduardo Fereira","LD",25],["Robert Hernández","MEI",33],["Luis Maestre","MC",27],["Adrián Fernández","ATA",33],["Christian Larotonda","VOL",27],["Luigi Pagano","MEI",24],["Juan Sebastián González","ZAG",25],["Andrés Sánchez","GOL",25],["Rubert Quijada","ZAG",36],["Bryan Castillo","ATA",25]],
"Metropolitanos":[["Tito Rojas","GOL",29],["Christian Larotonda","VOL",27],["Walter Araujo","MC",31],["Charlis Ortiz","ATA",38],["Roberto Ordóñez","ATA",41],["Jefre Vargas","LD",31],["Jorge Echeverría","MEI",27],["Francisco Bareiro","ATA",27]],
});

// ===== OVR 2026 — MODELO CALIBRADO =====
// O OVR não é uma medida oficial única. Para evitar exageros, o jogo usa:
// 1) referências públicas do EA SPORTS FC 26 para jogadores disponíveis;
// 2) força do clube como ponto de partida;
// 3) idade, posição e profundidade do elenco;
// 4) pequeno fator determinístico por nome (sem sorte a cada carregamento).
// Isso mantém os elencos estáveis e evita que um jogador mude de OVR ao recarregar a carreira.
const ratingOverrides2026={
 // Âncoras públicas do EA SPORTS FC 26 / bases de carreira consultadas.
 // Use nomes globais somente quando não houver risco de colisão entre clubes.
 "Neymar":83,"De Arrascaeta":83,"Arrascaeta":83,"Memphis Depay":80,"Lucas Paquetá":79,
 "Gustavo Gómez":78,"Gonzalo Plata":78,"Carrascal":78,"Alex Sandro":77,
 "Jhon Arias":77,"Sergio Rochet":77,"Rochet":77,"Varela":76,"Guillermo Varela":76,
 "De la Cruz":76,"Nicolás de la Cruz":76,"Joaquín Piquerez":76,"Piquerez":76,
 "Léo Pereira":76,"Leo Pereira":76,"Danilo":75,"Rafael Borré":75,"Borré":75,"Ramón Sosa":74,
 "Junior Alonso":74,"Agustín Canobbio":74,"Félix Torres":72,"Alan Franco":70,
 "Alan Minda":70,"Isidro Pitta":70,"Hugo Souza":78,
 "Raphael Veiga":79,"Andreas Pereira":77,"Felipe Anderson":81,"Vitor Roque":78,
 "Matheus Pereira":76,"Carlos Miguel":73,"Paulinho":78,"Maurício":77,"Flaco López":74
};

// Override por clube: evita que homônimos recebam a nota de outro atleta.
const clubRatingOverrides2026={
 "Athletico-PR":{},
 "Atlético-MG":{"Júnior Alonso":74,"Alan Franco":70,"Alan Minda":70},
 "Bahia":{},
 "Botafogo":{},
 "Chapecoense":{},
 "Corinthians":{"Hugo Souza":78,"Memphis Depay":80,"Félix Torres":72},
 "Coritiba":{},
 "Cruzeiro":{"Matheus Pereira":76},
 "Flamengo":{"De Arrascaeta":83,"Carrascal":78,"Alex Sandro":77,"De la Cruz":76,"Varela":76,"Léo Pereira":76,"Danilo":75,"Plata":78},
 "Fluminense":{"Jhon Arias":77,"Canobbio":74},
 "Grêmio":{},
 "Internacional":{"Sergio Rochet":77,"Borré":75},
 "Mirassol":{},
 "Palmeiras":{"Carlos Miguel":73,"Gustavo Gómez":78,"Joaquín Piquerez":76,"Andreas Pereira":77,"Maurício":77,"Felipe Anderson":81,"Ramón Sosa":74,"Paulinho":78,"Vitor Roque":78,"Flaco López":74},
 "Red Bull Bragantino":{"Isidro Pitta":70},
 "Remo":{},
 "Santos":{"Neymar":83},
 "São Paulo":{},
 "Vasco da Gama":{},
 "Vitória":{},
 // ===== COLÔMBIA =====
 "Atlético Nacional":{"James Rodríguez":80,"Kevin Mier":74,"Mateo Uribe":76,"Marino Hinestroza":76,"Alfredo Morelos":75,"Jorman Campuzano":72},
 "Millonarios":{"Álvaro Montero":76,"Leonardo Castro":75,"Radamel Falcao":72,"Daniel Ruiz":74,"Daniel Giraldo":70,"Andrés Llinás":72},
 "Junior":{"Yimmi Chará":75,"Carlos Bacca":74,"José Enamorado":73,"Gabriel Fuentes":72,"Didier Moreno":70},
 "América de Cali":{"Adrián Ramos":73,"Duván Vergara":75,"Juan Fernando Quintero":76,"Luis Paz":70},
 "Deportivo Cali":{"Juan Camilo Angulo":69,"Jarlan Barrera":72,"Fredy Montero":70},
 "Independiente Santa Fe":{"Hugo Rodallega":75,"Daniel Torres":72,"Omar Fernández":71},
 "Deportes Tolima":{"Yeison Guzmán":74,"Brayan Gil":72,"Jeison Angulo":70},
 "Once Caldas":{"Dayro Moreno":74,"James Aguirre":70,"Alejandro García":71},
 "Atlético Bucaramanga":{"Aldair Quintana":72,"Fabián Sambueza":73,"Leonardo Flores":70},
 "Deportivo Pasto":{"Daniel Moreno":70,"Víctor Mejía":69},
 "La Equidad":{"Washington Ortega":70,"David Camacho":69},
 "Independiente Medellín":{"Héctor David Urrego":69,"Luciano Pons":73,"Jaime Alvarado":71},
 // ===== URUGUAI =====
 "Peñarol":{"Leonardo Fernández":78,"Matías Arezo":73,"Washington Aguerre":73,"Maximiliano Olivera":73,"Jesús Trindade":70,"Eric Remedi":70,"Eduardo Darias":69,"Diego Laxalt":71,"Facundo Batista":70,"Abel Hernández":75},
 "Nacional":{"Sebastián Coates":79,"Luis Mejía":72,"Maximiliano Gómez":75,"Camilo Cándido":73,"Emiliano Ancheta":69,"Tomás Verón Lupi":67,"Juan Cruz de los Santos":65,"Bruno Zuculini":70,"Agustín Rogel":68},
 "Racing":{},
 "Defensor Sporting":{},
 "Boston River":{},
 "Cerro Largo":{},
 "Cerro":{},
 "Danubio":{},
 "Deportivo Maldonado":{},
 "Juventud":{},
 "Liverpool":{},
 "Montevideo City Torque":{},
 "Albion":{},
 "Central Español":{},
 "Progreso":{},
 "Wanderers":{},
 // ===== PARAGUAI =====
 "Olimpia":{"Richard Ortiz":70,"Derlis González":73,"Hugo Fernández":69,"Alex Franco":66,"Fernando Cardozo":66,"Gastón Olveira":70,"Junior Alonso":74},
 "Cerro Porteño":{"Juan Manuel Iturbe":71,"Jorge Morel":69,"Blas Riveros":68,"Fernando Fernández":70,"Mathías Villasanti":74,"Gustavo Velázquez":70,"Roberto Fernández":67},
 "Libertad":{"Antonio Bareiro":69,"Iván Ramírez":68,"Óscar Cardozo":71,"Rubén Lezcano":68,"Hugo Martínez":69},
 "Guaraní":{"Fernando Fernández":70,"Gaspar Servio":68,"Walter González":67,"Alan Benítez":67},
 "Nacional":{"Diego Viera":74,"Santiago Arzamendia":73,"Juan Alfaro":67,"Orlando Gaona Lugo":66},
 "Sportivo Luqueño":{"Jorge Benítez":67,"Diego Vera":65,"Iván Torres":67},
 "Sol de América":{"Cecilio Domínguez":73,"Luis de la Cruz":66,"Jorge Recalde":69},
 "Sportivo Trinidense":{"Fernando Romero":65,"Pedro Delvalle":64},
 "Sportivo Ameliano":{"Richard Salinas":64,"Elvio Vera":65},
 "General Caballero JLM":{"Roberto Fernández":64,"Teodoro Paredes":65},
 "2 de Mayo":{"Federico Santander":68,"Rodrigo Ruiz Díaz":64},
 "Recoleta":{"Hugo Sandoval":63,"Fernando Martínez":64},
 // ===== ARGENTINA =====
 "Aldosivi":{},
 "Argentinos Juniors":{"Federico Fattori":77},
 "Atlético Tucumán":{},
 "Banfield":{},
 "Barracas Central":{},
 "Belgrano":{"Lucas Zelarayán":79,"Franco Jara":74},
 "Boca Juniors":{"Leandro Paredes":81,"Santiago Ascacíbar":77,"Miguel Merentiel":76,"Lautaro Blanco":76,"Ayrton Costa":75,"Lautaro Di Lollo":75,"Adam Bareiro":75,"Leandro Brey":67},
 "Central Córdoba":{},
 "Defensa y Justicia":{"Éver Banega":77},
 "Estudiantes de La Plata":{"Fernando Muslera":78,"Guido Carrillo":76,"Joaquín Correa":75},
 "Estudiantes de Río Cuarto":{},
 "Gimnasia de La Plata":{},
 "Gimnasia de Mendoza":{},
 "Godoy Cruz":{},
 "Huracán":{},
 "Independiente":{"Rodrigo Rey":77},
 "Independiente Rivadavia":{},
 "Instituto":{},
 "Lanús":{"Marcelino Moreno":78,"Nahuel Losada":76},
 "Newell's Old Boys":{},
 "Platense":{},
 "Racing Club":{"Adrián Martínez":78,"Santiago Sosa":77,"Gabriel Rojas":77,"Marco Di Césare":76},
 "River Plate":{"Aníbal Moreno":77,"Marcos Acuña":76,"Gonzalo Montiel":76,"Lucas Martínez Quarta":76,"Sebastián Driussi":75,"Franco Armani":76},
 "Rosario Central":{"Ángel Di María":82},
 "San Lorenzo":{},
 "San Martín de San Juan":{},
 "Sarmiento":{},
 "Talleres":{"Guido Herrera":76},
 "Tigre":{},
 "Unión":{},

 // ===== BOLÍVIA =====
 "Bolívar":{"Carlos Lampe":71,"Carlos Melgar":70,"Gabriel Villamíl":70,"Ramiro Vaca":69,"Bruno Sávio":68,"Patricio Rodríguez":68,"Jesús Sagredo":67},
 "The Strongest":{"Guillermo Viscarra":70,"Luciano Ursino":69,"Enrique Triverio":68,"Michael Ortega":68,"Adrián Jusino":67},
 "Always Ready":{"Robson Matheus":71,"Adalid Terrazas":68,"Héctor Cuéllar":67,"Marcos Riquelme":66},
 "Oriente Petrolero":{"Mariano Torres":67,"Carlos Roca":65},
 "Blooming":{"Rafinha":68,"Fernando Arismendi":66},
 "Nacional Potosí":{"Saulo Guerra":65,"Martín Prost":66,"Víctor Ábrego":67},
 "Aurora":{"David Akologo":67,"Jair Reinoso":67,"Serginho":66},
 "San Antonio Bulo Bulo":{"Moisés Paniagua":67,"Adalid Terrazas":68},
 "ABB":{"Miguel Terceros":69,"Bruno Miranda":68,"Jeyson Chura":66},
 "Real Potosí":{},
 "Universitario de Vinto":{},
 "Totora Real Oruro":{},
 "Gualberto Villarroel San José":{},
 "Real Tomayapo":{},
 "Guabirá":{},
 // ===== VENEZUELA =====
 "Metropolitanos":{"Yangel Herrera":78},
 "Deportivo Táchira":{"Jon Mikel Aramburu":77,"Cristian Cásseres Jr":76,"Yeferson Soteldo":75,"Joel Graterol":70},
 "Deportivo La Guaira":{"Jhon Chancellor":72,"José Martínez":74},
 "Universidad Central de Venezuela":{"Edson Castillo":69,"Juan Pablo Añor":68},
 "Carabobo":{"José David Contreras":70,"Juan Camilo Pérez":65},
 "Portuguesa":{"Darwin Machís":72,"Wilker Ángel":71,"Yeferson Soteldo":75},
 "Academia Puerto Cabello":{"Luifer Hernández":69,"Richard Celis":68},
 "Estudiantes de Mérida":{"Wilker Ángel":71,"Erickson Gallardo":68},
 "Caracas":{"Bryan Ortega":68,"Ender Echenique":66},
 "Monagas":{"Edson Castillo":69,"Andrés Romero":67},
 "Zamora":{"Joel Graterol":70,"Yeferson Soteldo":75},
 "Rayo Zuliano":{"José Martínez":74,"Bryant Ortega":68},
 "Trujillanos":{},
 "Anzoátegui":{}
};

const positionOVRBonus2026={GOL:0,LD:0,ZAG:0,LE:0,VOL:1,MC:1,MEI:2,PD:1,PE:1,ATA:2};

function stableHash2026(text){
 let h=2166136261;
 for(let i=0;i<text.length;i++){ h^=text.charCodeAt(i); h=Math.imul(h,16777619); }
 return h>>>0;
}

function calculatedPlayerRating2026(club,name,pos,age,depth){
 const clubOverride=clubRatingOverrides2026[club.name]?.[name];
 if(Number.isFinite(clubOverride)) return clubOverride;
 const override=ratingOverrides2026[name];
 if(Number.isFinite(override)) return override;

 // As strengthSeed atuais são uma escala interna do jogo (ex.: Flamengo 87),
 // portanto reduzimos a escala antes de transformá-la em OVR individual.
 const clubBase=club.rating-8;
 const ageBonus = age<=19 ? -4 : age<=21 ? -2 : age<=24 ? 0 : age<=30 ? 1 : age<=32 ? 0 : age<=34 ? -2 : age<=36 ? -4 : -6;
 const depthBonus = depth===0 ? 2 : depth===1 ? -1 : depth===2 ? -2 : -4;
 const nameBonus=(stableHash2026(name)%3)-1; // -1 a +1, sempre igual
 const posBonus=positionOVRBonus2026[pos]||0;
 return clamp(Math.round(clubBase+ageBonus+depthBonus+nameBonus+posBonus),55,84);
}

function calculatedPotential2026(rating,age){
 if(age<=18) return clamp(rating+10,60,90);
 if(age<=20) return clamp(rating+8,60,89);
 if(age<=22) return clamp(rating+6,60,88);
 if(age<=24) return clamp(rating+4,60,87);
 if(age<=27) return clamp(rating+2,60,86);
 return rating;
}

function recalibrateSavedSquadRatings2026(){
 if(!game || !Array.isArray(game.players) || game.ratingModelVersion===2) return;
 const depthByPosition={};
 game.players.forEach((p,index)=>{
   const pos=p.position||"MC";
   const depth=depthByPosition[pos]||0;
   depthByPosition[pos]=depth+1;
   const age=Number(p.age)||25;
   p.rating=calculatedPlayerRating2026(game.club,p.name||`Jogador ${index+1}`,pos,age,depth);
   const ageFactor=age<23?1.35:(age>32?.75:1);
   p.value=Math.max(300000,Math.round(p.rating*p.rating*7000*ageFactor));
   p.potential=calculatedPotential2026(p.rating,age);
   p.salary=Math.max(5000,Math.round(p.value*.001/52));
 } );
 game.ratingModelVersion=2;
}

function buildRealSquad(club, data){
 const squad=[];
 const usedNames=new Set();
 const depthByPosition={};
 const addPlayer=(name,pos,age)=>{
   const i=squad.length;
   const depth=depthByPosition[pos]||0;
   depthByPosition[pos]=depth+1;
   const rating=calculatedPlayerRating2026(club,name,pos,age,depth);
   const ageFactor=age<23?1.35:(age>32?.75:1);
   const value=Math.max(300000,Math.round(rating*rating*7000*ageFactor));
   const potential=calculatedPotential2026(rating,age);
   squad.push(player(club.id*100+i,name,pos,rating,age,value,potential));
 };
 data.forEach(d=>{
   const [name,pos,age]=d;
   addPlayer(name,pos,age);
   usedNames.add(name);
 });
 // Alguns cadastros reais são parciais. O motor de partida precisa de 11 titulares
 // e de um banco funcional para substituições, então completamos esses elencos
 // até 18 jogadores sem alterar os nomes já cadastrados.
 let templateIndex=0;
 while(squad.length<18){
   const pos=squadTemplate[templateIndex % squadTemplate.length];
   templateIndex++;
   let name;
   do{name=pick(names)}while(usedNames.has(name));
   usedNames.add(name);
   const age=rnd(18,31);
   addPlayer(name,pos,age);
 }
 return squad;
}

// ===== GERAÇÃO PROCEDURAL DE ELENCOS =====
let clubPlayers={};
function generateClubSquad(club){
 const marquee = marqueeByCountry[club.countryId] && marqueeByCountry[club.countryId][clubData[club.countryId].findIndex(d=>d[0]===club.name)];
 const squad=[];
 const posDepth={};
 squadTemplate.forEach((pos,i)=>{
   const depth=posDepth[pos]||0; posDepth[pos]=depth+1;
   const mq = marquee && marquee[i];
   let name = mq ? mq.name : pick(names);
   let posFinal = mq ? mq.pos : pos;
   // Titulares ficam perto do rating do clube; reservas vão perdendo qualidade com a profundidade.
   let variance = mq ? rnd(3,8) : (rnd(-6,4) - depth*7);
   let rating = clamp(club.rating + variance, 48, 94);
   let age = mq ? rnd(24,32) : (depth===0 ? rnd(21,31) : rnd(18,35));
   const ageFactor = age<23 ? 1.4 : (age>32 ? 0.7 : 1);
   let value = Math.max(300000, Math.round(rating*rating*7000*ageFactor*(0.85+Math.random()*0.4)));
   let potential = Math.min(94, rating + (age<23 ? rnd(3,12) : 0));
   const id = club.id*100 + i;
   squad.push(player(id,name,posFinal,rating,age,value,potential));
 });
 return squad;
}
function buildAllSquads(){
 clubPlayers={};
 clubs.forEach(c=>{
   const real=realSquads2026[`${c.countryId}:${c.name}`] || realSquads2026[c.name];
   clubPlayers[c.id]=real ? buildRealSquad(c,real) : generateClubSquad(c);
 });
}

function getClub(id){return clubs.find(c=>c.id===id)}
function clubsOfCountry(countryId){return clubs.filter(c=>c.countryId===countryId)}

// ===== SIMULAÇÃO DE PARTIDAS =====
function goals(a,b,homeBonus){
 const strength=(a-b+(homeBonus||0))/18; let g=0;
 const chance=Math.max(.08,Math.min(.72,.32+strength*.12));
 for(let i=0;i<5;i++)if(Math.random()<chance)g++;
 return Math.min(5,g);
}
function teamRatingOf(id){
 if(game && id===game.club.id){
   const starters=getMatchSquad();
   if(starters.length) return matchTeamRating();
   return Math.round(game.players.reduce((s,p)=>s+p.rating,0)/Math.max(1,game.players.length));
 }
 const p=clubPlayers[id]||[];
 if(p.length){
   const xi=p.slice().sort((a,b)=>b.rating-a.rating).slice(0,11);
   return Math.round(xi.reduce((s,x)=>s+x.rating,0)/xi.length);
 }
 const cup=nationalCupClub(id);
 return cup?.rating || 65;
}
function simulateMatch(idA,idB){
 const ra=teamRatingOf(idA), rb=teamRatingOf(idB);
 const ga=goals(ra,rb,2), gb=goals(rb,ra,-2);
 return [ga,gb];
}

// ===== PARTIDA INTERATIVA =====
// Cada 1 minuto do jogo = 1 segundo real. Uma partida dura 90 segundos.
function defaultStartingXI(players){
 const formation=["GOL","ZAG","ZAG","LD","LE","VOL","MC","MEI","PD","PE","ATA"];
 const used=new Set(); const xi=[];
 formation.forEach(pos=>{
   const candidates=players.filter(p=>p.position===pos && !used.has(p.id)).sort((a,b)=>b.rating-a.rating);
   if(candidates.length){ xi.push(candidates[0].id); used.add(candidates[0].id); }
 });
 if(xi.length<11){
   const rest=players.filter(p=>!used.has(p.id)).sort((a,b)=>b.rating-a.rating);
   for(const p of rest){ if(xi.length>=11) break; xi.push(p.id); used.add(p.id); }
 }
 return xi.slice(0,11);
}
function ensureStartingXI(){
 if(!game || !Array.isArray(game.players)) return;
 const valid=new Set(game.players.map(p=>p.id));
 const xi=[];
 (Array.isArray(game.startingXI)?game.startingXI:[]).forEach(id=>{
   if(valid.has(id) && !xi.includes(id) && xi.length<11) xi.push(id);
 });
 if(xi.length<11){
   defaultStartingXI(game.players).forEach(id=>{
     if(!xi.includes(id) && xi.length<11) xi.push(id);
   });
 }
 game.startingXI=xi;
 ensureMatchTactics();
 ensureLineupPositions();
}
function getMatchSquad(){
 if(!game) return [];
 if(!Array.isArray(game.startingXI) || game.startingXI.length===0){
   game.startingXI=defaultStartingXI(game.players);
 }
 return game.startingXI.map(id=>game.players.find(p=>p.id===id)).filter(Boolean);
}
function matchTeamRating(){
 const starters=getMatchSquad();
 const squadAvg=starters.length?starters.reduce((s,p)=>s+p.rating,0)/starters.length:teamRatingOf(game.club.id);
 const fullAvg=game.players.length?game.players.reduce((s,p)=>s+p.rating,0)/game.players.length:squadAvg;
 return Math.round((squadAvg*.75+fullAvg*.25));
}
function makeLiveGoals(homeId,awayId){
 const homeRating=homeId===game.club.id?matchTeamRating():teamRatingOf(homeId);
 const awayRating=awayId===game.club.id?matchTeamRating():teamRatingOf(awayId);
 const homeGoals=goals(homeRating,awayRating,2);
 const awayGoals=goals(awayRating,homeRating,-2);
 const total=homeGoals+awayGoals;
 const minutes=[];
 for(let i=0;i<total;i++) minutes.push(rnd(3,88));
 minutes.sort((a,b)=>a-b);
 return {homeGoals,awayGoals,minutes};
}

// ===== TABELA (ROUND ROBIN) =====
function roundRobinFixtures(teamIds, legs){
 legs = legs || 2;
 let ids = teamIds.slice();
 if(ids.length % 2 !== 0) ids.push(null);
 const n = ids.length;
 const rounds = [];
 const half = n/2;
 let arr = ids.slice();
 for(let r=0;r<n-1;r++){
   const roundPairs = [];
   for(let i=0;i<half;i++){
     const home = arr[i], away = arr[n-1-i];
     if(home!==null && away!==null){
       if(r%2===0) roundPairs.push([home,away]); else roundPairs.push([away,home]);
     }
   }
   rounds.push(roundPairs);
   const fixed = arr[0];
   const rest = arr.slice(1);
   rest.unshift(rest.pop());
   arr = [fixed].concat(rest);
 }
 if(legs===1) return rounds;
 const secondLeg = rounds.map(rd=>rd.map(p=>[p[1],p[0]]));
 return rounds.concat(secondLeg);
}

function newTableRow(id){ const c=getClub(id); return {id,name:c.name,points:0,wins:0,draws:0,losses:0,gf:0,ga:0}; }
function updateTableRow(table,id,gf,ga){
 const t=table.find(x=>x.id===id); if(!t)return;
 t.gf+=gf;t.ga+=ga;
 if(gf>ga){t.wins++;t.points+=3}else if(gf===ga){t.draws++;t.points++}else t.losses++;
}
function sortTable(table){ return [...table].sort((a,b)=>b.points-a.points||(b.gf-b.ga)-(a.gf-a.ga)||b.gf-a.gf); }

// Simula uma temporada inteira de uma liga estrangeira só para fins de classificação continental.
function simulateForeignSeason(countryId){
 const ids = clubsOfCountry(countryId).map(c=>c.id);
 const fixtures = roundRobinFixtures(ids,2);
 const table = ids.map(newTableRow);
 fixtures.forEach(round=>round.forEach(([h,a])=>{
   const [gh,ga]=simulateMatch(h,a);
   updateTableRow(table,h,gh,ga); updateTableRow(table,a,ga,gh);
 }));
 return sortTable(table);
}
// ===== CLASSIFICAÇÃO CONTINENTAL =====
function getCountryStandingIds(countryId){
 if(game.history.length===0){
   // Temporada 1: ainda não há resultado nenhum, usa reputação inicial dos clubes como ranking (equivalente ao "ranking CONMEBOL").
   return clubsOfCountry(countryId).slice().sort((a,b)=>b.rep-a.rep).map(c=>c.id);
 }
 if(countryId===game.country){
   return sortTable(game.table).map(t=>t.id);
 }
 return simulateForeignSeason(countryId).map(t=>t.id);
}

function buildQualificationPools(){
 let libPool=[], sudPool=[];
 countries.forEach(c=>{
   const ranked = getCountryStandingIds(c.id);
   libPool = libPool.concat(ranked.slice(0,3));
   sudPool = sudPool.concat(ranked.slice(3,6));
 });
 // Campeão da Sul-Americana da temporada anterior garante vaga na Libertadores.
 if(game.sudamericana && game.sudamericana.champion && !libPool.includes(game.sudamericana.champion)){
   libPool.pop(); libPool.push(game.sudamericana.champion);
 }
 // Completa as vagas restantes com os clubes mais bem avaliados que ainda não estão nos grupos.
 const usedLib=new Set(libPool);
 const fillLib = clubs.filter(c=>!usedLib.has(c.id)).sort((a,b)=>b.rating-a.rating);
 while(libPool.length<32 && fillLib.length) libPool.push(fillLib.shift().id);
 const usedAll=new Set(libPool.concat(sudPool));
 const fillSud = clubs.filter(c=>!usedAll.has(c.id)).sort((a,b)=>b.rating-a.rating);
 while(sudPool.length<32 && fillSud.length) sudPool.push(fillSud.shift().id);
 return {libPool:libPool.slice(0,32), sudPool:sudPool.slice(0,32)};
}

// ===== LIBERTADORES (fase de grupos + mata-mata) =====
function assignGroups(teamIds){
 const groups=Array.from({length:8},()=>[]);
 const sorted=teamIds.map(getClub).sort((a,b)=>b.rating-a.rating);
 sorted.forEach(team=>{
   const order=[...Array(8).keys()].sort((a,b)=>groups[a].length-groups[b].length);
   let placed=false;
   for(const gi of order){
     if(groups[gi].length<4 && !groups[gi].some(t=>t.countryId===team.countryId)){ groups[gi].push(team); placed=true; break; }
   }
   if(!placed){ const gi=order.find(g=>groups[g].length<4); groups[gi].push(team); }
 });
 return groups.map(g=>g.map(t=>t.id));
}

function initLibertadores(teamIds){
 const groups=assignGroups(teamIds);
 const groupFixtures=groups.map(g=>roundRobinFixtures(g,2)); // turno e returno, como na Libertadores real: 6 rodadas por grupo, 2 jogos cada
 const groupRounds=[0,1,2,3,4,5].map(r=>groups.flatMap((g,gi)=>groupFixtures[gi][r]||[]));
 const groupTable={};
 groups.forEach(g=>g.forEach(id=>groupTable[id]=newTableRow(id)));
 return {
   active:true, competition:"Libertadores", phase:"groups",
   groups, groupTable, groupRounds, groupRoundIndex:0,
   bracket:[], champion:null, log:[], roundLabel:"Fase de Grupos • Rodada 1/6"
 };
}

function groupOf(comp,teamId){ return comp.groups.find(g=>g.includes(teamId)); }
function groupIndexOf(comp,teamId){ return comp.groups.findIndex(g=>g.includes(teamId)); }

function playShootout(idA,idB){
 const ra=teamRatingOf(idA), rb=teamRatingOf(idB);
 const chanceA=0.5+((ra-rb)/200);
 return Math.random()<clamp(chanceA,.25,.75) ? idA : idB;
}

function playSingleMatch(idA,idB,allowDraw){
 const [ga,gb]=simulateMatch(idA,idB);
 if(ga===gb && !allowDraw){
   const winner=playShootout(idA,idB);
   return {home:idA,away:idB,homeGoals:ga,awayGoals:gb,winner,shootout:true};
 }
 return {home:idA,away:idB,homeGoals:ga,awayGoals:gb,winner: ga===gb?null:(ga>gb?idA:idB),shootout:false};
}

function finalizeGroups(comp){
 const winners=[], runnerups=[];
 comp.groups.forEach(g=>{
   const rows=g.map(id=>comp.groupTable[id]);
   const sorted=sortTable(rows);
   winners.push(sorted[0].id); runnerups.push(sorted[1].id);
 });
 const pairs=[];
 for(let i=0;i<8;i++) pairs.push([winners[i], runnerups[(i+1)%8]]);
 comp.phase="r16"; comp.bracket=pairs.map(([h,a])=>({home:h,away:a,played:false}));
}

// ===== SUL-AMERICANA (mata-mata direto, 32 clubes) =====
function seedKnockout(teamIds){
 const sorted=teamIds.map(getClub).sort((a,b)=>b.rating-a.rating).map(c=>c.id);
 const n=sorted.length, pairs=[];
 for(let i=0;i<n/2;i++) pairs.push([sorted[i], sorted[n-1-i]]);
 return pairs;
}
function initSudamericana(teamIds){
 const pairs=seedKnockout(teamIds);
 return {
   active:true, competition:"Sul-Americana", phase:"r32",
   bracket:pairs.map(([h,a])=>({home:h,away:a,played:false})),
   champion:null, log:[], roundLabel:"Playoffs / Rodada de 32"
 };
}

// ===== CALENDÁRIO CONTINENTAL (Libertadores + Sul-Americana com datas reais) =====
function compDatesFor(compKey){ return shiftedCompetitionDates(compKey==="lib"?LIBERTADORES_DATES:SUDAMERICANA_DATES); }
function compLabelsFor(compKey){ return compKey==="lib"?LIBERTADORES_LABELS:SUDAMERICANA_LABELS; }
function compObjFor(compKey){ return compKey==="lib"?game.libertadores:game.sudamericana; }
function compNameFor(compKey){ return compKey==="lib"?"Libertadores":"Sul-Americana"; }
function compOrderFor(compKey){ return compKey==="lib"?["r16","qf","sf","final"]:["r32","r16","qf","sf","final"]; }

function scheduleGroupRound(compKey, idx){
 const comp=compObjFor(compKey); if(!comp) return;
 const round=comp.groupRounds[idx]; if(!round) return;
 const dates=compDatesFor(compKey).groups;
 const date=dates[idx] || addDays(dates[dates.length-1],14*(idx-dates.length+1));
 game.calendarEvents=(game.calendarEvents||[]).filter(e=>!(e.compKey===compKey&&e.stage==="groups"&&e.roundIndex===idx));
 round.forEach(([h,a])=>game.calendarEvents.push({
   id:`${compKey.toUpperCase()}-${game.season}-g${idx}-${h}-${a}`,date,type:"continental",
   competition:compNameFor(compKey),compKey,stage:"groups",roundIndex:idx,home:h,away:a,played:false
 }));
 comp.roundLabel=`Fase de Grupos • Rodada ${idx+1}/${dates.length}`;
}
function finishGroupRound(compKey){
 const comp=compObjFor(compKey); if(!comp) return;
 const idx=comp.groupRoundIndex;
 const events=(game.calendarEvents||[]).filter(e=>e.compKey===compKey&&e.stage==="groups"&&e.roundIndex===idx);
 comp.log=events.map(e=>{
   const r=e.result||{homeGoals:0,awayGoals:0};
   return `${getClub(e.home).name} ${r.homeGoals} x ${r.awayGoals} ${getClub(e.away).name}`;
 });
 comp.groupRoundIndex++;
 const totalGroupRounds=compDatesFor(compKey).groups.length;
 if(comp.groupRoundIndex>=totalGroupRounds){
   finalizeGroups(comp);
   scheduleKnockout(compKey,comp.phase);
 }else{
   scheduleGroupRound(compKey,comp.groupRoundIndex);
 }
 save();
}
function scheduleKnockout(compKey,phase){
 const comp=compObjFor(compKey); if(!comp) return;
 comp.phase=phase;
 const date=compDatesFor(compKey)[phase];
 game.calendarEvents=(game.calendarEvents||[]).filter(e=>!(e.compKey===compKey&&e.stage===phase));
 comp.bracket.forEach((t,i)=>game.calendarEvents.push({
   id:`${compKey.toUpperCase()}-${game.season}-${phase}-${i}`,date,type:"continental",
   competition:compNameFor(compKey),compKey,stage:phase,home:t.home,away:t.away,played:false
 }));
 comp.roundLabel=compLabelsFor(compKey)[phase];
}
function finishKnockoutPhase(compKey){
 const comp=compObjFor(compKey); if(!comp||comp.phase==="done") return;
 const phase=comp.phase;
 const events=(game.calendarEvents||[]).filter(e=>e.compKey===compKey&&e.stage===phase);
 comp.log=[];
 const winners=comp.bracket.map(t=>{
   const ev=events.find(e=>e.home===t.home&&e.away===t.away);
   const r=ev?.result || playSingleMatch(t.home,t.away,false);
   comp.log.push(`${getClub(t.home).name} ${r.homeGoals} x ${r.awayGoals} ${getClub(t.away).name}${r.shootout?" (pênaltis: "+getClub(r.winner).name+")":""}`);
   return r.winner;
 });
 if(phase==="final"){
   comp.champion=winners[0]; comp.phase="done"; comp.roundLabel="Campeão: "+getClub(comp.champion).name;
   save(); return;
 }
 const nextPairs=[]; for(let i=0;i<winners.length;i+=2) nextPairs.push([winners[i],winners[i+1]]);
 const order=compOrderFor(compKey);
 const idx=order.indexOf(phase);
 comp.phase=order[idx+1];
 comp.bracket=nextPairs.map(([h,a])=>({home:h,away:a,played:false}));
 scheduleKnockout(compKey,comp.phase);
 save();
}
function playCalendarContinentalMatch(e){
 if(e.stage==="groups"){
   const [gh,ga]=simulateMatch(e.home,e.away);
   const result={home:e.home,away:e.away,homeGoals:gh,awayGoals:ga};
   applyContinentalGroupResult(e,result);
   return result;
 }
 return playSingleMatch(e.home,e.away,false);
}
function applyContinentalGroupResult(e,result){
 const comp=compObjFor(e.compKey); if(!comp) return;
 updateTableRow([comp.groupTable[e.home]],e.home,result.homeGoals,result.awayGoals);
 updateTableRow([comp.groupTable[e.away]],e.away,result.awayGoals,result.homeGoals);
}

function startNewContinentalSeason(){
 const {libPool,sudPool}=buildQualificationPools();
 game.libertadores=initLibertadores(libPool);
 game.sudamericana=initSudamericana(sudPool);
}
// ===== COPAS NACIONAIS =====
function initNationalCup(){
 const cfg=nationalCompetitions[game.country];
 const ids=clubsOfCountry(game.country).map(c=>c.id);
 const extra=(nationalCupExtra[game.country]||[]).map((name,i)=>({
   id:90000+game.country*100+i,name,country:game.club.country,countryId:game.country,rating:Math.max(58,68-(i%5)),money:3000000,rep:55
 }));
 // Para manter uma copa nacional jogável no navegador, usamos 32 vagas
 // na simulação. Todos os clubes da primeira divisão entram automaticamente;
 // as demais vagas são preenchidas por clubes de acesso/convidados.
 let cupExtra=extra.slice();
 let all=ids.concat(cupExtra.map(x=>x.id));
 let fillerIndex=0;
 while(all.length<32){
   const f={id:95000+game.country*100+fillerIndex,name:`Clube Regional ${fillerIndex+1}`,country:game.club.country,countryId:game.country,rating:58+((fillerIndex+game.country)%7),money:1800000,rep:45};
   cupExtra.push(f); all.push(f.id); fillerIndex++;
 }
 // Se houver mais de 32 participantes, a fase preliminar é condensada
 // escolhendo os 32 parâmetros de força mais altos para a simulação.
 if(all.length>32){
   all.sort((a,b)=>(nationalCupClub(b)?.rating||0)-(nationalCupClub(a)?.rating||0));
   all=all.slice(0,32);
 }
 game.nationalCup={
   name:cfg.cup,start:cfg.cupStart,end:cfg.cupEnd,format:cfg.cupFormat,
   phase:"r32",teams:all,extra:cupExtra,bracket:[],champion:null,log:[]
 };
 seedNationalCup();
}
function nationalCupClub(id){
 const c=getClub(id); if(c)return c;
 return game.nationalCup?.extra?.find(x=>x.id===id);
}
function seedNationalCup(){
 const comp=game.nationalCup; if(!comp)return;
 let ids=comp.teams.slice();
 while(ids.length<32) ids.push(null);
 // Se houver mais de 32, todos os extras entram em uma preliminar até restarem 32.
 if(ids.length>32){
   const ranked=ids.filter(Boolean).sort((a,b)=>(nationalCupClub(b)?.rating||0)-(nationalCupClub(a)?.rating||0));
   ids=ranked.slice(0,32);
 }
 while(ids.length<32) ids.push(null);
 ids=ids.filter(Boolean).sort(()=>Math.random()-.5);
 comp.bracket=[];
 for(let i=0;i<ids.length;i+=2) comp.bracket.push({home:ids[i],away:ids[i+1],played:false});
 comp.phase=comp.bracket.length===16?"r32":"prelim";
}
function advanceNationalCup(){
 const comp=game.nationalCup;if(!comp||comp.phase==="done")return;
 const results=[];
 comp.log=[];
 comp.bracket.forEach(t=>{
   const r=playNationalCupMatch(t.home,t.away);
   results.push(r);
   comp.log.push(`${nationalCupClub(r.home).name} ${r.homeGoals} x ${r.awayGoals} ${nationalCupClub(r.away).name}${r.shootout?" • pênaltis: "+nationalCupClub(r.winner).name:""}`);
 });
 const winners=results.map(r=>r.winner);
 if(winners.length===1){
   comp.champion=winners[0];comp.phase="done";return;
 }
 const next=[];
 for(let i=0;i<winners.length;i+=2) next.push({home:winners[i],away:winners[i+1],played:false});
 comp.bracket=next;
 const labels={r32:"Oitavas de Final",r16:"Quartas de Final",qf:"Semifinal",sf:"Final"};
 const order=["r32","r16","qf","sf"];
 const idx=order.indexOf(comp.phase);
 comp.phase=idx>=0?(order[idx+1]||"done"):"r32";
 if(comp.phase==="done"){comp.champion=winners[0]}
}
function playNationalCupMatch(a,b){
 const ca=nationalCupClub(a),cb=nationalCupClub(b);
 const ra=ca?.rating||65,rb=cb?.rating||65;
 let ga=goals(ra,rb,2),gb=goals(rb,ra,-2);
 if(ga===gb){
   const winner=Math.random()<(ra/(ra+rb))?a:b;
   return {home:a,away:b,homeGoals:ga,awayGoals:gb,winner,shootout:true};
 }
 return {home:a,away:b,homeGoals:ga,awayGoals:gb,winner:ga>gb?a:b,shootout:false};
}
function renderNationalCup(el){
 const comp=game.nationalCup,cfg=nationalCompetitions[game.country];
 if(!comp){el.innerHTML=`<div class="notice">Copa nacional ainda não foi sorteada.</div>`;return}
 let html=`<div class="notice"><b>${cfg.cup}</b><br>Janela oficial: ${formatDate(cfg.cupStart)} → ${formatDate(cfg.cupEnd)}<br>${cfg.cupFormat}</div>`;
 if(comp.phase==="done"){
   html+=`<div class="notice">🏆 Campeão: <b>${nationalCupClub(comp.champion).name}</b></div>`;
 }else{
   html+=`<div class="details">Fase: ${nationalCupPhaseLabel(comp.phase)}</div>`;
   html+=comp.bracket.map(t=>`<div class="bracket-row"><span>${nationalCupClub(t.home)?.name||"—"}</span><span class="details">vs</span><span>${nationalCupClub(t.away)?.name||"—"}</span></div>`).join("");
   html+=`<div class="details">As partidas da copa acontecem automaticamente nas datas do calendário. Avance os dias para chegar à próxima fase.</div>`;
 }
 if(comp.log.length) html+=`<div class="notice"><b>Últimos resultados</b><br>${comp.log.slice(0,8).join("<br>")}</div>`;
 el.innerHTML=html;
}
function nationalCupPhaseLabel(p){
 return ({prelim:"Fase Preliminar",r32:"32-avos de Final",r16:"Oitavas de Final",qf:"Quartas de Final",sf:"Semifinal",final:"Final",done:"Finalizada"})[p]||p;
}
function formatDate(s){
 if(!s)return"—";
 return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(s+"T12:00:00"));
}
function dateObj(s){ return new Date(s+"T12:00:00"); }
function isoDate(d){ return d.toISOString().slice(0,10); }
function addDays(s,n){ const d=dateObj(s); d.setDate(d.getDate()+n); return isoDate(d); }
function seasonYear(){ return 2026 + Math.max(0,(Number(game?.season)||2026)-2026); }
function shiftDateToSeason(s){
 if(!s) return s;
 const d=dateObj(s);
 const target=seasonYear();
 d.setFullYear(target);
 return isoDate(d);
}
function shiftedCompetitionDates(obj){
 const out={};
 Object.keys(obj).forEach(k=>{
   out[k]=Array.isArray(obj[k]) ? obj[k].map(shiftDateToSeason) : shiftDateToSeason(obj[k]);
 });
 return out;
}
function diffDays(a,b){ return Math.round((dateObj(b)-dateObj(a))/86400000); }
function clampDateToWindow(date,start,end){
 const d=dateObj(date);
 if(start && d<dateObj(start)) return start;
 if(end && d>dateObj(end)) return end;
 return date;
}
function distributeDates(start,end,count){
 if(!start || !end || count<=1) return Array.from({length:count},()=>start||end||"2026-01-01");
 const total=Math.max(0,diffDays(start,end));
 return Array.from({length:count},(_,i)=>addDays(start,Math.round(total*i/(count-1))));
}
function sameClubId(a,b){ return String(a)===String(b); }
function isUserEvent(e){ return !!e && (sameClubId(e.home,game.club.id)||sameClubId(e.away,game.club.id)); }
function getNextClubEvent(includeToday=true){
 const today=game.currentDate;
 let list=(game.calendarEvents||[]).filter(e=>!e.played && isUserEvent(e) && (includeToday ? e.date>=today : e.date>today));
 list.sort((a,b)=>a.date.localeCompare(b.date));
 if(list.length) return list[0];
 // Reconstrói o calendário do campeonato quando o save perdeu os eventos.
 if(Array.isArray(game.fixtures) && game.fixtures.length){
   const cfg=nationalCompetitions[game.country]||{};
   const start=shiftDateToSeason(cfg.leagueStart)||`${seasonYear()}-01-22`;
   const end=shiftDateToSeason(cfg.leagueEnd)||addDays(start,Math.max(7,game.fixtures.length*8));
   const dates=distributeDates(start,end,game.fixtures.length);
   for(let ri=0;ri<game.fixtures.length;ri++){
     const pair=(game.fixtures[ri]||[]).find(([h,a])=>sameClubId(h,game.club.id)||sameClubId(a,game.club.id));
     if(!pair) continue;
     const date=dates[ri]||today;
     if(date>=today){
       const id=`L-${game.season}-${ri}-${pair[0]}-${pair[1]}`;
       let ev=(game.calendarEvents||[]).find(x=>x.id===id);
       if(!ev){
         ev={id,date,type:"league",competition:cfg.league||"Campeonato Brasileiro Série A",home:pair[0],away:pair[1],played:false};
         game.calendarEvents=game.calendarEvents||[]; game.calendarEvents.push(ev);
       }
     }
   }
   list=(game.calendarEvents||[]).filter(e=>!e.played&&isUserEvent(e)&&(includeToday?e.date>=today:e.date>today)).sort((a,b)=>a.date.localeCompare(b.date));
   if(list.length) return list[0];
 }
 return null;
}

function scheduleLeagueCalendar(){
 const cfg=nationalCompetitions[game.country]||{};
 if(!Array.isArray(game.leagueIds)||!game.leagueIds.length) game.leagueIds=clubsOfCountry(game.country).map(c=>c.id);
 if(!Array.isArray(game.fixtures)||game.fixtures.length!==Math.max(1,game.leagueIds.length-1)*2) game.fixtures=roundRobinFixtures(game.leagueIds,2);
 game.totalRounds=game.fixtures.length;
 const start=shiftDateToSeason(cfg.leagueStart) || `${seasonYear()}-01-22`;
 const end=shiftDateToSeason(cfg.leagueEnd) || addDays(start, Math.max(7,game.totalRounds*8));
 const roundDates=distributeDates(start,end,game.fixtures.length);
 game.calendarEvents=(game.calendarEvents||[]).filter(e=>e.type!=="league");
 game.fixtures.forEach((round,ri)=>{
   round.forEach(([home,away])=>game.calendarEvents.push({
     id:`L-${game.season}-${ri}-${home}-${away}`,date:roundDates[ri],type:"league",competition:cfg.league,home,away,played:false
   }));
 });
}
// Datas reais divulgadas pela CBF/imprensa para a Copa do Brasil 2026: oitavas de 1 a 6/08,
// semifinal em 01/11 e 08/11, final prevista para dezembro. As demais fases (32-avos, quartas)
// não têm data única oficial ainda, então usamos uma janela consistente com o calendário divulgado.
const COPA_DO_BRASIL_DATES=["2026-06-10","2026-08-04","2026-09-15","2026-11-08","2026-12-06"];
function cupPhaseDates(){
 if(game.country===1) return COPA_DO_BRASIL_DATES.map(shiftDateToSeason);
 const cfg=nationalCompetitions[game.country];
 const start=shiftDateToSeason(cfg.cupStart) || addDays(shiftDateToSeason(cfg.leagueStart)||`${seasonYear()}-01-22`,21);
 const end=shiftDateToSeason(cfg.cupEnd) || addDays(start,120);
 return distributeDates(start,end,5);
}
function scheduleNationalCupPhase(phase){
 const comp=game.nationalCup; if(!comp) return;
 const labels={r32:"32-avos de Final",r16:"Oitavas de Final",qf:"Quartas de Final",sf:"Semifinal",final:"Final"};
 const order=["r32","r16","qf","sf","final"];
 const idx=order.indexOf(phase); if(idx<0) return;
 const dates=cupPhaseDates();
 game.calendarEvents=(game.calendarEvents||[]).filter(e=>!(e.type==="cup" && e.phase===phase));
 (comp.bracket||[]).forEach((m,i)=>game.calendarEvents.push({
   id:`C-${game.season}-${phase}-${i}`,date:dates[idx],type:"cup",competition:comp.name,phase,phaseLabel:labels[phase],home:m.home,away:m.away,played:false
 }));
}
function buildSeasonCalendar(){
 game.calendarEvents=[];
 game.currentDate=game.currentDate||"2026-01-01";
 scheduleLeagueCalendar();
 if(game.nationalCup){
   game.nationalCup.phaseDates=cupPhaseDates();
   scheduleNationalCupPhase(game.nationalCup.phase);
 }
 if(game.libertadores) scheduleGroupRound("lib",0);
 if(game.sudamericana) scheduleKnockout("sud","r32");
}
function eventsOnDate(date){ return (game.calendarEvents||[]).filter(e=>e.date===date && !e.played); }
function userEventsOnDate(date){ return eventsOnDate(date).filter(isUserEvent); }
function simulateCalendarEvent(e){
 if(e.played) return null;
 let result=null;
 if(e.type==="league") result=playCalendarLeagueMatch(e);
 else if(e.type==="cup") result=playCalendarCupMatch(e);
 else if(e.type==="continental") result=playCalendarContinentalMatch(e);
 e.played=true; e.result=result; return result;
}
function playCalendarLeagueMatch(e){
 const [gh,ga]=simulateMatch(e.home,e.away);
 const result={homeGoals:gh,awayGoals:ga,winner:gh===ga?null:(gh>ga?e.home:e.away)};
 playCalendarLeagueMatchResult(e,result);
 return result;
}
function playCalendarCupMatch(e){
 const r=playNationalCupMatch(e.home,e.away);
 return {homeGoals:r.homeGoals,awayGoals:r.awayGoals,winner:r.winner,shootout:r.shootout};
}
function finishScheduledCupPhase(){
 const comp=game.nationalCup; if(!comp || comp.phase==="done") return;
 const phase=comp.phase;
 const results=comp.bracket.map((m,i)=>{
   const ev=game.calendarEvents.find(e=>e.type==="cup"&&e.phase===phase&&e.home===m.home&&e.away===m.away);
   return ev?.result || playCalendarCupMatch(m);
 });
 const winners=results.map(r=>r.winner).filter(Boolean);
 if(winners.length===1){ comp.champion=winners[0]; comp.phase="done"; return; }
 const next=[]; for(let i=0;i<winners.length;i+=2) if(winners[i+1]) next.push({home:winners[i],away:winners[i+1],played:false});
 comp.bracket=next;
 const order=["r32","r16","qf","sf","final"],idx=order.indexOf(phase);
 comp.phase=order[idx+1]||"done";
 if(comp.phase!=="done") scheduleNationalCupPhase(comp.phase);
 else if(winners.length) comp.champion=winners[0];
}
function checkSeasonEnd(){
 const events=game.calendarEvents||[];
 const leagueLeft=events.filter(e=>e.type==="league"&&!e.played).length;
 const cupDone=!game.nationalCup || game.nationalCup.phase==="done";
 const continentalLeft=events.filter(e=>e.type==="continental"&&!e.played).length;
 // A temporada só termina quando todas as competições agendadas desta carreira
 // foram resolvidas. Isso evita reiniciar a temporada enquanto Libertadores/Sul-Americana
 // ainda possuem partidas pendentes.
 if(leagueLeft===0 && cupDone && continentalLeft===0){ finishSeason(); return true; }
 return false;
}
function autoAdvanceDate(){
 const date=game.currentDate;
 const todays=eventsOnDate(date);
 if(!todays.length) return false;
 const cupPhases=new Set();
 const continentalGroups=new Set(); // "compKey|roundIndex"
 const continentalKnockouts=new Set(); // "compKey|phase"
 todays.forEach(e=>{
   // Registra a fase antes de ignorar a partida do usuário. Isso permite que
   // a fase seja encerrada corretamente depois que a partida interativa terminar.
   if(e.type==="cup") cupPhases.add(e.phase);
   if(e.type==="continental"){
     if(e.stage==="groups") continentalGroups.add(`${e.compKey}|${e.roundIndex}`);
     else continentalKnockouts.add(`${e.compKey}|${e.stage}`);
   }
   if(e.home===game.club.id || e.away===game.club.id) return;
   simulateCalendarEvent(e);
 });
 cupPhases.forEach(phase=>{
   const remaining=(game.calendarEvents||[]).some(e=>e.type==="cup"&&e.phase===phase&&e.date===date&&!e.played);
   if(!remaining) finishScheduledCupPhase();
 });
 continentalGroups.forEach(key=>{
   const [compKey,roundIndex]=key.split("|");
   const remaining=(game.calendarEvents||[]).some(e=>e.compKey===compKey&&e.stage==="groups"&&String(e.roundIndex)===roundIndex&&!e.played);
   if(!remaining) finishGroupRound(compKey);
 });
 continentalKnockouts.forEach(key=>{
   const [compKey,stage]=key.split("|");
   const remaining=(game.calendarEvents||[]).some(e=>e.compKey===compKey&&e.stage===stage&&!e.played);
   if(!remaining) finishKnockoutPhase(compKey);
 });
 return checkSeasonEnd();
}
function advanceOneDay(simulateToday=true){
 if(!game || game.liveMatch?.running)return;
 const mine=userEventsOnDate(game.currentDate);
 if(mine.length){ return openMatchPanel(); }
 if(simulateToday){ if(autoAdvanceDate()) return; }
 game.currentDate=addDays(game.currentDate,1);
 addDailyNews();
 save(); renderAll();
}
function simulateCurrentDay(){
 if(!game || game.liveMatch?.running)return;
 if(userEventsOnDate(game.currentDate).length) return openMatchPanel();
 if(autoAdvanceDate()) return;
 game.currentDate=addDays(game.currentDate,1);
 addDailyNews();
 save(); renderAll();
}
function advanceToNextMatch(){
 if(!game) return;
 ensureCareerData();
 let future=getNextClubEvent(false);
 if(!future){
   buildSeasonCalendar();
   future=getNextClubEvent(false);
 }
 if(!future) return alert("Não há mais partidas do seu clube nesta temporada.");
 while(game.currentDate<future.date){
   if(userEventsOnDate(game.currentDate).length){ openMatchPanel(); return; }
   if(autoAdvanceDate()) return;
   game.currentDate=addDays(game.currentDate,1);
 }
 // Se chegamos ao dia da partida, a partida do usuário deve aparecer em vez de pular.
 save(); renderAll();
}
function eventIcon(e){
 if(e.type==="league") return "🏟️";
 if(e.type==="cup") return "🏆";
 if(e.type==="continental") return e.compKey==="lib" ? "🌎" : "🔥";
 return "•";
}
function eventThemeClass(e){
 if(e.type==="continental") return e.compKey==="lib" ? "theme-libertadores" : "theme-sudamericana";
 if(e.type==="cup") return "theme-cup";
 return "";
}
function renderCalendar(){
 const el=document.getElementById("calendarPanel"); if(!el||!game)return;
 const cfg=nationalCompetitions[game.country];
 const today=game.currentDate||cfg.leagueStart||"2026-01-01";
 let html=`<div class="calendar-controls">
   <div class="info"><small>DATA DA TEMPORADA</small><b>📅 ${formatDate(today)}</b><span class="details">${cfg.league} • Temporada ${game.season}</span></div>
   <div class="calendar-buttons"><button onclick="advanceOneDay(true)">▶ AVANÇAR 1 DIA</button><button class="secondary" onclick="simulateCurrentDay()">🎮 SIMULAR DIA</button><button class="secondary" onclick="advanceToNextMatch()">⏩ ATÉ PRÓXIMA PARTIDA</button></div>
 </div>`;
 el.innerHTML=html;
}

// ===== MENU INICIAL =====
function showHomeNotice(title, message){
 openModal(`<h2 style="margin-bottom:10px">${title}</h2><div class="notice">${message}</div>`);
}
function loadHomeCareer(){
 if(!requireHomeAccount2026("load"))return;
 const s=load();
 if(s&&s.club){ continueCareer(); }
 else showHomeNotice("Carregar carreira","Nenhuma carreira salva foi encontrada para esta conta. Clique em NOVA CARREIRA para começar.");
}
// ===== CONTA DO JOGADOR (LOCAL) =====
const ACCOUNT_KEY_2026="fmCareerAccounts2026";
const ACTIVE_ACCOUNT_KEY_2026="fmCareerActiveAccount2026";
function getAccounts2026(){try{return JSON.parse(localStorage.getItem(ACCOUNT_KEY_2026)||"[]")}catch(e){return[]}}
function setAccounts2026(a){localStorage.setItem(ACCOUNT_KEY_2026,JSON.stringify(a))}
function getActiveAccount2026(){try{return JSON.parse(localStorage.getItem(ACTIVE_ACCOUNT_KEY_2026)||"null")}catch(e){return null}}
function accountSaveKey2026(accountId){return `worldFootballSave2026_${accountId}`}
function migrateLegacySaveToAccount2026(account){
 const legacy=localStorage.getItem("worldFootballSave");
 if(!account||!legacy)return;
 const key=accountSaveKey2026(account.id);
 if(!localStorage.getItem(key)) localStorage.setItem(key,legacy);
}
function setActiveAccount2026(a){
 if(a){
   // O save legado só pode ser migrado para a primeira conta, evitando que
   // uma segunda conta herde a carreira da primeira.
   if(getAccounts2026().length<=1) migrateLegacySaveToAccount2026(a);
   localStorage.setItem(ACTIVE_ACCOUNT_KEY_2026,JSON.stringify(a));
 }else localStorage.removeItem(ACTIVE_ACCOUNT_KEY_2026);
 renderHomeAccount2026();
}
function accountProgress2026(account){
 const s=load();
 if(!account)return;
 const seasons=Array.isArray(s?.history)?s.history.length:0;
 const wins=Number(s?.wins)||0;
 const trophies=(Array.isArray(s?.history)?s.history:[]).reduce((n,h)=>n+(h.libertadores?1:0)+(h.sudamericana?1:0),0);
 const xp=seasons*1000+wins*25+trophies*750;
 account.xp=xp;
 account.level=Math.max(1,Math.floor(xp/1000)+1);
}
function accountInitial2026(name){return (name||"?").trim().charAt(0).toUpperCase()||"?"}
function renderHomeAccount2026(){
 const a=getActiveAccount2026();
 const topStatus=document.getElementById("homeTopStatus");
 if(topStatus){
   topStatus.className = a ? "reference-status connected" : "reference-status";
   topStatus.innerHTML = a ? '<span></span> CONECTADO' : '<span></span> DESCONECTADO';
 }
}

function openAccountLogin(){
 document.body.classList.add("account-auth-open");
 const a=getActiveAccount2026();
 const content=`<div class="account-modal-content"><h2>ENTRAR NA CONTA</h2><p class="modal-subtitle">Acesse sua conta para continuar sua carreira.</p><label>E-MAIL</label><input id="accountLoginEmail" type="email" placeholder="seuemail@email.com" autocomplete="email"><label>SENHA</label><input id="accountLoginPassword" type="password" placeholder="••••••••" autocomplete="current-password"><button class="login-btn modal-wide-btn" onclick="submitAccountLogin2026()">ENTRAR</button><button class="create-profile-btn modal-link-btn" onclick="openAccountSignup()">Ainda não tenho uma conta</button></div>`;
 document.getElementById("modalContent").innerHTML=content; document.getElementById("modal").classList.remove("hidden");
}
function submitAccountLogin2026(){
 const email=(document.getElementById("accountLoginEmail")?.value||"").trim().toLowerCase();
 const password=document.getElementById("accountLoginPassword")?.value||"";
 const account=getAccounts2026().find(a=>a.email===email&&a.password===password);
 if(!account){
   const box=document.getElementById("accountLoginPassword");
   if(box){box.value="";box.focus();}
   return showHomeNotice("Login","E-mail ou senha incorretos.");
 }
 account.lastLogin=new Date().toISOString();
 const accounts=getAccounts2026().map(a=>a.id===account.id?account:a);
 setAccounts2026(accounts);
 setActiveAccount2026(account);
 closeModal();
 showHomeNotice("Bem-vindo!",`Conta de ${account.name} conectada.`);
}
function openAccountSignup(){
 document.body.classList.add("account-auth-open");
 const content=`<div class="signup-page">
   <div class="signup-brand"><div class="signup-brand-shield">⚽</div><div><strong>FM CAREER</strong><span>2026</span></div></div>
   <div class="signup-header"><h2>Criar sua conta</h2><p>Comece sua carreira</p></div>
   <div class="signup-form-grid">
     <div class="signup-field full"><label for="accountSignupName">Nome completo</label><input id="accountSignupName" type="text" placeholder="Digite seu nome completo" autocomplete="name"></div>
     <div class="signup-field full"><label for="accountSignupEmail">E-mail</label><input id="accountSignupEmail" type="email" placeholder="seu@email.com" autocomplete="email"></div>
     <div class="signup-field"><label for="accountSignupPassword">Senha</label><div class="signup-password"><input id="accountSignupPassword" type="password" placeholder="Crie uma senha" autocomplete="new-password"><button type="button" onclick="toggleSignupPassword2026('accountSignupPassword',this)" aria-label="Mostrar senha">◉</button></div></div>
     <div class="signup-field"><label for="accountSignupConfirm">Confirmar senha</label><div class="signup-password"><input id="accountSignupConfirm" type="password" placeholder="Digite novamente" autocomplete="new-password"><button type="button" onclick="toggleSignupPassword2026('accountSignupConfirm',this)" aria-label="Mostrar senha">◉</button></div></div>
   </div>
   <label class="signup-check"><input id="accountSignupTerms" type="checkbox"><span>Eu concordo com os <u>Termos de Uso</u> e <u>Política de Privacidade</u></span></label>
   <label class="signup-check"><input id="accountSignupNews" type="checkbox"><span>Quero receber notificações por e-mail</span></label>
   <button class="signup-submit" type="button" onclick="submitAccountSignup2026()">CRIAR CONTA</button>
   <div class="signup-or"><span></span><b>OU</b><span></span></div>
   <button class="signup-google" type="button" onclick="homeGoogleLogin()"><span>G</span> Entrar com Google</button>
   <div class="signup-existing">Já tem conta? <button type="button" onclick="openAccountLogin()">Entrar</button></div>
 </div>`;
 document.getElementById("modalContent").innerHTML=content; document.querySelector("#modal .modal-box")?.classList.add("signup-modal-box"); document.getElementById("modal").classList.remove("hidden");
}
function toggleSignupPassword2026(id,button){
 const input=document.getElementById(id);
 if(!input)return;
 input.type=input.type==="password"?"text":"password";
 button.textContent=input.type==="password"?"◉":"◉";
}
function submitAccountSignup2026(){
 const name=(document.getElementById("accountSignupName")?.value||"").trim();
 const email=(document.getElementById("accountSignupEmail")?.value||"").trim().toLowerCase();
 const password=document.getElementById("accountSignupPassword")?.value||"";
 const confirm=document.getElementById("accountSignupConfirm")?.value||"";
 const terms=document.getElementById("accountSignupTerms")?.checked;
 if(name.length<2)return showHomeNotice("Criar conta","Digite seu nome completo.");
 if(!/^\S+@\S+\.\S+$/.test(email))return showHomeNotice("Criar conta","Digite um e-mail válido.");
 if(password.length<4)return showHomeNotice("Criar conta","A senha precisa ter pelo menos 4 caracteres.");
 if(password!==confirm)return showHomeNotice("Criar conta","As senhas não coincidem.");
 if(!terms)return showHomeNotice("Criar conta","Você precisa aceitar os Termos de Uso e a Política de Privacidade.");
 const accounts=getAccounts2026();
 if(accounts.some(a=>a.email===email))return showHomeNotice("Criar conta","Este e-mail já possui uma conta.");
 const account={id:`acc_${Date.now()}`,name,email,password,level:1,xp:0,createdAt:new Date().toISOString(),lastLogin:new Date().toISOString(),news:!!document.getElementById("accountSignupNews")?.checked};
 accounts.push(account); setAccounts2026(accounts); setActiveAccount2026(account); closeModal(); showHomeNotice("Conta criada!",`Bem-vindo, ${name}. Agora você pode criar sua carreira.`);
}
function homeLogin(){
 const email=(document.getElementById("homeEmail")?.value||"").trim().toLowerCase();
 const password=document.getElementById("homePassword")?.value||"";
 if(!email || !password){ return showHomeNotice("Login","Digite seu e-mail e sua senha."); }
 const account=getAccounts2026().find(a=>a.email===email&&a.password===password);
 if(!account){
   const box=document.getElementById("homePassword");
   if(box) box.value="";
   return showHomeNotice("Login","E-mail ou senha incorretos.");
 }
 account.lastLogin=new Date().toISOString();
 setAccounts2026(getAccounts2026().map(a=>a.id===account.id?account:a));
 setActiveAccount2026(account);
 showHomeNotice("Bem-vindo!",`Conta de ${account.name} conectada.`);
}
function toggleHomePassword(){
 const input=document.getElementById("homePassword");
 if(input) input.type=input.type==="password"?"text":"password";
}
function homeGoogleLogin(){
 showHomeNotice("Google","O login com Google precisa de uma integração com servidor. Use e-mail e senha por enquanto.");
}
function playAsGuest2026(){
 let account=getAccounts2026().find(a=>a.isGuest===true);
 if(!account){
   account={id:`guest_${Date.now()}`,name:"Convidado",email:`guest_${Date.now()}@local`,password:"",level:1,xp:0,isGuest:true,createdAt:new Date().toISOString(),lastLogin:new Date().toISOString()};
   setAccounts2026([...getAccounts2026(),account]);
 }
 account.lastLogin=new Date().toISOString();
 setActiveAccount2026(account);
 const s=load();
 if(s) continueCareer(); else newCareer();
}
function logoutAccount2026(){setActiveAccount2026(null);showHomeNotice("Conta","Você saiu da conta.")}
function handleHomeAccountSecondary(){const a=getActiveAccount2026(); if(a)logoutAccount2026(); else openAccountSignup()}
renderHomeAccount2026();
function requireHomeAccount2026(action){
 if(!getActiveAccount2026()){
   openAccountLogin();
   return false;
 }
 return true;
}
function enterHomeCareer(){
 if(!requireHomeAccount2026("career"))return;
 const s=load();
 if(s) continueCareer();
 else newCareer();
}
function openHomeSection(section){
 const s=load();
 if(!s){
   if(section==="career") return newCareer();
   return showHomeNotice("Nenhuma carreira", "Crie uma carreira primeiro para acessar esta área.");
 }
 continueCareer();
 setTimeout(()=>{
   const map={squad:"squadList",market:"marketSection",calendar:"calendarPanel",tactics:"nextMatch"};
   const id=map[section];
   if(!id) return;
   const el=document.getElementById(id);
   if(!el) return;
   if(["squadList","marketSection"].includes(id)){
     const btn=el.closest(".collapsible-section")?.querySelector(".toggle-btn");
     if(el.classList.contains("hidden-content") && btn) toggleSection(id,btn);
   }
   el.closest(".card")?.scrollIntoView({behavior:"smooth",block:"start"});
 },50);
}

// ===== NAVEGAÇÃO / TELAS =====
function showScreen(id){document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));document.getElementById(id).classList.add("active")}
function save(){
 const account=getActiveAccount2026();
 if(!account){return false;}
 accountProgress2026(account);
 const accounts=getAccounts2026().map(a=>a.id===account.id?account:a);
 setAccounts2026(accounts);
 localStorage.setItem(ACTIVE_ACCOUNT_KEY_2026,JSON.stringify(account));
 localStorage.setItem(accountSaveKey2026(account.id),JSON.stringify(game));
 return true;
}
function load(){
 const account=getActiveAccount2026();
 if(!account)return null;
 const s=localStorage.getItem(accountSaveKey2026(account.id));
 if(!s)return null;
 try{return JSON.parse(s)}catch(e){return null;}
}

function newCareer(){
 if(!requireHomeAccount2026("new"))return;
 showScreen("countrySelection"); renderCountries();
}
function renderCountries(){
 const el=document.getElementById("countriesContainer"); el.innerHTML="";
 countries.forEach(c=>{
   const n=clubsOfCountry(c.id).length;
   el.innerHTML+=`<div class="club-card"><h3>${c.flag} ${c.name}</h3><p>${n} clubes na primeira divisão</p><button onclick="loadClubs(${c.id})">VER CLUBES</button></div>`;
 });
}
function loadClubs(countryId){
 showScreen("clubSelection");
 const el=document.getElementById("clubsContainer"); el.innerHTML="";
 clubsOfCountry(countryId).forEach(c=>{
   el.innerHTML+=`<div class="club-card"><div class="club-card-head">${clubShield(c,"md")}<div><h3>${c.name}</h3><p>${c.country}</p></div></div><div class="rating">⭐ ${c.rating} OVR</div><p>💰 ${money(c.money)}</p><p>Reputação: ${c.rep}</p><button onclick="selectClub(${c.id})">ESCOLHER CLUBE</button></div>`;
 });
}

function createSeasonObjective(c){
 const rank=c.rating>=84?3:c.rating>=79?6:c.rating>=74?10:14;
 return {targetPosition:rank, description:`Terminar entre os ${rank} primeiros`, achieved:null};
}
function evaluateSeasonObjective(position){
 const o=game.objective || {targetPosition:10};
 const achieved=position<=o.targetPosition;
 o.achieved=achieved;
 game.boardConfidence=clamp((game.boardConfidence||70)+(achieved?10:-15),0,100);
 if(achieved){ game.money += 2500000; game.rep=Math.min(100,game.rep+2); }
 else { game.money=Math.max(0,game.money-1000000); game.rep=Math.max(1,game.rep-2); }
 return achieved;
}
function selectClub(id){
 const c=getClub(id);
 const leagueIds=clubsOfCountry(c.countryId).map(x=>x.id);
 const fixtures=roundRobinFixtures(leagueIds,2);
 game={
   version:GAME_VERSION,
   club:deep(c), country:c.countryId, leagueIds, fixtures, round:1, totalRounds:fixtures.length,
   season:2026, currentDate:"2026-01-01", money:c.money, rep:c.rep, points:0, wins:0, draws:0, losses:0,
   table:leagueIds.map(newTableRow),
   players:deep(clubPlayers[id]),
   startingXI:defaultStartingXI(clubPlayers[id]),
   matchTactics:{formation:'4-3-3',style:'balanced',pressing:'medium',tempo:'normal',width:'normal',defensiveLine:'normal'},
   liveMatch:null,
   offers:[], loans:[], news:[], history:[], academy:[], lastResult:"", playedThisRound:false,
   continentalTab:"lib", libertadores:null, sudamericana:null,
   objective:createSeasonObjective(c), boardConfidence:70, seasonStartYear:2026,
   ratingModelVersion:2
 };
 game.players.forEach(p=>{p.contract=p.contract||3;p.salary=p.salary||Math.max(5000,Math.round(p.value*.001/52))});
 startNewContinentalSeason();
 initNationalCup();
 buildSeasonCalendar();
 generateMarket(); generateAcademy(); save(); openCareer();
}

function openCareer(){showScreen("career");renderAll();showMarket("list");renderContinental();renderNationalCup(document.getElementById('nationalCupPanel'));renderCalendar()}
function totalWages(){return game.players.reduce((s,p)=>s+(p.salary||0),0)}

function ensureCareerData(){
 if(!game || !game.club) return;
 ensureStartingXI();
 // Normaliza saves antigos e garante que a tela inicial da carreira sempre tenha
 // calendário, tabela e notícias válidos.
 const clubId=game.club.id;
 const countryId=Number(game.club.countryId ?? game.country);
 game.country=countryId;
 game.club.countryId=countryId;

 // IDs da liga: se o save tiver IDs antigos/incompatíveis, recria pela liga do clube.
 const league=clubsOfCountry(countryId);
 if(!Array.isArray(game.leagueIds) || game.leagueIds.length!==league.length || !game.leagueIds.every(id=>getClub(id))){
   game.leagueIds=league.map(c=>c.id);
 }

 // Calendário do campeonato. Recria também quando não existe nenhuma partida
 // futura do clube — isso corrige saves que ficaram com o calendário de uma versão antiga.
 if(!Array.isArray(game.fixtures) || game.fixtures.length!==Math.max(1,game.leagueIds.length-1)*2){
   game.fixtures=roundRobinFixtures(game.leagueIds,2);
   game.round=1;
   game.totalRounds=game.fixtures.length;
 }else{
   game.totalRounds=game.fixtures.length;
 }

 if(!Array.isArray(game.table) || game.table.length!==game.leagueIds.length || !game.table.some(r=>r && r.id===clubId)){
   game.table=game.leagueIds.map(newTableRow);
 }else{
   // Garante que todos os clubes atuais da liga estejam na tabela.
   const byId=new Map(game.table.map(r=>[r.id,r]));
   game.table=game.leagueIds.map(id=>byId.get(id)||newTableRow(id));
 }

 const today=game.currentDate||`${seasonYear()}-01-01`;
 const events=Array.isArray(game.calendarEvents)?game.calendarEvents:[];
 const expectedMineLeague=Math.max(1,game.leagueIds.length-1)*2;
 const mineLeagueEvents=events.filter(e=>e.type==="league" && isUserEvent(e)).length;
 // O calendário só é reconstruído quando está realmente ausente ou perdeu
 // partidas da liga do clube. Ter zero partidas futuras é normal no fim da liga
 // e não deve ressuscitar jogos já concluídos.
 if(!events.length || mineLeagueEvents<expectedMineLeague){
   buildSeasonCalendar();
 }
 game.news=Array.isArray(game.news)?game.news:[];
 // Sempre deixa pelo menos algumas notícias na tela inicial.
 if(game.news.length===0){
   game.news=[
     `📰 ${game.club.name} iniciou a temporada com foco nos próximos desafios. • ${formatDate(today)}`,
     `📰 A comissão técnica definiu o planejamento da semana. • ${formatDate(today)}`,
     `📰 A diretoria acompanha o desempenho do elenco. • ${formatDate(today)}`
   ];
 }
}

function addDailyNews(){
 if(!game || !game.currentDate) return;
 const dayNumber=Math.floor((dateObj(game.currentDate)-dateObj(`${seasonYear()}-01-01`))/86400000);
 // Não gera spam: apenas alguns acontecimentos por semana, além das notícias de partidas/transferências.
 if(dayNumber<0 || dayNumber%4!==0) return;
 const pool=[
   `📰 ${game.club.name}: comissão técnica intensifica os treinamentos para a sequência da temporada.`,
   `📰 Diretoria do ${game.club.name} acompanha o desempenho do elenco e o planejamento da temporada.`,
   `📰 Mercado: o departamento de futebol monitora oportunidades para reforçar o ${game.club.name}.`,
   `📰 Vestiário: jogadores trabalham finalizações e organização tática durante a semana.`,
   `📰 Bastidores: a comissão técnica avaliou o desempenho recente dos principais jogadores.`
 ];
 const idx=Math.abs(dayNumber/4)%pool.length;
 const msg=pool[idx];
 if(!game.news.some(n=>n===msg && n.includes(game.currentDate))) game.news.unshift(`${msg} • ${formatDate(game.currentDate)}`);
 game.news=game.news.slice(0,30);
}

function renderAll(){
 ensureCareerData();
 document.getElementById("clubName").textContent=game.club.name;
 const miniBadge=document.getElementById("clubMiniBadge"); if(miniBadge) miniBadge.outerHTML=clubShield(game.club,"mini").replace("club-shield mini","club-mini-badge club-shield mini");
 document.getElementById("seasonInfo").textContent=`Temporada ${game.season}/${String(game.season+1).slice(-2)} • ${game.club.country} • ${formatDate(game.currentDate)}`;
 const pd=document.getElementById("proDate"); if(pd){ const d=new Date(game.currentDate+"T08:32:00"); const wd=["DOM","SEG","TER","QUA","QUI","SEX","SÁB"][d.getDay()]; pd.textContent=`${wd}, ${formatDate(game.currentDate)} • 08:32`; }
 document.getElementById("clubMoney").textContent=money(game.money);
 const wageEl=document.getElementById("clubWage"); if(wageEl) wageEl.textContent=money(totalWages())+"/sem";
 document.getElementById("clubRep").textContent=game.rep;
 document.getElementById("roundInfo").textContent=`${game.wins}V ${game.draws}E ${game.losses}D`;
 updateNextMatch(); updateTable(); updateSquad(); renderCareerExtras(); renderAcademy(); renderInfo(); renderNationalCup(document.getElementById('nationalCupPanel')); renderCalendar();
}

function currentFixture(){
 const round=game.fixtures[game.round-1]||[];
 return round.find(([h,a])=>sameClubId(h,game.club.id)||sameClubId(a,game.club.id));
}
// ===== TEMA VISUAL POR COMPETIÇÃO =====
function competitionThemeKey(fx){
 if(!fx) return "league";
 if(fx.type==="cup") return "cup";
 if(fx.type==="continental") return fx.compKey==="lib" ? "libertadores" : "sudamericana";
 return "league";
}
function competitionLabel(fx){
 if(fx.type==="cup") return "🏆 Copa Nacional";
 if(fx.type==="continental") return fx.compKey==="lib" ? "🌎 CONMEBOL Libertadores" : "🔥 CONMEBOL Sul-Americana";
 return "🏟️ Campeonato";
}
function applyMatchTheme(themeKey){
 const card=document.querySelector('.next-match');
 if(card){
   card.classList.remove('theme-league','theme-cup','theme-libertadores','theme-sudamericana');
   card.classList.add('theme-'+themeKey);
 }
}
function updateNextMatch(){
 if(!game || !game.club) return;
 const today=game.currentDate;
 const todayMine=userEventsOnDate(today);
 let fx=todayMine[0] || getNextClubEvent(true);
 // Fallback para saves antigos: se o calendário ainda não tiver a partida,
 // encontra a próxima partida do clube diretamente nas rodadas do campeonato.
 if(!fx && Array.isArray(game.fixtures)){
   const start=Math.max(0,(game.round||1)-1);
   for(let ri=start;ri<game.fixtures.length && !fx;ri++){
     const pair=game.fixtures[ri]?.find(([h,a])=>sameClubId(h,game.club.id)||sameClubId(a,game.club.id));
     if(pair){
       const cfg=nationalCompetitions[game.country]||{};
       const dates=distributeDates(shiftDateToSeason(cfg.leagueStart)||`${seasonYear()}-01-22`,shiftDateToSeason(cfg.leagueEnd)||`${seasonYear()}-12-06`,game.fixtures.length);
       const date=dates[ri]||today;
       if(date>=today) fx={id:`fallback-${ri}-${game.club.id}`,date,type:'league',competition:cfg.league||'Campeonato Brasileiro Série A',home:pair[0],away:pair[1],played:false};
     }
   }
 }
 const action=document.querySelector('.match-actions button');
 const nextEl=document.getElementById('nextMatch');
 if(!nextEl)return;
 if(!fx){
   applyMatchTheme("league");
   nextEl.innerHTML=`<div class="next-empty">Nenhuma partida agendada para o ${game.club.name}.</div>`;
   document.getElementById("lastResult").textContent=game.lastResult||"";
   if(action){action.textContent="✓ SEM PARTIDAS";action.disabled=true;}
   return;
 }
 const home=getClub(fx.home)?.name||nationalCupClub(fx.home)?.name||"A definir";
 const away=getClub(fx.away)?.name||nationalCupClub(fx.away)?.name||"A definir";
 const label=competitionLabel(fx);
 const themeKey=competitionThemeKey(fx);
 applyMatchTheme(themeKey);
 const isToday=fx.date===today;
 const homeClub=getClub(fx.home)||nationalCupClub(fx.home);
 const awayClub=getClub(fx.away)||nationalCupClub(fx.away);
 nextEl.innerHTML=`<div class="next-match-teams"><div class="next-team"><span class="next-team-crest">${clubShield(homeClub,"sm")}</span><strong>${home}</strong></div><span class="next-vs">VS</span><div class="next-team"><span class="next-team-crest">${clubShield(awayClub,"sm")}</span><strong>${away}</strong></div></div><div class="next-match-meta">${label} • ${formatDate(fx.date)}${isToday?' • HOJE':''}</div>`;
 document.getElementById("lastResult").textContent=game.lastResult||"";
 if(action){
   action.disabled=false;
   const themedVerb=themeKey==="libertadores"?"⭐ SIMULAR PARTIDA":themeKey==="sudamericana"?"🔥 SIMULAR PARTIDA":themeKey==="cup"?"🏆 SIMULAR PARTIDA":"▶ SIMULAR PARTIDA";
   action.textContent=isToday?themedVerb:"▶ AVANÇAR DIA";
   action.onclick=isToday?openMatchPanel:()=>advanceOneDay(true);
 }
}

function clubMatchPlayers(id){
 const c=getClub(id)||nationalCupClub(id);
 if(id===game?.club?.id) return Array.isArray(game.players)?game.players:[];
 if(clubPlayers[id]?.length) return clubPlayers[id];
 if(c) return generateClubSquad(c);
 return [];
}
function matchXIForClub(id){
 const players=clubMatchPlayers(id);
 if(!players.length) return [];
 if(id===game?.club?.id && Array.isArray(game.startingXI) && game.startingXI.length){
   const chosen=game.startingXI.map(pid=>players.find(p=>p.id===pid)).filter(Boolean);
   if(chosen.length) return chosen;
 }
 return defaultStartingXI(players).map(pid=>players.find(p=>p.id===pid)).filter(Boolean);
}
function formationLabel(xi){
 const counts={GOL:0,ZAG:0,LD:0,LE:0,VOl:0,VOL:0,MC:0,MEI:0,PD:0,PE:0,ATA:0};
 xi.forEach(p=>{ if(counts[p.position]!==undefined) counts[p.position]++; });
 const defenders=(counts.ZAG||0)+(counts.LD||0)+(counts.LE||0);
 const mids=(counts.VOL||0)+(counts.VOl||0)+(counts.MC||0)+(counts.MEI||0);
 const forwards=(counts.PD||0)+(counts.PE||0)+(counts.ATA||0);
 return `4-${Math.max(2,Math.min(4,mids))}-${Math.max(1,Math.min(3,forwards))}`;
}
function renderPitchXI(xi){
 const slots=xi.slice(0,11);
 const positions=[
   ["goalkeeper",0],["defender d1",1],["defender d2",2],["defender d3",3],["defender d4",4],
   ["mid m1",5],["mid m2",6],["mid m3",7],["forward f1",8],["forward f2",9],["forward f3",10]
 ];
 return positions.map(([cls,i])=>{
   const p=slots[i];
   return `<div class="pitch-player ${cls}"><span>${p?.number||i+1}</span><b>${p?.name||"—"}</b></div>`;
 }).join("");
}
function renderMatchRoster(id,xi){
 const players=clubMatchPlayers(id);
 const xiIds=new Set(xi.map(p=>p.id));
 return players.slice().sort((a,b)=>{
   const ax=xiIds.has(a.id)?0:1, bx=xiIds.has(b.id)?0:1;
   return ax-bx || b.rating-a.rating;
 }).slice(0,18).map(p=>`<div class="pre-match-player ${xiIds.has(p.id)?"starter":""}"><span><b>${p.name}</b><small>${p.position} • ${p.age} anos</small></span><strong>${p.rating}</strong></div>`).join("");
}
function openMatchPanel(){
 if(!game) return;
 if(game.liveMatch?.running) return;
 const ev=userEventsOnDate(game.currentDate)[0];
 if(!ev) return advanceOneDay(true);
 const homeClub=getClub(ev.home)||nationalCupClub(ev.home);
 const awayClub=getClub(ev.away)||nationalCupClub(ev.away);
 const home=homeClub?.name||"A definir";
 const away=awayClub?.name||"A definir";
 const themeKey=competitionThemeKey(ev), compLabel=competitionLabel(ev);
 game.pendingMatchId=ev.id;
 if(!Array.isArray(game.startingXI) || !game.startingXI.length){
   game.startingXI=defaultStartingXI(game.players);
 }
 const homeXI=matchXIForClub(ev.home);
 const awayXI=matchXIForClub(ev.away);
 const userIsHome=ev.home===game.club.id;
 const userXI=userIsHome?homeXI:awayXI;
 const opponentXI=userIsHome?awayXI:homeXI;
 const homePlayers=clubMatchPlayers(ev.home), awayPlayers=clubMatchPlayers(ev.away);
 const crest=(club)=>clubShield(club,"lg");
 const modal=document.querySelector('#modal .modal-box');
 if(modal) modal.classList.add('pre-match-modal-box');
 openModal(`
   <div class="pre-match-screen theme-${themeKey}">
     <div class="pre-match-top">
       <div><span class="pre-match-kicker">${compLabel}</span><h2>PRÉ-JOGO</h2><p>Rodada ${game.round||"—"} • Temporada ${game.season}</p></div>
       <div class="pre-match-meta"><span>🕒 ${formatDate(ev.date)}</span><span>🏟️ Estádio ${userIsHome?"do mandante":"do visitante"}</span></div>
     </div>
     <div class="pre-match-scoreline">
       <div class="pre-team home"><div class="pre-crest">${crest(homeClub)}</div><strong>${home}</strong><span>TIME DA CASA</span></div>
       <div class="pre-vs"><small>VS</small><b>90'</b></div>
       <div class="pre-team away"><div class="pre-crest">${crest(awayClub)}</div><strong>${away}</strong><span>TIME VISITANTE</span></div>
     </div>
     <div class="pre-match-grid">
       <section class="pre-team-card">
         <div class="pre-team-card-head"><div><h3>${home}</h3><span>FORMAÇÃO ${formationLabel(homeXI)}</span></div><b>OVR ${Math.round(homeXI.reduce((s,p)=>s+p.rating,0)/Math.max(1,homeXI.length))}</b></div>
         <div class="mini-pitch">${renderPitchXI(homeXI)}</div>
         <div class="pre-roster-title">ESCALAÇÃO</div>
         <div class="pre-roster">${renderMatchRoster(ev.home,homeXI)}</div>
       </section>
       <section class="pre-team-card">
         <div class="pre-team-card-head"><div><h3>${away}</h3><span>FORMAÇÃO ${formationLabel(awayXI)}</span></div><b>OVR ${Math.round(awayXI.reduce((s,p)=>s+p.rating,0)/Math.max(1,awayXI.length))}</b></div>
         <div class="mini-pitch">${renderPitchXI(awayXI)}</div>
         <div class="pre-roster-title">ESCALAÇÃO</div>
         <div class="pre-roster">${renderMatchRoster(ev.away,awayXI)}</div>
       </section>
     </div>
     ${renderPreMatchLineupManager(userXI)}
     <div class="pre-match-status"><span>🟢 Moral: ${game.morale||"Alta"}</span><span>⚡ Condição: ${Math.round(game.condition||92)}%</span><span>🎯 QI Tático: ${game.tacticalIQ||85}</span></div>
     <div class="pre-match-actions">
       <button class="pre-action tactical" onclick="showPreMatchTactics()">▣ TÁTICAS</button>
       <button class="pre-action simulate" onclick="simulatePreMatch()">▶ SIMULAR</button>
       <button class="pre-action play" onclick="startInteractiveMatch()">▶ JOGAR PARTIDA</button>
     </div>
     <div class="pre-match-tip">Dica: ajuste sua preparação e chegue pronto. A partida está pronta para começar.</div>
   </div>`);
}
function renderPreMatchLineupManager(userXI){
 const players=(game?.players||[]).slice().sort((a,b)=>b.rating-a.rating);
 const xi=Array.isArray(userXI)?userXI.slice(0,11):getMatchSquad();
 const xiIds=new Set(xi.map(p=>p.id));
 const starterRows=xi.map((p,index)=>{
   const options=players.map(candidate=>`<option value="${candidate.id}" ${candidate.id===p.id?'selected':''}>${candidate.name} • ${candidate.position} • OVR ${candidate.rating}</option>`).join('');
   return `<label class="pre-lineup-row"><span class="pre-lineup-slot">${index+1}</span><span class="pre-lineup-info"><b>${p.name}</b><small>${p.position} • ${p.age} anos • OVR ${p.rating}</small></span><select aria-label="Titular ${index+1}" onchange="setPreMatchStarter(${index},this.value)">${options}</select></label>`;
 }).join('');
 const bench=players.filter(p=>!xiIds.has(p.id));
 const benchRows=bench.slice(0,10).map(p=>`<div class="pre-bench-row"><span><b>${p.name}</b><small>${p.position} • ${p.age} anos</small></span><strong>OVR ${p.rating}</strong></div>`).join('');
 return `<section class="pre-lineup-manager"><div class="pre-lineup-head"><div><span class="pre-match-kicker">SEU TIME</span><h3>ESCALAÇÃO E BANCO</h3><p>Troque qualquer titular diretamente pelo menu. A alteração fica salva antes do início da partida.</p></div><strong>${xi.length}/11 TITULARES</strong></div><div class="pre-lineup-grid"><div><h4>TITULARES</h4><div class="pre-lineup-list">${starterRows}</div></div><div><h4>BANCO</h4><div class="pre-bench-list">${benchRows||'<div class="pre-bench-empty">Nenhum reserva disponível.</div>'}</div></div></div></section>`;
}
function setPreMatchStarter(slotIndex,newId){
 if(!game)return;
 const players=Array.isArray(game.players)?game.players:[];
 const id=Number(newId);
 const xi=Array.isArray(game.startingXI)?game.startingXI.slice():defaultStartingXI(players);
 if(!Number.isInteger(slotIndex)||slotIndex<0||slotIndex>=11)return;
 if(!players.some(p=>p.id===id))return;
 const currentId=xi[slotIndex];
 if(currentId===id)return;
 const otherIndex=xi.indexOf(id);
 if(otherIndex>=0){
   xi[otherIndex]=currentId;
 }
 xi[slotIndex]=id;
 game.startingXI=xi.slice(0,11);
 save();
 openMatchPanel();
}
function ensureLineupPositions(){
 if(!game || !Array.isArray(game.players)) return;
 ensureMatchTactics();
 const formation=game.matchTactics.formation;
 const layout=MATCH_FORMATIONS[formation]||MATCH_FORMATIONS['4-3-3'];
 if(!game.lineupPositions || typeof game.lineupPositions!=='object') game.lineupPositions={};
 const valid=new Set(game.startingXI);
 Object.keys(game.lineupPositions).forEach(k=>{ if(!valid.has(Number(k))) delete game.lineupPositions[k]; });
 game.startingXI.forEach((id,index)=>{
   const current=game.lineupPositions[id];
   if(!Array.isArray(current)||current.length!==2||!Number.isFinite(Number(current[0]))||!Number.isFinite(Number(current[1]))){
     const pos=layout[index]||[50,50];
     game.lineupPositions[id]=[pos[0],pos[1]];
   }
   game.lineupPositions[id]=[clamp(Number(game.lineupPositions[id][0]),5,95),clamp(Number(game.lineupPositions[id][1]),5,95)];
 });
 game.lineupPositionsFormation=formation;
}
function lineupPositionForPlayer(id,index){
 ensureLineupPositions();
 if(game.lineupPositionsFormation!==game.matchTactics.formation){
   const layout=MATCH_FORMATIONS[game.matchTactics.formation]||MATCH_FORMATIONS['4-3-3'];
   const pos=layout[index]||[50,50];
   game.lineupPositions[id]=[pos[0],pos[1]];
   game.lineupPositionsFormation=game.matchTactics.formation;
 }
 return game.lineupPositions[id]||[50,50];
}
function resetLineupToFormation(){
 if(!game)return;
 ensureStartingXI(); ensureMatchTactics();
 const layout=MATCH_FORMATIONS[game.matchTactics.formation]||MATCH_FORMATIONS['4-3-3'];
 game.lineupPositions={};
 game.startingXI.forEach((id,index)=>{ const pos=layout[index]||[50,50]; game.lineupPositions[id]=[pos[0],pos[1]]; });
 game.lineupPositionsFormation=game.matchTactics.formation;
 save();
 renderSquadLineupManager();
}
function lineupPlayersSwap(aId,bId){
 if(!game)return;
 ensureStartingXI(); ensureLineupPositions();
 const a=Number(aId),b=Number(bId);
 if(!Number.isInteger(a)||!Number.isInteger(b)||a===b)return;
 const aStarter=game.startingXI.includes(a), bStarter=game.startingXI.includes(b);
 if(aStarter&&bStarter){
   const ap=game.lineupPositions[a], bp=game.lineupPositions[b];
   game.lineupPositions[a]=bp||[50,50]; game.lineupPositions[b]=ap||[50,50];
 }else if(aStarter&&!bStarter){
   const idx=game.startingXI.indexOf(a);
   if(idx>=0){ game.startingXI[idx]=b; game.lineupPositions[b]=game.lineupPositions[a]||[50,50]; delete game.lineupPositions[a]; }
 }else if(!aStarter&&bStarter){
   const idx=game.startingXI.indexOf(b);
   if(idx>=0){ game.startingXI[idx]=a; game.lineupPositions[a]=game.lineupPositions[b]||[50,50]; delete game.lineupPositions[b]; }
 }
 ensureStartingXI(); ensureLineupPositions(); save(); renderSquadLineupManager();
}
function renderSquadLineupManager(){
 if(!game)return;
 ensureStartingXI(); ensureMatchTactics(); ensureLineupPositions();
 const players=game.players||[];
 const xi=game.startingXI.map(id=>players.find(p=>p.id===id)).filter(Boolean).slice(0,11);
 const bench=players.filter(p=>!game.startingXI.includes(p.id)).sort((a,b)=>b.rating-a.rating);
 const fieldPlayers=xi.map((p,index)=>{
   const [x,y]=lineupPositionForPlayer(p.id,index);
   return `<button type="button" class="tactic-player" data-player-id="${p.id}" style="left:${x}%;top:${y}%" aria-label="${p.name}, ${p.position}, OVR ${p.rating}"><span class="tactic-player-dot">${p.position}</span><b>${p.name}</b><small>${p.rating}</small></button>`;
 }).join('');
 const benchRows=bench.map(p=>`<button type="button" class="tactic-bench-player" data-player-id="${p.id}"><span><b>${p.name}</b><small>${p.position} • ${p.age} anos</small></span><strong>${p.rating}</strong></button>`).join('');
 const formationOptions=Object.keys(MATCH_FORMATIONS).map(f=>`<option value="${f}" ${game.matchTactics.formation===f?'selected':''}>${f}</option>`).join('');
 const starterAvg=xi.length?Math.round(xi.reduce((s,p)=>s+p.rating,0)/xi.length):0;
 const content=`<div class="squad-tactics-modal">
   <div class="squad-tactics-head"><div><span class="pre-match-kicker">GERENCIAMENTO DO ELENCO</span><h2>ESCALAÇÃO E TÁTICA</h2><p>Arraste os jogadores dentro do campo para ajustar a posição. Arraste um titular até um reserva para fazer a troca.</p></div><div class="squad-tactics-actions"><label>FORMAÇÃO<select id="lineupFormationSelect">${formationOptions}</select></label><button type="button" class="small secondary" id="resetLineupBtn">RESETAR FORMAÇÃO</button></div></div>
   <div class="lineup-toolbar"><span><b>${xi.length}/11</b> titulares</span><span>OVR médio <b>${starterAvg}</b></span><span id="lineupDragStatus">Selecione ou arraste um jogador</span></div>
   <div class="squad-tactics-layout">
     <div class="lineup-pitch" id="lineupPitch" tabindex="0" aria-label="Campo para montagem da escalação"><div class="pitch-lines"></div><div class="pitch-zone pitch-zone-top"></div><div class="pitch-zone pitch-zone-bottom"></div><div class="pitch-center-circle"></div><div class="pitch-center-dot"></div><div class="tactic-player-layer">${fieldPlayers}</div></div>
     <aside class="lineup-bench"><div class="bench-head"><h3>RESERVAS</h3><span>${bench.length}</span></div><div class="tactic-bench-list">${benchRows||'<div class="tactic-empty">Nenhum reserva disponível.</div>'}</div><div class="tactic-help">💡 Clique em um jogador e depois em outro para trocar. Também é possível arrastar.</div></aside>
   </div>
   <div class="squad-tactics-footer"><button type="button" class="pre-action play" id="saveLineupBtn">SALVAR ESCALAÇÃO</button></div>
 </div>`;
 openModal(content);
 const modal=document.querySelector('#modal .modal-box'); if(modal)modal.classList.add('squad-tactics-modal-box');
 bindSquadTacticsInteractions();
}
function openSquadLineupManager(){ renderSquadLineupManager(); }
function bindSquadTacticsInteractions(){
 const root=document.querySelector('.squad-tactics-modal'); if(!root)return;
 let selectedId=null, drag=null;
 const status=root.querySelector('#lineupDragStatus');
 const setStatus=(msg)=>{if(status)status.textContent=msg};
 const clearSelected=()=>{root.querySelectorAll('.tactic-player.selected,.tactic-bench-player.selected').forEach(el=>el.classList.remove('selected'));selectedId=null;};
 root.querySelectorAll('[data-player-id]').forEach(el=>{
   const id=Number(el.dataset.playerId);
   el.addEventListener('click',(ev)=>{
     if(drag)return;
     if(selectedId===null){ selectedId=id; el.classList.add('selected'); setStatus('Agora clique no jogador de destino para trocar.'); return; }
     if(selectedId===id){ clearSelected(); setStatus('Seleção cancelada.'); return; }
     lineupPlayersSwap(selectedId,id);
   });
   el.addEventListener('pointerdown',(ev)=>{
     if(ev.button!==undefined && ev.button!==0 && ev.pointerType==='mouse')return;
     ev.preventDefault();
     drag={id,startX:ev.clientX,startY:ev.clientY,moved:false,el,pointerId:ev.pointerId};
     el.setPointerCapture?.(ev.pointerId);
     el.classList.add('dragging');
   });
   el.addEventListener('pointermove',(ev)=>{
     if(!drag||drag.id!==id)return;
     const dx=ev.clientX-drag.startX,dy=ev.clientY-drag.startY;
     if(Math.hypot(dx,dy)>5)drag.moved=true;
     if(!drag.moved)return;
     if(el.classList.contains('tactic-player')){
       const pitch=root.querySelector('#lineupPitch'),rect=pitch.getBoundingClientRect();
       const x=clamp(((ev.clientX-rect.left)/rect.width)*100,5,95),y=clamp(((ev.clientY-rect.top)/rect.height)*100,5,95);
       el.style.left=x+'%';el.style.top=y+'%';
     }
   });
   const finishDrag=(ev)=>{
     if(!drag||drag.id!==id)return;
     el.releasePointerCapture?.(drag.pointerId);
     const wasDrag=drag.moved; drag=null; el.classList.remove('dragging');
     if(!wasDrag)return;
     const target=document.elementFromPoint(ev.clientX,ev.clientY)?.closest('[data-player-id]');
     const pitch=root.querySelector('#lineupPitch'),pitchRect=pitch.getBoundingClientRect();
     if(target && Number(target.dataset.playerId)!==id){
       lineupPlayersSwap(id,Number(target.dataset.playerId));
       setStatus('Jogadores trocados.');
       return;
     }
     if(pitchRect.left<=ev.clientX&&ev.clientX<=pitchRect.right&&pitchRect.top<=ev.clientY&&ev.clientY<=pitchRect.bottom){
       const x=clamp(((ev.clientX-pitchRect.left)/pitchRect.width)*100,5,95),y=clamp(((ev.clientY-pitchRect.top)/pitchRect.height)*100,5,95);
       ensureLineupPositions(); game.lineupPositions[id]=[x,y]; save();
       setStatus('Posição atualizada.');
       return;
     }
     renderSquadLineupManager();
   };
   el.addEventListener('pointerup',finishDrag); el.addEventListener('pointercancel',()=>{if(drag&&drag.id===id){drag=null;el.classList.remove('dragging');renderSquadLineupManager();}});
 });
 root.querySelector('#lineupFormationSelect')?.addEventListener('change',(ev)=>{
   ensureMatchTactics(); game.matchTactics.formation=ev.target.value; resetLineupToFormation();
 });
 root.querySelector('#resetLineupBtn')?.addEventListener('click',resetLineupToFormation);
 root.querySelector('#saveLineupBtn')?.addEventListener('click',()=>{ ensureStartingXI();ensureLineupPositions();save();closeModal();renderAll(); });
}
function showPreMatchTactics(){
 ensureMatchTactics();
 const modal=document.querySelector('#modal .modal-box');
 if(modal)modal.classList.add('pre-match-modal-box');
 const t=game.matchTactics;
 const styles=Object.entries(MATCH_TACTIC_PRESETS).map(([key,v])=>`<button class="live-tactic-card ${t.style===key?'active':''}" onclick="setPreMatchTactic('style','${key}')"><b>${v.icon} ${v.label}</b><span>${v.description}</span></button>`).join('');
 const select=(label,key,opts)=>`<label class="live-tactic-field"><span>${label}</span><select onchange="setPreMatchTactic('${key}',this.value)">${opts.map(o=>`<option value="${o[0]}" ${t[key]===o[0]?'selected':''}>${o[1]}</option>`).join('')}</select></label>`;
 openModal(`<div class="pre-tactics live-tactics-pre"><span class="pre-match-kicker">PREPARAÇÃO</span><h2>PLANO DE JOGO</h2><p>Defina a identidade da equipe antes de entrar em campo.</p><div class="live-tactic-grid">${styles}</div><div class="live-tactic-fields" style="margin-top:12px">${select('Formação','formation',Object.keys(MATCH_FORMATIONS).map(x=>[x,x]))}${select('Pressão','pressing',[['low','Baixa'],['medium','Média'],['high','Alta']])}${select('Ritmo','tempo',[['slow','Lento'],['normal','Normal'],['fast','Rápido']])}${select('Largura','width',[['narrow','Compacta'],['normal','Normal'],['wide','Aberta']])}${select('Linha defensiva','defensiveLine',[['low','Baixa'],['normal','Normal'],['high','Alta']])}</div><div class="tactic-impact" style="margin-top:12px"><span>Ataque <b>${tacticEffect().attack>=0?'+':''}${tacticEffect().attack}</b></span><span>Defesa <b>${tacticEffect().defense>=0?'+':''}${tacticEffect().defense}</b></span></div><button class="pre-action play" onclick="openMatchPanel()">VOLTAR AO PRÉ-JOGO</button></div>`);
 if(modal)modal.classList.add('pre-match-modal-box');
}
function setPreMatchTactic(key,value){
 ensureMatchTactics();game.matchTactics[key]=value;save();showPreMatchTactics();
}

function simulatePreMatch(){
 if(!game || game.liveMatch?.running) return;
 const ev=(game.calendarEvents||[]).find(e=>e.id===game.pendingMatchId)||userEventsOnDate(game.currentDate)[0];
 if(!ev) return closeModal();
 const result=simulateCalendarEvent(ev);
 if(!result) return;
 const home=getClub(ev.home)?.name||nationalCupClub(ev.home)?.name||"A definir";
 const away=getClub(ev.away)?.name||nationalCupClub(ev.away)?.name||"A definir";
 game.lastResult=`${home} ${result.homeGoals} x ${result.awayGoals} ${away}`;
 game.news.unshift(`⚽ ${formatDate(game.currentDate)}: ${game.lastResult}`);
 game.news=game.news.slice(0,30);
 game.pendingMatchId=null;
 autoAdvanceDate();
 if(game.calendarEvents.some(e=>e.date===game.currentDate && !e.played && isUserEvent(e))){
   save(); renderAll(); openMatchPanel(); return;
 }
 game.currentDate=addDays(game.currentDate,1);
 addDailyNews(); save(); renderAll(); closeModal();
}
function toggleStarter(id,checked){
 if(!game)return;
 const arr=Array.isArray(game.startingXI)?game.startingXI.slice():[];
 if(checked){
   if(!arr.includes(id) && arr.length<11) arr.push(id);
 }else{
   const idx=arr.indexOf(id); if(idx>=0) arr.splice(idx,1);
 }
 game.startingXI=arr;
 const count=document.getElementById("lineupCount"); if(count) count.textContent=`${arr.length}/11 titulares`;
 document.querySelectorAll('.lineup-player').forEach(x=>x.classList.remove('selected'));
 document.querySelectorAll('.lineup-player input:checked').forEach(x=>x.closest('.lineup-player')?.classList.add('selected'));
 if(arr.length>=11) document.querySelectorAll('.lineup-player input:not(:checked)').forEach(x=>x.disabled=true);
 else document.querySelectorAll('.lineup-player input').forEach(x=>x.disabled=false);
}
// ===== MOTOR TÁTICO DA PARTIDA =====
const MATCH_TACTIC_PRESETS={
  balanced:{label:'Equilibrada',icon:'⚖️',description:'Bloco equilibrado, pressão moderada e transições seguras.',attack:0,defense:0,press:0,tempo:0},
  defensive:{label:'Defensiva',icon:'🛡️',description:'Bloco baixo, menos riscos e prioridade para proteger a área.',attack:-5,defense:7,press:-2,tempo:-1},
  attacking:{label:'Ofensiva',icon:'🔥',description:'Mais jogadores no ataque, pressão alta e maior volume ofensivo.',attack:7,defense:-5,press:4,tempo:2},
  counter:{label:'Contra-ataque',icon:'⚡',description:'Bloco compacto e aceleração rápida após recuperar a bola.',attack:4,defense:4,press:1,tempo:2}
};
const MATCH_FORMATIONS={
  '4-3-3':[[7,50],[22,20],[22,40],[22,60],[22,80],[44,27],[44,50],[44,73],[68,23],[72,50],[68,77]],
  '4-2-3-1':[[7,50],[22,20],[22,40],[22,60],[22,80],[42,35],[42,65],[58,20],[58,50],[58,80],[76,50]],
  '4-4-2':[[7,50],[22,20],[22,40],[22,60],[22,80],[43,20],[43,40],[43,60],[43,80],[70,38],[70,62]],
  '3-5-2':[[7,50],[22,28],[22,50],[22,72],[42,18],[42,36],[42,50],[42,64],[42,82],[70,38],[70,62]],
  '5-3-2':[[7,50],[22,12],[22,30],[22,50],[22,70],[22,88],[46,28],[46,50],[46,72],[72,38],[72,62]]
};
function ensureMatchTactics(){
 if(!game)return;
 const d={formation:'4-3-3',style:'balanced',pressing:'medium',tempo:'normal',width:'normal',defensiveLine:'normal'};
 game.matchTactics=Object.assign(d,game.matchTactics||{});
 if(!MATCH_FORMATIONS[game.matchTactics.formation])game.matchTactics.formation='4-3-3';
 if(!MATCH_TACTIC_PRESETS[game.matchTactics.style])game.matchTactics.style='balanced';
}
function currentMatchTactic(){ensureMatchTactics();return MATCH_TACTIC_PRESETS[game.matchTactics.style]||MATCH_TACTIC_PRESETS.balanced}
function tacticEffect(){
 const t=currentMatchTactic(), x=game.matchTactics;
 const press={low:-2,medium:0,high:4}[x.pressing]??0;
 const tempo={slow:-2,normal:0,fast:3}[x.tempo]??0;
 const line={low:4,normal:0,high:-3}[x.defensiveLine]??0;
 const formation=({'4-3-3':2,'4-2-3-1':1,'4-4-2':0,'3-5-2':1,'5-3-2':-2}[x.formation]??0);
 return {attack:t.attack+press+tempo+formation,defense:t.defense+line-formation*.25,press,tempo};
}
function formationPositionsFor(xi,side){
 ensureMatchTactics();
 const layout=MATCH_FORMATIONS[game.matchTactics.formation]||MATCH_FORMATIONS['4-3-3'];
 const isUserTeam=game?.club?.id!=null && ((side==='home' && game.liveMatch?.home===game.club.id) || (side==='away' && game.liveMatch?.away===game.club.id));
 if(isUserTeam){ ensureLineupPositions(); }
 return xi.slice(0,11).map((p,i)=>{
   let pos=(isUserTeam&&p&&game.lineupPositions?.[p.id])?game.lineupPositions[p.id]:(layout[i]||[50,50]);
   let x=Number(pos[0]),y=Number(pos[1]);
   if(side==='away')x=100-x;
   return [clamp(x,5,95),clamp(y,5,95)];
 });
}
function getUserLiveXI(){
 const players=game?.players||[];
 return (game?.startingXI||[]).map(id=>players.find(p=>p.id===id)).filter(Boolean).slice(0,11);
}
function getUserBench(){
 const starters=new Set(game?.startingXI||[]);
 return (game?.players||[]).filter(p=>!starters.has(p.id)).sort((a,b)=>b.rating-a.rating);
}
function livePlayerCondition(p){
 if(!p)return 90;
 if(typeof p.matchCondition==='number')return clamp(Math.round(p.matchCondition),20,100);
 return clamp(Math.round(game?.condition||92),20,100);
}
function resetLivePlayerConditions(){
 (game?.players||[]).forEach(p=>{delete p.matchCondition;delete p.matchBooked;});
}
function renderLiveTactics(){
 const m=game?.liveMatch;if(!m)return;
 ensureMatchTactics();
 const modal=document.querySelector('#modal .modal-box');
 if(modal){modal.classList.remove('live-match-modal-box','pre-match-modal-box');modal.classList.add('live-tactics-modal-box')}
 const xi=getUserLiveXI(), bench=getUserBench(), t=game.matchTactics, eff=tacticEffect();
 const styles=Object.entries(MATCH_TACTIC_PRESETS).map(([key,v])=>`<button class="live-tactic-card ${t.style===key?'active':''}" onclick="setLiveTactic('style','${key}')"><b>${v.icon} ${v.label}</b><span>${v.description}</span></button>`).join('');
 const select=(label,key,opts)=>`<label class="live-tactic-field"><span>${label}</span><select onchange="setLiveTactic('${key}',this.value)">${opts.map(o=>`<option value="${o[0]}" ${t[key]===o[0]?'selected':''}>${o[1]}</option>`).join('')}</select></label>`;
 const starters=xi.map((p,i)=>`<div class="live-sub-row"><div><b>${i+1}. ${p.name}</b><small>${p.position} • OVR ${p.rating} • Condição ${livePlayerCondition(p)}%</small></div><button onclick="selectSubOut('${p.id}')" class="sub-out-btn">SAIR</button></div>`).join('');
 const subs=bench.slice(0,18).map(p=>`<div class="live-sub-row bench"><div><b>${p.name}</b><small>${p.position} • OVR ${p.rating}</small></div><button onclick="selectSubIn('${p.id}')" class="sub-in-btn">ENTRAR</button></div>`).join('');
 const selectedOut=m.selectedSubOut?xi.find(p=>p.id===m.selectedSubOut):null;
 const selectedIn=m.selectedSubIn?bench.find(p=>p.id===m.selectedSubIn):null;
 document.getElementById('modalContent').innerHTML=`<div class="live-tactics-panel">
   <div class="live-tactics-head"><div><span>COMANDO TÉCNICO</span><h2>TACTICAS & SUBSTITUIÇÕES</h2><p>${m.minute}' • ${m.homeName} ${m.homeGoals} x ${m.awayGoals} ${m.awayName}</p></div><button onclick="returnToLiveMatch()">← VOLTAR À PARTIDA</button></div>
   <section class="live-tactics-section"><h3>ESTRATÉGIA</h3><div class="live-tactic-grid">${styles}</div></section>
   <section class="live-tactics-section"><h3>AJUSTES</h3><div class="live-tactic-fields">${select('Formação','formation',Object.keys(MATCH_FORMATIONS).map(x=>[x,x]))}${select('Pressão','pressing',[['low','Baixa'],['medium','Média'],['high','Alta']])}${select('Ritmo','tempo',[['slow','Lento'],['normal','Normal'],['fast','Rápido']])}${select('Largura','width',[['narrow','Compacta'],['normal','Normal'],['wide','Aberta']])}${select('Linha defensiva','defensiveLine',[['low','Baixa'],['normal','Normal'],['high','Alta']])}</div><div class="tactic-impact"><span>Ataque <b>${eff.attack>=0?'+':''}${eff.attack}</b></span><span>Defesa <b>${eff.defense>=0?'+':''}${eff.defense}</b></span><span>Pressão <b>${t.pressing==='high'?'Alta':t.pressing==='low'?'Baixa':'Média'}</b></span></div></section>
   <section class="live-tactics-section"><h3>SUBSTITUIÇÕES <small>${m.subsUsed||0}/5 • ${m.subWindows||0}/3 janelas</small></h3><div class="sub-selection"><div><span>SAINDO</span><strong>${selectedOut?.name||'Selecione um titular'}</strong></div><div>→</div><div><span>ENTRANDO</span><strong>${selectedIn?.name||'Selecione um reserva'}</strong></div><button class="confirm-sub" onclick="confirmLiveSubstitution()" ${(selectedOut&&selectedIn&&(m.subsUsed||0)<5&&(m.subWindows||0)<3)?'':'disabled'}>CONFIRMAR</button></div><div class="live-sub-grid"><div><h4>TITULARES</h4>${starters}</div><div><h4>BANCO</h4>${subs}</div></div></section>
   <div class="live-tactics-footer"><span>💡 Você pode mudar a estratégia quantas vezes quiser. Substituições: até 5 jogadores em 3 janelas.</span><button onclick="toggleMatchPause();renderLiveTactics()">${m.paused?'▶ CONTINUAR':'Ⅱ PAUSAR'}</button></div>
 </div>`;
}
function setLiveTactic(key,value){
 if(!game?.liveMatch)return;
 ensureMatchTactics();game.matchTactics[key]=value;
 game.liveMatch.events.unshift(`🧠 ${game.liveMatch.minute}' Tática alterada: ${key==='style'?MATCH_TACTIC_PRESETS[value].label:value}`);
 save();renderLiveTactics();
}
function selectSubOut(id){if(!game?.liveMatch)return;game.liveMatch.selectedSubOut=id;game.liveMatch.selectedSubIn=null;renderLiveTactics()}
function selectSubIn(id){if(!game?.liveMatch)return;game.liveMatch.selectedSubIn=id;renderLiveTactics()}
function confirmLiveSubstitution(){
 const m=game?.liveMatch;if(!m)return;
 if((m.subsUsed||0)>=5||(m.subWindows||0)>=3)return alert('Limite de substituições atingido.');
 const outId=m.selectedSubOut,inId=m.selectedSubIn;
 if(!outId||!inId)return alert('Selecione um titular e um reserva.');
 const xi=Array.isArray(game.startingXI)?game.startingXI.slice():[];
 const outIndex=xi.indexOf(outId);
 if(outIndex<0||xi.includes(inId))return alert('Substituição inválida.');
 const incoming=game.players.find(p=>p.id===inId),outgoing=game.players.find(p=>p.id===outId);
 if(!incoming||!outgoing)return;
 xi[outIndex]=inId;game.startingXI=xi;
 incoming.matchCondition=96;outgoing.matchCondition=Math.max(20,livePlayerCondition(outgoing));
 m.subsUsed=(m.subsUsed||0)+1;
 if(m.lastSubMinute!==m.minute){m.subWindows=(m.subWindows||0)+1;m.lastSubMinute=m.minute;}
 m.events.unshift(`🔄 ${m.minute}' Substituição: ${outgoing.name} ⟶ ${incoming.name}`);
 m.selectedSubOut=null;m.selectedSubIn=null;
 save();
 renderLiveTactics();
}
function openLiveTactics(){
 const m=game?.liveMatch;if(!m?.running)return;
 if(!m.paused)toggleMatchPause();
 renderLiveTactics();
}
function returnToLiveMatch(){
 const modal=document.querySelector('#modal .modal-box');
 if(modal)modal.classList.remove('live-tactics-modal-box');
 renderLiveMatch();
 if(game?.liveMatch?.running && game.liveMatch.paused)toggleMatchPause();
}
function matchTacticalModifier(){
 const e=tacticEffect();
 return e.attack*.7 + e.press*.35 - e.defense*.15;
}

function startInteractiveMatch(){
 if(!game || game.liveMatch?.running) return;
 const ev=(game.calendarEvents||[]).find(e=>e.id===game.pendingMatchId) || userEventsOnDate(game.currentDate)[0];
 if(!ev) return closeModal();
 ensureStartingXI();
 if(game.startingXI.length<11) return alert("O elenco não possui jogadores suficientes para formar os 11 titulares.");
 const home=getClub(ev.home)?.name||nationalCupClub(ev.home)?.name||"A definir";
 const away=getClub(ev.away)?.name||nationalCupClub(ev.away)?.name||"A definir";
 ensureMatchTactics();
 resetLivePlayerConditions();
 const live=makeLiveGoals(ev.home,ev.away);
 const themeKey=competitionThemeKey(ev), compLabel=competitionLabel(ev);
 const homeRating=teamRatingOf(ev.home);
 const awayRating=teamRatingOf(ev.away);
 const tacticalBonus=ev.home===game.club.id?matchTacticalModifier():-matchTacticalModifier();
 const possessionHome=clamp(Math.round(50 + (homeRating-awayRating)*1.35 + 3 + tacticalBonus),25,75);
 game.liveMatch={eventId:ev.id,running:true,paused:false,minute:0,home:ev.home,away:ev.away,homeName:home,awayName:away,homeGoals:0,awayGoals:0,targetHome:live.homeGoals,targetAway:live.awayGoals,goalMinutes:live.minutes.slice(),events:[],speed:1,timer:null,themeKey,compLabel,possessionHome,userIsHome:ev.home===game.club.id,subsUsed:0,subWindows:0,lastSubMinute:null,halftimeShown:false,selectedSubOut:null,selectedSubIn:null};
 renderLiveMatch();
 const close=document.querySelector('#modal .close'); if(close) close.style.display='none';
 startMatchTimer();
}
function startMatchTimer(){
 const m=game?.liveMatch;if(!m?.running || m.paused)return;
 if(m.timer) clearInterval(m.timer);
 const delay=Math.max(50,Math.round(1000/m.speed));
 m.timer=setInterval(tickInteractiveMatch,delay);
}
function changeMatchSpeed(){
 const m=game?.liveMatch;if(!m?.running)return;
 const speeds=[1,2,4,8,16];
 const idx=speeds.indexOf(m.speed);
 m.speed=speeds[(idx+1)%speeds.length];
 if(!m.paused) startMatchTimer();
 renderLiveMatch();
}
function toggleMatchPause(){
 const m=game?.liveMatch;if(!m?.running)return;
 m.paused=!m.paused;
 if(m.paused){
   if(m.timer) clearInterval(m.timer);
   m.timer=null;
 }else{
   startMatchTimer();
 }
 renderLiveMatch();
}
function tickInteractiveMatch(){
 const m=game?.liveMatch; if(!m?.running)return;
 m.minute++;
 const userEffect=matchTacticalModifier();
 // Cansaço: ritmo e pressão altos desgastam mais. Reservas entram frescas.
 (game.players||[]).forEach(p=>{
   if((game.startingXI||[]).includes(p.id)){
     const base=typeof p.matchCondition==='number'?p.matchCondition:Number(game.condition||92);
     const drain=(game.matchTactics?.pressing==='high'?0.34:game.matchTactics?.pressing==='low'?0.14:0.23)+(game.matchTactics?.tempo==='fast'?0.12:game.matchTactics?.tempo==='slow'?0.06:0.09);
     p.matchCondition=clamp(base-drain,35,100);
   }
 });
 // Os minutos previstos continuam sendo a espinha dorsal da simulação, mas a tática
 // pode atrasar/acelerar uma chance e criar uma pequena chance extra.
 const goalsAtMinute=m.goalMinutes.filter(x=>x===m.minute).length;
 if(goalsAtMinute){
   for(let n=0;n<goalsAtMinute;n++){
     const homeCurrent=m.homeGoals, awayCurrent=m.awayGoals;
     const remainingHome=m.targetHome-homeCurrent, remainingAway=m.targetAway-awayCurrent;
     let homeBias=remainingHome>0 && (remainingAway<=0 || Math.random()<remainingHome/(remainingHome+remainingAway));
     if(m.userIsHome && userEffect>0 && remainingHome>0 && Math.random()<Math.min(.22,userEffect/100))homeBias=true;
     if(!m.userIsHome && userEffect>0 && remainingAway>0 && Math.random()<Math.min(.22,userEffect/100))homeBias=false;
     if(homeBias && remainingHome>0)m.homeGoals++;else if(!homeBias && remainingAway>0)m.awayGoals++;else continue;
     const scorerPool=(homeBias===m.userIsHome)?getUserLiveXI():[];
     const scorer=scorerPool.length?pick(scorerPool).name:(homeBias?m.homeName:m.awayName);
     m.events.unshift(`⚽ ${m.minute}' ${scorer}`);
   }
 }
 // Pequena chance de um gol extra quando o usuário assume muitos riscos.
 const extraChance=Math.max(0,(userEffect-4))*0.00055;
 if(Math.random()<extraChance){
   const userScores=m.userIsHome;
   if(userScores)m.homeGoals++;else m.awayGoals++;
   const pool=getUserLiveXI();
   const scorer=pool.length?pick(pool).name:(userScores?m.homeName:m.awayName);
   m.events.unshift(`🔥 ${m.minute}' ${scorer} — grande chance convertida`);
 }
 // Cartões ocasionais e desgaste geram eventos de partida.
 if(Math.random()<0.012){
   const pool=getUserLiveXI();
   if(pool.length){const p=pick(pool);p.matchBooked=true;m.events.unshift(`🟨 ${m.minute}' ${p.name} recebe cartão amarelo`)}
 }
 if(Math.random()<0.0025){
   const pool=getUserLiveXI();
   if(pool.length && (m.subsUsed||0)<5){const p=pick(pool);m.events.unshift(`🚑 ${m.minute}' ${p.name} sentiu um problema físico. Considere substituí-lo.`)}
 }
 // Posse acompanha a estratégia e o desgaste.
 const fatiguePenalty=getUserLiveXI().reduce((s,p)=>s+(100-livePlayerCondition(p)),0)/Math.max(1,getUserLiveXI().length)*0.08;
 const targetPoss=clamp((m.userIsHome?50:-50)+userEffect*0.8-fatiguePenalty, -25,25);
 const basePoss=50+(m.home===game.club.id?targetPoss:-targetPoss)+(teamRatingOf(m.home)-teamRatingOf(m.away))*.35;
 m.possessionHome=clamp(Math.round(basePoss),25,75);
 if(m.minute===45 && !m.halftimeShown){
   m.halftimeShown=true;m.paused=true;if(m.timer){clearInterval(m.timer);m.timer=null;}
   m.events.unshift('⏸️ INTERVALO — hora de ajustar a equipe.');
 }
 renderLiveMatch();
 if(m.minute>=90) finishInteractiveMatch();
}

function liveInitials(name){
 const parts=String(name||'').trim().split(/\s+/).filter(Boolean);
 return (parts.length===1?parts[0].slice(0,3):parts.slice(0,2).map(x=>x[0]).join('')).toUpperCase();
}
function liveTeamBadge(club,side){
 const badge=clubShield(club,"live");
 return `<div class="live-team-badge ${side}">${badge}</div>`;
}
function livePlayers(xi,side){
 const positions=formationPositionsFor(xi,side);
 return xi.slice(0,11).map((p,i)=>{
   const [x,y]=positions[i]||[50,50];
   const card=p?.matchBooked?' 🟨':'';
   return `<div class="field-player ${side}" style="left:${x}%;top:${y}%"><span class="field-player-dot">${i+1}</span><b>${p?.name||'Jogador'}${card}</b><small>${livePlayerCondition(p)}%</small></div>`;
 }).join('');
}
function liveMiniMap(xi,side){
 const positions=formationPositionsFor(xi,side);
 return xi.slice(0,11).map((p,i)=>{const [x,y]=positions[i]||[50,50];return `<i class="mini-dot ${side}" style="left:${x}%;top:${y}%"></i>`}).join('');
}

function renderLiveMatch(){
 const m=game?.liveMatch;if(!m)return;
 ensureMatchTactics();
 const pct=Math.min(100,(m.minute/90)*100);
 const themeKey=m.themeKey||"league";
 const homeXI=matchXIForClub(m.home), awayXI=matchXIForClub(m.away);
 const possessionHome=clamp(Number(m.possessionHome??50),28,72);
 const possessionAway=100-possessionHome;
 const ballX=Math.round(50+Math.sin(m.minute*.21)*31);
 const ballY=Math.round(50+Math.cos(m.minute*.17)*28);
 const lastEvent=m.events[0]||'A partida começou. Acompanhe a movimentação em campo.';
 const modal=document.querySelector('#modal .modal-box');
 if(modal) modal.classList.add('live-match-modal-box');
 document.getElementById("modalContent").innerHTML=`
   <div class="live-match-screen theme-${themeKey}">
     <header class="live-scoreboard">
       <div class="live-board-team home-board">
         ${liveTeamBadge(getClub(m.home)||nationalCupClub(m.home)||{name:m.homeName},'home')}
         <strong>${m.homeName}</strong>
       </div>
       <div class="live-board-center">
         <div class="live-board-score"><b>${m.homeGoals}</b><span>${String(m.minute).padStart(2,'0')}'</span><b>${m.awayGoals}</b></div>
         <small>${m.minute>=90?'FULL TIME':(m.minute>=46?'SECOND HALF':(m.paused?'PAUSED':'FIRST HALF'))} • ${m.compLabel||'🏟️ CAMPEONATO'}</small>
       </div>
       <div class="live-board-team away-board">
         <strong>${m.awayName}</strong>
         ${liveTeamBadge(getClub(m.away)||nationalCupClub(m.away)||{name:m.awayName},'away')}
       </div>
     </header>

     <div class="live-match-toolbar">
       <span>ROUND ${game.round||1}</span>
       <span>${MATCH_TACTIC_PRESETS[game.matchTactics.style].icon} ${MATCH_TACTIC_PRESETS[game.matchTactics.style].label} • ${game.matchTactics.formation}</span>
       <span class="live-status-dot">● ${m.paused?'PAUSADO':'LIVE'}</span>
     </div>

     <main class="live-field-layout">
       <aside class="live-minimap-wrap">
         <div class="live-minimap-title">MINI-MAP</div>
         <div class="live-minimap">
           ${liveMiniMap(homeXI,'home')}${liveMiniMap(awayXI,'away')}
           <span class="mini-ball" style="left:${ballX}%;top:${ballY}%">⚽</span>
         </div>
       </aside>

       <section class="live-field-wrap">
         <div class="live-field">
           <div class="field-half home-half"></div><div class="field-half away-half"></div>
           <div class="field-midline"></div><div class="field-center-circle"></div><div class="field-center-spot"></div>
           <div class="field-box home-box"></div><div class="field-box away-box"></div>
           <div class="field-goal home-goal"></div><div class="field-goal away-goal"></div>
           <div class="field-player-layer">${livePlayers(homeXI,'home')}${livePlayers(awayXI,'away')}</div>
           <span class="live-ball" style="left:${ballX}%;top:${ballY}%">⚽</span>
         </div>
       </section>
     </main>

     <div class="live-last-event">${lastEvent}</div>

     <footer class="live-bottom-panel">
       <div class="live-possession">
         <span>POSSE • ${MATCH_TACTIC_PRESETS[game.matchTactics.style].label} • Condição média ${Math.round(getUserLiveXI().reduce((s,p)=>s+livePlayerCondition(p),0)/Math.max(1,getUserLiveXI().length))}%</span>
         <div class="possession-bar"><i style="width:${possessionHome}%"></i><b style="left:${possessionHome}%">${possessionHome}%</b><strong>${possessionAway}%</strong></div>
       </div>
       <div class="live-controls-pro">
         <button class="live-tactics-btn" onclick="openLiveTactics()">▣ TÁTICAS</button>
         <button class="live-icon-btn" onclick="toggleMatchPause()" title="${m.paused?'Continuar':'Pausar'}">${m.paused?'▶':'Ⅱ'}</button>
         <button class="live-speed-pro" onclick="changeMatchSpeed()">⚡ ${m.speed}x</button>
       </div>
     </footer>
     <div class="live-progress"><span style="width:${pct}%"></span></div>
   </div>`;
}

function finishInteractiveMatch(){
 const m=game?.liveMatch;if(!m)return;
 clearInterval(m.timer); m.running=false;
 const ev=(game.calendarEvents||[]).find(e=>e.id===m.eventId);
 if(!ev)return;
 const result={home:ev.home,away:ev.away,homeGoals:m.homeGoals,awayGoals:m.awayGoals,winner:m.homeGoals===m.awayGoals?null:(m.homeGoals>m.awayGoals?ev.home:ev.away),shootout:false};
 let shootoutNote="";
 if((ev.type==="continental" || ev.type==="cup") && result.winner===null){
   result.winner=playShootout(ev.home,ev.away); result.shootout=true;
   shootoutNote=` • nos pênaltis, ${getClub(result.winner)?.name||nationalCupClub(result.winner)?.name||"adversário"} avança`;
 }
 ev.played=true;ev.result=result;
 if(ev.type==="league") playCalendarLeagueMatchResult(ev,result);
 else if(ev.type==="continental" && ev.stage==="groups") applyContinentalGroupResult(ev,result);
 else finishUserCupEvent(ev,result);
 processAITransfers();
 game.news.unshift(`⚽ ${formatDate(game.currentDate)}: ${m.homeName} ${m.homeGoals} x ${m.awayGoals} ${m.awayName}${shootoutNote}`);
 game.lastResult=`${m.homeName} ${m.homeGoals} x ${m.awayGoals} ${m.awayName}${shootoutNote}`;
 game.liveMatch=null;game.pendingMatchId=null;
 closeModal();
 // Depois da partida do usuário, os demais jogos da mesma data são simulados.
 autoAdvanceDate();
 if(ev.type==="cup"){
   const phase=ev.phase;
   const cupComp=game.nationalCup;
   // Guarda contra dupla execução: só finaliza a fase aqui se autoAdvanceDate() ainda não o fez.
   if(cupComp && cupComp.phase===phase){
     const remaining=(game.calendarEvents||[]).some(e=>e.type==="cup"&&e.phase===phase&&!e.played);
     if(!remaining) finishScheduledCupPhase();
   }
 }
 if(ev.type==="continental"){
   const comp=compObjFor(ev.compKey);
   if(ev.stage==="groups"){
     // Guarda contra dupla execução: só finaliza a rodada aqui se autoAdvanceDate() ainda não o fez.
     if(comp && comp.groupRoundIndex===ev.roundIndex){
       const remaining=(game.calendarEvents||[]).some(e=>e.compKey===ev.compKey&&e.stage==="groups"&&e.roundIndex===ev.roundIndex&&!e.played);
       if(!remaining) finishGroupRound(ev.compKey);
     }
   }else{
     // Guarda contra dupla execução: só finaliza a fase aqui se autoAdvanceDate() ainda não o fez.
     if(comp && comp.phase===ev.stage){
       const remaining=(game.calendarEvents||[]).some(e=>e.compKey===ev.compKey&&e.stage===ev.stage&&!e.played);
       if(!remaining) finishKnockoutPhase(ev.compKey);
     }
   }
 }
 if(checkSeasonEnd()) return;
 save();renderAll();
}
function playCalendarLeagueMatchResult(e,result){
 const gh=result.homeGoals,ga=result.awayGoals;
 updateTableRow(game.table,e.home,gh,ga); updateTableRow(game.table,e.away,ga,gh);
 const userIsIn=e.home===game.club.id||e.away===game.club.id;
 if(userIsIn){
   const userHome=e.home===game.club.id,myG=userHome?gh:ga,opG=userHome?ga:gh,opp=getClub(userHome?e.away:e.home);
   if(myG>opG){game.points+=3;game.wins++;game.rep=Math.min(100,game.rep+1)}
   else if(myG===opG){game.points++;game.draws++}
   else {game.losses++;game.rep=Math.max(1,game.rep-1)}
   game.lastResult=userHome?`${game.club.name} ${myG} x ${opG} ${opp.name}`:`${opp.name} ${opG} x ${myG} ${game.club.name}`;
 }
}
function finishUserCupEvent(e,result){
 // Resultado da partida do usuário na copa. O restante da fase continua sendo simulado
 // quando todos os confrontos daquela data forem resolvidos.
 e.result=result;
}
function playNextMatch(){ openMatchPanel(); }
function simulateRound(){advanceOneDay(true)}

function updateTable(){
 if(!game||!game.club)return;
 if(!Array.isArray(game.leagueIds)||!game.leagueIds.length) game.leagueIds=clubsOfCountry(game.country).map(c=>c.id);
 if(!Array.isArray(game.table)||game.table.length!==game.leagueIds.length) game.table=game.leagueIds.map(newTableRow);
 const sorted=sortTable(game.table);
 let h=`<div class="table-row header"><span>#</span><span>CLUBE</span><span>PTS</span><span>V</span><span>E</span><span>SG</span></div>`;
 sorted.forEach((t,i)=>{ const tc=getClub(t.id)||nationalCupClub(t.id); const tn=t.name||tc?.name||"Clube"; h+=`<div class="table-row ${sameClubId(t.id,game.club.id)?"highlight":""}"><span>${i+1}</span><span class="table-club"><span>${clubShield(tc,"xs")}</span><span>${tn}</span></span><span>${t.points||0}</span><span>${t.wins||0}</span><span>${t.draws||0}</span><span>${(t.gf||0)-(t.ga||0)}</span></div>`; });
 const el=document.getElementById("leagueTable"); if(el) el.innerHTML=h;
}
function toggleSection(id, btn){
 const el=document.getElementById(id); if(!el||!btn)return;
 const hidden=el.classList.toggle("hidden-content");
 btn.textContent=hidden?"MOSTRAR":"OCULTAR";
 if(!hidden){
   if(id==="marketSection") showMarket("list");
   if(id==="continentalSection") renderContinental();
   if(id==="nationalCupPanel") renderNationalCup(el);
   if(id==="squadList") updateSquad();
   if(id==="academy") renderAcademy();
   if(id==="careerInfo") renderInfo();
 }
}
function openTab(){ /* reservado para futuras sub-telas do elenco */ }

function updateSquad(){
 const el=document.getElementById("squadList"); if(!el) return; el.innerHTML="";
 game.players.forEach((p,i)=>el.innerHTML+=`<div class="player-row"><div><span class="player-name">${p.name}</span><span class="tag">${p.position}</span><span class="tag">${p.age} anos</span><span class="details">Salário ${money(p.salary)}/sem • Contrato ${p.contract} ano(s) • Potencial <span class="potential">${p.potential}</span></span></div><div class="ovr">${p.rating}</div><div class="actions"><button class="small" onclick="playerDetails(${i})">Detalhes</button><button class="small danger" onclick="listForSale(${i})">Vender</button></div></div>`);
}
function playerDetails(i){
 const p=game.players[i];
 openModal(`<h2>${p.name}</h2><div class="info-grid"><div class="info"><small>Posição</small><b>${p.position}</b></div><div class="info"><small>Overall</small><b>${p.rating}</b></div><div class="info"><small>Idade</small><b>${p.age}</b></div><div class="info"><small>Potencial</small><b>${p.potential}</b></div><div class="info"><small>Valor</small><b>${money(p.value)}</b></div><div class="info"><small>Salário</small><b>${money(p.salary)}/sem</b></div></div><div class="notice">Contrato restante: ${p.contract} ano(s). O potencial define quanto ele pode evoluir nas próximas temporadas.</div><button onclick="renewContract(${i})">RENOVAR CONTRATO</button>`);
}
function renewContract(i){
 const p=game.players[i]; const newSalary=Math.round(p.salary*(1.08+Math.random()*.2));
 openModal(`<h2>Renovação — ${p.name}</h2><div class="notice">Novo contrato: 3 anos<br>Novo salário: ${money(newSalary)}/sem</div><button onclick="confirmRenew(${i},${newSalary})">ACEITAR</button>`);
}
function confirmRenew(i,salary){game.players[i].contract=3;game.players[i].salary=salary;save();closeModal();renderAll()}

// ===== MERCADO =====
function generateMarket(){
 transferMarket=[];
 for(let i=0;i<12;i++){
   const rating=72+Math.floor(Math.random()*13),age=18+Math.floor(Math.random()*15);
   const value=Math.max(7000000,Math.round((rating*rating*9000)*(age<23?1.45:1)*(0.85+Math.random()*.5)));
   transferMarket.push(player(1000+i,pick(names),pick(positions),rating,age,value,Math.min(90,rating+Math.floor(Math.random()*11))));
 }
}
function showMarket(type){
 const el=document.getElementById("marketPlayers");
 if(type==="offers") return renderOffers(el);
 if(type==="loans") return renderLoans(el);
 el.innerHTML="";
 transferMarket.filter(p=>!game.players.some(x=>x.id===p.id)).forEach(p=>{
  el.innerHTML+=`<div class="market-row"><div><span class="player-name">${p.name}</span><span class="tag">${p.position}</span><span class="details">${p.age} anos • Potencial ${p.potential} • Salário ${money(p.salary)}/sem</span><span class="value">${money(p.value)}</span></div><div class="ovr">${p.rating}</div><div class="actions"><button class="small" onclick="makeOffer(${p.id})">FAZER PROPOSTA</button><button class="small secondary" onclick="loanOffer(${p.id})">EMPRÉSTIMO</button></div></div>`;
 });
 if(!el.innerHTML)el.innerHTML=`<div class="notice">Nenhum jogador disponível agora. Avance uma rodada para atualizar o mercado.</div>`;
}
function makeOffer(id){
 const p=transferMarket.find(x=>x.id===id); if(!p)return;
 openModal(`<h2>Negociação — ${p.name}</h2>
<div class="notice">
  Valor de mercado: <b>${money(p.value)}</b><br>
  Você tem <b>${money(game.money)}</b> disponíveis.<br>
  <span class="details">Digite, por exemplo: 64,5M ou 500K.</span>
</div>
<div class="form-row">
  <input id="offerValue" type="text" inputmode="decimal" value="${(p.value/1000000).toString().replace(".", ",")}M" placeholder="Ex.: 64,5M">
  <input id="offerSalary" type="text" inputmode="decimal" value="${money(p.salary).replace("R$ ","")}" placeholder="Ex.: 50K">
</div>
<button onclick="sendOffer(${id})">ENVIAR PROPOSTA</button>`);
}
function sendOffer(id){
 const p=transferMarket.find(x=>x.id===id),
      offer=parseMoneyInput(document.getElementById("offerValue").value),
      salary=parseMoneyInput(document.getElementById("offerSalary").value);
 if(!p || !Number.isFinite(offer) || !Number.isFinite(salary) || offer<=0 || salary<=0){
  return alert("Digite valores válidos. Exemplos: 64,5M ou 500K.");
}
 if(offer>game.money)return alert("Você não tem dinheiro para essa proposta.");
 const acceptance=(offer/p.value)+(game.rep/500)+(salary/p.salary)*.1;
 if(acceptance>=.82){
   game.money-=offer;p.salary=salary;game.players.push(deep(p));transferMarket=transferMarket.filter(x=>x.id!==id);
   game.news.unshift(`Você contratou ${p.name} por ${money(offer)}.`);
   save();closeModal();renderAll();showMarket("list");
 }else{
   game.news.unshift(`O clube recusou sua proposta por ${p.name}.`);
   closeModal();renderInfo();alert("Proposta recusada. Tente aumentar o valor.");
 }
}
function listForSale(i){
 const p=game.players[i]; if(game.players.length<=5)return alert("Mantenha pelo menos 5 jogadores no elenco.");
 const price=Math.round(p.value*(.9+Math.random()*.35));
 openModal(`<h2>Vender — ${p.name}</h2><div class="notice">Valor de mercado: ${money(p.value)}<br>Preço pedido: ${money(price)}<br>Outros clubes podem fazer ofertas.</div><button onclick="confirmSaleListing(${i},${price})">COLOCAR À VENDA</button>`);
}
function confirmSaleListing(i,price){
 const p=deep(game.players[i]); p.askingPrice=price;p.sellingClub=game.club.id;
 game.offers.push(p);game.players.splice(i,1);game.news.unshift(`${p.name} foi colocado no mercado por ${money(price)}.`);
 save();closeModal();renderAll();showMarket("offers");
}
function renderOffers(el){
 el.innerHTML="";
 if(!game.offers.length){el.innerHTML=`<div class="notice">Nenhum jogador colocado à venda.</div>`;return}
 game.offers.forEach((p,i)=>{
  const offer=Math.round(p.askingPrice*(.85+Math.random()*.35));
  el.innerHTML+=`<div class="offer-row"><div><b>${p.name}</b><span class="details">${p.position} • OVR ${p.rating}</span></div><div class="value">Oferta: ${money(offer)}</div><div class="actions"><button class="small" onclick="acceptOffer(${i},${offer})">ACEITAR</button><button class="small danger" onclick="cancelSale(${i})">RETIRAR</button></div></div>`;
 });
}
function acceptOffer(i,amount){
 const p=game.offers[i];game.money+=amount;game.news.unshift(`${p.name} foi vendido por ${money(amount)}.`);
 game.offers.splice(i,1);save();renderAll();showMarket("offers");
}
function cancelSale(i){
 const p=game.offers[i];game.players.push(p);game.offers.splice(i,1);save();renderAll();showMarket("offers");
}
function loanOffer(id){
 const p=transferMarket.find(x=>x.id===id);if(!p)return;
 const fee=Math.round(p.value*.04);
 openModal(`<h2>Empréstimo — ${p.name}</h2><div class="notice">Taxa do empréstimo: ${money(fee)}<br>Salário: ${money(p.salary)}/sem<br>Duração: 1 temporada.</div><button onclick="confirmLoan(${id},${fee})">CONTRATAR POR EMPRÉSTIMO</button>`);
}
function confirmLoan(id,fee){
 const p=transferMarket.find(x=>x.id===id);if(!p)return;
 if(game.money<fee)return alert("Dinheiro insuficiente.");
 game.money-=fee;const lp=deep(p);lp.loan={from:"Clube proprietário",remaining:1};game.players.push(lp);game.loans.push(lp.id);transferMarket=transferMarket.filter(x=>x.id!==id);
 game.news.unshift(`${p.name} chegou por empréstimo.`);save();closeModal();renderAll();showMarket("loans");
}
function renderLoans(el){
 const loans=game.players.filter(p=>p.loan);
 if(!loans.length){el.innerHTML=`<div class="notice">Você não possui jogadores emprestados.</div>`;return}
 el.innerHTML=loans.map(p=>`<div class="loan-row"><b>${p.name}</b> <span class="details">Retorno em ${p.loan.remaining} temporada(s).</span></div>`).join("");
}

// ===== BASE =====
function generateAcademy(){
 game.academy=[];
 for(let i=0;i<4;i++){
   const age=16+Math.floor(Math.random()*3),r=58+Math.floor(Math.random()*13);
   game.academy.push(player(5000+i,pick(names),pick(positions),r,age,Math.round((r*r*5000)),Math.min(90,r+10+Math.floor(Math.random()*12))));
 }
}
function renderAcademy(){
 const el=document.getElementById("academy");
 if(!el) return;
 el.innerHTML=`<div class="notice">A base gera jovens a cada temporada. Contratar um jogador custa uma pequena taxa.</div>`;
 game.academy.forEach((p,i)=>el.innerHTML+=`<div class="academy-row"><div><b>${p.name}</b><span class="details">${p.position} • ${p.age} anos • Potencial ${p.potential}</span></div><div class="ovr">${p.rating}</div><button class="small" onclick="promoteYouth(${i})">PROMOVER</button></div>`);
}
function promoteYouth(i){
 const p=game.academy[i],fee=500000;
 if(game.money<fee)return alert("Dinheiro insuficiente para promover este jovem.");
 game.money-=fee;game.players.push(deep(p));game.academy.splice(i,1);game.news.unshift(`${p.name} subiu da base para o profissional.`);
 save();renderAll();
}

function processAITransfers(){
 clubsOfCountry(game.country).filter(c=>c.id!==game.club.id).forEach(c=>{
   const chance=.22;
   if(Math.random()<chance){
     const target=transferMarket[Math.floor(Math.random()*transferMarket.length)];
     if(target && target.value<c.money*.45 && target.rating>75){
       c.money-=target.value;
       game.news.unshift(`${c.name} contratou ${target.name}.`);
       transferMarket=transferMarket.filter(x=>x.id!==target.id);
     }
   }
 });
 if(Math.random()<.55)generateMarket();
}
function evolvePlayers(){
 game.players.forEach(p=>{
   if(p.age<31 && p.rating<p.potential && Math.random()<.72){
     p.rating=Math.min(p.potential,p.rating+(Math.random()<.25?2:1));
   }else if(p.age>=31 && Math.random()<.35){
     p.rating=Math.max(55,p.rating-1);
   }
   p.age++;
   p.value=Math.max(500000,Math.round(p.value*(1+(p.rating-75)*.008)));
   p.contract=Math.max(0,p.contract-1);
   if(p.contract===0){p.contract=1;p.salary=Math.round(p.salary*1.08)}
 });
}
function finishSeason(){
 const sorted=sortTable(game.table);
 const pos=sorted.findIndex(t=>t.id===game.club.id)+1;
 const prize=Math.max(1000000,(game.totalRounds+2-pos)*3000000);
 const objectiveAchieved=evaluateSeasonObjective(pos);
 game.money+=prize;game.rep=Math.max(1,Math.min(100,game.rep+(pos<=3?3:0)));
 evolvePlayers();
 game.players=game.players.filter(p=>!p.loan);
 game.offers=[];game.loans=[];generateMarket();generateAcademy();
 game.history.push({season:game.season,position:pos,points:game.points,prize,objective:objectiveAchieved,libertadores:game.libertadores&&game.libertadores.champion===game.club.id,sudamericana:game.sudamericana&&game.sudamericana.champion===game.club.id});
 game.news.unshift(`Fim da temporada: ${pos}º lugar no Campeonato ${game.club.country}. Meta: ${objectiveAchieved?'cumprida ✅':'não cumprida ❌'} • Prêmio: ${money(prize)}.`);
 startNewContinentalSeason();
 initNationalCup();
 game.season++;game.round=1;game.points=0;game.wins=0;game.draws=0;game.losses=0;game.playedThisRound=false;
 game.fixtures=roundRobinFixtures(game.leagueIds,2); game.totalRounds=game.fixtures.length;
 game.table=game.leagueIds.map(newTableRow);
 game.currentDate=`${seasonYear()}-01-01`;
 game.objective=createSeasonObjective(game.club);
 buildSeasonCalendar();
 save();
 setTimeout(()=>alert(`🏆 FIM DA TEMPORADA\n${pos}º lugar no ${game.club.country}\nMeta: ${objectiveAchieved?"CUMPRIDA":"NÃO CUMPRIDA"}\nPrêmio: ${money(prize)}\nA temporada ${game.season}/${String(game.season+1).slice(-2)} começou!`),50);
 renderAll(); renderContinental();
}

// ===== TORNEIOS CONTINENTAIS (UI) =====
function showContinental(tab){ game.continentalTab=tab; renderContinental(); }
function renderContinental(){
 const el=document.getElementById("continentalPanel"); if(!el)return;
 if(game.continentalTab==="sud") renderSudamericanaUI(el); else renderLibertadoresUI(el);
}
function clubTag(id){ const c=getClub(id); return id===game.club.id ? `<b>${c.name}</b> ⭐` : c.name; }
function renderGroupTable(comp,ids){
 const rows=sortTable(ids.map(id=>comp.groupTable[id]));
 let h=`<div class="table-row header"><span>#</span><span>CLUBE</span><span>PTS</span><span>V</span><span>E</span><span>SG</span></div>`;
 rows.forEach((t,i)=>h+=`<div class="table-row ${t.id===game.club.id?"highlight":""}"><span>${i+1}</span><span>${clubTag(t.id)}</span><span>${t.points}</span><span>${t.wins}</span><span>${t.draws}</span><span>${t.gf-t.ga}</span></div>`);
 return h;
}
function renderBracketList(comp){
 return comp.bracket.map(t=>`<div class="bracket-row"><span>${clubTag(t.home)}</span><span class="details">vs</span><span>${clubTag(t.away)}</span></div>`).join("");
}
function renderLastResults(comp){
 if(!comp.log || !comp.log.length) return "";
 return `<div class="notice"><b>Últimos resultados</b><br>${comp.log.slice(0,8).join("<br>")}</div>`;
}
function renderLibertadoresUI(el){
 const comp=game.libertadores;
 if(!comp){el.innerHTML=`<div class="notice">Torneio ainda não definido.</div>`;return}
 let html=`<div class="notice"><b>CONMEBOL Libertadores 2026</b><br>Datas oficiais da CONMEBOL para 2026. Final em 28/11, no Estádio Centenário (Montevidéu).</div>`;
 html+=`<div class="details" style="margin-bottom:10px">${comp.roundLabel}</div>`;
 if(comp.phase==="groups"){
   const gi=groupIndexOf(comp,game.club.id);
   if(gi>=0){
     html+=`<p style="color:var(--muted);font-size:12px;margin-bottom:8px">Seu grupo</p>${renderGroupTable(comp,comp.groups[gi])}`;
   }else{
     html+=`<div class="notice">Seu clube não se classificou para a fase de grupos da Libertadores nesta temporada. Termine mais alto no campeonato nacional para se classificar na próxima.</div>`;
   }
 }else{
   html+=renderBracketList(comp);
   const stillIn=comp.phase!=="done" && comp.bracket.some(t=>t.home===game.club.id||t.away===game.club.id);
   if(comp.phase!=="done" && !stillIn){
     html+=`<div class="notice">Seu clube não segue mais na Libertadores nesta temporada.</div>`;
   }
   if(comp.phase==="done"){
     html+=`<div class="notice">🏆 Campeão: <b>${getClub(comp.champion).name}</b></div>`;
   }
 }
 html+=renderLastResults(comp);
 html+=`<div class="details">As partidas da Libertadores acontecem automaticamente nas datas oficiais do calendário. Avance os dias para chegar à próxima fase.</div>`;
 el.innerHTML=html;
}
function renderSudamericanaUI(el){
 const comp=game.sudamericana;
 if(!comp){el.innerHTML=`<div class="notice">Torneio ainda não definido.</div>`;return}
 let html=`<div class="notice"><b>CONMEBOL Sul-Americana 2026</b><br>Datas oficiais da CONMEBOL para 2026. Final em 21/11, no Estádio Metropolitano (Barranquilla).</div>`;
 html+=`<div class="details" style="margin-bottom:10px">${comp.roundLabel}</div>`;
 const inBracket=comp.phase!=="done" && comp.bracket.some(t=>t.home===game.club.id||t.away===game.club.id);
 if(comp.phase!=="done" && !inBracket){
   html+=`<div class="notice">Seu clube não está na disputa da Sul-Americana nesta temporada (ou já foi eliminado).</div>`;
 }
 if(comp.phase!=="done") html+=renderBracketList(comp);
 if(comp.phase==="done") html+=`<div class="notice">🏆 Campeão: <b>${getClub(comp.champion).name}</b> (garante vaga direta na próxima Libertadores)</div>`;
 html+=renderLastResults(comp);
 html+=`<div class="details">As partidas da Sul-Americana acontecem automaticamente nas datas oficiais do calendário. Avance os dias para chegar à próxima fase.</div>`;
 el.innerHTML=html;
}

function focusCareer(id,btn){
 document.querySelectorAll('.side-nav').forEach(x=>x.classList.remove('active')); if(btn)btn.classList.add('active');
 const el=document.getElementById(id); if(!el)return;
 const section=el.closest('.collapsible-section')||el;
 if(section.classList.contains('collapsible-section')){ const content=section.querySelector('.collapsible-content'); if(content?.classList.contains('hidden-content')){content.classList.remove('hidden-content'); const t=section.querySelector('.toggle-btn'); if(t)t.textContent='OCULTAR'; } }
 section.scrollIntoView({behavior:'smooth',block:'start'});
}
function openSquadListFromSidebar(btn){
 document.querySelectorAll('.side-nav').forEach(x=>x.classList.remove('active'));
 if(btn)btn.classList.add('active');
 if(!game)return;

 // O botão ELENCO da lateral abre uma tela própria, em vez de apenas
 // levar o usuário até o card no meio da página. O MOSTRAR do card
 // continua funcionando normalmente e o editor tático permanece separado.
 const players=Array.isArray(game.players)?game.players:[];
 const rows=players.map((p,i)=>`<div class="squad-modal-player-row">
   <div class="squad-modal-player-main">
     <div><span class="player-name">${p.name}</span><span class="tag">${p.position}</span><span class="tag">${p.age} anos</span></div>
     <span class="details">Salário ${money(p.salary)}/sem • Contrato ${p.contract} ano(s) • Potencial <span class="potential">${p.potential}</span></span>
   </div>
   <div class="ovr">${p.rating}</div>
   <div class="actions"><button class="small" onclick="playerDetails(${i})">Detalhes</button><button class="small danger" onclick="listForSale(${i})">Vender</button></div>
 </div>`).join('');

 const content=`<div class="squad-list-modal">
   <div class="squad-list-modal-head">
     <div><span class="pre-match-kicker">GERENCIAMENTO DO CLUBE</span><h2>ELENCO</h2><p>${players.length} jogadores no elenco. Consulte os jogadores normalmente ou abra o editor tático.</p></div>
     <button type="button" class="pre-action play squad-open-lineup-btn" onclick="openSquadLineupManager()">⚽ ESCALAÇÃO</button>
   </div>
   <div class="squad-modal-list">${rows||'<div class="notice">Nenhum jogador encontrado.</div>'}</div>
 </div>`;

 const box=document.querySelector('#modal .modal-box');
 box?.classList.add('squad-list-modal-box');
 openModal(content);
}
function renderCareerExtras(){
 const news=document.getElementById('careerNews');
 if(news){ const arr=(game.news||[]).slice(0,4); news.innerHTML=(arr.length?arr:[`${game.club.name} se prepara para a próxima partida.`,'Diretoria acompanha o desempenho da equipe.','Mercado de transferências em observação.']).map((n,i)=>`<div class="career-news-item"><b>${i===0?'🔴':'⚪'} ${n}</b><small class="details">Hoje • ${String(8+i*3).padStart(2,'0')}:20</small></div>`).join(''); }
 const fp=document.getElementById('formPlayers');
 if(fp){ const ps=[...game.players].sort((a,b)=>b.rating-a.rating).slice(0,3); fp.innerHTML=ps.map((p,i)=>`<div class="form-player"><div><b>${p.name} • ${p.position}</b><small>${i===0?'Em ótima forma':'Consistente'} • OVR ${p.rating}</small></div><span class="form-rating">★ ${(7.2+(p.rating%10)/10).toFixed(1)}</span></div>`).join(''); }
 const obj=game.objective||{description:'Manter bom desempenho',targetPosition:10};
 const os=document.getElementById('objectiveSummary'); if(os){ os.innerHTML=`<div class="objective-item"><b>🏆 Campeonato</b><span>${obj.description}</span><small>Posição atual: acompanhando</small></div><div class="objective-item"><b>🏆 Copa do Brasil</b><span>Avançar o máximo possível</span><small>Meta da temporada</small></div><div class="objective-item"><b>☆ Desenvolvimento</b><span>Integrar jogadores da base</span><small>Meta de desenvolvimento</small></div>`; }
 const mv=document.getElementById('moraleValue'); const mb=document.getElementById('moraleBar'); const mt=document.getElementById('moraleText'); const morale=clamp(Math.round((game.boardConfidence??70)*.9+10),45,95); if(mv)mv.textContent=morale+'%'; if(mb)mb.style.width=morale+'%'; if(mt)mt.textContent=morale>=75?'Confiança alta no elenco':'Confiança do elenco em acompanhamento';
}
function renderInfo(){
 const history=game.history.length?game.history.slice(-3).map(x=>`Temporada ${x.season}: ${x.position}º • ${x.points} pts${x.libertadores?" • 🏆 Campeão da Libertadores":""}${x.sudamericana?" • 🏆 Campeão da Sul-Americana":""}`).join("<br>"):"Nenhuma temporada concluída.";
 const obj=game.objective||{description:"Sem meta definida",targetPosition:"—"};
 const confidence=game.boardConfidence??70;
 document.getElementById("careerInfo").innerHTML=`<div class="info-grid"><div class="info"><small>Reputação</small><b>${game.rep}/100</b></div><div class="info"><small>Jogadores</small><b>${game.players.length}</b></div><div class="info"><small>Folha salarial</small><b>${money(totalWages())}/sem</b></div><div class="info"><small>Temporadas</small><b>${game.history.length}</b></div></div><div class="notice"><b>🎯 Meta da diretoria</b><br>${obj.description}<br><span class="details">Confiança da diretoria: <b>${confidence}%</b></span></div><div class="notice"><b>Histórico</b><br>${history}</div><div class="notice"><b>Notícias</b><br>${game.news.slice(0,5).join("<br>")||"Nenhuma notícia."}</div>`;
}
function openModal(html){const modal=document.getElementById("modal"); const box=modal.querySelector(".modal-box"); const close=box?.querySelector(".close"); if(close) close.style.display=""; document.getElementById("modalContent").innerHTML=html; modal.classList.remove("hidden")}
function closeModal(){document.body.classList.remove("account-auth-open"); const modal=document.getElementById("modal"); if(game?.liveMatch?.timer){clearInterval(game.liveMatch.timer);game.liveMatch.timer=null;} modal.classList.add("hidden"); const box=modal.querySelector(".modal-box"); box?.classList.remove("pre-match-modal-box","live-match-modal-box","live-tactics-modal-box","squad-tactics-modal-box","squad-list-modal-box"); const close=box?.querySelector(".close"); if(close) close.style.display="";}
function continueCareer(){
 const s=load();
 if(!s)return alert("Nenhuma carreira encontrada.");
 if(s.version!==GAME_VERSION && s.version!==25 && s.version!==24){ alert("Essa carreira é incompatível com esta versão do jogo. Inicie uma nova carreira."); return; }
 game=s;
 game.version=GAME_VERSION;
 recalibrateSavedSquadRatings2026();
 game.boardConfidence=game.boardConfidence??70;
 game.objective=game.objective||createSeasonObjective(game.club);
 game.currentDate=game.currentDate||"2026-01-01";
 game.startingXI=Array.isArray(game.startingXI)&&game.startingXI.length?game.startingXI:defaultStartingXI(game.players);
 ensureStartingXI();
 ensureMatchTactics();
 game.liveMatch=null;
 if(!Array.isArray(game.news)) game.news=[];
 if(!game.nationalCup) initNationalCup();
 if(!game.calendarEvents||!game.calendarEvents.length) buildSeasonCalendar();
 showScreen("career"); renderAll(); showMarket("list"); renderContinental(); renderNationalCup(document.getElementById('nationalCupPanel')); renderCalendar();
}
function resetSave(){
 const account=getActiveAccount2026();
 if(confirm("Apagar a carreira desta conta?")){
   if(account)localStorage.removeItem(accountSaveKey2026(account.id));
   else localStorage.removeItem("worldFootballSave");
   alert("Save apagado.");
 }
}
window.addEventListener("beforeunload",()=>{ if(game&&getActiveAccount2026()) save(); });

buildAllSquads();
window.addEventListener("DOMContentLoaded",renderHomeAccount2026);

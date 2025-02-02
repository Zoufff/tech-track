export async function fetchData() {

// landcodes naar volledige namen (HERKANSINGh)
const countryNames = {
  AFG: 'Afghanistan',
  ALB: 'Albanië',
  DZA: 'Algerije',
  AND: 'Andorra',
  AGO: 'Angola',
  ATG: 'Antigua en Barbuda',
  ARG: 'Argentinië',
  ARM: 'Armenië',
  AUS: 'Australië',
  AUT: 'Oostenrijk',
  AZE: 'Azerbeidzjan',
  BHS: 'Bahama\'s',
  BHR: 'Bahrein',
  BGD: 'Bangladesh',
  BRB: 'Barbados',
  BLR: 'Wit-Rusland',
  BEL: 'België',
  BLZ: 'Belize',
  BEN: 'Benin',
  BTN: 'Bhutan',
  BOL: 'Bolivië',
  BIH: 'Bosnië en Herzegovina',
  BWA: 'Botswana',
  BRA: 'Brazilië',
  BRN: 'Brunei',
  BGR: 'Bulgarije',
  BFA: 'Burkina Faso',
  BDI: 'Burundi',
  CPV: 'Kaapverdië',
  KHM: 'Cambodja',
  CMR: 'Kameroen',
  CAN: 'Canada',
  CAF: 'Centraal-Afrikaanse Republiek',
  TCD: 'Tsjaad',
  CHL: 'Chili',
  CHN: 'China',
  COL: 'Colombia',
  COM: 'Comoren',
  COG: 'Congo',
  CRI: 'Costa Rica',
  CIV: 'Ivoorkust',
  HRV: 'Kroatië',
  CUB: 'Cuba',
  CYP: 'Cyprus',
  CZE: 'Tsjechië',
  DNK: 'Denemarken',
  DJI: 'Djibouti',
  DMA: 'Dominica',
  DOM: 'Dominicaanse Republiek',
  ECU: 'Ecuador',
  EGY: 'Egypte',
  SLV: 'El Salvador',
  GNQ: 'Equatoriaal-Guinea',
  ERI: 'Eritrea',
  EST: 'Estland',
  SWZ: 'Eswatini',
  ETH: 'Ethiopië',
  FJI: 'Fiji',
  FIN: 'Finland',
  FRA: 'Frankrijk',
  GAB: 'Gabon',
  GMB: 'Gambia',
  GEO: 'Georgië',
  DEU: 'Duitsland',
  GHA: 'Ghana',
  GRC: 'Griekenland',
  GRD: 'Grenada',
  GTM: 'Guatemala',
  GIN: 'Guinea',
  GNB: 'Guinee-Bissau',
  GUY: 'Guyana',
  HTI: 'Haïti',
  HND: 'Honduras',
  HUN: 'Hongarije',
  ISL: 'IJsland',
  IND: 'India',
  IDN: 'Indonesië',
  IRN: 'Iran',
  IRQ: 'Irak',
  IRL: 'Ierland',
  ISR: 'Israël',
  ITA: 'Italië',
  JAM: 'Jamaica',
  JPN: 'Japan',
  JOR: 'Jordanië',
  KAZ: 'Kazachstan',
  KEN: 'Kenia',
  KIR: 'Kiribati',
  PRK: 'Korea (Noord)',
  KOR: 'Korea (Zuid)',
  KWT: 'Koeweit',
  KGZ: 'Kirgizië',
  LAO: 'Laos',
  LVA: 'Letland',
  LBN: 'Libanon',
  LSO: 'Lesotho',
  LBR: 'Liberia',
  LBY: 'Libië',
  LIE: 'Liechtenstein',
  LTU: 'Litouwen',
  LUX: 'Luxemburg',
  MDG: 'Madagaskar',
  MWI: 'Malawi',
  MYS: 'Maleisië',
  MDV: 'Maldiven',
  MLI: 'Mali',
  MLT: 'Malta',
  MHL: 'Marshalleilanden',
  MRT: 'Mauritanië',
  MUS: 'Mauritius',
  MEX: 'Mexico',
  FSM: 'Micronesië',
  MDA: 'Moldavië',
  MCO: 'Monaco',
  MNG: 'Mongolië',
  MNE: 'Montenegro',
  MAR: 'Marokko',
  MOZ: 'Mozambique',
  MMR: 'Myanmar',
  NAM: 'Namibië',
  NRU: 'Nauru',
  NPL: 'Nepal',
  NLD: 'Nederland',
  NZL: 'Nieuw-Zeeland',
  NIC: 'Nicaragua',
  NER: 'Niger',
  NGA: 'Nigeria',
  MKD: 'Noord-Macedonië',
  NOR: 'Noorwegen',
  OMN: 'Oman',
  PAK: 'Pakistan',
  PLW: 'Palau',
  PAN: 'Panama',
  PNG: 'Papoea-Nieuw-Guinea',
  PRY: 'Paraguay',
  PER: 'Peru',
  PHL: 'Filipijnen',
  POL: 'Polen',
  PRT: 'Portugal',
  QAT: 'Qatar',
  ROU: 'Roemenië',
  RUS: 'Rusland',
  RWA: 'Rwanda',
  KNA: 'Saint Kitts en Nevis',
  LCA: 'Saint Lucia',
  VCT: 'Saint Vincent en de Grenadines',
  SMR: 'San Marino',
  SAU: 'Saoedi-Arabië',
  SEN: 'Senegal',
  SRB: 'Servië',
  SYC: 'Seychellen',
  SLE: 'Sierra Leone',
  SGP: 'Singapore',
  SVK: 'Slowakije',
  SVN: 'Slovenië',
  SLB: 'Salomonseilanden',
  SOM: 'Somalië',
  ZAF: 'Zuid-Afrika',
  SSD: 'Zuid-Soedan',
  ESP: 'Spanje',
  LKA: 'Sri Lanka',
  SDN: 'Soedan',
  SUR: 'Suriname',
  SWE: 'Zweden',
  CHE: 'Zwitserland',
  SYR: 'Syrië',
  TWN: 'Taiwan',
  TJK: 'Tadzjikistan',
  TZA: 'Tanzania',
  THA: 'Thailand',
  TLS: 'Timor-Leste',
  TGO: 'Togo',
  TON: 'Tonga',
  TTO: 'Trinidad en Tobago',
  TUN: 'Tunesië',
  TUR: 'Turkije',
  TKM: 'Turkmenistan',
  TUV: 'Tuvalu',
  UGA: 'Oeganda',
  UKR: 'Oekraïne',
  ARE: 'Verenigde Arabische Emiraten',
  GBR: 'Verenigd Koninkrijk',
  USA: 'Verenigde Staten',
  URY: 'Uruguay',
  UZB: 'Oezbekistan',
  VUT: 'Vanuatu',
  VEN: 'Venezuela',
  VNM: 'Vietnam',
  YEM: 'Jemen',
  ZMB: 'Zambia',
  ZWE: 'Zimbabwe',
  PRI: 'Puerto Rico'
};


  const proxyUrl = 'https://mijn-proxy-lkx2euvba-zoufffs-projects.vercel.app/api/proxy.js'; // Proxy server URL die wordt gebruikt om data op te halen

  try {
    console.log(`Fetching data from proxy: ${proxyUrl}`);
    
    // Verzending van de GET-aanroep naar de proxy-URL om de gegevens op te halen
    const response = await fetch(proxyUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    // Controleert of het antwoord succesvol is
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`); // Gooi een fout als de status niet OK is
    }

    // Verkrijgt de JSON-gegevens van de API-respons
    const allData = await response.json();
    console.log('Alle gegevens ontvangen:', allData);

    if (!allData.value || allData.value.length === 0) {
      throw new Error('Geen data gevonden.'); // Als er geen data is, gooi een fout
    }

    console.log('Alle gevonden data:', allData.value);

    // Zoekt naar het nieuwste jaar in de data (dynamisch)
    const latestYear = Math.max(...allData.value.map(item => item.TimeDim));
    console.log(`Nieuwste jaar: ${latestYear}`);

   // dit zijn alle afkortingen die niet voor een land staan/onbekend zijn en die ik wil uitsluiten in verdere verwerking van de data
   // (HERKANSING)
    const excludedCountries = ['WB_HI', 'WB_LI', 'WB_UMI', "AMR", 'PSE', 'GLOBAL', 'STP', 'WSM', 'EMR', 'SEAR', 'WB_LMI', 'AFR', 'COD', 'EUR', 'WPR'];

    // Filtert de data op basis van het nieuwste jaar en een specifieke Dim1 waarde ("SEX_BTSX")
    const filteredData = allData.value.filter(
      item => item.TimeDim === latestYear && item.Dim1 === 'SEX_BTSX' && !excludedCountries.includes(item.SpatialDim)
    );

    // Controleert of er gefilterde data is
    if (filteredData.length === 0) {
      throw new Error(`Geen data gevonden voor jaar ${latestYear} en "SEX_BTSX".`); // Foutmelding als geen data gevonden wordt
    }

    console.log('Gefilterde data:', filteredData);

    // Verwerkt de gefilterde data retourneert de gewenste informatie
    return filteredData.map((item) => ({
      name: countryNames[item.SpatialDim] || item.SpatialDim, // Vervangtt de landcode door de naam
      value: item.NumericValue ? parseFloat(item.NumericValue.toFixed(2)) : 0, // Afronden op 2 decimalen, bron: chatgpt (HERKANSING)
      location: item.ParentLocation || 'Onbekend', // Locatie, standaard 'Onbekend' als deze ontbreekt
    }));

  } catch (error) {
    // 
    console.error('Fout bij het ophalen van data:', error.message);
    throw error; // Hergooi de fout om deze verderop in de keten op te vangen
  }
}

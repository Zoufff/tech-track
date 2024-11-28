export async function fetchData() {

// landcodes naar volledige namen
const countryNames = {
  AFG: 'Afghanistan',
  ALB: 'Albania',
  DZA: 'Algeria',
  AND: 'Andorra',
  AGO: 'Angola',
  ATG: 'Antigua and Barbuda',
  ARG: 'Argentina',
  ARM: 'Armenia',
  AUS: 'Australia',
  AUT: 'Austria',
  AZE: 'Azerbaijan',
  BHS: 'Bahamas',
  BHR: 'Bahrain',
  BGD: 'Bangladesh',
  BRB: 'Barbados',
  BLR: 'Belarus',
  BEL: 'Belgium',
  BLZ: 'Belize',
  BEN: 'Benin',
  BTN: 'Bhutan',
  BOL: 'Bolivia',
  BIH: 'Bosnia and Herzegovina',
  BWA: 'Botswana',
  BRA: 'Brazil',
  BRN: 'Brunei',
  BGR: 'Bulgaria',
  BFA: 'Burkina Faso',
  BDI: 'Burundi',
  CPV: 'Cabo Verde',
  KHM: 'Cambodia',
  CMR: 'Cameroon',
  CAN: 'Canada',
  CAF: 'Central African Republic',
  TCD: 'Chad',
  CHL: 'Chile',
  CHN: 'China',
  COL: 'Colombia',
  COM: 'Comoros',
  COG: 'Congo',
  CRI: 'Costa Rica',
  CIV: 'Côte d\'Ivoire',
  HRV: 'Croatia',
  CUB: 'Cuba',
  CYP: 'Cyprus',
  CZE: 'Czech Republic',
  DNK: 'Denmark',
  DJI: 'Djibouti',
  DMA: 'Dominica',
  DOM: 'Dominican Republic',
  ECU: 'Ecuador',
  EGY: 'Egypt',
  SLV: 'El Salvador',
  GNQ: 'Equatorial Guinea',
  ERI: 'Eritrea',
  EST: 'Estonia',
  SWZ: 'Eswatini',
  ETH: 'Ethiopia',
  FJI: 'Fiji',
  FIN: 'Finland',
  FRA: 'France',
  GAB: 'Gabon',
  GMB: 'Gambia',
  GEO: 'Georgia',
  DEU: 'Germany',
  GHA: 'Ghana',
  GRC: 'Greece',
  GRD: 'Grenada',
  GTM: 'Guatemala',
  GIN: 'Guinea',
  GNB: 'Guinea-Bissau',
  GUY: 'Guyana',
  HTI: 'Haiti',
  HND: 'Honduras',
  HUN: 'Hungary',
  ISL: 'Iceland',
  IND: 'India',
  IDN: 'Indonesia',
  IRN: 'Iran',
  IRQ: 'Iraq',
  IRL: 'Ireland',
  ISR: 'Israel',
  ITA: 'Italy',
  JAM: 'Jamaica',
  JPN: 'Japan',
  JOR: 'Jordan',
  KAZ: 'Kazakhstan',
  KEN: 'Kenya',
  KIR: 'Kiribati',
  PRK: 'Korea (North)',
  KOR: 'Korea (South)',
  KWT: 'Kuwait',
  KGZ: 'Kyrgyzstan',
  LAO: 'Laos',
  LVA: 'Latvia',
  LBN: 'Lebanon',
  LSO: 'Lesotho',
  LBR: 'Liberia',
  LBY: 'Libya',
  LIE: 'Liechtenstein',
  LTU: 'Lithuania',
  LUX: 'Luxembourg',
  MDG: 'Madagascar',
  MWI: 'Malawi',
  MYS: 'Malaysia',
  MDV: 'Maldives',
  MLI: 'Mali',
  MLT: 'Malta',
  MHL: 'Marshall Islands',
  MRT: 'Mauritania',
  MUS: 'Mauritius',
  MEX: 'Mexico',
  FSM: 'Micronesia',
  MDA: 'Moldova',
  MCO: 'Monaco',
  MNG: 'Mongolia',
  MNE: 'Montenegro',
  MAR: 'Morocco',
  MOZ: 'Mozambique',
  MMR: 'Myanmar',
  NAM: 'Namibia',
  NRU: 'Nauru',
  NPL: 'Nepal',
  NLD: 'Netherlands',
  NZL: 'New Zealand',
  NIC: 'Nicaragua',
  NER: 'Niger',
  NGA: 'Nigeria',
  MKD: 'North Macedonia',
  NOR: 'Norway',
  OMN: 'Oman',
  PAK: 'Pakistan',
  PLW: 'Palau',
  PAN: 'Panama',
  PNG: 'Papua New Guinea',
  PRY: 'Paraguay',
  PER: 'Peru',
  PHL: 'Philippines',
  POL: 'Poland',
  PRT: 'Portugal',
  QAT: 'Qatar',
  ROU: 'Romania',
  RUS: 'Russia',
  RWA: 'Rwanda',
  KNA: 'Saint Kitts and Nevis',
  LCA: 'Saint Lucia',
  VCT: 'Saint Vincent and the Grenadines',
  SMR: 'San Marino',
  SAU: 'Saudi Arabia',
  SEN: 'Senegal',
  SRB: 'Serbia',
  SYC: 'Seychelles',
  SLE: 'Sierra Leone',
  SGP: 'Singapore',
  SVK: 'Slovakia',
  SVN: 'Slovenia',
  SLB: 'Solomon Islands',
  SOM: 'Somalia',
  ZAF: 'South Africa',
  SSD: 'South Sudan',
  ESP: 'Spain',
  LKA: 'Sri Lanka',
  SDN: 'Sudan',
  SUR: 'Suriname',
  SWE: 'Sweden',
  CHE: 'Switzerland',
  SYR: 'Syria',
  TWN: 'Taiwan',
  TJK: 'Tajikistan',
  TZA: 'Tanzania',
  THA: 'Thailand',
  TLS: 'Timor-Leste',
  TGO: 'Togo',
  TON: 'Tonga',
  TTO: 'Trinidad and Tobago',
  TUN: 'Tunisia',
  TUR: 'Turkey',
  TKM: 'Turkmenistan',
  TUV: 'Tuvalu',
  UGA: 'Uganda',
  UKR: 'Ukraine',
  ARE: 'United Arab Emirates',
  GBR: 'United Kingdom',
  USA: 'United States',
  URY: 'Uruguay',
  UZB: 'Uzbekistan',
  VUT: 'Vanuatu',
  VEN: 'Venezuela',
  VNM: 'Vietnam',
  YEM: 'Yemen',
  ZMB: 'Zambia',
  ZWE: 'Zimbabwe',
};

  const proxyUrl = 'http://localhost:3000/proxy'; // Proxy server URL die wordt gebruikt om data op te halen

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

    // Zoekt naar het nieuwste jaar in de data
    const latestYear = Math.max(...allData.value.map(item => item.TimeDim));
    console.log(`Nieuwste jaar: ${latestYear}`);

    // Filtert de data op basis van het nieuwste jaar en een specifieke Dim1 waarde ("SEX_BTSX")
    const filteredData = allData.value.filter(
      item => item.TimeDim === latestYear && item.Dim1 === 'SEX_BTSX'
    );

    // Controleert of er gefilterde data is
    if (filteredData.length === 0) {
      throw new Error(`Geen data gevonden voor jaar ${latestYear} en "SEX_BTSX".`); // Foutmelding als geen data gevonden wordt
    }

    console.log('Gefilterde data:', filteredData);

    // Verwerkt de gefilterde data retourneert de gewenste informatie
    return filteredData.map((item) => ({
      name: countryNames[item.SpatialDim] || item.SpatialDim, // Vervangtt de landcode door de naam
      value: item.NumericValue || 0, // waarde
      location: item.ParentLocation || 'Onbekend', // Locatie, standaard 'Onbekend' als deze ontbreekt
    }));

  } catch (error) {
    // 
    console.error('Fout bij het ophalen van data:', error.message);
    throw error; // Hergooi de fout om deze verderop in de keten op te vangen
  }
}

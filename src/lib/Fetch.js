export async function fetchData() {

  
  const countryNames = {
    AFG: 'Afghanistan',
    ALB: 'Albania',
    // ... alle andere landen
  };

  const proxyUrl = 'http://localhost:3000/proxy'; // Je proxy server URL

  try {
    console.log(`Fetching data from proxy: ${proxyUrl}`);
    
    const response = await fetch(proxyUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const allData = await response.json();
    console.log('Alle gegevens ontvangen:', allData);

    if (!allData.value || allData.value.length === 0) {
      throw new Error('Geen data gevonden.');
    }

    console.log('Alle gevonden data:', allData.value);

    const latestYear = Math.max(...allData.value.map(item => item.TimeDim));
    console.log(`Nieuwste jaar: ${latestYear}`);

    const filteredData = allData.value.filter(
      item => item.TimeDim === latestYear && item.Dim1 === 'SEX_BTSX'
    );

    if (filteredData.length === 0) {
      throw new Error(`Geen data gevonden voor jaar ${latestYear} en "SEX_BTSX".`);
    }

    console.log('Gefilterde data:', filteredData);

    return filteredData.map((item) => ({
      name: countryNames[item.SpatialDim] || item.SpatialDim, // Vervangt landcode door naam 
      value: item.NumericValue || 0, // Numerieke waarde
      location: item.ParentLocation || 'Onbekend', // Locatie
    }));

  } catch (error) {
    console.error('Fout bij het ophalen van data:', error.message);
    throw error;
  }
}

export async function fetchData() {
  const baseUrl = 'https://ghoapi.azureedge.net/api/WHOSIS_000001';

  try {
    // Stap 1: Alle data ophalen
    const response = await fetch(baseUrl);

    // Controleer of de API een succesvolle response retourneert
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const allData = await response.json();

    if (!allData.value || allData.value.length === 0) {
      throw new Error('Geen data gevonden.');
    }

    // Stap 2: Bepaal het nieuwste jaar met data
    const latestYear = Math.max(...allData.value.map(item => item.TimeDim));

    // Stap 3: Filter data voor het nieuwste jaar en "SEX_BTSX"
    const filteredData = allData.value.filter(
      item => item.TimeDim === latestYear && item.Dim1 === 'SEX_BTSX'
    );

    if (filteredData.length === 0) {
      throw new Error(`Geen data gevonden voor jaar ${latestYear} en "SEX_BTSX".`);
    }

    // Stap 4: Map de data naar een bruikbaar formaat
    return filteredData.map((item) => ({
      name: item.SpatialDim || 'Onbekend', // Landcode of naam
      value: item.NumericValue || 0, // Numerieke waarde
      location: item.ParentLocation || 'Onbekend', // Locatie
    }));
  } catch (error) {
    // Log fouten naar de console en gooi deze opnieuw om ze in de hoofdcomponent te behandelen
    console.error('Fout bij het ophalen van data:', error.message);
    throw error;
  }
}

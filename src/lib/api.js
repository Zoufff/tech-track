export async function fetchData() {
    const url = 'https://ghoapi.azureedge.net/api/WHOSIS_000001?$filter=TimeDim%20eq%202021';
  
    try {
      console.log(`Fetching data from: ${url}`);
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      console.log(data);
  
      if (!data.value || data.value.length === 0) {
        throw new Error('Geen data gevonden.');
      }
  
      console.log('Gevonden data:', data.value);
  
      return data.value.map((item) => ({
        name: item.SpatialDim || 'Onbekend', // Landcode of naam
        value: item.NumericValue || 0, // Numerieke waarde
      }));
    } catch (error) {
      console.error('Fout bij het ophalen van data:', error.message);
      throw error;
    }
  }
  
  //vraag aan de docenten dat je niet weet wat je moet doen. en geef aan dat je het eerder probeert te linken met hoofdcomponent maar je kreeg errors.

  
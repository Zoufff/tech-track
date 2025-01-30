<script>

  import { onMount } from 'svelte';
  import { fetchData } from '../lib/Fetch.js'; // fetch-functie importeren
  import * as d3 from 'd3';

  let data = []; // Alle data van de API wordt opgehaald
  let filteredData = []; // gefilterde data die wordt weergegeven in de grafiek
  let errorMessage = ''; // Voor foutmeldingen
  let chartContainer; //  de SVG-container voor de grafiek


  // Functie om de grafiek te updaten
  function updateChart(data) {
    const barHeight = 27; // Hoogte van elke balk
    const barSpacing = 40; // Ruimte tussen de balken
    const svgWidth = 1550; // Breedte van de SVG
    const svgHeight = data.length * barSpacing + 50; // Dynamische hoogte op basis van het aantal data
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)]) // Bepaal de schaal op basis van de grootste waarde
      .range([0, svgWidth - 400]); // Breedtetoewijzing








    // Stelt de afmetingen van de SVG-container in
    d3.select(chartContainer)
      .select('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight);

    // Voegtt rechthoekige balken toe
    // code van lesopdracht en https://observablehq.com/@d3/lets-make-a-bar-chart/2
    d3.select(chartContainer)
      .select('.bars')
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('height', barHeight)
      .attr('fill', 'black')
      .attr('width', d => xScale(d.value)) // Breedte van de balk gebaseerd op de waarde
      .attr('y', (d, i) => i * barSpacing) // Positie van de balk
      .attr('x', 250); // Startpositie

    // Voegt labels toe voor landennamen
    d3.select(chartContainer)
      .select('.labels')
      .selectAll('text.name-label')
      .data(data)
      .join('text')
      .attr('class', 'name-label')
      .attr('x', 0)
      .attr('y', (d, i) => i * barSpacing + barHeight / 2)
      .attr('dy', '0.35em')
      .attr('fill', 'black')
      .attr('text-anchor', 'start')
      .text(d => d.name);

    // Voegt waardelabels toe aan de balken
    d3.select(chartContainer)
      .select('.labels')
      .selectAll('.value-label')
      .data(data)
      .join('text')
      .attr('class', 'value-label')
      .attr('fill', 'white')
      .attr('x', d => xScale(d.value) + 230) // Plaats het waarde-label aan het einde van de balk
      .attr('y', (d, i) => i * barSpacing + barHeight / 2)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'end')
      .text(d => d.value);
  }








  // Functie om te filteren op locatie
  function filterByLocation(location) {
    if (location === 'all') {
      filteredData = [...data]; // Laat alle data zien
    } else {
      filteredData = data.filter(d => d.location === location); // Filter op ParentLocation
    }
    updateChart(filteredData); // Update de grafiek
  }


  // Functie om de data te sorteren
  function sortChart(order) {
    if (order === 'asc') {
      filteredData.sort((a, b) => d3.ascending(a.value, b.value));
    } else if (order === 'desc') {
      filteredData.sort((a, b) => d3.descending(a.value, b.value));
    }
    updateChart(filteredData);
  }

  // Functie om te zoeken in de data
  function searchCountries(query) {
    filteredData = data.filter(d => d.name.toLowerCase().includes(query.toLowerCase()));
    updateChart(filteredData);
  }








  // Haalt data op bij het laden van de pagina
  onMount(async () => {
    try {
      // Gebruik de aangepaste fetchData-functie om het nieuwste jaar en gefilterde data op te halen
      data = await fetchData();
      filteredData = [...data]; // Kopieer de data naar filteredData
      updateChart(filteredData); // Update de grafiek met de opgehaalde data
    } catch (error) {
      errorMessage = error.message; // Toon foutmelding in de UI
    }
  });
</script>








<style> 
  .chart-container{
    position: relative;
    width: auto;
    max-width: 100%;
    overflow-x: auto;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.2em;
    margin: 2em;
  }

  h1{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2.5em;
  }

  .name-label {
    font-size: 14px;
    font-weight: bold;
  }


  .filter-controls, h1 {
  display: flex; 
  justify-content: center; 
  gap: 10px; 
  margin-bottom: 1em; 
  position: sticky;
  top: 0; 
  background-color: white; 
  z-index: 1000; 
  padding: 10px;
}

input, select, button {
  margin: 0; 
  padding: 10px;
  font-size: 14px; 
  border: 2px solid black; 
  background-color: white;
}

  input, select, button {
    margin: 5px;
    padding: 10px;
    font-size: 14px;
    border: 2px solid black;
  }

  input{
    width: 550px;
  }
</style>



<div>
  <h1>Wereldwijde verschillen in levensverwachting</h1>
</div>


  <!-- Filtercontrols -->
  <div class="filter-controls">
    <!-- Zoekbalk -->
    <input
      type="text"
      placeholder="Zoek een land..."
      on:input={(e) => searchCountries(e.target.value)}
    />

    <!-- Filter op locatie -->
    <select on:change={(e) => filterByLocation(e.target.value)}>
      <option value="all">Filteren op locatie</option>
      {#each [...new Set(data.map(d => d.location))] as location}
        <option value={location}>{location}</option>
      {/each}
    </select>

    <!-- Sorteer knoppen -->
    <button on:click={() => sortChart('asc')}>Sorteer Oplopend</button>
    <button on:click={() => sortChart('desc')}>Sorteer Aflopend</button>
  </div>








  <!-- Grafiek -->
  {#if errorMessage}
    <p>Fout bij het laden: {errorMessage}</p>
  {:else}
    <div class="chart-container" bind:this={chartContainer}>
      <svg>
        <g class="bars"></g>
        <g class="labels"></g>
      </svg>
    </div>
  {/if}


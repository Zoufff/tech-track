<script>
    import { onMount } from 'svelte';
    import { fetchData } from '../lib/api.js'; // Importeer de fetch-functie
    import * as d3 from 'd3';
  
    let data = []; // Data van de API
    let filteredData = []; // Gefilterde data voor grafiek
    let errorMessage = ''; // Voor foutmeldingen
    let chartContainer; // Referentie naar de SVG-container
    
    // Functie om de grafiek te updaten
    function updateChart(data) {
      const barHeight = 27; // Hoogte van elke balk
      const barSpacing = 40; // Ruimte tussen de balken
      const svgWidth = 1650; // Breedte van de SVG
      const svgHeight = data.length * barSpacing + 50; // Dynamische hoogte op basis van aantal data
  
      const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([0, svgWidth - 400]);
  
      d3.select(chartContainer)
        .select('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight);
  
// code van lesopdracht en https://observablehq.com/@d3/lets-make-a-bar-chart/2
      d3.select(chartContainer)
        .select('.bars')
        .selectAll('rect')
        .data(data)
        .join('rect')
        .attr('height', barHeight)
        .attr('fill', 'black')
        .attr('width', d => xScale(d.value))
        .attr('y', (d, i) => i * barSpacing)
        .attr('x', 250);
  
// Voegt labels met landennamen toe
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
        .attr('x', d => xScale(d.value) + 230)
        .attr('y', (d, i) => i * barSpacing + barHeight / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'end')
        .text(d => d.value);
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
  
    // Haalt data op bij het laden van de pagina. data gehaald van https://www.solidjs.com/tutorial/lifecycles_onmount
    onMount(async () => {
      try {
        data = await fetchData(); // Haalt data op via de API
        filteredData = [...data]; // Kopieert data naar filteredData
        updateChart(filteredData); // Update de grafiek
      } catch (error) {
        errorMessage = error.message; // Toont foutmelding
      }
    });
  </script>
  
  <style>
    .chart-container {
      position: relative;
      width: auto;
      max-width: 100%;
      overflow-x: auto;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-size: 1.2em;
      margin: 2em;
    }
  
    .name-label {
      font-size: 14px;
      font-weight: bold;
    }
  
    button {
      margin: 5px;
      padding: 10px;
      font-size: 14px;
      cursor: pointer;
      
    }
  
    input {
      margin: 5px;
      padding: 10px;
      font-size: 14px;
      border: 8px solid black;
      width: 300px;
    }
  </style>
  
  <div>
    <!-- Zoekbalk -->
    <input
      type="text"
      placeholder="Zoek een land..."
      on:input={(e) => searchCountries(e.target.value)}
    />
  
    <!-- Sorteer knoppen -->
    <button on:click={() => sortChart('asc')}>Sorteer Oplopend</button>
    <button on:click={() => sortChart('desc')}>Sorteer Aflopend</button>
  
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
  </div>
  
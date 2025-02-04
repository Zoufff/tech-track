<script>
  import { onMount } from "svelte";
  import { fetchData } from "../lib/Fetch.js"; // fetch-functie importeren
  import * as d3 from "d3";
  import ChartTitle from "./Title.svelte";
  import Search from "./Search.svelte";
  import Sort from "./Sort.svelte";
  import Filter from "./Filter.svelte";

  let data = []; // Alle data van de API wordt opgehaald
  let filteredData = []; // gefilterde data die wordt weergegeven in de grafiek
  let errorMessage = ""; // Voor foutmeldingen
  let chartContainer; //  de SVG-container voor de grafiek

  // Functie om de grafiek te updaten
  function updateChart(data) {
    const barHeight = 27; // Hoogte van elke balk
    const barSpacing = 40; // Ruimte tussen de balken
    const svgWidth = 1550; // breedte van de SVG
    const svgHeight = data.length * barSpacing + 50; // Dynamische hoogte op basis van het aantal data
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)]) // Bepaal de schaal op basis van de grootste waarde
      .range([0, svgWidth - 400]); // Breedtetoewijzing

    // Deze code is voor de kleuren op basis van de 'value'
    const colorScale = d3
      .scaleLinear()
      .domain([d3.min(data, (d) => d.value), d3.max(data, (d) => d.value)]) // Min-max waarden
      .range(["red", "green"]) // Kleurenbereik
      .interpolate(d3.interpolateRgb); // Zorgt voor een vloeiende overgang

    // Stelt de afmetingen van de SVG-container in
    d3.select(chartContainer)
      .select("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    // Voegtt rechthoekige balken toe
    // code van lesopdracht en https://observablehq.com/@d3/lets-make-a-bar-chart/2
    d3.select(chartContainer)
      .select(".bars")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("height", barHeight)
      .attr("fill", (d) => colorScale(d.value)) // kleur op basis van waarde
      .attr("width", (d) => xScale(d.value)) // Breedte van de balk gebaseerd op de waarde
      .attr("y", (d, i) => i * barSpacing) // Positie van de balk
      .attr("x", 250); // Startpositie

    // Voegt labels toe voor landennamen
    d3.select(chartContainer)
      .select(".labels")
      .selectAll("text.name-label")
      .data(data)
      .join("text")
      .attr("class", "name-label")
      .attr("x", 0)
      .attr("y", (d, i) => i * barSpacing + barHeight / 2)
      .attr("dy", "0.35em")
      .attr("fill", "black")
      .attr("text-anchor", "start")
      .text((d) => d.name);

    // Voegt waardelabels toe aan de balken
    d3.select(chartContainer)
      .select(".labels")
      .selectAll(".value-label")
      .data(data)
      .join("text")
      .attr("class", "value-label")
      .attr("fill", "white")
      .attr("x", (d) => xScale(d.value) + 230) // Plaats het waarde-label aan het einde van de balk
      .attr("y", (d, i) => i * barSpacing + barHeight / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .text((d) => d.value);
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

<!-- De titel (HERKANSING) component van gemaakt -->
<ChartTitle />

<!-- Filtercontrols (HERKANSING) component van gemaakt -->
<div class="filter-controls">
<!-- Zoekbalk -->
<Search {data} {updateChart} />

<!-- Filter op locatie,(HERKANSING) component van gemaakt -->
<Filter {data} {updateChart} />

<!-- Sorteer knop (HERKANSING)ik heb de sorteerbuttons samengevoegd naar 1 button, component van gemaakt -->
<Sort {filteredData} {updateChart} />
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


<style>
  .chart-container {
    position: relative;
    width: auto;
    max-width: 100%;
    overflow-x: auto;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 1.2em;
    margin: 2em;
  }

  div {
    align-items: center;
  }

  .name-label {
    font-size: 14px;
    font-weight: bold;
  }

  .filter-controls {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 1em;
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 10px;
  }

</style>

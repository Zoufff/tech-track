<script>
    import { onMount } from "svelte";
  
    export let data = []; // De volledige dataset
    export let updateChart; // Functie om de grafiek bij te werken
    let filteredData = [...data]; // Kopie van de data voor filtering
  
    // Zoekfunctie
    function searchCountries(query) {
      filteredData = data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
      updateChart(filteredData); // Grafiek updaten
    }
  
    // Data ophalen als het component wordt geladen
    onMount(() => {
      filteredData = [...data];
    });
  </script>
  
  <input
    type="text"
    placeholder="Zoek een land..."
    on:input={(e) => searchCountries(e.target.value)}
  />

  <style>
    input {
      margin: 5px;
      padding: 10px;
      font-size: 14px;
      border: 2px solid black;
      background-color: rgb(255, 255, 255);
      width: 30vw
    }
  </style>
  
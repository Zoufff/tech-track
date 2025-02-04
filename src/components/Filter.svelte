<script>
    export let data; // Data die vanuit de hoofdcomponent wordt doorgegeven
    export let updateChart; // Functie om de grafiek bij te werken die vanuit de hoofdcomponent wordt doorgegeven
  
    // Functie om te filteren op locatie
    function filterByLocation(location) {
      let filteredData;
      if (location === "all") {
        filteredData = [...data]; // Laat alle data zien
      } else {
        filteredData = data.filter((d) => d.location === location); // Filter op locatie
      }
      updateChart(filteredData); // Update de grafiek
    }
  </script>
  
  <!-- Filter op locatie -->
  <select on:change={(e) => filterByLocation(e.target.value)}>
    <option value="all">Filteren op wereldeel</option>
    {#each [...new Set(data.map((d) => d.location))] as location}
      <option value={location}>{location}</option>
    {/each}
  </select>
  
  <style>
    select {
      margin: 5px;
      padding: 10px;
      font-size: 14px;
      border: 2px solid black;
      background-color: rgb(255, 255, 255);
    }
  </style>
  
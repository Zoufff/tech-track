<script>
    export let filteredData = [];
    export let updateChart;
  
    // nieuwe funtion, (HERKANSING)ik heb de sorteerbuttons samengevoegd naar 1 button
    let sortOrder = "asc"; // dit houdt de sorteervolgorde bij
  
    // nieuwe funtion, (HERKANSING)ik heb de sorteerbuttons samengevoegd naar 1 button
    // de funtion die later gebruikt wordt in de sorteer button
    function toggleSort() {
      sortOrder = sortOrder === "asc" ? "desc" : "asc";
  
      if (sortOrder === "asc") {
        filteredData.sort((a, b) => a.value - b.value);
      } else {
        filteredData.sort((a, b) => b.value - a.value);
      }
  
      updateChart(filteredData); // Update de grafiek met de gesorteerde data
    }
  </script>
  
  <button on:click={toggleSort}>
    Sorteer {sortOrder === "asc" ? "Oplopend" : "Aflopend"}
  </button>
  
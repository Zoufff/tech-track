<script>
    export let sortOrder = "asc";
    export let onSort;

// nieuwe funtion, (HERKANSING)ik heb de sorteerbuttons samengevoegd naar 1 button
  // nieuwe funtion, (HERKANSING)ik heb de sorteerbuttons samengevoegd naar 1 button
  // de funtion die later gebruikt wordt in de sorteer button
  function toggleSort() {
        const newOrder = sortOrder === "asc" ? "desc" : "asc";
        onSort(newOrder); // Stuur de nieuwe sorteervolgorde door naar de hoofdcomponent
    }
</script>

<button on:click={onSort}>
    Sorteer {sortOrder === "asc" ? "Oplopend" : "Aflopend"}
</button>

<style>
    button {
        margin: 5px;
        padding: 10px;
        font-size: 14px;
        border: 2px solid black;
        background-color: rgb(255, 255, 255);
    }

    button:hover {
        background-color: darkblue;
    }
</style>

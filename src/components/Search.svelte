<script>
    export let data = []; // Data wordt als prop binnengehaald
    export let onSearch; // Callback-functie om gefilterde data terug te sturen

    let query = "";

    function searchCountries() {
        const filteredData = data.filter((d) =>
            d.name.toLowerCase().includes(query.toLowerCase())
        );
        onSearch(filteredData); // Stuur de gefilterde data naar de hoofdcomponent
    }
</script>

<input
    type="text"
    placeholder="Zoek een land..."
    bind:value={query}
    on:input={searchCountries}
/>

<style>
    input {
        margin: 5px;
        padding: 10px;
        font-size: 14px;
        border: 2px solid black;
        background-color: rgb(255, 255, 255);
        width: 30vw;
    }
</style>

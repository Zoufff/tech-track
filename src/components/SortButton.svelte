<script>
    export let sortOrder = "asc";
    export let onSort;

    
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

<script>
    export let locations = [];
    export let onFilter;
  </script>
  
  <select on:change={(e) => onFilter(e.target.value)}>
    <option value="all">Filteren op wereldeel</option>
    {#each locations as location}
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
  
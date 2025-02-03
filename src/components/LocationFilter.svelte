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
      padding: 8px;
      border: 1px solid rgb(0, 0, 0);
      border-radius: 5px;
      font-size: 16px;
    }
  </style>
  
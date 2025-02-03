<script>
    export let onSearch;
  </script>
  
  <input
    type="text"
    placeholder="Zoek een land..."
    on:input={(e) => onSearch(e.target.value)}
  />
  
  <style>
    input {
      padding: 8px;
      border: 1px solid rgb(0, 0, 0);
      border-radius: 5px;
      font-size: 16px;
    }
  </style>
  
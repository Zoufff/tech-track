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
        margin: 5px;
        padding: 10px;
        font-size: 14px;
        border: 2px solid black;
        background-color: rgb(255, 255, 255);
        width: 30vw;
    }
  </style>
  
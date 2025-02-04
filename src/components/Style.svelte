<style>
    .chart-container {
      position: relative;
      width: auto;
      max-width: 100%;
      overflow-x: auto;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
      font-size: 1.2em;
      margin: 2em;
    }
  
   div{
    align-items: center;
   }
  
    .name-label {
      font-size: 14px;
      font-weight: bold;
    }
  
    .filter-controls {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 1em;
      position: sticky;
      top: 0;
      z-index: 1000;
      padding: 10px;
    }
  
    input,
    select,
    button {
      margin: 0;
      padding: 10px;
      font-size: 14px;
      border: 2px solid black;
      background-color: rgba(255, 255, 255, 0);
    }
  
    input,
    select,
    button {
      margin: 5px;
      padding: 10px;
      font-size: 14px;
      border: 2px solid black;
      background-color: rgb(255, 255, 255);
    }
  
    input {
      width: 550px;
    }
  </style>
  
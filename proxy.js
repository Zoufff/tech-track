import express from 'express';
import axios from 'axios';
import cors from 'cors'; // Importeert CORS-middleware

const app = express();
const port = 3000;

// CORS-middleware toevoegen
app.use(cors());

app.get('/proxy', async (req, res) => {
  try {
    // De externe API URL
    const apiUrl = 'https://ghoapi.azureedge.net/api/WHOSIS_000001';
    
    // Haalt de gegevens op van de externe API
    const response = await axios.get(apiUrl);

    // Stuurt de data terug naar de front-end
    res.json(response.data);
  } catch (error) {
    console.error('Fout bij het ophalen van data:', error);
    res.status(500).send('Er is een fout opgetreden bij het ophalen van de data.');
  }
});

app.listen(port, () => {
  console.log(`Proxy server draait op http://localhost:${port}`);
});

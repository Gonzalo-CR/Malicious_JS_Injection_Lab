import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

// Servir archivos estáticos (index.html y scrollToSection.js)
app.use(express.static('.'));

// Ruta proxy
app.get('/send', async (req, res) => {
  const { data } = req.query;
  const webhook = process.env.WEBHOOK_URL;

  try {
    const response = await fetch(`${webhook}?data=${encodeURIComponent(data)}`);
    res.send('Payload enviado al Webhook.');
  } catch (error) {
    res.status(500).send('Error enviando al Webhook.');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
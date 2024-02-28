const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1211192759986429993/a6x-YLbJhRYDpQIbHY_tu_alh23LtLI16MBv0dWMj_Dfxb7zNlKNIe4Lsc5MfbMydQef';

app.get('/', (req, res) => {
  // Get the IP address of the visitor
  const ipAddress = req.ip || req.connection.remoteAddress;

  // Log the visit including the IP address
  console.log(`Someone visited the site. IP Address: ${ipAddress}`);

  // Send the data to Discord webhook
  axios.post(DISCORD_WEBHOOK_URL, {
    content: `Someone visited the site. IP Address: ${ipAddress}`
  })
  .then(response => {
    console.log('Successfully sent data to Discord webhook.');
  })
  .catch(error => {
    console.error('Error sending data to Discord webhook:', error.message);
  });

  // Respond to the visitor
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

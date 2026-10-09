const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.post('/voice', (req, res) => {
    console.log('Twilio is asking for instructions');
    res.type('text/xml');
    res.send(`
    <Response>
      <Say>Hello! This is my own voice agent server. It is working.</Say>
    </Response>
  `);
});

app.get('/', (req, res) => res.send('Server is running'));

app.listen(3000, () => console.log('Server running on port 3000'));
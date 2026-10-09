require('dotenv').config();
const twilio = require('twilio');

const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

client.calls
    .create({

        url: `${process.env.PUBLIC_URL}/voice`,
        to: process.env.MY_PHONE_NUMBER,
        from: process.env.TWILIO_PHONE_NUMBER,
    })
    .then((call) => console.log('Call started:', call.sid))
    .catch((err) => console.error('Error:', err.message));
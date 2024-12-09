const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();


// Server
const express = require('express');
const app = express();
app.use(express.json());
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// E-Mail Transport Setup
let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // email address from .env
        pass: process.env.EMAIL_PASS // email password from .env
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

// Default Route
app.get('/', (req, res) => {
    res.send("<h1>Nothing to see here.</h1>");
});

// Reservations Route
app.post('/api/reservations', (req, res) => {
    const { firstName, lastName, date, time, tableNumber, guests, phone, email } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER, // email address from .env
        to: process.env.EMAIL_RECIPIENT, // email adress that receives the mail from .env
        subject: 'Neue Reservierung',
        text: `
            Neue Reservierung von ${firstName} ${lastName}:

            Datum: ${date}
            Uhrzeit: ${time}
            Anzahl der Personen: ${guests}

            Kontakt Telefon: ${phone}
            Kontakt E-Mail: ${email}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Fehler beim Senden der E-Mail.');
        } else {
            console.log('E-Mail gesendet: ' + info.response);
            res.status(200).send('Reservierung erfolgreich gesendet.');
        }
    });
});


// Start Server
app.listen(port, () => {
    console.log(`Server runs on http://localhost:${port}`);
});

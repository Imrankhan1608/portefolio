const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended:false}));

app.use(bodyParser.json());



app.post('/send', (req,res) => {
    const { name ,number ,email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'zainirran932@gmail.com',
            pass: 'fatanabi',
        },
    });

    const mailOptions = {
        from: email,
        to: 'destinataire@gmail.com',
        subject:'Message de ${name}',
        text: message,
    };
    transporter.sendMail(mailOptions,(error, info) => {
        if (error) {
            console.log(error);
            res.send('Erreur ,ressayez');
        } else {
            console.log('Email envoyé : ' + info.response);
            res.send('Email bien envoyé !');
        }
    });
});


app.get('/', (req,res) => {
    res.send('serveur actif');
});



app.listen(3000, () => {
    console.log('serveur actif sur http://localhost:3000');
});
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Pour afficher un formulaire simple (facultatif)
app.get('/', (req, res) => {
  res.send(`seveur actif`);
});

// Envoi d'email avec Nodemailer
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'zainirran932@gmail.com',
      pass: 'fatanabi',
    },
  });

  const mailOptions = {
    from: email,
    to: 'zainirran932@gmail.com',
    subject: `Message de ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Erreur lors de l\'envoi');
    } else {
      console.log('Email envoyé : ' + info.response);
      res.send('Email bien envoyé !');
    }
  });
});

// Lancement du serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});



const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express on Render!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log('Received contact request:', req.body);

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mahakaltejas686@gmail.com',
        pass: 'esrr qzye mcsf aznt',
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'tmahakal46@gmail.com',  
      subject: `Contact Form - ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ success: false, message: 'Error sending message', error: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const usersRouter = require('./routes/example');
const contactUs = require("./routes/contactus");
const manualEntry = require("./routes/manualEntry")
const adminUser = require("./routes/admin")
const programs = require("./routes/program")
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const cors = require('cors');

app.use(express.json());
app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));
// Add custom middleware
app.use((req, res, next) => {
    // This is a sample middleware that logs the incoming request
    console.log(`Request received: ${req.method} ${req.url}`);
    next(); // Call next to continue processing the request
});

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
    service:'Gmail',
    port: 8000,
    auth: {
        user: 'kadiahardi1512@gmail.com',
        pass: 'qzsg tzxv ytsb bstj' ,
    },
});

// API Endpoint for Sending Messages
app.post('/contactus/send-message', async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Validate form data
    if (!name || !phone || !email || !message) {
        return res.status(400).json({ error: 'Incomplete form data' });
    }
    // Send email notification
    const mailOptions = {
        from: `${email}`,
        to: 'kadiahardi1512@gmail.com',
        subject:  `${name}:Ontario Energy Program Query`,
        text: `Name: ${name}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (mailErr, info) => {
        if (mailErr) {
            console.error('Error sending email: ' + mailErr.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        console.log('Message sent: %s', info.messageId);
        res.status(201).json({ message: 'Message sent successfully' });
    });
});
       

app.use('/api', usersRouter);
app.use('/contactus', contactUs) // Use a prefix for your routes if needed
app.use('/manualentry', manualEntry);
app.use('/admin', adminUser);
app.use('/programs', programs);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

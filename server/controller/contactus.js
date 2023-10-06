const connection = require('./connect.js');
const nodemailer = require('nodemailer'); // Import Nodemailer
const transporter = require('../index').transporter; // Replace '../index' with the correct path to your 'index.js' file


const sendContactMess = (req, res) => {
    console.log('Request Body:', req.body);

    const { name, email, message } = req.body;
    const sql = 'INSERT INTO contact_us (name, email, message) VALUES (?, ?, ?)';
    connection.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error('Error inserting data into the database: ' + err.message);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        // Send an email notification
        const mailOptions = {
            from: 'prajap38@uwindsor.ca', // Sender's email address
            to: 'kinjalprajapati890@gmail.com', // Your email address
            subject: 'Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        transporter.sendMail(mailOptions, (mailErr) => {
            if (mailErr) {
                console.error('Error sending email: ' + mailErr.message);
            }
        });

        res.status(201).json({ message: 'Message sent successfully' });
    });
};

module.exports = {
    sendContactMess
};

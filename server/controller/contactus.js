const connection = require('./connect.js');
const nodemailer = require('nodemailer');

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    port: 8000,
    auth: {
        user: 'kadiahardi1512@gmail.com',
        pass: 'qzsg tzxv ytsb bstj',
    },
});

const sendContactMess = async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Validate form data
    if (!name || !phone || !email || !message) {
        return res.status(400).json({ error: 'Incomplete form data' });
    }
    // Send email notification
    const mailOptions = {
        from: `${email}`,
        to: 'kadiahardi1512@gmail.com',
        subject: `${name}:Ontario Energy Program Query`,
        text: `Name: ${name}\nMessage: ${message}\n Phone no: ${phone}`,
    };

    // transporter.sendMail(mailOptions, (mailErr, info) => {
    //     if (mailErr) {
    //         console.error('Error sending email: ' + mailErr.message);
    //         return res.status(500).json({ error: 'Internal Server Error' });
    //     }

    //     console.log('Message sent: %s', info.messageId);
    //     res.status(201).json({ message: 'Message sent successfully' });
    // });


    // const sql = 'INSERT INTO contact_us (name, email, phone, message) VALUES (?, ?, ?, ?)';
    // connection.query(sql, [name, email, phone, message], async (err, result) => {
    //     if (err) {
    //         console.error('Error inserting data into the database: ' + err.message);
    //         res.status(500).json({ error: 'Internal Server Error' });
    //         return;
    //     } 
    //     res.status(201).json({ message: 'Data stored successfully' });

    // });

    transporter.sendMail(mailOptions, (mailErr, info) => {
        if (mailErr) {
            // console.error('Error sending email: ' + mailErr.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        console.log('Message sent: %s', info.messageId);

        // Insert data into the database
        const sql = 'INSERT INTO contact_us (name, email, phone, message) VALUES (?, ?, ?, ?)';
        connection.query(sql, [name, email, phone, message], async (err, result) => {
            if (err) {
                console.error('Error inserting data into the database: ' + err.message);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            res.status(201).json({ message: 'Message sent successfully and data stored successfully' });
        });
    });
};

module.exports = {
    sendContactMess
};

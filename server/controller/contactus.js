const connection = require('./connect.js');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'kinjalprajapati890@gmail.com',
        // pass: '4D633C8FD5720130655FC9BB63F11FDCE6B3'
        pass: 'ipfv ttjw rsay frrc'
    }
});

const sendContactMess = async (req, res) => {
    console.log('Request Body:', req.body);

    const { name, email, message } = req.body;
    var mainOptions = {
        from: `User Feedback <achavda444@gmail.com>`,
        to: 'kinjalprajapati890@gmail.com',
        subject: 'UserFeedback',
        html: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });
    const sql = 'INSERT INTO contact_us (name, email, message) VALUES (?, ?, ?)';
    connection.query(sql, [name, email, message], async (err, result) => {
        if (err) {
            console.error('Error inserting data into the database: ' + err.message);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }



        res.status(201).json({ message: 'Message sent successfully' });
    });
};

module.exports = {
    sendContactMess
};

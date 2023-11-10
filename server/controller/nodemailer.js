const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'achavda444@gmail.com',
        pass: 'anjgnakbsmchcnes'
    }
});

module.exports = {
    transporter: transporter
};
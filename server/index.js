const express = require('express');
const app = express();
const usersRouter = require('./routes/example');
const contactUs = require("./routes/contactus")
const nodemailer = require('nodemailer');

app.use(express.json());
// Add your routes and middleware here
// Create a Nodemailer transporter with your email service provider's settings
const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can change this to your email service provider
    auth: {
        user: 'kinjalprajapati890@gmail.com', // Your email address
        pass: 'Kinjalzoom.30' // Your email password
    }
});
app.use('/api', usersRouter);
app.use('/contactus', contactUs) // Use a prefix for your routes if needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

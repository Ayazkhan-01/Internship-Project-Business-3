const express = require('express');
const app = express();
const usersRouter = require('./routes/example');
const contactUs = require("./routes/contactus");
const manualEntry = require("./routes/manualEntry")
const adminUser = require("./routes/admin")
const programs = require("./routes/program")
const nodemailer = require('nodemailer');

const cors = require('cors');

app.use(express.json());

app.use(cors({
    origin: '*'
}));
// Add custom middleware
app.use((req, res, next) => {
    // This is a sample middleware that logs the incoming request
    console.log(`Request received: ${req.method} ${req.url}`);
    next(); // Call next to continue processing the request
});
const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can change this to your email service provider
    auth: {
        user: 'kinjalprajapati890@gmail.com', // Your email address
        pass: '' // Your email password
    }
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

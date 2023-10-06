const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'social',
});
module.exports = connection
// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//     } else {
//         console.log('Connected to MySQL database');
//     }
// });

// export default connection;

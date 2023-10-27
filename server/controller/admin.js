const connection = require("./connect.js")

const adminUser = (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM adminuser WHERE username = ? AND password = ?';
    connection.query(sql, [username, password], (err, results) => {
        if (err) {
            console.error('Database query error: ' + err);
            res.status(500).json({ message: 'Database error' });
        } else if (results.length > 0) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Login failed' });
        }
    });
};


module.exports = {
    adminUser
}
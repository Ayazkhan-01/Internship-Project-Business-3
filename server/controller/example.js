const connection = require("./connect.js")
// Get all users
const getAllUsers = (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
};

module.exports = {
    getAllUsers
}
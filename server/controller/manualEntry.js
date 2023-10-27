const express = require('express');
const router = express.Router();
const connection = require('./connect.js'); // Import your database connection module

// GET request to retrieve all data
const getManualEntry = (req, res) => {
    const sql = 'SELECT * FROM manualEntry';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error retrieving data from the database: ' + err.message);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
};

// POST request to add new data
const postManualEntry = (req, res) => {
    const { name, link, description, type } = req.body;
    const sql = 'INSERT INTO manualEntry (program_name, program_description, program_link, program_type) VALUES (?, ?, ?, ?)';
    connection.query(sql, [name, description, link, type], (err, result) => {
        if (err) {
            console.error('Error inserting data into the database: ' + err.message);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        const newData = { program_name: name, program_description: description, program_link: link, program_type: type };
        res.status(201).json(newData);
    });
};

// DELETE request to remove data
const DeleteManualEntry = (req, res) => {
    const { id } = req.body;
    const sql = 'DELETE FROM manualEntry WHERE program_id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting data: ' + err.message);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        res.status(201).json({
            "statusCode": "200",
            "status": "Success",
            "message": "Data deleted successfully."
        });
    });
};

module.exports = {
    getManualEntry,
    postManualEntry,
    DeleteManualEntry
};

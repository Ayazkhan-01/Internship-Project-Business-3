const express = require('express');
const router = express.Router();
const connection = require('./connect.js'); // Import your database connection module

// GET request to retrieve all data
const getManualEntry = (req, res) => {
    const sql = 'SELECT * FROM programs';
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
    const { name, link, description, type, annual_ele_budget, min_ele_consumption, anual_gas_budget, min_energy_consumption } = req.body;
    const sql = 'INSERT INTO programs (program_name, program_brief, program_link, program_type, annual_ele_budget, min_ele_consumption, anual_gas_budget, min_energy_consumption ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, [name, description, link, type, annual_ele_budget, min_ele_consumption, anual_gas_budget, min_energy_consumption], (err, result) => {
        if (err) {
            console.error('Error inserting data into the database: ' + err.message);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        const newData = { program_name: name, program_description: description, program_link: link, program_type: type };
        res.status(201).json(newData);
    });
};

const updateManualEntry = (req, res, next) => {
    const { id, name, link, description, type, annual_ele_budget, min_ele_consumption, anual_gas_budget, min_energy_consumption } = req.body;

    const sql = `UPDATE programs SET program_name = ?, program_brief = ?, program_link = ?, program_type = ?, annual_ele_budget = ?, min_ele_consumption = ?, anual_gas_budget = ?, min_energy_consumption = ? WHERE pid = ?`;
    connection.query(sql, [name, description, link, type, annual_ele_budget, min_ele_consumption, anual_gas_budget, min_energy_consumption, id], (err, result) => {
        if (err) {
            console.error('Error inserting data into the database: ' + err.message);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        const newData = { program_name: name, program_description: description, program_link: link, program_type: type };
        res.status(201).json(newData);
    });
}

// DELETE request to remove data
const DeleteManualEntry = (req, res) => {
    const { id } = req.body;
    const sql = 'DELETE FROM programs WHERE pid = ?';
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
    updateManualEntry,
    DeleteManualEntry
};

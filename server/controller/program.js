const connection = require("./connect.js")
// Get all users
const getAllPrograms = (req, res) => {
    connection.query('SELECT * FROM programs', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
};

const searchAllPrograms = (req, res) => {
    const partialProgramName = req.query.partialProgramName;

    // Use a SQL query to find programs that start with the partialProgramName
    const sql = "SELECT * FROM programs WHERE name LIKE ? LIMIT 5";
    const params = [`%${partialProgramName}%`];

    connection.query(sql, params, (err, results) => {
        if (err) {
            console.error('Error fetching suggestions:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
};

const filterPrograms = (req, res) => {

    const { sid, program_type, employee_count, ele_budget, min_ele_consumption } = req.body;

    connection.query(`SELECT allsectors.sec_name, programs.* 
    FROM allsectors 
    JOIN psectors ON allsectors.sid = psectors.sid
    JOIN programs ON psectors.pid = programs.pid
    WHERE 1=1 
    ${sid ? `AND allsectors.sid = ${sid}` : ''}
    ${program_type ? `AND program_type = '${program_type}'` : ''}
    ${employee_count ? `AND employee_count BETWEEN ${employee_count.from} AND ${employee_count.to}` : ''}
    ${ele_budget ? `AND annual_ele_budget BETWEEN ${ele_budget.from} AND ${ele_budget.to}` : ''}
    ${min_ele_consumption ? `AND min_ele_consumption BETWEEN ${min_ele_consumption.from} AND ${min_ele_consumption.to}` : ''}
    `
        , (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json({
                    "statusCode": "200",
                    "status": "success",
                    "body": results
                });
            }
        });
};



module.exports = {
    getAllPrograms,
    filterPrograms,
    searchAllPrograms
}
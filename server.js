const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();

// Setup PostgreSQL connection
const pool = new Pool({
    connectionString: 'postgres://cricketdb_user:IC7Lc98QccIL8LyxlNIFmNFo1EUhChI4@dpg-cjv2r55175es73clspv0-a/cricketdb',
    ssl: { rejectUnauthorized: false }
});

app.use(bodyParser.json());
app.use(express.static('public'));  // Serve static files from public directory

// Endpoint to fetch all cricketers
app.get('/cricketers', (req, res) => {
    pool.query('SELECT * FROM Cricketer ORDER BY id', (err, result) => {
        if (err) {
            console.error("Error fetching cricketers:", err);
            res.status(500).json({ "error": err.message });
            return;
        }
        res.json(result.rows);
    });
});

// Endpoint to increment heart count for a cricketer
app.post('/cricketers/:id/heart', (req, res) => {
    const id = req.params.id;
    pool.query(`UPDATE Cricketer SET hearts = hearts + 1 WHERE id = $1 RETURNING hearts`, [id], (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        if (result.rowCount > 0) {
            res.json({ success: true, hearts: result.rows[0].hearts });
        } else {
            res.json({ success: false });
        }
    });
});


app.get('/top-cricketers', (req, res) => {
    pool.query("SELECT * FROM Cricketer ORDER BY hearts DESC LIMIT 20", (err, result) => {
        if (err) {
            console.error("Error fetching top cricketers:", err);
            res.status(500).json({ "error": err.message });
            return;
        }
        res.json(result.rows); // assuming you're using the 'pg' library for PostgreSQL
    });
});



app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://cricketdb_user:IC7Lc98QccIL8LyxlNIFmNFo1EUhChI4@dpg-cjv2r55175es73clspv0-a/cricketdb',
    ssl: { rejectUnauthorized: false }
});

pool.query('UPDATE Cricketer SET hearts = 0', (err) => {
    if (err) {
        console.error("Error resetting hearts:", err);
        return;
    }
    console.log("All hearts reset to zero.");
    pool.end();  // Close the database connection
});

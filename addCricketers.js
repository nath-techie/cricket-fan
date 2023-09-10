const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://cricketdb_user:IC7Lc98QccIL8LyxlNIFmNFo1EUhChI4@dpg-cjv2r55175es73clspv0-a/cricketdb',
    ssl: { rejectUnauthorized: false }
});

// List of new cricketers to add
const newCricketers = [
    { name: "Radha Yadav", image_url: "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304500/304548.png" },
    { name: "Suryakumar Yadav", image_url: "https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/329300/329343.4.jpg" },
    // ... add more as needed
];

newCricketers.forEach(cricketer => {
    pool.query(
        "INSERT INTO Cricketer (name, image_url) VALUES ($1, $2)", 
        [cricketer.name, cricketer.image_url], 
        (err) => {
            if (err) {
                console.error("Error inserting cricketer:", err);
                return;
            }
            console.log(`Added ${cricketer.name}`);
        }
    );
});


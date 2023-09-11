const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://cricketdb_user:IC7Lc98QccIL8LyxlNIFmNFo1EUhChI4@dpg-cjv2r55175es73clspv0-a/cricketdb',
    ssl: { rejectUnauthorized: false }
});

// Check if the Cricketer table exist and create if not exist
// Check if Cricketer table exists
pool.query("SELECT count(*) FROM information_schema.tables WHERE table_name = 'Cricketer'", (err, result) => {
    if (err) {
        console.error("Error checking if table exists:", err);
        return;
    }

    // If table doesn't exist, create it
    if (parseInt(result.rows[0].count) === 0) {
        pool.query(`
            CREATE TABLE IF NOT EXISTS Cricketer (
                id SERIAL PRIMARY KEY,
                name TEXT,
                image_url TEXT,
                hearts INTEGER DEFAULT 0
            )
        `, (err) => {
            if (err) {
                console.error("Error creating table:", err);
                return;
            }
            console.log("Table Cricketer created successfully");

            // Insert data into Cricketer table
            pool.query(`
                INSERT INTO Cricketer (name, image_url) VALUES 
            ('Kapil Dev','https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/320300/320314.png'),
            ('Anjali Sarvani','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/353900/353965.4.jpg'),
            ('Bareddy Anusha','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Arshdeep Singh','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/356700/356795.1.png'),
            ('Ravichandran Ashwin','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/302300/302395.jpg'),
            ('Avesh Khan','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/200000/200065.1.jpg'),
            ('Srikar Bharat','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/314800/314851.png'),
            ('Yastika Bhatia','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/329300/329353.4.jpg'),
            ('Jasprit Bumrah', 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/319900/319940.png'),
            ('Yuzvendra Chahal','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/312100/312155.png'),
            ('Deepak Chahar','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/315000/315014.jpg'),
            ('MS Dhoni','https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/319900/319946.png'),
            ('Sachin Tendulkar','https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/316400/316486.png'),
            ('Anil Kumble','https://qph.cf2.quoracdn.net/main-qimg-af66251d8f922c0b5b400c0e80869b81-lq'),
            ('VVS Laxman','https://qph.cf2.quoracdn.net/main-qimg-8af868c32a829734bd109ca1c13e9eec-lq'),
            ('Harbhajan Singh','https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/319900/319937.png'),
            ('Irfan Pathan','https://qph.cf2.quoracdn.net/main-qimg-11fd8d43fccd8d4a4576dc80e9793afd-lq'),
            ('Yusuf Pathan','https://qph.cf2.quoracdn.net/main-qimg-eaf2a64e67a2b18f673faf07f0c9ae8c.webp'),
            ('Robin Uthappa','https://qph.cf2.quoracdn.net/main-qimg-4a93010783635e5c16ea286692ecfd23-lq'),
            ('Amit Mishra','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Murali Vijay','https://qph.cf2.quoracdn.net/main-qimg-a0bae1bef41a4d72674db70641cd8562-lq'),
            ('Pankaj Singh','https://qph.cf2.quoracdn.net/main-qimg-8caeaa0fb36ecd641d5b46a08fa48636-pjlq'),
            ('Sunil Gavaskar','https://qph.cf2.quoracdn.net/main-qimg-fbdf510f22b0d4b314e09575d8dfc23c-lq'),
            ('Rahul Dravid','https://m.cricbuzz.com/a/img/v1/192x192/i1/c156286/rahul-dravid.jpg'),
            ('Sourav Ganguly','https://qph.cf2.quoracdn.net/main-qimg-f78f46a499bc9ffbc83fe850c35adc62-lq'),
            ('Umesh Yadav','https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/316600/316667.png'),
            ('Harleen Deol','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/329300/329348.5.jpg'),
            ('Shikhar Dhawan','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/302300/302373.jpg'),
            ('Shivam Dube','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/356700/356768.1.png'),
            ('Ruturaj Gaikwad','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/356700/356779.1.png'),
            ('Rajeshwari Gayakwad','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304400/304473.png'),
            ('Richa Ghosh','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304500/304552.png'),
            ('Jhulan Goswami','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304500/304541.png'),
            ('Dayalan Hemalatha','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304300/304393.png'),
            ('Deepak Hooda','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/343200/343251.4.jpg'),
            ('Ishan Kishan','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/329300/329345.4.jpg'),
            ('Shreyas Iyer','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/309100/309198.1.jpg'),
            ('Ravindra Jadeja','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/302300/302394.jpg'),
            ('Yashasvi Jaiswal','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/356800/356803.1.png'),
            ('Rashi Kanojiya','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Dinesh Karthik','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304100/304195.png'),
            ('Amanjot Kaur','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Harmanpreet Kaur','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Virat Kohli','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/289000/289002.1.jpg'),
            ('Kuldeep Yadav','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304200/304208.png'),
            ('Bhuvneshwar Kumar','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304100/304194.png'),
            ('Smriti Mandhana','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304500/304569.png'),
            ('Minnu Mani','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Sabbhineni Meghana','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/335100/335141.4.jpg'),
            ('Meghna Singh','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Mohammed Shami','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304200/304210.png'),
            ('Mohammed Siraj','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/315600/315604.jpg'),
            ('Mukesh Kumar','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Kiran Navgire','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Shikha Pandey','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Hardik Pandya','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304200/304201.png'),
            ('Rishabh Pant','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304200/304221.png'),
            ('Axar Patel','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/329300/329344.4.jpg'),
            ('Harshal Patel','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/309100/309102.png'),
            ('Prasidh Krishna','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Cheteshwar Pujara','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/295200/295261.1.jpg'),
            ('Priya Punia','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/324700/324715.4.jpg'),
            ('Ajinkya Rahane','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/312100/312159.png'),
            ('KL Rahul','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304200/304207.png'),
            ('Sneh Rana','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Ravi Bishnoi','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/335000/335051.4.jpg'),
            ('Renuka Singh','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/329300/329351.5.jpg'),
            ('Jemimah Rodrigues','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/300600/300608.1.jpg'),
            ('Sanju Samson','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/318800/318843.jpg'),
            ('Kuldeep Sen','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Shafali Verma','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Shahbaz Ahmed','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/308600/308627.1.jpg'),
            ('Deepti Sharma','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304400/304461.png'),
            ('Rohit Sharma','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/302300/302374.jpg'),
            ('Rinku Singh','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/338100/338171.4.jpg'),
            ('Shardul Thakur','https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322600/322696.png'),
            ('Tilak Varma','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Rahul Tripathi','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/356800/356821.1.png'),
            ('Umran Malik','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Devika Vaidya','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Pooja Vastrakar','https://wassets.hscicdn.com/static/images/player-jersey.svg'),
            ('Washington Sundar','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/362600/362608.1.png')
            `, (err) => {
                if (err) {
                    console.error("Error inserting data:", err);
                    return;
                }
                console.log("Data inserted successfully!");
            });
        });
    } else {
        console.log("Table Cricketer already exists. No operation performed.");
    }
});

pool.end();



//     pool.query(`
//         CREATE TABLE IF NOT EXISTS Cricketer (
//             id SERIAL PRIMARY KEY,
//             name TEXT,
//             image_url TEXT,
//             hearts INTEGER DEFAULT 0
//         )
//     `, (err) => {
//         if (err) {
//             console.error("Error creating table:", err);
//             return;
//         }
//         console.log("Table Cricketer created successfully");

//         // Insert data into Cricketer table
// if (parseInt(result.rows[0].count) === 0)
// {
//         pool.query(`
//             INSERT INTO Cricketer (name, image_url) VALUES 
//             ('Kapil Dev','https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/320300/320314.png'),
//             ('Washington Sundar','https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/362600/362608.1.png')
//         `,(err) => {
//             if (err) {
//                 console.error("Error inserting data:", err);
//                 return;
//             }
//             console.log("Data inserted successfully!");

       
//         });
//     }

//     });


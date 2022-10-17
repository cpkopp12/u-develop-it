//IMPORTS: express, mysql2------------------------------------------
const express = require('express');
const mysql = require('mysql2');

//DESIGNATE PORT + APP----------------------------------------
const PORT = process.env.PORT || 3001;
const app = express();

//EXPRESS MIDDLEWARE--------------------------------------------
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//CONNECT DATABASE-----------------------------------------------------
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Cammatt12!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

//query: single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});

//query: delete candidate
/*
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});
*/
//query: create candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});


//ROUTES------------------------------------------------------------------




//DEFAULT not found
app.use((req, res) => {
    res.status(404).end();
});

//CONNECTION FUNCTION---------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
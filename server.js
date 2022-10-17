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
//test
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
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
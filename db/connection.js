const mysql = require('mysql2');

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


module.exports = db;
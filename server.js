//IMPORTS: express, mysql2(connection.js), inputCheck, router------------------------------------------
const express = require('express');
const db = require('./db/connection.js');
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');

//DESIGNATE PORT + APP----------------------------------------
const PORT = process.env.PORT || 3001;
const app = express();

//EXPRESS MIDDLEWARE--------------------------------------------
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);

//ROUTES------------------------------------------------------------------
//DEFAULT not found
app.use((req, res) => {
    res.status(404).end();
});

//CONNECTION FUNCTION---------------------------------------------------------
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
});
//IMPORTS: express------------------------------------------
const express = require('express');

//DESIGNATE PORT + APP----------------------------------------
const PORT = process.env.PORT || 3001;
const app = express();

//EXPRESS MIDDLEWARE--------------------------------------------
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROUTES------------------------------------------------------------------




//DEFAULT not found
app.use((req, res) => {
    res.status(404).end();
});

//CONNECTION FUNCTION---------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
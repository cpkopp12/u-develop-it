//DECLARATIONS: express, router -----------------------------------------
const express = require('express');
const router = express.Router();

//ROUTER SETUP -----------------------------------------------------------
router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));

//EXPORTS ------------------------------------------------------------------
module.exports = router;
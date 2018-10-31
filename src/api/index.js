const express = require('express');

// TODO: get firebase access

// const admin = require('firebase-admin');
// const serviceAccount = require('../../firebase-credentials.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
// });

const { healthRouter } = require('../routes/health/health.router');
const { companiesRouter } = require('../routes/companies/companies.router');
const { checklistRouter } = require('../routes/checklist/checklist.router');
const { keywordsRouter } = require('../routes/keywords/keywords.router');

const router = express.Router();
router.use('/health', healthRouter);
router.use('/companies', companiesRouter);
router.use('/checklist', checklistRouter);
router.use('/keywords', keywordsRouter);

module.exports = router;

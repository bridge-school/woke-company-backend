const express = require('express');

const { getCompaniesController, getCompanyController, addCompanyController, editCompanyController } = require('./companies.controller');

const router = express.Router();

router.get('', getCompaniesController);
router.get('/:id', getCompanyController);
router.post('/add/:id', addCompanyController);
router.post('/edit/:id', editCompanyController);

module.exports = {
	companiesRouter: router
};

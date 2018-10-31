const express = require('express');

const { companiesController, companyController } = require('./companies.controller');

const router = express.Router();

router.get('', companiesController);
router.get('/:id', companyController);

module.exports = {
	companiesRouter: router
};

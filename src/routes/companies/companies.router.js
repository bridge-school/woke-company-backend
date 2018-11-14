const express = require("express");


const { getCompaniesController, getCompanyController, addCompanyController } = require("./companies.controller");

const router = express.Router();

router.get("", getCompaniesController);
router.get('/:id', getCompanyController);
router.post('', addCompanyController);
// console.log(router);
module.exports = {
	companiesRouter: router
};

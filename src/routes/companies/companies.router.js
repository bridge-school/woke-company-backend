const express = require("express");

const { getCompaniesController, getCompanyController } = require("./companies.controller");

const router = express.Router();

router.get("", getCompaniesController);
router.get('/:id', getCompanyController);

module.exports = {
  companiesRouter: router
};

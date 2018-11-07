const express = require("express");

const { healthRouter } = require("../routes/health/health.router");
const { checklistRouter } = require("../routes/checklist/checklist.router");
const { companiesRouter } = require("../routes/companies/companies.router");

const router = express.Router();
router.use("/health", healthRouter);
router.use("/checklist", checklistRouter);
router.use("/companies", companiesRouter);

module.exports = router;

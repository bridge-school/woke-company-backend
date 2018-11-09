const express = require("express");

const { healthRouter } = require("../routes/health/health.router");
const { checklistRouter } = require("../routes/checklist/checklist.router");
const { keywordsRouter } = require("../routes/keywords/keywords.router");

const router = express.Router();
router.use("/health", healthRouter);
router.use("/checklist", checklistRouter);
router.use("/keywords", keywordsRouter);
module.exports = router;

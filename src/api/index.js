const express = require("express");

const { healthRouter } = require("../routes/health/health.router");
const { checklistRouter } = require("../routes/checklist/checklist.router");

const router = express.Router();
router.use("/health", healthRouter);
router.use("/checklist", checklistRouter);

module.exports = router;

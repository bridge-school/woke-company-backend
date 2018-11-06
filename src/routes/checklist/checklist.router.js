const express = require("express");

const { getChecklistController } = require("./checklist.controller");

const router = express.Router();

router.get("", getChecklistController);

module.exports = {
  checklistRouter: router
};

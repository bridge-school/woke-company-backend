const express = require("express");

const { getChecklistController } = require("./checklist.controller");

const router = express.Router();

console.log("getChecklistController: ", getChecklistController);

router.get("", getChecklistController);

module.exports = {
  checklistRouter: router
};

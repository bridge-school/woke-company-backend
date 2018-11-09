const express = require("express");

const { getKeywordsController } = require("./keywords.controller");

const router = express.Router();

router.get("", getKeywordsController);

module.exports = {
  keywordsRouter: router
};

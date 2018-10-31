const express = require('express');

const { keywordsController, keywordsCategoryController } = require('./keywords.controller');

const router = express.Router();

router.get('', keywordsController);
router.get('/:category', keywordsCategoryController);

module.exports = {
	keywordsRouter: router
};

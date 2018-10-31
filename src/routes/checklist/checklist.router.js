const express = require('express');

const { checklistController, checklistItemController } = require('./checklist.controller');

const router = express.Router();

router.get('', checklistController);
router.get('/:id', checklistItemController);

module.exports = {
	checklistRouter: router
};

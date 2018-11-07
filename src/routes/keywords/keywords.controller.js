const keywords = require('./fake-keywords-data.js');

const keywordsController = (req, res) => {
  return res.json(keywords);
};

const keywordsCategoryController = (req, res) => {
	return res.send(
		keywords[req.params.category] || 'keyword category not found'
	);
};

module.exports = {
	keywordsController,
	keywordsCategoryController
};
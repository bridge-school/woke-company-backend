const { read } = require("../../db");

const getKeywordsController = (req, res) => {
  read("keywords").then(data => res.json(data));
};

module.exports = {
  getKeywordsController
};

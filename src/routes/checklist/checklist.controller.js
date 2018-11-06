const { read } = require("../../db");

const getChecklistController = (req, res) => {
  read("checklist").then(data => res.json(data));
};

module.exports = {
  getChecklistController
};

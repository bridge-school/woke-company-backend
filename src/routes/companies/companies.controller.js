const { read, write, push } = require("../../db");

const getCompaniesController = (req, res) => {
  read("companies").then(data => res.json(data));
};

const getCompanyController = (req, res) => {
	read("companies")
		.then(data => data.find(item => item.id === req.params.id))
		.then(data => {
			res.json(data);
			})
 };

const addCompanyController = (req, res) => {
	push('companies', JSON.parse(req.body))
		.then(saveKey => res.json({
			success: true,
			id: saveKey
		}))
}

module.exports = {
  getCompaniesController,
	getCompanyController,
	addCompanyController
};

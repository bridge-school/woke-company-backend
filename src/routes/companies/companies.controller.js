const companies = require('./fake-company-data.js');

 const companiesController = (req, res) => {
  return res.json(companies);
};

 const companyController = (req, res) => {
	 return res.send(
		 companies.find(item => item.id === req.params.id) || 'company not found'
	 );
 };

module.exports = {
	companiesController,
	companyController
};
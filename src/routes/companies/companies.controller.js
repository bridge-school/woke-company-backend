const { read, write } = require('../../db');

const db = 'companies';

const getCompaniesController = (req, res) => {
	read(db).then(data => res.json(data));
};

const getCompanyController = (req, res) => {
	read(db)
		// find the company whose data matches the ID in the request URL
		// /companies/:id
		.then(data => data.find(item => item.id === req.params.id))
		.then(data => {
			res.json(data);
		});
};

const addCompanyController = (req, res) => {
	write('companies/' + req.params.id, JSON.parse(req.body));
	// TODO what is saveKey?
	// .then(console.log())
	// .then(saveKey => res.json({
	// 	success: true,
	// 	id: saveKey
	// }));
}

const editCompanyController = (req, res) => {
	// TODO not sure what to do here
	// want to write to/replace a specific company
	write(db, JSON.parse(req.body))
		.then(saveKey => res.json({
			success: true,
			id: saveKey
		}));
}

module.exports = {
	getCompaniesController,
	getCompanyController,
	addCompanyController,
	editCompanyController
};
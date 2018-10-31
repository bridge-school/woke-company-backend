const checklist = require('./fake-checklist-data.js');

const checklistController = (req, res) => {
  return res.json(checklist);
};

 const checklistItemController = (req, res) => {
	 return res.send(
		 checklist.find(item => item.id === req.params.id) || 'checklist item not found'
	 );
 };

module.exports = {
	checklistController,
	checklistItemController
};
// // TODO: populate firebase and delete this file

// const Chance = require('chance');
// const keywords = require('../keywords/fake-keywords-data');
// const checklist = require('../checklist/fake-checklist-data');
// const shortid = require('shortid');

// const chance = new Chance(555);
// // 555 is a 'seed', it stops the random data from regenerating

// module.exports = Array.from({ length: 20 }).map(() => ({
// 	// make a randomized ID, company name, and date
// 	id: shortid.generate(),
// 	name: chance.company(),
// 	date: chance.date(),
// 	checklist: checklist.map(item =>
// 		// get all checklist items with a random 0 or 1 score
// 		({
// 			'id': item.id,
// 			'score': chance.integer({ min: 0, max: 1 })
// 		})
// 	),
// 	keywords:{
// 		// get a random amount of keywords in each category
// 		technical: keywords.technical.slice(0, chance.integer({ min: 1, max: keywords.technical.length })),
// 		industry: keywords.industry.slice(0, chance.integer({ min: 1, max: keywords.industry.length }))
// 	}
// }));
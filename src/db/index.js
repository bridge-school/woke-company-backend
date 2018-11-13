const admin = require('firebase-admin');
const serviceAccount = require('../../firebase-credentials.json');

// initialize firebase store
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://woke-company.firebaseio.com/'
});

const db = admin.database();

// helpers
const read = path =>
	db
		.ref(path)
		.once('value')
		.then(snapshot => snapshot.val());

// use this for edit & post
const write = (path, data) =>
	db.ref(path).set(data);

const remove = (path) =>
	db.ref(path).remove();

module.exports = {
	db,
	read,
	write,
	remove
};

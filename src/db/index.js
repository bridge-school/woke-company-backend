const admin = require("firebase-admin");
const serviceAccount = require("../../firebase-credentials.json");

// initialize firebase store
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://woke-company.firebaseio.com/"
});

const db = admin.database();

// helpers
const read = nameOrPath =>
	db
		.ref(nameOrPath)
		.once("value")
		.then(snapshot => snapshot.val());


const write = (path, data) =>
	db.ref(path).set(data)

const push = (path, data) =>
	db.ref(path).push(data).then(ref => ref.key)

module.exports = {
	db,
	read,
	push,
	write
};

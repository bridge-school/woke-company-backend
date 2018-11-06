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

module.exports = {
  db,
  read
};

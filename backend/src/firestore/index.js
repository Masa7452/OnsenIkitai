const { getFirestore } = require('firebase-admin/firestore');

let admin = require("firebase-admin");

let serviceAccount = require("/Users/masakazu/Downloads/sentou-ikitai-c562b-firebase-adminsdk-tnyxi-05dd65ac30.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();
// Initialize Cloud Firestore and get a reference to the service
const getFirestoreDb = () => 
{
    return db;
}
module.exports = 
{
  getFirestoreDb : getFirestoreDb,
}




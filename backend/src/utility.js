const stringify = require("fast-json-stable-stringify");
const { getFirestoreDb } = require("./firestore");
const admin = require('firebase-admin');

const jsonToString = ( json ) =>
{
    return stringify( json );
};
const getOnsenCollection = async () =>
{
    const db     = getFirestoreDb();
    return db.collection( `Onsen` );
};
const getFirebaseTimeStamp = () =>
{
    return admin.firestore.FieldValue.serverTimestamp();
};
module.exports = 
{
    jsonToString            : jsonToString,
    getOnsenCollection : getOnsenCollection,
    getFirebaseTimeStamp    : getFirebaseTimeStamp,
}
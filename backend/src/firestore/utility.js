import { getFirestoreDb } from ".";

export const getRegionsCollection = async ( region ) =>
{
    const db     = getFirestoreDb();
    const docRef = doc( db, 'Onsen', "Region" );
    return collection( docRef, region );
};
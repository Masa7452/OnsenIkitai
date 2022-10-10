import { getFirestoreDb } from ".";
import { collection, getDocs, doc, addDoc } from "firebase/firestore";

export const getPrefectureCollection = async ( prefecture ) =>
{
    const db     = getFirestoreDb();
    const docRef = doc( db, 'Onsen', "Prefecture" );
    return collection( docRef, prefecture );
}

export const getOnsenList = async ( params ) =>
{
    // try {
        console.log(`getFirestoreData`);
        const prefectureCollection = await getPrefectureCollection( params.prefecture );
        const querySnapshot        = await getDocs( prefectureCollection );
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push( doc.data() );
        });
    // } catch (error) {
    //     console.log(error);
    // }
    
    return data;
};

export const addNewOnsen = async ( params ) =>
{
    try {
        const prefectureCollection = getPrefectureCollection( params.prefecture );
        const params_ = 
        {
            name       : params.name,
            address    : params.address,
        }

        // 以下、例
        // const params_ = 
        // {
        //     name       : "桃山の湯",
        //     address    : "愛知県名古屋市天白区",
        // }
        await addDoc(prefectureCollection, params_);   
    } catch (error) {
        console.log(error);
    }
}


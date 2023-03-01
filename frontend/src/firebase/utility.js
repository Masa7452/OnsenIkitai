import { getFirestoreDb } from ".";
import { collection, getDocs, doc, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

export const getFirebaseUser = async () =>
{
    return new Promise( ( resolve ) =>
    {
        onAuthStateChanged( auth, async ( user ) =>
        {
            resolve( user );
            return;
        })
    })
}

export const validateInputValue = async () =>
{

}

export const validateWhetherNumber = async ( param ) =>
{
}

export const convertToNumber = async ( string ) =>
{
    return Number( string );
}

export const getAreaCollection = async ( area ) =>
{
    const db     = getFirestoreDb();
    const docRef = doc( db, 'Onsen', "Area" );
    return collection( docRef, area );
}

export const getOnsenList = async ( params ) =>
{
    try {
        const areaCollection = await getAreaCollection( params.area );
        const querySnapshot        = await getDocs( areaCollection );
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push( doc.data() );
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const addNewOnsen = async ( params ) =>
{
    try {
        const areaCollection = await getAreaCollection( params.area );
        // const params_ = 
        // {
        //     name       : params.name,
        //     address    : params.address,
        // }

        // 以下、例
        // const params_ = 
        // {
        //     name       : "桃山の湯",
        //     address    : "愛知県名古屋市天白区",
        // }
        await addDoc( areaCollection, params );   
    } catch (error) {
        console.log(error);
    }
}


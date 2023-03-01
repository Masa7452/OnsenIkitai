const { decodeParams, createResponse, returnResponse } = require("./src/detabase-utility");
const { getFirebaseTimeStamp, getOnsenCollection } = require("./src/utility");
const moment = require( `moment` );

const books = [
    {
        title : "吾輩は猫である",
        author: "夏目漱石",
    },
    {
        title : "走れメロス",
        author: "太宰治", 
    }
];

const resolvers = {
    Query : {
        listOnsen : (parent, args, context, info) => callApi( args, context, false, listOnsen ),
    },
    Mutation : {
        addOnsen : (parent, args, context, info) => callApi( args, context, false, addOnsen ),
    }
}

const callApi = async ( args, context, idempotency, resolver ) =>
{
    try {
        const params   = decodeParams( args.params );
        const response = await createResponse( resolver.name, args );
        try
        {
            const apiBody = async () =>
            {
                await resolver( context, params.data, response );
            }
            await apiBody();
        } catch (error) {
            console.log(error);
        }
        return returnResponse( response, context );
    } catch (error) {
        console.log(error);
    }
    
}

const listOnsen = async ( headers, params, response ) =>
{
    let onsenRef = await getOnsenCollection();
    for( const region of params.regions )
    {
        onsenRef = onsenRef.where( `region`, `==`, region );
    }
    const docs = await onsenRef.get();
    docs.forEach(doc => {
        const data = doc.data();
        let created = data.created.toDate();
        data.created = moment( created ).format( `YYYY/MM/DD HH:mm'` );
        response.body.push( data );
    });
}

const addOnsen = async ( headers, params, response  ) =>
{
    try {
        const onsenCollection = await getOnsenCollection();
        const params_ =
        {
            ...params,
            created : getFirebaseTimeStamp(),
            updated : getFirebaseTimeStamp(),
        }
        // await onsenCollection.add( params_ );   
    } catch (error) {
        console.log(error);
    }
}

module.exports = resolvers;
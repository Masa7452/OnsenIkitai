import stringify from "fast-json-stable-stringify";

let apolloClient = null;

export const setApolloClient = ( client ) =>
{
    apolloClient = client;
}

export const requestQueryGraphql = async( query, params ) =>
{
    const variables = { params: stringify( params ) };
    return await apolloClient.query( { query, variables } );
}
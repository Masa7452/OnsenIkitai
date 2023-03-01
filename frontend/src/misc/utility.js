import stringify from "fast-json-stable-stringify";
import parse from "fast-json-parse";
import { STATUS_OK } from "../../../backend/const";

let apolloClient = null;

export const setApolloClient = ( client ) =>
{
    apolloClient = client;
}

export const jsonToString = ( json ) =>
{
    return stringify( json );
}

export const stringToJson = ( str ) =>
{
    return parse(str);
}

export const requestQueryGraphql = async( query, apiName, params ) =>
{
    const variables = { params: jsonToString( params ) };
    const result = await apolloClient.query( { fetchPolicy: `no-cache`, query, variables } );
    const data = result.data[ apiName ];
    if( data.status.code !== STATUS_OK )
    {
        return [];
    }
    return data.body;
}

export const requestMutateGraphql = async( mutation, apiName, params ) =>
{
    const variables = { params: jsonToString( params ) };
    const result = await apolloClient.mutate( { fetchPolicy: `no-cache`, mutation, variables } );
    const data   = result.data[ apiName ];
    return data;
}

export const isUploadableImageMimeType = ( mimeType ) =>
{
    switch( mimeType )
    {
        case `image/jpeg`   : return true;
        case `image/png`    : return true;
        default : return false;
    }
}

export const getMibByte = ( size ) =>
{
    return size * 1024 * 1024;
}
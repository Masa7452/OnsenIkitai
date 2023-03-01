const parse = require( 'fast-json-parse' );
const moment = require( 'moment-timezone' );
const { jsonToString } = require('./utility');

const decodeParams = ( params ) =>
{
    if( params === `` || params === null || params === undefined )
    {
        return {
            data : {},
        }
    }
    const params_ = parse( params );
    return { data: params_.value };
}

const createResponse = async ( apiName, params ) =>
{
    const date = moment();
    const response = 
    {
        status :
        {
            date    : date,
            code    : 200,
            error   : ``,
            message : ``,
            api     : apiName,
        },
        body        : [],
        params_     : jsonToString( params.data ),
    }
    return response;
}

const returnResponse = ( response, headers ) =>
{
    return { status : response.status, body : response.body };
}

module.exports = 
{
    decodeParams    : decodeParams,
    createResponse  : createResponse,
    returnResponse  : returnResponse,
}
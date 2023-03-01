const { gql } = require("apollo-server-express")

const typeDefs = gql`
    scalar Dateime

    type Query {
        listOnsen( params: String! ) : ListOnsenResponse,
    }
    type Mutation {
        addOnsen( params: String! ) : MutationResponse,
    }
    type Status
    {
        code    : Int!
        message : String!
        error   : String!
        api     : String!
    }
    type MutationResponse
    {
        status  : Status!
    }
    type ListOnsenResponse
    {
        status  : Status!
        body    : [OnsenResponse]!
    }
    type OnsenResponse
    {
        rating         : Int!
        area           : String!
        postNumber     : String!
        availableType  : Int!
        reasonOfRating : String!
        minimumFee     : Int!
        onsenName      : String!
        address1       : String!
        address2       : String!
        address3       : String!
        url            : String!
        isSauna        : Int!
        tatooStatus    : Int!
        created        : Dateime!
    }
`
module.exports = typeDefs;
const { gql } = require("apollo-server-express")

const typeDefs = gql`

    type Query {
        getBooksList( params: String! ) : [BooksResponse],
    }
    type BooksResponse {
        title: String!
        author: String!
    }
`
module.exports = typeDefs;
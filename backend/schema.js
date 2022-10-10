import { gql } from "apollo-server"

const typeDefs = gql`
    type Book {
        title: String
        author: String
        publish: String
    }

    type Query {
        test : [Book]
    }
`

export default typeDefs;
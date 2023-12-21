export const typeDefs = `#graphql
    type Book {
        id: ID!
        title: String!
        isbn: String!
        year: Int!
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!,
        verified: Boolean!
    }
    type Query {
        reviews: [Review]
        review(id: ID): Review
        books: [Book]
        book(id: ID): Book
        authors: [Author]
        author(id: ID): Author
    }
`

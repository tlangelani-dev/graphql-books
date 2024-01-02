export const typeDefs = `#graphql
    type Book {
        id: ID!
        title: String!
        isbn: String!
        year: Int!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        book: Book!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!,
        verified: Boolean!
        reviews: [Review]
    }
    type Query {
        reviews: [Review]
        review(id: ID!): Review
        books: [Book]
        book(id: ID!): Book
        authors: [Author]
        author(id: ID!): Author
    }
`

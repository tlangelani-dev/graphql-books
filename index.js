import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const PORT = 4000;
import db from './sample-data.js';

import { typeDefs } from './schema.js';
const resolvers = {
    Query: {
        books() {
            return db.books;
        },
        reviews() {
            return db.reviews;
        },
        authors() {
            return db.authors;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: {
        port: PORT
    }
});

console.log(`Server ready on port ${PORT}`);

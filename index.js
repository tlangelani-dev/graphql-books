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
        book(_, args) {
            const id = parseInt(args.id);
            return db.books.find(book => book.id === id);
        },
        reviews() {
            return db.reviews;
        },
        review(_, args) {
            const id = parseInt(args.id);
            return db.reviews.find(review => review.id === id);
        },
        authors() {
            return db.authors;
        },
        author(_, args) {
            const id = parseInt(args.id);
            return db.authors.find(author => author.id === id);
        }
    },
    Mutation: {
        addBook(_, args) {
            let book = {
                id: Math.floor(Math.random() * 10000).toString(),
                ...args.book
            };
            db.books.push(book);

            return book;
        },
        deleteBook(_, args) {
            const id = parseInt(args.id);
            return db.books.filter(book => book.id !== id);
        },
        updateBook(_, args) {
            const id = parseInt(args.id);
            db.books = db.books.map(book => {
                if (book.id === id) {
                    return {
                        ...book,
                        ...args.payload
                    }
                }

                return book;
            });
        }
    },
    Book: {
        reviews(parent) {
            const id = parseInt(parent.id);
            return db.reviews.filter(review => review.book_id == id);
        }
    },
    Author: {
        reviews(parent) {
            const id = parseInt(parent.id);
            return db.reviews.filter(review => review.author_id == id);
        }
    },
    Review: {
        book(parent) {
            const bookId = parseInt(parent.book_id);
            return db.books.find(book => book.id === bookId);
        },
        author(parent) {
            const authorId = parseInt(parent.author_id);
            return db.authors.find(author => author.id === authorId);
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

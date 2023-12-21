const books = [
    {
        id: 1,
        title: "Andalax",
        isbn: "347257814-9",
        year: 2004,
    },
    {
        id: 2,
        title: "Daltfresh",
        isbn: "608286788-2",
        year: 2001,
    },
    {
        id: 3,
        title: "Overhold",
        isbn: "780155210-5",
        year: 2005,
    },
    {
        id: 4,
        title: "Tin",
        isbn: "367380203-8",
        year: 1991,
    },
    {
        id: 5,
        title: "Mat Lam Tam",
        isbn: "237413965-4",
        year: 2007,
    },
    {
        id: 6,
        title: "Tin",
        isbn: "895405562-1",
        year: 1992,
    },
    {
        id: 7,
        title: "Lotstring",
        isbn: "055390780-8",
        year: 2011,
    },
    {
        id: 8,
        title: "Andalax",
        isbn: "259937901-6",
        year: 2012,
    },
    {
        id: 9,
        title: "Lotstring",
        isbn: "070875301-9",
        year: 1992,
    },
    {
        id: 10,
        title: "Zathin",
        isbn: "815544480-5",
        year: 2001,
    },
];

const reviews = [
    {
        id: 1,
        rating: 10,
        content: "Assimilated empowering strategy",
        author_id: 8,
        book_id: 2,
    },
    {
        id: 2,
        rating: 10,
        content: "Multi-channelled 6th generation open architecture",
        author_id: 8,
        book_id: 4,
    },
    {
        id: 3,
        rating: 4,
        content: "Triple-buffered 4th generation frame",
        author_id: 9,
        book_id: 5,
    },
    {
        id: 4,
        rating: 6,
        content: "Optimized 3rd generation protocol",
        author_id: 2,
        book_id: 7,
    },
    {
        id: 5,
        rating: 9,
        content: "Devolved impactful encryption",
        author_id: 8,
        book_id: 8,
    },
    {
        id: 6,
        rating: 3,
        content: "Visionary impactful internet solution",
        author_id: 3,
        book_id: 9,
    },
    {
        id: 7,
        rating: 8,
        content: "Monitored transitional collaboration",
        author_id: 6,
        book_id: 2,
    },
    {
        id: 8,
        rating: 9,
        content: "Triple-buffered next generation open system",
        author_id: 9,
        book_id: 7,
    },
    {
        id: 9,
        rating: 3,
        content: "Persevering optimizing superstructure",
        author_id: 3,
        book_id: 5,
    },
    {
        id: 10,
        rating: 7,
        content: "Public-key clear-thinking knowledge base",
        author_id: 10,
        book_id: 10,
    },
];

const authors = [
    {
        id: 1,
        name: "Anthiathia Wortman",
        verified: false,
    },
    {
        id: 2,
        name: "Celisse Attryde",
        verified: true,
    },
    {
        id: 3,
        name: "Talbot Joska",
        verified: true,
    },
    {
        id: 4,
        name: "Bobby Edbrooke",
        verified: false,
    },
    {
        id: 5,
        name: "Roseanna Jeannenet",
        verified: true,
    },
    {
        id: 6,
        name: "Vivien Haxby",
        verified: false,
    },
    {
        id: 7,
        name: "Shauna Wesgate",
        verified: false,
    },
    {
        id: 8,
        name: "Izak Moorman",
        verified: true,
    },
    {
        id: 9,
        name: "Vivia Petrosian",
        verified: false,
    },
    {
        id: 10,
        name: "Lorie Frangione",
        verified: false,
    },
];

export default {
    books,
    reviews,
    authors,
}

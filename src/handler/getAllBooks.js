import books from '../books.js';

const getAllBook = (request, h) => {
  const { name, reading, finished } = request.query;

  let fBooks = books;

  if (name !== undefined) {
    fBooks = fBooks.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
  }

  if (reading !== undefined) {
    fBooks = fBooks.filter((book) => book.reading === !!Number(reading));
  }

  if (finished !== undefined) {
    fBooks = fBooks.filter((book) => book.finished === !!Number(finished));
  }

  return h.response({
    status: 'success',
    data: {
      books: fBooks.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  }).code(200);
};

export default getAllBook;

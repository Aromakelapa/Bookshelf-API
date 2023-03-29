import books from '../books.js';

const getBookById = (request, h) => {
  const { id } = request.params;
  const book = books.filter((i) => i.id === id)[0];

  if (!book) {
    return h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    }).code(404);
  }

  return h.response({
    status: 'success',
    data: { book },
  }).code(200);
};

export default getBookById;

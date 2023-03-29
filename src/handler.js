import addBook from './handler/addBook.js';
import getAllBook from './handler/getAllBooks.js';
import getBookById from './handler/getBookById.js';
import editBookById from './handler/editBookById.js';
import deleteBookById from './handler/deleteBookById.js';

const handler = {
  addBook, getAllBook, getBookById, editBookById, deleteBookById,
};

export default handler;

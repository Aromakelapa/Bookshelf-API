import handler from './handler.js';

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: handler.addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: handler.getAllBook,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: handler.getBookById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: handler.editBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: handler.deleteBookById,
  },
];

export default routes;

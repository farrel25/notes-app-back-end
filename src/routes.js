const Handler = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: Handler.addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: Handler.getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: Handler.getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: Handler.editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: Handler.deleteNoteByIdHandler,
    },
];

module.exports = routes;
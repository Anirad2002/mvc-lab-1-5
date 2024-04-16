const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books');

router.post('/add', bookController.addBook);

router.delete('/delete/:id', bookController.deleteBook);

router.get('/list', bookController.getBooks);

router.get('/:id', bookController.getBookById);

module.exports = router;
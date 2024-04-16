const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books');

router.post('/add', bookController.addBook);
router.get('/list', bookController.getBooks);
router.delete('/delete/:id', bookController.deleteBook);


module.exports = router;

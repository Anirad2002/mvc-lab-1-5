const books = [
    { id: 1, title: 'Książka 1', publishingYear: 2020, authorId: 1 },
    { id: 2, title: 'Książka 2', publishingYear: 2018, authorId: 2 }
];

exports.getBooks = (req, res) => {
    res.render('books', { books });
};

exports.addBook = (req, res) => {
    const { title, publishingYear, authorId } = req.body;
    const newBook = {
        id: books.length + 1,
        title,
        publishingYear,
        authorId
    };
    books.push(newBook); 
    res.redirect('/book/list'); 
};

exports.deleteBook = (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(book => book.id !== id);
    res.redirect('/book/list');
};

exports.getBookById = (req, res) => {
    const id = req.params.id;
    const book = books.find(book => book.id === parseInt(id));
    if (!book) {
        res.status(404).send('Książka nie została znaleziona.');
        return;
    }
    res.render('book', { book });
};
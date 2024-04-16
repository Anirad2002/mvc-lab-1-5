exports.getBooks = (req, res) => {
    const books = [
        { id: 1, title: 'Książka 1', publishingYear: 2020, authorId: 1 },
        { id: 2, title: 'Książka 2', publishingYear: 2018, authorId: 2 }
    ];

    res.render('books', { books });
};
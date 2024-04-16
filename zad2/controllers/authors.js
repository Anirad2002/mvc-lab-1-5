exports.getAuthors = (req, res) => {
    const authors = [
        { id: 1, name: 'Autor 1' },
        { id: 2, name: 'Autor 2' }
    ];

    res.render('authors', { authors });
};
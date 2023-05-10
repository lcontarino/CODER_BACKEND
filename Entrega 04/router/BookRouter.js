const express = require('express')
const Book = require('../models/Book')
const BookRouter = express.Router();

//POST
BookRouter.post("/books", async (req, res) => {
    try {
        const { title, description, authorid } = req.body;
        if (!title || !description || !authorid) {
            return res.status(400).send({
                success: false,
                message: "Faltan datos por completar"
            });
        };
        let book = await Book({
            title,
            description,
            author: authorid
        });
        await book.save()
        return res.status(200).send({
            success: true,
            message: "Book creado correctamente!"

        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message

        });

    }
})

//Obtener un libro
BookRouter.get("/find/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'No se encontró el libro con el ID proporcionado',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Se encontró el libro correctamente',
            book: book,
        });
    } catch (error) {
        return res.status(200).send({
            success: false,
            message: error.message,

        })

    }
});

//DELETE
BookRouter.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params
        await Book.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: "Book is deleted!"
        })
    } catch (error) {
        res.status(500).send({
            succes: false,
            message: error.message
        })

    }

})

//UPDATE
BookRouter.put("/update/:id", async (req, res) => {

    const { id } = req.params
    const { age } = req.body
    let author = await Book.findOneAndUpdate(id, { age })
    res.status(200).send({
        success: true,
        message: "Book is Updated!",
        author
    })

})

module.exports = BookRouter;

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000
require('dotenv').config();

const AuthorRouter = require("./router/AuthorRouter");
const BooksRouter = require("./router/BookRouter")

app.use(express.json({ extended: true }))
app.use(express.urlencoded())
//Enrutado
app.use("/api", AuthorRouter);
app.use("/api", BooksRouter);

//BD CONNECTION
const URL = process.env.MONGO_DB;

mongoose.connect(URL, {

}).then(() => {
    console.log('BD is now connected')
}).catch(error => {
    console.log(error
    )
});

app.listen(PORT, () => {
    console.log(`Server is Running on port: ${PORT}`);
});
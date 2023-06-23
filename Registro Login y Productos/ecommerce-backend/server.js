const express = require('express');
const cors = require('cors');
require('./connection.js')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
    cors: '*',
    methods: '*'
})

const User = require('./models/User.js')
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const imageRoutes = require('./routes/imageRoutes.js')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/images', imageRoutes);



server.listen(8080, () => {
    console.log('Server running at  port', 8080)
})
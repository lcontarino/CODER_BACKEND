const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require('path');

const indexRouter = require("./routes/index.route")
const homeRouter = require("./routes/home.route");
const realTimeRouter = require("./routes/realtimeproducts");

const handlebars = require("express-handlebars");

const PORT = 8080;

//Socket
const { Server } = require("socket.io");
const io = new Server(server);

//Public
app.use(express.static(__dirname + "/public"));

//views
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname + "/views")) ;

let messages = [
  { author: "Leonardo", text: "contarino" },
  { author: "viviana", text: "robles" },
];

//Inicializar el Socket en el Servidor
io.on("connection", (socket) => {
  console.log("User Conectado");
  socket.emit("mesagge", "Hola Cliente soy el Backend");
  socket.emit("messages", messages);
  socket.on("new-message", (data) => {
    console.log(data);
    messages.push(data);
    io.sockets.emit("messages", messages);
  });

  socket.on("delete-user", (data) => {
    // Encuentra el índice del objeto a eliminar
    const index = messages.findIndex((msg) => msg.author === data.author);
    console.log("Mensaje a eliminar:", data);
    try {
      // Si se encuentra un mensaje con el autor dado
      if (index !== -1) {
        // Eliminar el mensaje del array
        messages.splice(index, 1);

        console.log("Usuario eliminado:", data.author);
        // Emitir un evento 'messages' actualizado a todos los clientes
        io.sockets.emit("messages", messages);
      } else {
        console.log("No se encontro  el autor " + data.author);
      }
    } catch (error) {
      console.log(error);
      //socket.emit('error',error.message)
    }
  });
});

//Routes
app.use("/home", homeRouter);
app.use("/realtime", realTimeRouter);
app.use("/", indexRouter);

//404 handler
app.use((req,res,next)=>{
    res.status(404).send('404 Not Found')
})

server.listen(8080, () => {
  console.log(`server running on port ${PORT} `);
});

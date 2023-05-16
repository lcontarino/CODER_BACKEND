

let socket = io();

socket.on('messages', (data)=>{
  console.log(data)
   render(data)
   socket.emit('msg', 'Hola Back soy el cliente')
})

function render(data){
    const html = data.map(elem=>{
        return (`
        <div>
        <strong>${elem.author}</strong>
        <em>${elem.text}</em>
        
        </div>
        `)
    }).join(''); // Convertir el array en una cadena de texto
    document.getElementById('caja').innerHTML = html;
}
function addMessage(){
    const mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value
    }
    console.log(mensaje)
    socket.emit('new-message',mensaje)
    return false
}


function deleteMessage(){

    const mensaje = {
        author: document.getElementById('delusername').value,
        
    }
    console.log(mensaje)
    socket.emit('delete-user',mensaje)
    return false
}

m



const { io } = require('../server')

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenidoa esta aplicación'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        //Enviar a un usuario
        // client.emit('enviarMensaje', data);

        //Enviar a todos los usuarios conectados
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salió bien',
        //     });
        // } else {
        //     callback({
        //         resp: 'todo salió mal',
        //     })
        // }



    })

});
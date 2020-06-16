var app = require('./config/server');
const { request } = require('express');

var server = app.listen(3000, function() {
    console.log('Server ONLINE.');
});

var io = require('socket.io').listen(server);
app.set('io', io);

io.on('connection', function (socket) {
    
    socket.on('disconnect', function () {
        
    });

    socket.on('msgParaServidor', function (data) {
        socket.emit(
        'msgParaCliente', {
            apelido : data.apelido, 
            mensagem: data.mensagem
            }
        );

        socket.broadcast.emit(
        'msgParaCliente', {
            apelido : data.apelido, 
            mensagem: data.mensagem
            }
        );
        

        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            socket.emit(
            'participantesParaClientes', {
                apelido : data.apelido
                }
            );
    
            socket.broadcast.emit(
            'participantesParaClientes', {
                apelido : data.apelido
                }
            );
        }
        
    });


});
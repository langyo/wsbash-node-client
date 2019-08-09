const SocketClient = require('../src/socketClient');

let socket = new SocketClient('ws://127.0.0.1:9233');

socket.receive('test', obj => console.log(obj));

socket.onOpen(s => s.manager.send({
    type: 'execute',
    package: 'test'
}));
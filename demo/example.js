import SocketClient from '../src/socketClient';

let socket = new SocketClient('ws://127.0.0.1:9233');

socket.receive('test', console.log('got message'));

socket.onOpen(s => s.manager.send({
    type: 'execute',
    package: 'test'
}));
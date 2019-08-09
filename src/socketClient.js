const SocketManager = require('./socketManager.js');
const CommandRegister = require('./commandRegister.js');

module.exports = class SocketClient {
  constructor(url) {
    this.commandRegister = new CommandRegister();

    const openEvent = e => {
      this.manager = new SocketManager(this.client, this.commandRegister);
      for(let i of this.customOpenEventList) i(this);
    };
    const errorEvent = e => {
      for(let i of this.customErrorEventList) i(e);
      console.log('It will try to reconnect after 1s.');
      setTimeout(() => {
        this.client = new WebSocket(url);
        this.client.onopen = openEvent;
        this.client.onerror = errorEvent;
        this.client.onclose = closeEvent;
      }, 1000);
    };
    const closeEvent = e => {
      console.log('The connection has been closed, and it will try to reconnect after 3s.')
      setTimeout(() => {
        this.client = new WebSocket(url);
        this.client.onopen = openEvent;
        this.client.onerror = errorEvent;
        this.client.onclose = closeEvent;
      }, 1000);
    }

    this.client = new WebSocket(url);
    this.client.onopen = openEvent;
    this.client.onerror = errorEvent;
    this.client.onclose = closeEvent;

    this.customOpenEventList = [];
    this.onOpen.bind(this);
    this.customErrorEventList = [];
    this.onError.bind(this);

    this.register.bind(this);
    this.receive.bind(this);
  }

  onOpen(func) {
    if(!(typeof func === 'function')) throw new Error('You must provide a function!');
    this.customOpenEventList.push(func);
  }

  onError(func) {
    if(!(typeof func === 'function')) throw new Error('You must provide a function!');
    this.customErrorEventList.push(func);
  }

  register() { this.commandRegister.register.apply(this.commandRegister, arguments); };
  receive() { this.commandRegister.receive.apply(this.commandRegister, arguments); };
}

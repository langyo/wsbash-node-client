module.exports = class CommandRegister {
  constructor() {
    this.registerObj = {};
    this.receiveObj = {};

    this.register = (key, func) => {
      this.registerObj[key] = func;
    }

    this.receive = (key, func) => {
      this.receiveObj[key] = func;
    }
  }
};

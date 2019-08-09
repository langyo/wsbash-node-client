module.exports = class SocketManager {
  constructor(conn, cmd) {
    this.connection = conn;
    this.commandRegister = cmd;

    this.send = (obj) => {
      // Fill the default key.
      if (!obj.type) throw new Error('What is your type?');
      if (!obj.package) throw new Error('What is your package?');

      this.connection.send(JSON.stringify(obj));
    }

    this.receive = (str) => {
      str = str.data;
      console.log("Get the message from the server:", str);

      // Heart package check.
      if (str[0] == '@') return;

      // Parse the JSON.
      let obj;
      try {
        obj = JSON.parse(str);
      } catch (e) {
        console.error(e);
        this.send({ type: 'system', package: 'error.json', message: e.toString() });
      }

      // Check and run the package reference.
      switch (obj.type) {
        case 'execute':
          if (!this.commandRegister.registerObj[obj.package]) {
            this.send({ type: 'system', package: 'error.package', message: 'Unknown package: ' + obj.package });
            break;
          }
          try {
            this.commandRegister.registerObj[obj.package](
              Object.assign({ id: this.id }, obj),
              (newObj) => this.send(Object.assign({ type: 'data', package: obj.package, id: this.id }, newObj))
            );
          } catch (e) {
            this.send({ type: 'system', package: 'error.runtime.execute', message: e.toString() });
          }
          break;
        case 'data':
          if (!this.commandRegister.receiveObj[obj.package]) {
            this.send({ type: 'system', package: 'error.package', message: 'Unknown package: ' + obj.package });
            break;
          }
          try {
            this.commandRegister.receiveObj[obj.package](Object.assign({ id: this.id }, obj));
          } catch (e) {
            this.send({ type: 'system', package: 'error.runtime.data', message: e.toString() });
          }
          break;
        case 'system':
          console.error('The client', this.id, 'has reported an system information as', obj.package, ':', obj.message);
          break;
        default:
          this.send({ type: 'system', package: 'error.type', message: 'Unknown type: ' + obj.type });
          break;
      }
    }

    conn.onmessage = this.receive;
  }
}




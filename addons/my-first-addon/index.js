const { Client } = require("@botbind/klasa");

module.exports = {
  [Client.plugin]() {
    this.commands.registerCoreDirectory(`${__dirname}/`);
  },
};

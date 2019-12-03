const path = require("path");
const fs = require("fs");

const { Client } = require("@botbind/klasa");

// Load all the addons in the folder
fs.readdirSync(path.join(__dirname, "addons")).forEach(addon => {
  Client.use(require("./addons/" + addon));
});

// Start the bot client
new Client({
  prefix: "?",
  createPiecesFolders: false
}).login("PASTE_YOUR_TOKEN_HERE");

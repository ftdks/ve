require("./server.js");

const { Client } = require("discord.js-selfbot-v13");
const DCHS = require("dchs");

function createClient(TOKEN, data, timeout = 0, login = true) {
  const client = new Client({ checkUpdate: false });
  const dchs = new DCHS(client);

  if (login) {
    client.login(TOKEN);
    client.on("ready", async (client) => {
      log(client);
      setTimeout(
        () => dchs.spams("571992648190263317", data.channels, data.messages),
        timeout
      );
    });

    client.on("messageCreate", (msg) =>
      require("./messageCreate")(msg, client)
    );
  }

  return { client, dchs };
}

const users = require("./users.js");

for (let i = 0; i < users.length; i++) {
  createClient(
    users[i].token,
    users[i].data,
    users[i]?.timeout ?? 0,
    users[i]?.login ?? true
  );
}

function log(client) {
  console.log(`Username :: ${client.user.username}`);
  console.log(`G Name   :: ${client.user.globalName}`);
  console.log(`Phone    :: ${client.user.phone}`);
  console.log(`Email    :: ${client.user.email}`);
  console.log("-".repeat(client.user.email.split("").length + 12));
  client.user.setStatus("dnd");
}

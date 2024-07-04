require("./server.js");

const os = require("os");
const bitfield = require("discord-bitfield-calculator");
const axios = require("axios");
const moment = require("moment");
const { stripIndents } = require("common-tags");

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
const clients = [];

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


/* const aceward = createClient(process.env.token_aceward, {
  channels: require("./old_data/lbbi/channels.json"),
  messages: require("./old_data/lbbi/messages.js"),
});

const tata = createClient(process.env.token_tata, {
  channels: require("./old_data/nolf/channels.json"),
  messages: require("./old_data/nolf/messages.js"),
});

const noveliaClient = createClient(
  process.env.token_novelia,
  require("./data/mndi.js")
);

const rheaClient = createClient(
  process.env.token_rhea,
  require("./data/faylm.js")
); */
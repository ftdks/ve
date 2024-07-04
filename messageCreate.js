const { stripIndents } = require("common-tags");
const { WebhookClient } = require("discord.js-selfbot-v13");

module.exports = (msg, client) => {
  let args = msg.content.slice(" ").trim().split(/ +/);
  let cmd = args.shift().toLowerCase();
  if (msg.author.id == client.user.id) {
      
    if (cmd == "ping") {
      msg.channel.send(stripIndents`\`\`\`md
      Latency: ${new Date().getTime() - msg.createdTimestamp}ms
      API: ${Math.round(client.ws.ping)}ms
      \`\`\``);
    }

    if (cmd == "eval" || cmd == "ev" || cmd == "evaluate") {
      try {
        const code = args.join(" ");
        if (!code) return;
        let evaled = eval(code);
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled, { depth: 0 });
        let output = clean(evaled);
        if (output.length > 2000) {
          console.log(output);
          msg.channel.send(stripIndents`\`\`\`js
            Error on console
          \`\`\``);
        } else { msg.channel.send(`\`\`\`js\n${output}\`\`\``) }
      } catch (error) {
        let err = clean(error);
        if (err.length > 2000) {
          console.log(err);
          msg.channel.send(`\`\`\`js
          Error on console
          \`\`\``);
        } else { msg.channel.send(`**ERROR**\n\`\`\`js\n${err}\`\`\``); }
      }
    }
  } else if (msg.author.id !== client.user.id && msg.channel.type == "DM") {
    const webhookClient = new WebhookClient({ url: process.env.WEBHOOK });
    webhookClient.send({
      content: stripIndents`${msg.content}
      
      \`\`\`BOT: ${client.user.username}\`\`\``,
      username: msg.author.username,
      avatarURL: msg.author.displayAvatarURL({ type: 'png', size: 512*2 }),
    })
  } else if (msg.author.id !== client.user.id && msg.channel.type == "GUILD_TEXT") return;
};

function uptime(n) {
  const t_d = 24 * 60 ** 2;
  const t_h = 60 ** 2;
  const d = (n - (n % t_d)) / t_d;
  const h = ((n % t_d) - (n % t_h)) / t_h;
  const m = ((n % t_h) - (n % 60)) / 60;
  const s = Math.floor(n % 60);
  return `${d ? d + "d " : ""}${d || h ? h + "h " : ""}${
    h || m ? m + "m " : ""
  }${m || s ? s + "s" : ""}`;
}

function clean(string) {
  if (typeof text === "string") {
    return string
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  } else {
    return string;
  }
}

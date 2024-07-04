const { stripIndents } = require("common-tags");
const emoji = require("../emoji.js");
const world = "TNEST"
const header = (category) => stripIndents`SELL **${category}** GO ${emoji.arrow} **${world}**`
const footer = (category) => stripIndents`I BUY ALL ITEM FOR CHEAP
SELL **${category}** GO ${emoji.arrow} **${world}**`

function sell(item, category, join = "\n") {
    let items = item.split("\n").sort()
    let message = stripIndents`${header(category)}
    ${items.join(join)}
    
    ${footer(category)}`
    return message
}

function buy(item, category, join = "\n") {
  let items = item.spli("\n").sort()
  let message = stripIndents`**BUY LIST DM ME**
  ${items.map(i => 'Buy ' + i).join(join)}
  
  **DM ME**`
}

const data = [
  {
    ch: ["997609617410490418"],
    msg: sell(stripIndents`Rayman - Dream Forest Dirt 2WL
    Immortals Fenyx Rising - Eternal Spring Mountain 1WL
    Immortals Fenyx Rising - Eternal Spring Column 1WL
    Rayman Dream Forest Platform 5/1WL
    Immortals Fenyx Rising - Athena Statue 5WL`, "UBIWEEK")
  },
  
  
]

const channels = {};
const messages = {};

data.forEach((item, index) => {
  const key = `item${index}`;
  channels[key] = item.ch;
  messages[key] = item.msg;
});

module.exports = { channels, messages };
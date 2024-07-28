const { stripIndents } = require("common-tags");
const world = "TNEST"
const header = (category) => stripIndents`SELL **${category}** GO <:Arrow:850540193626193941> **${world}**`
const footer = (category) => stripIndents`SELL **${category}** GO <:Arrow:850540193626193941> **${world}**`

function sell(item, category, join = "\n") {
    let items = item.split("\n").sort()
    let message = stripIndents`${header(category)}
    
    ${items.join(join)}
    
    ${footer(category)}`
    return message
}

function buy(item, category = "CHEAP", join = "\n") {
  let items = item.split("\n").sort()
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
  
  {
    ch: ["900836866373333052"],
    msg: sell(stripIndents`Phoenix Mantle 82
    Ultraviolet Aura 135`)
  }
  /*
  {
    ch: ["900836866373333052", "782718904056807494"], // rare items, iots
    msg: sell(stripIndents`Magplant 5000
    Guardian Pineapple
    Gaia's Beacon
    Unstable Tesseract`, "RARE")
  },
  
  {
    ch: ["806456760592105483"],
    msg: sell(stripIndents`Super Firework
    Super Summer Surprise`, "SUMMER")
  },*/
  
  
]

const channels = {};
const messages = {};

data.forEach((item, index) => {
  const key = `item${index}`;
  channels[key] = item.ch;
  messages[key] = item.msg;
});

module.exports = { channels, messages };

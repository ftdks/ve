const { stripIndents } = require("common-tags");

const data = [/*
  {
    ch: ["806456760592105483"],
    msg: stripIndents`SELL SUMMER AT <:Arrow:850540193626193941> **FEDSN** <:Verified:1000267030550827128>
    Super Firework
    Super Summer Surprise
    SELL SUMMER AT <:Arrow:850540193626193941> **FEDSN** <:Verified:1000267030550827128>`
  },
  
  {
    ch: ["900836866373333052", "782718904056807494"], // rare items
    msg: stripIndents`SELL CHEAP GO **FEDSN**
    Magplant 5000
    Guardian Pineapple
    Gaia's Beacon
    Unstable Tesseract
    SELL CHEAP GO **FEDSN**`
  }, */
  
  {
    ch: ["997609617410490418"],
    msg: stripIndents`SELL CHEAP GO **FEDSN**
    Rayman - Dream Forest Dirt 2WL
    Immortals Fenyx Rising - Eternal Spring Column 1WL
    Immortals Fenyx Rising - Eternal Spring Mountain 1WL
    Rayman Dream Forest Platform 5/1WL
    Immortals Fenyx Rising - Athena Statue 5WL
    SELL CHEAP GO **FEDSN**`
  }
 
]

const channels = {};
const messages = {};

data.forEach((item, index) => {
  const key = `item${index}`;
  channels[key] = item.ch;
  messages[key] = item.msg;
});

module.exports = { channels, messages };

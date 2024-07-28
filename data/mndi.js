const { stripIndents } = require("common-tags");

const data = {
  /*
  seeds: {
    ch: ["1105154359114875072"],
    msg: stripIndents`SELL SSP AT **MNDI**
CHEAP SSP

Door Seed
Glasspane Seed
Grass Seed
Wood Block Seed
Brick Seed
Crappy Sign Seed
Daisy Seed
Mushroom Seed
Rose Seed
Wheat Seed
Black Block Seed
Brown Block Seed
Grey Block Seed
Pointy Sign Seed
Red Block Seed
Wooden Platform Seed
Aqua Block Seed
Danger Sign Seed
Green Block Seed
Poppy Seed
White Block Seed
Window Seed
Yellow Block Seed
Glass Block Seed
Grimstone Seed
Toilet Seed
Death Spike Seed
Dungeon Door Seed
Bush Seed
Orange Block Seed
House Entrance Seed
Painting: Dink Duck Seed
Barrel Seed
Sidewalk Seed
Tenement Building Seed
Wooden Chair Seed
Blubbery Seed
Dark Aqua Block
Dark Green Block
Water Bucket Seed
Western Building Seed
Bathtub Seed
Dark Yellow Block Seed
Bed Seed
Biohazard Sign
Bubble Wrap Seed
Dresser Seed
Sheet Music: Piano Note Seed
Western Banner Seed
Air Duct Seed
Blue Block Seed
Lattice Background Seed
Olde Timey Radio Seed
Orange Seed
Polka Dot Block Seed
Sheet Music: Flat Piano Seed
Sheet Music: Sax Note Seed
Tangram Seed
Dark Orange Block Seed
Gargoyle Seed
Portcullis Seed
Sheet Music: Flat Sax Seed
Ancient Stone Gate Seed
Cactus Seed
Screen Door Seed
Blue Star Wallpaper Seed
Cuzco Wall Mount Seed
Das Red Baloon Seed
Foliage Seed
Plumbing Seed
Salt Block Seed
Sandstone Seed
Apple Seed
Ice Crust Block Seed
Purple Block Seed
Outie Block Seed
Rustic Fence Seed
Air Vent Seed
Ancient Block Seed
Gem Sign Seed
Seaweed Seed
Swiss Cheese Block Seed

CHEAP SSP AT **MNDI**
**GO MNDI**`
  },
  */
  /*
  paint: {
    ch: ["774455258407370752"],
    msg: stripIndents`CHEAP PAINT SHOP AT <:Verified:1000267030550827128> **MNDI** <:Verified:1000267030550827128> 

🔵 Paint Bucket - Aqua
🔵 Paint Bucket - Blue
⚫ Paint Bucket - Charcoal
🟢 Paint Bucket - Green
🟣 Paint Bucket - Purple
🔴 Paint Bucket - Red
⚪ Paint Bucket - Varnish
🟡 Paint Bucket - Yellow
Paintbrush
Portrait

Sell Red Hair Dye
Sell Green Hair Dye
Sell Blue Hair Dye
Sell Black Hair Dye
Sell Shampoo

Sell Red Eye Drops
Sell Green Eye Drops
Sell Blue Eye Drops
Sell Black Eye Drops
Sell Eye Cleaning Solution

Sell Red Contact Lens
Sell Green Contact Lens
Sell Blue Contact Lens
Sell Black Contact Lens
Sell Contact Lens Cleaning Solution
Sell Bathub

Remember  <:Verified:1000267030550827128>  **MNDI** <:Verified:1000267030550827128>`
  },
 */
  /*
  summer: {
    ch: ["806456760592105483"],
    msg: stripIndents`SELL SUMMER AT <:Arrow:850540193626193941> **AYUEIA**
    Super Summer Surprise
    Super Firework
    SELL SUMMER AT <:Arrow:850540193626193941> **AYUEIA**`
  },
  
  rare: {
    ch: ["900836866373333052", "782718904056807494"], // rare items
    msg: stripIndents`CHEAP GO **AYUEIA**
    
    Guardian Pineapple
    Unstable Tesseract
    Gaia's Beacon
    Magplant 5000
    
    CHEAP GO **AYUEIA**`
  }, */
  
  ubiweek: {
    ch: ["997609617410490418"],
    msg: stripIndents`CHEAP UBIWEEK GO **AYUEIA**
    Immortals Fenyx Rising - Eternal Spring Mountain 1WL
    Immortals Fenyx Rising - Eternal Spring Column 1WL
    Immortals Fenyx Rising - Athena Statue 5WL
    Rayman - Dream Forest Dirt 2WL
    Rayman Dream Forest Platform 5/1WL
    CHEAP UBIWEEK GO **AYUEIA**`
  }
  
  
}

const channels = {};
const messages = {};

for (const key in data) {
  channels[key] = data[key].ch;
  messages[key] = data[key].msg;
}

module.exports = { channels, messages }

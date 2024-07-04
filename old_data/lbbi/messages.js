const { stripIndents } = require("common-tags");

const emoji = {
    arrow: "<:Arrow:850540193626193941>"
}

const world = `LBBI`
const header = (category) => `SELL ${category} GO ${emoji.arrow} **${world}**`
const footer = (category) => `SELL ${category} GO ${emoji.arrow} **${world}**`
const text = {
    block: `Number Block 0-9
Dark Castle Stone
Topaz Block
Crstalized Star Fragment Block
Heartcastle Stone
Toasted Village Wall
Pillar
Golden Block
Basic Blue Block
Hedge
Clouds
Glowy Block
Cutaway Building
Dice Block
Slot Machine
Dragon Gate
Roulette Wheel
Chandelier
Display Box
Display Block
Transmatter Field
Donation Box
Donut Donation Box
Display Shelf
Spooky Display Shelf
Bulletin Board`,

    plat: `Hover Platform
Dark Walnut Ladders
Fire Escape
Climbing Vine
Starship Deck Ladders
Ladder
Seagull`,

    starTool: `Teleporter Charge
Tactical Drone
Stellar Document
Star Supplies
Space Meds
Quadriscanner
HyperShields
Growton Torpedo
Gigablaster
Galactibolt
Cyborg Diplomat
AI Brain`,

    starItem: `Star Fuel
Starship Deck Ladders`,

    surgTool: `Surgical Ultrasound
Surgical Transfusion
Surgical Stitches
Surgical Sponge
Surgical Splint
Surgical Scalpel
Surgical Pins
Surgical Lab Kit
Surgical Defibrillator
Surgical Clamp
Surgical Antiseptic
Surgical Antibiotics
Surgical Anesthetic`,

    vial: `Vile Vial - Fatty Liver
Vile Vial - Brainworms`,

    surgItem: `Heart Monitor
Surgical Tool Bag
g-Virus
Surg-E`,

    crime: `Superpower - Resuscitate
Superpower - Megawatt Pulse
Superpower - Overcharge
Superpower - Thunderstorm
Superpower - Shocking Fist
Superpower - Regeneration
Superpower - Crush
Superpower - Enrage
Superpower - Super Speed
Superpower - Super Starength
Superpower - Frozen Mirror
Superpower - Puddle
Superpower - Ice Barrier
Superpower - Frost Breath
Superpower - Ice Shards
Superpower - Overheat
Superpower - Liquify
Superpower - Flame On!
Superpower - Incinerate
Superpower - Heat Vision
Crime Wave
Henchman`,

    jammer: `Firehouse
Ghost Charm
Signal Jammer
Zombie Jammer
Punch Jammer`,

    locke: `VIP Entrance
Extract-O-Snap
Door Mover
Birth Certificate
Change of Address`,

    machine: `Vending Machine
DigiVend Machine
Vending Hub - Checkout Counter`
}

function init(category, hf, join = "\n") {
    let item = category.split("\n").sort()
    let body = `${header(hf)}
${item.join(join)}
${footer(hf)}`
    
    return body
}

init(text.block, "BLOCK")

module.exports = {
  block: init(text.block, "BLOCK"), 
  plat: init(text.plat, "PLATFORM"),
  starTool: init(text.starTool, "STARTOPIA TOOLS"),
  starItem: init(text.starItem, "STARTOPIA ITEMS"),
  surgTool: init(text.surgTool, "SURG TOOLS"),
  vial: init(text.vial, "VIAL"),
  surgItem: init(text.surgItem, "SURG ITEMS"),
  crime: init(text.crime, "CRIME", ", "),
  jammer: init(text.jammer, "JAMMER"),
  locke: init(text.locke, "LOCKE"),
  machine: init(text.machine, "MACHINE"),
}
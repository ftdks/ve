const { stripIndents } = require("common-tags");
const emoji = require("../emoji.js");

const data = {
  gala: {
    ch: ["733052554820452423"],
    msg: stripIndents`<:Arrow:850540193626193941> GALA TOOLS AT **POM**

<:Verified:1000267030550827128> Sell Al Brain 13/1
<:Verified:1000267030550827128> Sell Cyborg Diplomat 13/1
<:Verified:1000267030550827128> Sell Galacticbolt 13/1
<:Verified:1000267030550827128> Sell Gigablaster 13/1
<:Verified:1000267030550827128> Sell Growton Torpedo 10/1
<:Verified:1000267030550827128> Sell HyperShields 11/1
<:Verified:1000267030550827128> Sell Quadriscanner 12/1
<:Verified:1000267030550827128> Sell Space Meds 13/1
<:Verified:1000267030550827128> Sell Star Supplies 13/1
<:Verified:1000267030550827128> Sell Stellar Documents 13/1
<:Verified:1000267030550827128> Sell Tactical Drone 1/1 (200/120)
<:Verified:1000267030550827128> Sell Teleporter Charge 1/1 (200/120)
<:Verified:1000267030550827128> Sell Star Fuel 200/1 

<:Arrow:850540193626193941> GALA TOOLS AT **POM**`
  },
  
  surgTool: {
    ch: ["733049257648586792"],
    msg: stripIndents`CHEAP SURGICAL TOOLS AT <:Verified:1000267030550827128>**POM**<:Verified:1000267030550827128> 

<:SurgicalAnesthetic:892136763718512642> Anesthetic 17/WL 
<:SurgicalAntibiotics:892136764045684787> Antibiotics 17/WL 
<:SurgicalAntiseptic:892136764058255431> Antiseptic 17/WL 
<:SurgicalClamp:892136728104685628> Clamp 17/WL 
<:SurgicalDefibrillator:892136728511533076> Defibrillator 17/WL 
<:SurgicalLabKit:892136728566071367> Labkit 17/WL 
<:SurgicalPins:892136728566063104> Pins 17/WL 
<:SurgicalScalpel:958337498742935552> Scalpel 17/WL 
<:SurgicalSplint:892136728645746688> Splint 17/WL 
<:SurgicalSponge:892136728591216700> Sponge 17/WL 
<:SurgicalTransfusion:892136795712659516> Transfusion 17/WL 
<:SurgicalUltrasound:892136795570065489> Ultrasound 17/WL 
<:SurgicalStitches:892136728607985734> Stitches 1/1 (200/115)
SURG E 4/1 (200/45)

(💯 Real Price💯 )
CHEAP SURGICAL TOOLS AT <:Verified:1000267030550827128> **POM** <:Verified:1000267030550827128>`
  },
  
  crime: {
    ch: ["742546954503848006"],
    msg: stripIndents`CRIME CARD SHOP AT <:Arrow:850540193626193941> **POM**

🔥 Fire 7-15/1
❄️ Ice 5-15/1
💪 Muscle 5-15/1
⚡ Lightning 5-15/1
Crime Wave 2 Each
Henchman 1 Each

CRIME CARD SHOP AT <:Arrow:850540193626193941> **POM**`
  },
  
  paint: {
    ch: ["774455258407370752"],
    msg: stripIndents`Sell All Cheap Paint go **POM**
=========================================
🟡Paint Bucket - Yellow 20/1 ${emoji.wl}
🔵Paint Bucket - Blue 20/1 ${emoji.wl}
⚫Paint Bucket - Charcoal 10/1 ${emoji.wl}
🔴Paint Bucket - Red 10/1 ${emoji.wl}
⚪Paint Bucket - Varnish 20/1 ${emoji.wl}
🔵Paint Bucket - Aqua 20/1 ${emoji.wl}
🟣Paint Bucket - Purple 10/1 ${emoji.wl}
🟢Paint Bucket - Green 20/1 ${emoji.wl}
🖼️Portrait 12 ${emoji.wl}
=========================================
Sell All Cheap Paint go **POM**`
  }
}

const channels = {};
const messages = {};

for (const key in data) {
  channels[key] = data[key].ch;
  messages[key] = data[key].msg;
}

module.exports = { channels, messages }

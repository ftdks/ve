module.exports = [
  {
    token: process.env.token_aceward,
    data: require("./data/pom.js"),
  },
  
  {
    token: process.env.token_tata,
    data: {
      channels: require("./old_data/nolf/channels.json"),
      messages: require("./old_data/nolf/messages.js"),
    },
  },
  
  {
    token: process.env.token_novelia,
    data: require("./data/mndi.js"),
  },
  
  {
    token: process.env.token_rhea,
    data: {
      channels: require("./old_data/lbbi/channels.json"),
      messages: require("./old_data/lbbi/messages.js"),
    }
  },
  
  {
    token: process.env.token_fairuz,
    data: require("./data/tnest.js"),
  }
];

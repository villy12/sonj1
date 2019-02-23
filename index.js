// Load up the discord.js library
const Commando = require("discord.js-commando");
const client = new Commando.Client();
const TOKEN = 'NTM5MTYxMTA1ODY0NDU4MjQw.Dy-U0Q.dTYKxshbYDhscEUR6ZRnjCts_Qc'
const config = require("./config.json");

// Group registration
 client.registry.registerGroup('simple', 'Simple');
 client.registry.registerGroup('admin','Admin');
 client.registry.registerGroup('music','Music');
 client.registry.registerCommandsIn(__dirname + '/commands');
 client.registry.registerDefaults();

 


// Startup
client.login(TOKEN)

client.on("ready", () => {

    client.user.setActivity("My Boss V_illy", {type: "LISTENING"});
    console.log('State of New Jersey is Online!');
    console.log("Made by:  V_illy");
});

client.on("ready", () => {

});


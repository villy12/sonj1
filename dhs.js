const commando = require('discord.js-commando');
const discord = require('discord.js');
const client = new discord.Client
const prefix = "#";

class handBOOK extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'dhs',
            group: 'simple',
            memberName: 'dhs',
            description: 'Infomation'
        });
    }

    async run(message, args)
    {
        var log = new discord.RichEmbed()
            .setTitle("State of New Jersey")
            .addField("DHS Application","Click the blue text above to be taken to the application site.")
            .setColor("#2EC761")
            .setFooter("You can also find all application within Mercer County, New Jersey on our website!")
            .setURL("https://docs.google.com/forms/d/1KaR2F6CY11JmEyysWKqIQGhj88C2jdVQlgMy5LIKfkg/viewform?edit_requested=true")
        message.channel.sendEmbed(log)
        message.channel.send("There you go!")


    }
}

module.exports = handBOOK;

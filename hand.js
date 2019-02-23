const commando = require('discord.js-commando');
const discord = require('discord.js');
const client = new discord.Client
const prefix = "#";

class handBOOK extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'hand',
            group: 'simple',
            memberName: 'hand',
            description: 'Infomation'
        });
    }

    async run(message, args)
    {
        var log = new discord.RichEmbed()
            .setTitle("State of New Jersey")
            .addField("Mercer County Administrator Handbook", "This document is designed to provide Mercer County Administration staff with the basics to administrating. Not every scenario you may come across can be listed in this document. In such cases, administrators should base their decisions off stated information and their previous experience. Failure to abide by stated rules, guidelines and instructions will most likely result in termination from the administration team.")
            .addBlankField(true)
            .addField("Bans", "Bans **do not** have to be approved by a high rank. Banning players should be a last resort and should not be a regular occurrence. Command permissions and ability to perform certain commands varies depending on one’s rank and permissions.")
            .addField(":ban  [player]", "Bans the player from the current server. - Server ban.")
            .addField(":tban [player] [ban length h/d]","Temporarily bans the player. - h = Hours d = days.")
            .addField(":pban [player]","Permanently bans the player.")
            .addBlankField(true)
            .addField("Kicks","Kicks should be a more common occurrence than bans but should not be overused.")
            .addField(":kick  [player]"," Removes the play from the current server.")
            .addField(":kickwarn  [player][reason]","Removes the player from the current server and gives a warning for the stated reason.")
            .addBlankField(true)
            .addField("Warnings","Warnings are the most mild and underused form of administrating. Warnings can be verbal or logged.")
            .addField(":warn [player][reason]","Logs a warning.")
            .addField(":kickwarn  [player][reason]"," Removes the player from the current server and gives a warning for the stated reason")
            .addField(":warnings  [player]"," Shows a GUI of a users previous warnings.")
            .addBlankField(true)
            .addField("Example scenarios ","All Moderators / Administrators have appropriate permissions to warn, kick and server ban a user. In the event you feel someone must be Permanently or Temporarily banned from Mercer County, please contact a member of High Command to execute the ban.")
            .addField("Exploiting","Permanent ban - May **not** be appealed.")
            .addField("Minor Fail Roleplay","Warning / kick.")
            .addField("Severe Fail Roleplay and/or Abuse of tools."," Kick / Server Ban / Temporary ban / Permanent ban depending on severity.")
            .addBlankField(true)
            .addField("Admin Abuse","In the event of an Admin Abuser, High Command (Head Administrator and above) should be notified immediately by anyone and everyone. Upon their notification, High Command are expected to fulfill their duty by handling the situation. This could involve permanent banishment, a server ban or removal of the abuser’s admin.Said High Command member is then expected to contact and discuss the event with other members of High Command to come to a conclusion on what punishment will be issued.")
            .setFooter("Credits to eth23roblox for making the handbook.")
            .setColor("#2EC761")
        message.channel.sendEmbed(log)
        message.channel.send("@everyone All administrators and moderator are **REQUIRED** to read this!")


    }
}

module.exports = handBOOK;

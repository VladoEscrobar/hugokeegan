const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "/*";
client.login ("NTA3MzAwODQ1NDE1Njk0MzM4.DrutJw.YHrafaKgcNBcAwcY-1D_Cmmdi_8");

client.on("ready", () => {
    console.log("I'm ready to send a dream")
    client.user.setGame("Bip Boup Bip");
});

client.on('message', message => {

 if (message.content === "Bonjour"){
    message.reply("Bonjour à toi !");
    console.log('Le bot a dit bonjour');
}

if (message.content === "Bonsoir"){
    message.reply("Bonsoir à toi !");
    console.log('Le bot a dit bonsoir');
}

 if(message.content === prefix + "help"){
     var help_embed = new Discord.RichEmbed()
     .setColor("#40A497")
     .setTitle("Voici ce que mon créateur m'a appris à faire")
     .setDescription("J'ai toujours adorer passer mon temps à vous aider !")
     .addField("/*help", "Affiche mes capacités magiques !")
     .addField("/*kick (pseudo)", "Sort de disparition, pour les petits cas")
     .addField("/*ban (pseudo)", "AVADA KEDAVRA")
     .addField("Bonjour et bonsoir", "Important de dire bonjour et bonsoir !")
     .setFooter("Menu d'aide")
     message.channel.sendMessage(help_embed);
     console.log(" Quelqu'un c'est renseigné sur moi")
          }
});

client.on('message', message => {

if(message.content.startsWith(prefix + "kick")) {
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))  return message.channel.send("T'as magie n'est pas assez puissante 1ère année !");

    if(message.mentions.users.size === 0) {
        return message.channel.send("Je n'ai pas encore la magie suffisante pour faire disparaitre un fantôme")

    }
    var kick = message.guild.member(message.mentions.users.first());
    if(!kick) {
        return message.channel.send("C'est un moldu ? Il n'est pas dans ma liste de magicien")
    }

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
        return message.channel.send("Mon pouvoir est malheureusement insuffisant pour lancer le sort demandé");

    }

    kick.kick().then(member => {
        message.channel.send("J'ai lancé un vilain sort au méchant !")

    });

}});   

client.on('message', message => {

    if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))  return message.channel.send("T'as magie n'est pas assez puissante 1ère année !");
    
        if(message.mentions.users.size === 0) {
            return message.channel.send("Je n'ai pas encore la magie suffisante pour faire disparaitre un fantôme")
    
        }
        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("C'est un moldu ? Il n'est pas dans ma liste de magicien")
        }
    
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Mon pouvoir est malheureusement insuffisant pour lancer le sort demandé");
    
        }
    
        ban.ban().then(member => {
            message.channel.send("AVADA KEDAVRA")
    
        });
    
    }});   

    client.on('message', message => {
    
    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je resterai muet comme une carpe");

        let args = message.content.split(" ").slice(1);

        if(!args[0])  return message.channel.send("Combien m'sieu ?")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été supprimés !`);
        });
    }});

    client.on('message', message => {

    if(message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");
 
        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
        }
 
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
        }
 
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} est mute !`);
        })
    }});

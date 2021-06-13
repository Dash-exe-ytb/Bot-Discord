const Discord = require('discord.js')
 
module.exports.run = (Client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor(0xf3ab5d)
        .setFooter("Ryuko v1.06", `${user.displayAvatarURL({dynamic: true})}`)
        .setTimestamp()
        .setTitle("Voici le menu d'aide")
        .setURL("")
        .setDescription(`
        Mon prefix sur ce serveur est : \`r!\`

        **Liste des commandes:**
        \`r!partner\` Permet de voir nos partenaires <:new:2436546564654>
        \`r!play\` Permet de jouer une musique (URL, Nom)
        \`r!stop\` Permet de stopper la musique jouer
        \`r!ticket\` Permet de fait un ticket au support dans le salon <#835649767530692638>
        \`r!close\` Permet de fermer un ticket ouvert et de le fermer
        \`r!clear\` Permet de supprimer un nombre de message de 1 a 100
        
        **Lien utiles:**
        [Serveur Support](https://discord.gg/xT4hqzmP39)| [ Invitation du bot](https://discord.com/oauth2/authorize?client_id=839877755109900298&permissions=8&scope=bot) | [Ryuko Team](https://discord.com/channels/834225395330842644/835649767530692638) | [Ryuko Partner](https://discord.com/channels/834225395330842644/839188531254919209)`)
        .setImage("")
        message.channel.send(embed).then(()=>{
                message.channel.send('||https://discord.gg/xT4hqzmP39 ||');
            });
    name: 'embed'
}
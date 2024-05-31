import { Client, GatewayIntentBits } from 'discord.js';


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages , GatewayIntentBits.MessageContent] });

client.on('messageCreate', (message)=>{
    if(message.author.bot) return;
    message.reply({
        content:"welcome bro"
    })
});

client.on("interactionCreate", (interaction)=>{
    console.log(interaction);
    interaction.reply('TOKEN');
})

client.login(TOKEN);


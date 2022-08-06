// Require the necessary discord.js classes
const { Client, Intents, MessageEmbed } = require('discord.js');
const { token } = require('./config.json');
const axios = require('axios');
const fn = require('./function.js')

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
//const user = new Discord.User()
// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    if (commandName === 'ping') {
        let response = await fn.uploadNasa('https://api.nasa.gov/planetary/apod?api_key=dDiPPWBGCEayyCpe3V5ancaZemLU6cj89uVSIC6x');

        const exampleEmbed = new MessageEmbed()
            .setColor(0x0099FF)
            .setTitle(response.data.title)
            .setURL(response.data.url)
            .setDescription(response.data.explanation)
            .setImage(response.data.url)
            .setTimestamp();

        interaction.reply({ embeds: [exampleEmbed] });

    } else if (commandName === 'server') {
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
    } else if (commandName === 'user') {
        await interaction.reply('User info.');
    }
});

// Login to Discord with your client's token
client.once('ready', async () =>{
    console.log("DiscordTest Online!");
});
client.login(token);
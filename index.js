// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const request = require('request');

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
        request('https://api.nasa.gov/planetary/apod?api_key=dDiPPWBGCEayyCpe3V5ancaZemLU6cj89uVSIC6x', async function (error, response, body) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            interaction.reply(JSON.parse(body).url);
        });
        //interaction.reply(JSON.parse(body).url);

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
const Discord = require("discord.js")
const ytdl = require("ytdl-core")
const client = new Discord.Client();
let voiceChannel = client.channels.get("452486931255918613")
let connection = voiceChannel.join();
const dispatcher = connection.playStream(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));
function onEnd() {
connection.playStream(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));
}

client.on("ready", ready => {
	console.log("ready")
});

  client.on(`ready`, member => {
        client.user.setActivity(`SOME GOOD MUSIC`, {
        type: "Listening"
    });
});

client.on("ready", () => {
  client.user.setStatus("dnd")
});
client.on("ready", () {
voiceChannel.join().then (connection => {
connection.playStream(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));
})
});


dispatcher.on("end", () => {
onEnd();
});


client.login(process.env.BOT_TOKEN)

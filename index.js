const Discord = require("discord.js")
const ytdl = require("ytdl-core")
const client = new Discord.Client();
const dispatcher = connection.playStream(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));
function onEnd() {
connection.playStream(ytdl('https://www.youtube.com/watch?v=pGzK01Wu8zo', { filter: 'audioonly' }));
};

client.on("ready", ready => {
	console.log("ready")
});

  client.on(`ready`, member => {
        client.user.setActivity(`SOME NIGHTCORE`, {
        type: "Listening"
    });
});

client.on("ready", () => {
  client.user.setStatus("dnd")
});

client.on("ready", () => {
client.channels.get("452486931255918613").join().then (connection => {
connection.playStream(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }))
})
});

dispatcher.on("end", () => {
onEnd();
});

client.login(process.env.BOT_TOKEN)

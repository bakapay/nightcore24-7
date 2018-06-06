const Discord = require("discord.js")
const ytdl = require("ytdl-core")
const client = new Discord.Client();

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

client.on("ready", () => {
client.channels.get("452486931255918613").join().then (connection => {
const dispatcher = connection.playStream(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));

function onEnd() {
connection.playStream(ytdl('https://www.youtube.com/watch?v=pGzK01Wu8zo', { filter: 'audioonly' }));
}

dispatcher.on("end", () => {
onEnd();
});
});

});

client.login("NDUxMzgwNTQ5Mzk1ODA4MjY3.DfBH6Q.8fK_nDuE9wHlrtiGRLxFoKmuSZ4")
const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Minha Playlist com o viadinho do Rodrigo"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/4Yjkmql9YWQQPfk8pHcJSe?si=5f3839c01be54ad86")
    }
}
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("Blue")
	.setTitle("uma declaração de amor: ")
	.addFields(
        { name: 'Jubs, aqui é o astro!', value: 'Eu te amo muito vida, obrigado por tudo, linda <3'},
        { name: 'Uma músiquinha para nós :) :', value: 'https://is.gd/KO8B25'}
    )
    .setImage('https://i.imgur.com/LO6mjpD.jpeg')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/LO6mjpD.jpeg' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName("jubs")
        .setDescription("teste"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}
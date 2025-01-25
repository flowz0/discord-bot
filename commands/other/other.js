const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("other")
    .setDescription("Other command")
    .addStringOption(option =>
      option.setName('input')
        .setDescription('The input to echo back')
    ),
  async execute(interaction) {
    const response = interaction.options.getString('input');

    await interaction.reply(
      `This is other command was run by ${interaction.user.username}. Input was: ${response}`
    );
  },
};

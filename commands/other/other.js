const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("other")
    .setDescription("Other command"),
  async execute(interaction) {
    await interaction.reply(
      `This is other command was run by ${interaction.user.username}.`
    );
  },
};

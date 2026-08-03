const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === "!painel") {

    const embed = new EmbedBuilder()
      .setTitle("⛨ AntiRaid ⛨")
      .setDescription("🛡 **Painel de Controle do AntiRaid**")
      .setColor("#5865F2")
      .setThumbnail("https://cdn.discordapp.com/attachments/1532724657587879944/1532943690086088755/bca4cb1d14f3aaa2009a8ad5ad6da405.png?ex=6a6eb090&is=6a6d5f10&hm=ec34ec52c9acb0d4efd1338c089326f8cd77484ae8cff9723260573e015ed5b0&")
      .setFooter({ text: "ꄘꍟꀤ꓄ꂦ ꉣꂦꋪ ꒒ꍟꏳ꓄" });

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ligar")
        .setLabel("👻 Ligar")
        .setStyle(ButtonStyle.Success),

      new ButtonBuilder()
        .setCustomId("desligar")
        .setLabel("👻 Desligar")
        .setStyle(ButtonStyle.Danger)
    );

    await message.channel.send({
      embeds: [embed],
      components: [row]
    });
  }
});

let antiraid = false;

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === "ligar") {
    antiraid = true;
    return interaction.reply({
      content: "🟢 AntiRaid ativado!",
      ephemeral: true
    });
  }

  if (interaction.customId === "desligar") {
    antiraid = false;
    return interaction.reply({
      content: "🔴 AntiRaid desativado!",
      ephemeral: true
    });
  }
});

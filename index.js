const {
  Client,
  GatewayIntentBits
} = require("discord.js");

require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`✅ Bot online: ${client.user.tag}`);
});

client.on("guildMemberAdd", async (member) => {
  if (member.user.bot) {
    try {
      await member.kick("Bot bloqueado pelo Protect System");
      console.log(`🤖 Bot removido: ${member.user.tag}`);
    } catch (err) {
      console.error(err);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === "!antiraid") {
    message.reply(`
🛡️ **Protect System AntiRaid**

✅ Sistema: Ativado
🤖 Anti Bot: ON
🔒 Segurança: ON
📄 Logs: ON
    `);
  }
});

client.login(process.env.TOKEN);

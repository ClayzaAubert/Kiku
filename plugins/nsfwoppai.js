let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.zahwazein.xyz/randomanime/oppai?apikey=${global.zein}`, 'nsfw.jpg', 'Suggoi??', m)
}
handler.help = ['oppai']
handler.tags = ['nsfw']

handler.command = /^(oppai)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler
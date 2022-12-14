exports.run = {
   usage: ['gempa'],
   category: 'utilities',
   async: async (m, {
      client
   }) => {
      try {
         client.sendReact(m.chat, 'π', m.key)
         let json = await Api.gempa()
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         let caption = `δΉ  *G E M P A*\n\n`
         caption += `	β¦  *Lintang* : ${json.data.lintang}\n`
         caption += `	β¦  *Bujur* : ${json.data.bujur}\n`
         caption += `	β¦  *Skala* : ${json.data.magnitudo}\n`
         caption += `	β¦  *Kedalaman* : ${json.data.kedalaman}\n`
         caption += `	β¦  *Waktu* : ${json.data.waktu}\n`
         caption += `	β¦  *Pusat Gempa* : ${json.data.wilayah}\n\n`
         caption += global.footer
         client.sendMessageModify(m.chat, caption, m, {
            largeThumb: true,
            thumbnail: await Func.fetchBuffer(json.data.map)
         })
      } catch {
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false
}
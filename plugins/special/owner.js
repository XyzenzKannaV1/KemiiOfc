exports.run = {
   usage: ['owner'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, [{
         name: 'Kemii',
         number: global.owner,
         about: 'Owner Siesta Bot'
      }], m)
   },
   error: false,
   cache: true,
   location: __filename
}

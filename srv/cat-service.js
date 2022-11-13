const axios = require('axios')
const { data } = require('hdb/lib/protocol')

module.exports = (srv) => {
    // Reply mock data for Books...
    srv.on ('READ', 'Books', async()=>{
      let res = await axios.get('https://jsonplaceholder.typicode.com/users').catch((err)=> console.log(err))

      console.log('res', res.data);
      return res.data
  
  })
   
    // Reply mock data for Authors...
    srv.on ('READ', 'Authors', ()=>[
      { ID:101, name:'Emily Brontë' },
      { ID:150, name:'Edgar Allen Poe' },
      { ID:170, name:'Richard Carpenter' },
    ])
   
   }
   
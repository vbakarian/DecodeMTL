const express = require('express')

const app = express();
const session = require('express-session')
app.use(session({ secret: 'I like dogs' }))
app.get('/', (req, res) => {
   let returningUser = req.session.returningUser;
   req.session.returningUser = true;
   if (returningUser) { res.send('Welcome back') }
   else { res.send('Welcome for the first time') }
})

app.listen(3000)
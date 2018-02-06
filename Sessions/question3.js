/*Without looking at the slides (if possible), implement a website that displays something the first time it is visited by a specific user and something else for all other times*/
const express = require('express');
const app = express();
//Assign a session ID to the user
app.get('/', (req, res) => {
    if (req.headers.cookie) {
        let cookies = parseCookies(req.headers.cookie);
        if (cookies.sessionId) {
            res.send("Your session id is " + cookies.sessionId);
            return;
        }
    }
    res.set('Set-Cookie', "sessionId=" + genRand())
    res.send(req.headers);
 })

 function genRand(){
     return Math.floor(Math.random() * 1000)
 }

 var parseCookies = (str) => {
    let asArray = str.split('; ').map(x => x.split('='));
    let ret = {};
    asArray.forEach(lst => ret[lst[0]] = lst[1])
    return ret;
}
 app.listen(3000,()=> console.log("listening on port 3000"))

 
 
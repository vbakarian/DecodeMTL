/*Implement a website that counts the number of times a specific user has visited a website and displays that number to the user*/

const express = require('express');
const app = express();
const fs = require('fs');
let trackUsage = {};
var obj;
app.get('/', (req, res) => {
    if (req.headers.cookie) {
        let cookies = parseCookies(req.headers.cookie);
        if (cookies.sessionId) {
            const newCount = parseInt(cookies.counter) + 1;
            res.set('Set-Cookie', "counter=" + newCount)
            res.send("SessionID is " + cookies.sessionId + " & visited: " + cookies.counter);
            return;
        }
    }

    res.set('Set-Cookie', ["sessionId=" + genRand(), "counter=" + 0]) //If the ID doesnt exist already, assign a session ID to the user
    res.send(req.headers); //After setting the session ID , print the headers to the page.
})

// app.get('/', (req, res) => {
//     if (req.headers.cookie) {
//         let cookies = parseCookies(req.headers.cookie);
//         if (cookies.sessionId) {
//             trackUsage[cookies.sessionId]++; 
//             res.send("SessionID is " + cookies.sessionId + " & visited: " + trackUsage[cookies.sessionId]);
//             return;
//         }
//     }
//     var sessionId = genRand();
//     trackUsage[sessionId] = 0;
//     res.set('Set-Cookie', "sessionId=" + sessionId); //If the ID doesnt exist already, assign a session ID to the user
//     res.send(req.headers); //After setting the session ID , print the headers to the page.
// })


//Generate a random number used for the SessionID
function genRand() {
    return Math.floor(Math.random() * 1000)
}

//Special function used to parse the inputted Cookies
var parseCookies = (str) => {
    let asArray = str.split('; ').map(x => x.split('='));
    let ret = {};
    asArray.forEach(lst => ret[lst[0]] = lst[1])
    return ret;
}

//Listen to the app on the specified port
app.listen(3000, () => console.log("listening on port 3000"))
const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.raw({ type: '*/*' }))

let strings = ['hello', 'goodbye', 'whats up']
let todoListMap = {};
app.post('/login', (req, res) => {
    let loginInfo = JSON.parse(req.body.toString())
    var username = loginInfo.username;
    var password = loginInfo.password;
    
    console.log(todoListMap)
    if (username == "vako" && password == "12345" || username == "nanor" && password == "12345") {
        res.send("success")
    } else {
        res.send("fail");
    }
    
})

app.get('/todos', (req, res) => {
    // if (todoListMap[username] === undefined) {
    //     todoListMap[username] = [];
    // }
    // todoListMap[username] = strings;
    res.send(JSON.stringify(strings));
})

app.post('/addTodo', (req, res) => {
    let response = req.body.toString();
    strings.push(JSON.parse(response))
    res.send("Your post request: " + strings);
})

app.post('/clearTodo', (req, res) => {
    return strings = [];
})

app.listen(4000, () => console.log("Listening on 4000"))
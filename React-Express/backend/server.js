const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs');

app.use(bodyParser.raw({ type: '*/*' }))

//let strings = ['hello', 'goodbye', 'whats up']
let todoListMap = {};

app.post('/todos', (req, res) => {
    let username = JSON.parse(req.body.toString());
    //console.log(todoListMap)
    res.send(todoListMap[username]);
})

app.post('/login', (req, res) => {
    let loginInfo = JSON.parse(req.body.toString());
    let usr = loginInfo.username;
    let pwd = loginInfo.password;
    console.log('USERNAME in /login: ', usr);
    console.log('PASSWORD in /login: ', pwd);
    
    if (usr == "vako" && pwd == "12345"
        || (usr == "helen" && pwd == "12345")) {
            if(!todoListMap[usr]){
                todoListMap[usr] = [];
                console.log('setting empty array: ', todoListMap)
                fs.writeFileSync('data.txt',JSON.stringify(todoListMap))
            }
            console.log("TODOLIST IN LOGIN: ", todoListMap);
        res.send("success")
    } else {
        res.send("fail");
    }
    todoListMap = JSON.parse(fs.readFileSync('data.txt').toString());
})

app.post('/addTodo', (req, res) => {
    let response = JSON.parse(req.body.toString());
    console.log(response);
    console.log(todoListMap)
    let username = response.username;
    let input = response.inputValue;
    todoListMap[username] = todoListMap[username].concat(input);
    fs.writeFileSync('data.txt',JSON.stringify(todoListMap));
    res.send("Your post request: " + todoListMap[username]);
})

app.post('/clearTodo', (req, res) => {
    return strings = [];
})

app.listen(4000, () => console.log("Listening on 4000"))
/*Implement the parseCookies function in your own way. Make sure it passes all the test cases of question 1.*/

let assert = require("assert");
let sport = "hockey";
let input = [
  "hello=world; foo=bar; chocolate=chip",
  "",
  "h3llo=worl!d",
  `port=${"#" + (3000 + 500).toString()}; sport=${sport}`
];
let output = [
  { hello: "world", foo: "bar", chocolate: "chip" },
  { "": undefined },
  { h3llo: "worl!d" },
  { port: "#3500", sport: "hockey" }
];

var f = (str) => {
    let asArrayString = str.split('; ');
    let asArrayMap = asArrayString.map(x => x.split('='))
    let ret = {};
    asArrayMap.forEach(lst => ret[lst[0]] = lst[1])
    return ret;
}

x => x * 3

for (var i = 0; i < input.length; i++) {
    if (assert.deepEqual(f(input[i]), output[i])) {
        throw new Error("Failed test #" + i);
    }
} 

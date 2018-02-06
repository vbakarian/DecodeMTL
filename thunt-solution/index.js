var fetch = require('node-fetch')
fetch('http://localhost:3000')
    .then(x => x.text())
    .then(y => console.log(y))
    .then(() => fetch('http://localhost:3000/Bloviate'))
    .then(x => x.text())
    .then(y => console.log(y))
    .then(() => fetch('http://localhost:3000/Discombobulate',
        {
            method: "PUT",
            body: "Allegator"
        })
        .then(x => x.text())
        .then(y => console.log(y)))
    .then(() => fetch('http://localhost:3000/Dudgeon',
        {
            method: "PUT",
            body: "Fartlek"
        })
        .then(x => x.text())
        .then(y => console.log(y)))
    .then(() => fetch('http://localhost:3000/Ecdysiast')
        .then(x => x.text())
        .then(y => console.log(y)))
    .then(() => fetch('http://localhost:3000/Codswallop')
        .then(x => x.text())
        .then(y => console.log(y)))
    .then(() => fetch('http://localhost:3000/Billingsgate', { method: "PUT", body: "Canoodle" })
        .then(x => x.text())
        .then(y => console.log(y)))
    .then(() => fetch('http://localhost:3000/Donnybrook', { method: "POST", body: "Catercornered" })
        .then(x => x.text())
        .then(y => console.log(y)))
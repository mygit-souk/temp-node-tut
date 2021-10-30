const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to my home page')
    } else if (req.url === '/about') {
        res.end('Here is short hist')
    }
    res.end(`<h1>Oops!</h1><p> can not find</p><a href="/">back home</a>`)

})

server.listen(5000)
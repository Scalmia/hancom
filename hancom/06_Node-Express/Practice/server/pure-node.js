// const http = require('http')

// const server = http.createServer((req, res) => {
//   if (req.url === '/' && req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.end('OK')
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' })
//     res.end('Not Found')
//   }
// })

// server.listen(3000)

const http = require('http')

http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home')
  } else if (req.url === '/about') {
    res.end('About')
  } else {
    res.writeHead(404)
    res.end('Not Found')
  }
}).listen(3000)
// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   res.send('OK')
// })

// app.listen(3000)

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Home'))
app.get('/about', (req, res) => res.send('About'))

app.listen(3000)
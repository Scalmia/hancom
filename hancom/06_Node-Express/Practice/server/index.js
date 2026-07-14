// console.log('Hello, Node!')

// // Node 내장 모듈 (설치 불필요)
// const os = require('os')
// console.log('CPU 개수:', os.cpus().length)
// console.log(os.cpus()[0].model)

// // 꺼내고 → 만들고 → 규칙 주고 → 문 연다 — 이 4박자가 모든 서버의 뼈대
// const express = require('express')   // 1. 꺼내고
// const app = express()                // 2. 만들고 (서버 본체)

// // 규칙 주고 — '/' 요청이 오면 응답
// app.get('/', (req, res) => {
//   res.send('Hello, Server!')
// })

// app.listen(3000, () => {       // 3. 문 연다 (없으면 서버 안 켜짐)
//   console.log('http://localhost:3000')
// })

// const express = require('express')
// const cors = require('cors')
// const app = express()

// app.get('/api/users', (req, res) => {
//   res.json([{
//     id: 1,
//     name: '홍길동'
//   }, {
//     id: 2,
//     name: '김철수'
//   }])
// })

// app.listen(3000, () =>
//   console.log('http://localhost:3000')
// )

// const users = [{ id: 1, name: '홍길동' }, { id: 2, name: '김철수' }, { id: 3, name: '박영희' }]

// app.get('/api/users/:id', (req, res) => {
//   const user = users.find(user => user.id === Number(req.params.id))
//   if (!user) return res.status(404).json({ message: 'User not found' })
//   res.json(user)}
// )

// app.listen(3000, () =>
//   console.log('http://localhost:3000')
// )

// app.use(express.json())

// app.post('/api/chat', (req, res) => {
//   const { message } = req.body
//   console.log('Received message : ', message)
//   res.json({ok: true, message: message})
// })

// app.listen(3000, () =>
//   console.log('http://localhost:3000')
// )

// app.use(express.json())

// const users = [{ id: 1, name: '홍길동' }, { id: 2, name: '김철수' }, { id: 3, name: '박영희' }]

// app.put('/api/users/:id', (req, res) => {
//   const user = users.find(user => user.id === Number(req.params.id))
//   if (!user) return res.status(404).json({ message: 'User not found' })
//   user.name = req.body.name
//   res.json(user)
// })

// app.listen(3000, async () => {
//   const res = await fetch('http://localhost:3000/api/users/1', {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: '이순신' })
//   })
//   console.log(await res.json())
// })

// let users = [{ id: 1, name: '홍길동' }, { id: 2, name: '김철수' }, { id: 3, name: '박영희' }]

// app.delete('/api/users/:id', (req, res) => {
//   users = users.filter(user => user.id !== Number(req.params.id))
//   res.json({ message: 'User deleted' })
// })

// app.listen(3000, async () => {
//   const res = await fetch('http://localhost:3000/api/users/2', { method: 'DELETE' })
//   console.log(await res.json())
// })

// app.use(cors())
// app.use(express.json())
// app.use((req, res, next) => {
//   console.log(req.method, req.url)
//   next()
// })

// app.get('/api/users', (req, res) => res.json([{ id: 1, name: '홍길동' }, { id: 2, name: '김철수' }]))
// app.listen(3000, () => console.log('http://localhost:3000/api/users'))
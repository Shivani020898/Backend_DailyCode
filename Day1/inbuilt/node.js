

const http = require('http')
const PORT = 5050
const server = http.createServer((req,res)=>{
  res.write('<h1>Hello My name is Rahul</h1>')
  res.end()
})

server.listen(PORT,()=>{
  console.log(`server listenin on http://localhost:${PORT}`)
})


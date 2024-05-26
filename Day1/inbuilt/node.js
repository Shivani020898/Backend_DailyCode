const http = require('http')
const PORT = 5050
const server = http.createServer((req,res)=>{
  // res.write('')
  res.end('<h1>Hello</h1>')
})

server.listen(PORT,()=>{
  console.log(`server listenin on http://localhost:${PORT}`)
})


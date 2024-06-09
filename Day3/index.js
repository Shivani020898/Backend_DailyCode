const fs = require("fs")
// fs.readFile('./note.txt',{encoding:"utf-8"},(err,data)=>{
//     if(err){
//         console.log('can not read the file')
//         console.log(err)
//     }
//     else{
//           console.log(data)
//     }
// })
fs.writeFile('text.txt','hii everyone this is node class',(err)=>{
      if(err){
        console.log(err)
        console.log('can not write into the file')
      }
      else{
        console.log('Data has been entered')
      }
})
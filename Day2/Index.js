const express = require("express");
const bodyParser = require("body-parser")
const app = express();
 app.use(bodyParser())
const PORT = 5050;
app.get
("/", (req, res) => {
  res.send("This is Home page");
});

app.get("/About", (req, res) => {
  res.send("this is About page");
});

app.get("/Setting", (req, res) => {
  res.send("This is setting page");
});
app.post('/PostData',(req,res)=>{
    const data = req.body
    res.send({message:"data posted succeddfully",data})
})
app.listen(PORT, () => {
  console.log("Server is listining");
});


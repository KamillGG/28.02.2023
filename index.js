const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 3000

app.get("/", function(req,res){
    res.send("ok")
})




app.listen(port)


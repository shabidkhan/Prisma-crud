const express = require('express');
const app = express();
require("dotenv").config()
var PORT = process.env.PORT || 3000; 
let routes = require("./routes/path.route")
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.use(routes)

app.listen(PORT,()=>{
    console.log(`server starting at ${PORT}`);
})

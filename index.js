const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

//MIDDLE WARE 
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("request got successfully");
})

app.listen(port, ()=>{
        console.log("server is listening");
})
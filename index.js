const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

//MIDDLE WARE 
app.use(cors());
app.use(express.json());

//mongodb code

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user1:ORr9tZRNxxbPRT74@cluster0.chfdd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     console.log("db connected");
//     // perform actions on the collection object
//     client.close();-------chose is good and bad, if certeain operation, then close; if multiple operation going to happen, then don’t close.
// });
async function run(){
    try{
        await client.connect();

        const usersCollection = client.db("express").collection("users");

        const doc = {name: "montor", number: '11223344'};

        const result = await usersCollection.insertOne(doc);
        console.log(result, result.insertedId);


    }
    finally{
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res)=>{
    res.send("request got successfully");
})

app.listen(port, ()=>{
        console.log("server is listening");
})
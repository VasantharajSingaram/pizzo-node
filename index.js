import express, { query } from "express";
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv'
import cors from 'cors';


dotenv.config()

const app = express();

const PORT = process.env.PORT;

// Mongo
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL); // dail
await client.connect(); // call
console.log("Mongo is connected !!!");


// Home Page
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});



app.use(express.json());
app.use(cors());



app.post('/pizzo', async (request, response) => {
    const data = request.body; 
    const result = await client.db('pizzo').collection('pizzas').insertMany(data);
    response.send(result);
  })

  app.get('/pizzo', async (request, response) => {
    const data = request.body; 
    const result = await client.db('pizzo').collection('pizzas').find({}).toArray();
    response.send(result);
  })

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
``
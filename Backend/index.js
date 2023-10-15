import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./booksRoute.js";
import cors from "cors";
import { createClient } from 'redis';

const app = express();
const client = createClient({
  host : 'redis-server'
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

client.set('visits',0);

app.use(cors());

app.get("/", (request, response) => {
  client.get('visits',(err,visits) => {
    return response.status(200).send('Number of visits' + visits)
    client.set('visits', parseInt(visits) + 1);
  })
  
});

//Middleware for parsing request body
app.use(express.json());

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

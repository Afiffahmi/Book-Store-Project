import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./booksRoute.js"
import cors from "cors"


const app = express();

app.get('/', (request,response) => {
 console.log(request);
 return response.status(200).send("Welcome to MERN STACK");
});

//Middleware for parsing request body
app.use(express.json());

app.use('/books', booksRoute);

app.use(cors());


mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
})



import express from "express";
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose";


const app = express();

app.get('/', (request,response) => {
 console.log(request);
 return response.status(200).send("Welcome to MERN STACK");
});

//Middleware for parsing request body
app.use(express.json());



mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
})

app.post('/books', async (request,response) => {
    try {
        if(!request.body.title ||
            !request.body.author ||
            !request.body.publishYear){
                return response.status(400).send({
                    message:'send all required field'
                });
            }
            const newBook = {
                title : request.body.title,
                author: request.body.author,
                publishYear : request.body.publishYear,
            };
            const book = await Book.create(new book);
            return response.status(201).send(book);
    }catch (error){
        console.log(error.message);
        response.status(500).send({message : error.message});
    }
})


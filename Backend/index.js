import express from "express";
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose";


const app = express();

app.get('/', (request,response) => {
 console.log(request);
 return response.status(200).send("Welcome to MERN STACK");
});



mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
})


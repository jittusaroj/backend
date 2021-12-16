import express from "express";
import Route from "./routes/routes.js";
import path from 'path'
import cors from "cors";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mongoose from "mongoose";
const port = 800



const app = express()
app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/uploads',express.static('uploads')); 
const URL = "mongodb+srv://admin:admin@flipkart.5mzlj.mongodb.net/ECOMMERCE?retryWrites=true&w=majority";
    mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    app.listen(port, () => {
        console.log('app is running at port 800');
    })
}).catch((error) => {
    console.log(`the error is ${error}`)
})
app.use('/api',Route);


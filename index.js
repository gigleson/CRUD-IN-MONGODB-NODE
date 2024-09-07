import express, { json, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
import cors from "cors";



const app = express();
app.use(express.json());

app.use(cors({}))

app.use("/books",booksRoute);


app.get('/', (req, res) => {
    console.log(request);
    return res.status(234).send("hello")
});


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('connected to database')
        app.listen(PORT, () => {
            console.log(`Prot :${PORT}`);
        });
    })
    .catch((error) => {

        console.log(error);
    })



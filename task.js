const express = require("express");
const mongoose = require("mongoose")

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://ajilalitha01:Y6G2lwZ7eVes6dER@cluster0.xytfa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("MangoDB connected")
    })

    .catch((e) => {
        console.log(`connection error: ${e.message}`);

    })

const dataSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    cakeorder:
    {
        type:String,     
    },
    cakequanity: {
        type: Number,
       
    },
    cakeprice: {
        type: Number,
        default: "Test"
    },
    cakes: {
        type: String,
        enum: ["chocolate","venilla","butterscotch"]
    }
}, {timestamps: true}

);

const bakerycakes = mongoose.model("Chocolate cake",dataSchema);

app.post("/cakes", async (req,res) =>{
    try{
        let createbakery = await bakerycakes.create(req.body);
        res.json({
            createbakery,
            message: "Cake added"
        });

    }catch (error){
        res.json({
            Error: error
        })
    }
});



const port = 8000;

app.listen(port, () => {
    console.log("server is running on:", port); 
});

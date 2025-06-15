const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const main = require("./config/DB");
const chatRoutes = require("./routes/Chat");

// Configure the .env file
dotenv.config();

// Create the server
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173", // fallback for local dev
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());  //for parsing


app.use("/api/chats",chatRoutes);


const InitializeComponent = async()=>{
    try{
        await main();
        console.log("Connected to Database");
        
        app.listen(process.env.PORT,()=>{
        console.log("Server is Listening");
    });
    }
    catch(err)
    {
        console.log("Error "+err);
    }
}

InitializeComponent();
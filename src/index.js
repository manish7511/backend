// require('dotenv').config()
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDb from "./db/index.js";
import {app} from "./app.js"


dotenv.config({
    path:'/env'
})


connectDb()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(` server is running at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed!!",err);
})















// import express  from "express";
// const app=express();
// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
//        app.on("error",(error)=>{
//         console.log("error",error);
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`app is listening on port ${process.env.PORT}`);
//        })

//     } catch (error) {
//         console.log("error",error);
//     }
// })()
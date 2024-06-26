import bodyParser from 'body-parser'
import cors from 'cors'
import dontenv from "dotenv"
import express from "express"
import mongoose from "mongoose"

import path from 'path'

import commentsRoutes from './routes/comments.js'
import userRoutes from './routes/user.js'
import videoRoutes from './routes/video.js'

dontenv.config()
const app=express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use('/uploads',express.static(path.join('uploads')))


app.get('/',(req,res)=>{
    res.send("hello")
})

app.use('/user',userRoutes)
app.use('/video',videoRoutes)
app.use('/comment',commentsRoutes)



const PORT= process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server Running on the PORT ${PORT}`)
})


const DB_URL = process.env.CONNECTION_URL
// mongoose.connect(DB_URL,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
//     console.log("MongoDB database connected")
// }).catch((error)=>{
//     console.log(error)
// })

// mongoose.connect(DB_URL)
//     .then(() => {
//         console.log('MongoDB connected');
//         const server = app.listen(PORT, () => {
//             console.log(`Server running on port ${PORT}`);
//         });

//         server.on('error', (error) => {
//             if (error.syscall !== 'listen') {
//                 throw error;
//             }

//             switch (error.code) {
//                 case 'EACCES':
//                     console.error(`Port ${PORT} requires elevated privileges`);
//                     process.exit(1);
//                     break;
//                 case 'EADDRINUSE':
//                     console.error(`Port ${PORT} is already in use`);
//                     process.exit(1);
//                     break;
//                 default:
//                     throw error;
//             }
//         });
//     })
//     .catch((error) => {
//         console.error('MongoDB connection error:', error);
//     });

// process.on('SIGINT', () => {
//     mongoose.connection.close(() => {
//         console.log('MongoDB connection closed');
//         process.exit(0);
//     });
// });

mongoose.connect(DB_URL)
    .then(() => {
        console.log("MongoDB database connected");
    })
    .catch((error) => {
        console.log(error);
    });
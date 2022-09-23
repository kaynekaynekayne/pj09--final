import express, { json, urlencoded } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import expressValidator from 'express-validator';
import userRouter from './routes/userRouter.js';
import eventRouter from './routes/eventRouter.js';
import path from 'path';
const __dirname = path.resolve();


const app=express();

mongoose.connect(process.env.DB_URL)
.then(()=>console.log('DB CONNECTED!'))
.catch((err)=>console.log(`DB CONNECTION ERROR: ${err}`))

app.use(morgan('dev'));
app.use(cors({origin:true, credentials:true}));
app.use(json());
app.use(urlencoded({extended:false}));

app.use(cookieParser());
app.use(expressValidator());

app.use("/user", userRouter);
app.use("/api", eventRouter);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
    
    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}


const PORT=process.env.PORT || 4040;

app.listen(PORT, ()=>console.log(`server on ${PORT}`));
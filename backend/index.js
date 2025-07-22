import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// routes
import userRoute from './routes/user.js';
import commentRoute from './routes/comment.js';

const app = express();

dotenv.config();

app.use(cors({
   origin: 'http://localhost:5173', // Your frontend URL
   credentials: true    // Allow cookies to be sent/received
}))
app.use(express.json());
app.use(cookieParser()); //function

async function connectToDB() {
   try{
      await mongoose.connect(process.env.MONGO_URI);
      console.log('Connected to MongoDB')
   } catch(err){
      console.error('Error connecting MongoDB: ', err);
      process.exit(1);
   }
}

connectToDB();

app.get('/', (req,res) => { 
    res.send('This is an api for Feedback App');
 })

 app.use('/users',userRoute);
 app.use('/comments',commentRoute);

 
 const port = process.env.PORT || 3000;
 app.listen(port,() => { 
    console.log(`Server is running on the port ${port}`)
  })
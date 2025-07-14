import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req,res) => { 
    res.send('This is the first express test');
 })

 app.listen(port,() => { 
    console.log(`Server is running on the port ${port}`)
  })
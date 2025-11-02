import express from 'express';
import Connection from './database/db.js';
import router from './routes/api.js';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(cors());
app.use('/',router);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname,'/frontend/dist')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

})

Connection();
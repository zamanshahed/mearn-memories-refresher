import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

// time to connect to mongo_db database (atlas)
const CONNECTION_URL = "mongodb+srv://zamanshahed:1hY4pEj4g8CcpE92@memories.d8byrn6.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=>console.log(`Memory Server running on port: ${PORT}`)))
        .catch((error)=>console.log("Server Connect Error: ", error.message));

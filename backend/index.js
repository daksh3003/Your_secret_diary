const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

//middleware to deal with request's body
app.use(cors());
app.use(express.json());


//available routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port,()=>{
    console.log(`your secret diary is listening at http://localhost:${port}`)
})
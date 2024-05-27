const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();
const port = 3000;

//middleware to deal with request's body
app.use(express.json());


//available routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port,()=>{
    console.log(`app is listening at http://localhost:${port}`)
})
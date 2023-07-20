require('dotenv').config();
// Importing
// Express
const express = require('express');
const app = express();

// DB
const mongoose = require('mongoose');

//MiddleWares
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Routes
const  authRoutes = require('./routes/auth')
const programRoutes = require('./routes/programs')


// Importing ends


// DB connection
mongoose.connect(process.env.DATABASES)
    .then(()=>{
        console.log("DB CONNECTED!");
    })
    .catch(()=>{
        console.log("DB connectivity failed!")
    })

// MiddleWares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//My Routes
app.use('/api', authRoutes);
app.use('/api', programRoutes);





//PORT
const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send("Hello World!")
})

//Starting a server
app.listen(port, ()=> console.log(`Listening on http://localhost:${port}`))

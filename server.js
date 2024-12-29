const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const {DB_URL} = require('./config/db.config');
const {PORT} = require('./config/server.config');
const cors = require('cors');
const app = express();
const publicRoutes = require('./src/route/public.route');

app.use(cors());
app.use(express.json());
mongoose.connect(DB_URL).then(()=>{ console.log(`Connected to Database`)}).catch(err => console.error(err))

app.use(publicRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
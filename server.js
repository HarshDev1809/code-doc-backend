const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const {DB_URL} = require('./config/db.config');
const {PORT} = require('./config/server.config');
const cors = require('cors');
const app = express();
const publicRoutes = require('./src/route/public.route');
const authRoute = require('./src/route/auth.route');

app.use(cors());
app.use(express.json());
mongoose.connect(DB_URL).then(()=>{ console.log(`Connected to Database`)}).catch(err => console.error(err))

app.use(publicRoutes);
app.use("/auth",authRoute)

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`Server is running on port ${PORT}`)
})
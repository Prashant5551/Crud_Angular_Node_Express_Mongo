const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const app = express();
const connectDB = require('./config/db');
connectDB();

app.get("/", (req, res) => {
    res.send("Hello from the Server");
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on PORT ${process.env.PORT}`);
});
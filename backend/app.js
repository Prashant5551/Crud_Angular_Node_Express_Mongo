const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const morgan = require('morgan');
connectDB();

const studentRoutes = require("./routes/student");

//Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/students", studentRoutes);

app.listen(process.env.PORT, () => {
    console.log(`server is running on PORT ${process.env.PORT}`);
});
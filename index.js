const express = require('express');
const cors = require('cors');
const connectDB = require('./connection/connection');
const cookieParser = require('cookie-parser');
const User = require('./models/users');

//Routes
const userRoutes = require('./routes/user');

const app = express();
const port = 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', userRoutes);

app.listen(port, () => {
    console.log(`Server is up and running at port: ${port}`);
});
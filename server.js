const express = require('express');
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}
const connectDB = require('./db/db')
const app = express();


//body parser for parsing json data
app.use(express.json());

//DB connection
connectDB();

app.get('/', (req, res) => {
    return res.send("Hello From Starter pack")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))

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

app.use('/api', require('./routes/user'))

if (['production'].includes(process.env.NODE_ENV)) {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))

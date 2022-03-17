const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
const routeUrl = require('./routes/routes')
const cors = require('cors')

mongoose.connect(process.env.database_access, {
    useNewUrlParser: true,
    //    useFindAndModify: false,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
    console.log("Connected successfully");
});

app.use(express.json())
app.use(cors())

app.use('/app', routeUrl)
app.listen(4000, () => {
    console.log("Server is Up and Running Sucessfuly.")
})
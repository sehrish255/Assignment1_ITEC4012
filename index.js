//requiring express
const express = require('express');

//initializing express app
const app = express();

//specifying a port to listen on localhost:9000
const port = 9000;

//API /urls. Request and response 
app.get('/', (req, res) =>{
    res.send("Hi from the express server!");
});

//running the express http server on the port we specified 
app.listen(port, () => {
    console.log("Listening on port", port);
});
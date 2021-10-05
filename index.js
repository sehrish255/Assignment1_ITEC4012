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

app.get('/api/penguins', (req, res)=>{
    
    //call to database

    //return dummy data
    const penguins = ["Penguins can weigh 2lbs to 80lbs. ", "They have flippers not wings. ", "Climate change is their biggest threat. ",
    "their fur color is for camouflage. ", "They live 15-20 years. ", "The eat Krill. ", "They have a unique call. ", "They cannot fly. ", 
    "They can hold their breath for 6 minutes. ", "They are warm blooded. "];

    //sending a response in JSON
    res.send(JSON.stringify(penguins));
});

app.get('/api/bears', (req, res)=>{
    
    //call to database

    //return dummy data
    const bears = ["Bears grieve deeply for others. ", "Bears have excellent senses of smell, sight and hearing. ", "Bears are extraordinarily intelligent animals. ",
    "Pandas Have an Extra Bone Just for Eating. ", "Brown Bears Are the Most Widespread. ", "Black Bears Are Not Always Black. ", "White Bears Have Cultural Significance. ", 
    "Polar Bears Are Marine Mammals. ", "Canada is home to nearly 60 % of the world’s polar bears. ", "Black bears can run at the speed up to 35mph. "];

    //sending a response in JSON
    res.send(JSON.stringify(bears));
});

//running the express http server on the port we specified 
app.listen(port, () => {
    console.log("Listening on port", port);
});
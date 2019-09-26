const express = require ("express"); //import express
const app = express(); //create an express app
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/colors", (req, res) => {
    res.send(["red", "blue", "yellow", "pink"]);
});
app.get("/fruits", (req, res) => {
    res.send(["orange", "apple", "mango", "cashew"]);
});


app.get("/details", (req, res) => {
    console.log(req.query);
    res.send(
        `hi ${req.query.fullname} your <strong>${req.query.subject}</strong> form has been submited`
    ); //string interpulation
    //res.sendFile(__dirname + "/index.html")
});

//attach the server to a reportgit

app.post("/login", (req, res) => {
    console.log(req.body);
    // res.send(`Username is ${req.body.username} and password is ${req.body.password}`);
    if(req.body.username === 'titus' && req.body.password === 'xty'){
        res.send('login successful')
    }else{
        res.send('password or username incorrect')
    }
    console.log(req.body)
});

//create a default route (404) (7)
app.use("*", (req, res) => {
    res.status(404).send("<h1>404, page not found</h1>");
});

app.listen(3000, () => console.log("Server running at port 3000"));
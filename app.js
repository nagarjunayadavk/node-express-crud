// Author = Nagarjuna Yadav K.
var express = require("express");
const bodyParser = require('body-parser');
//express router for products
var product = require("./routes/product");
// initialize our express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/products', product);

const server = app;

//Access-Control-Allow-Origin
server.use((req, resp, next) => {
    resp.set('Access-Control-Allow-Origin', '*');
    resp.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    resp.set('Access-Control-Allow-Headers', 'Content-Type,Accept,Authorization');
    next();// it require////
});

//to Accept all requests of OPTIONS
app.options('/*', (req, resp) => {
    resp.end();
})

server.get('/test', (req, resp) => {
    resp.json('sucessfully Triggred');
});

var port = process.env.PORT || 900;
server.listen(port, () => {
    console.log("REST Endpoint Server at port" + port);
});
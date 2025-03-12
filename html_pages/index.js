const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');

const public_path = path.join(__dirname, 'public');
//app.use is like a middleware applied to the entire request
app.use(express.static(public_path));
//run server
app.listen(8080, "localhost", function(error){
    if(error) console.log(error);
    console.log("Server running on port number 8080")
})
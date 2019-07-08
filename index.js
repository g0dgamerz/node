express = require('express');

app = express();

app.use(express.static('public'))

app.post('/',(req,res) => {
    // res.send('Hello World');


})
app.get('/contact',(req,res) => {
    // res.sendFile(app.use(express.static('public')));


})
app.get('/aboutus',(req,res) => {
    res.send('this is about us page ');


})

app.listen(3000,function() {console.log("server is running")});
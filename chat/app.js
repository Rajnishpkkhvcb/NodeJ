const express = require('express'); //Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware 

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
  extended:true}));

// Route to Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html");
});


  


// Route to Login Page
//app.post('/login', (req, res) => {
  //res.send('<form action="log" method="POST"><input type="text" name="useranme" placeholder"Username"><button type="submit"></button><input type="text" name="message" placeholder"message"><button type="submit"></button><input></form>');
//});

app.post('/log',(req,res)=>{
  var username = String(req.body.username);
  var message = String(req.body.Message);
  var result = username +":--" + message ;
  res.send(result)
})


const port =8020  // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));
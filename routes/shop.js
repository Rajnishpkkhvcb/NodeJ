const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

router.post('/success',(req,res,next)=>{
  res.send("<h1>Form filled Successfully</h1>")
});

router.get('/contact', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
});

module.exports = router;

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes=require('./routes/admin.js')
const shopRoutes=require('./routes/shop.js')
const app = express();
app.use('/admin',adminRoutes);

app.use(shopRoutes)



app.use(bodyParser.urlencoded({extended: false}));


app.listen(3000);

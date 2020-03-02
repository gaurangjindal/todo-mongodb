const express = require('express');
const mustacheExpress = require('mustache-express');
 const bodyparser = require ('body-parser');
 const mongoose = require('mongoose');
const routes = require('./routes/routes');


//connecting to db
mongoose.connect('mongodb://localhost:27017/mongoose_express_todos',{
    useMongoClient :true
}).then (function(){
    console.log('databse connected');
});


// creating the express instance
 const app = express();

 app.use(bodyparser.urlencoded({ extended :true}));

 const mustacheExpressInstance = mustacheExpress();
 mustacheExpressInstance.cache = null;

 app.engine('mustache', mustacheExpressInstance);
 app.set('view engine','mustache');
 app.set('views',__dirname +'/views');

 app.use('/',routes);
 app.listen(4000,function(){
     console.log('server started');
 })
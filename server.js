var express = require('express'),
    path    = require('path'),
    app     = express();
    
// Setting 'view' to work with Slim.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'slm');



app.get('/', function(req, res){
    res.render('testing');
});
    
app.listen(process.env.PORT, process.env.IP, function(){
    console.log(`Elvin Samuel Website Listening On Port ${process.env.PORT}`);
});
var express = require('express'),
    path    = require('path'),
    app     = express();
    
    
// Setting 'view' to work with Slim.
// app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');



app.get('/', function(req, res){
    res.render('index');
});
    
app.listen(process.env.PORT, process.env.IP, function(){
    console.log(`Elvin Samuel Website Listening On Port ${process.env.PORT}`);
});
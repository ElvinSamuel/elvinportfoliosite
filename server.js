var express = require('express'),
    path    = require('path'),
    app     = express();
    
    
// app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'))
// app.set('view engine', 'html');


app.get('/', function(req, res){
    res.sendFile('index');
});
    
    
    
app.listen(process.env.PORT, process.env.IP, function(){
    console.log(`Elvin Samuel Website Listening On Port ${process.env.PORT}`);
});
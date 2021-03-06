//declaration
var express 		= require('express');
var bodyParser 		= require('body-parser');
var ejs 			= require('ejs');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var login 			= require('./controllers/login');
var logout 			= require('./controllers/logout');
var home 			= require('./controllers/home');
var home 			= require('./controllers/regi');

var app = express();


app.set('view engine', 'ejs');



app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/logout', logout);
app.use('/home', home);
app.use('/regi', regi);



app.get('/', function(req, res){
	res.render('index');
});




app.listen(3000, function(){
	console.log('server started at 3000!');
});

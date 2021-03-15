const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;
const hostName = '127.0.0.1';

// session storage
const session = require('express-session');

// connect to mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bookstoreDB', {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
});

// mongoose.connection.on('error', console.error);
// mongoose.connection.on('open', function(){
//     console.log('Database connection extablished ... banana');
// });

// parsers
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(session({secret: "secrets", saveUninitialized: false, resave: false}));

// setup hbs engine
// app.engine('hbs', hbs({extname: 'hbs', defaultLayout: null}));
// app.set("views", __dirname + "/views");
// app.set('view engine', 'hbs');

// import routes
const booksRouter = require('./routes/books');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');
app.use('/books', booksRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

// Home Route
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

// set CORS
// const setCors = require('./middleware/security');
// app.use((req, res, next) => {
//     setCors(req, res);
//     next();
// });

// error handlers
app.use(function(req, res, next) {
    const error = new Error("Looks like something broke...");
    error.status = 400;
    next(error);
});
  
app.use(function(err, req, res, next) {
res.status(err.status || 500).send({
    error: {
    message: err.message
    }
});
});


app.listen(port, hostName, () => console.log(`Listening at: ${hostName}:${port}`) )
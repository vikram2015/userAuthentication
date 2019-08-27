let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let cors = require('cors');
let path = require('path');
var session = require('express-session')


let config = require('./config/config');
let UserRouter = require('./backend/router/user/userRouter');
let RegisterUser = require('./backend/router/register/registerRouter');
let HomeRouter = require('./backend/router/home/homeRouter');
let LoginUser = require('./backend/router/login/loginRouter');

const IN_PROD = config.NODE_ENV === 'production'
let app = express();

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(session({
    name:config.SESS_NAME,
    resave:false,
    saveUninitialized : false,
    secret : config.SESS_SECRET,
    cookie:{
        maxAge : config.SESS_LIFETIME,
        sameSite : true,
        secure : IN_PROD
    }
}));


//Routes

app.use('/user',UserRouter);
app.use('/home',HomeRouter);
app.use('/register',RegisterUser);
app.use('/login',LoginUser);


app.use((data,req, res, next) => {
    const error = new Error(data);
    error.status = 404;
    next(error);
});

// app.use((error, req, res) => {
//     res.status(error.status || 500);
//     res.send({
//         error: {
//             message: error.message,
//             status: error.status
//         }
//     })
// })

app.get('*', function (req, res, next) {
    console.log(req.session);
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

//server start
app.listen(config.port, function (err) {
    if (err) {
        console.log('error found in server start' + err);
    } else {
        console.log("connected to server at port " + config.port);
    }
});



//databse connectivity
mongoose.connect(config.database);
mongoose.connection.on("connected", function (err) {
    if (err) {
        console.log("error in database connectivity" + err);
    } else {
        console.log('connected to database at port 27017');
    }
});




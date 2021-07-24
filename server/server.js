const express = require('express');
const app = express();
const cors = require('cors');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
//configure cors
app.use(cors());

// configure dotEnv
dotEnv.config({path : './config/config.env'});

const port = 5000 || process.env.PORT;

// configure express to accept form data
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// homepage Request
app.get('/' , (request , response) => {
   response.send('Welcome To Literate App express server');
});

// connect to mongo
mongoose.connect(process.env.MONGO_LOCAL_DB_URL , {
    useUnifiedTopology : true,
    useFindAndModify : false,
    useNewUrlParser : true,
    useCreateIndex : true
}).then((response) => {
    console.log('Connected to Mongo DB Successfully............');
}).catch((error) => {
    console.error(error);
    process.exit(1); // stop the node js process
});

//configure a router
app.use('/users' , require('./router/userRouter'));
// app.use('/admin' , require('./router/adminRouter'));


//listen to Port
app.listen(port , () => {
   console.log(`Express Server is Started at...............`);
});
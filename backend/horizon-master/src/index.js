const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRoute');
const cors = require('cors');
const serverConfig = require('./configs/serverConfig');
const connectDB = require('./configs/dbConfig');
const instituteRouter = require('./routes/instituteRoutes');
const requirementRouter = require('./routes/requirementRoutes');
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended : true}));
app.use(cors());

app.use('/auth',authRouter);
app.use('/institutes',instituteRouter);
app.use('/requirements',requirementRouter);

app.listen(serverConfig.PORT, async ()=>{
    
    await connectDB();
    console.log(`server started at port: ${serverConfig.PORT}...!!`);

});

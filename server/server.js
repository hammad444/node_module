
require('rootpath')();
const express = require('express');
const app = express();
const dotenv =require('dotenv') 
const path =require("path") 
const morgan =require("morgan") 
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorMiddleware');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config()
app.use(express.json())


// api routes
app.use('/users', require('./controllers/userController'));
app.use('/payments', require('./controllers/paymentController'));
app.use('/packages', require('./controllers/packageController'));
app.use('/uploaddata', require('./uploader/dataUploader'));
app.use('/alldata', require('./controllers/dataController'));
app.use('/otherdata', require('./controllers/otherDataController'));
app.use('/searchdata', require('./controllers/searchController'));
app.use('/searchdata', require('./controllers/searchController'));
app.use('/otpcode', require('./controllers/otpController'));
app.use('/dairy', require('./controllers/dairyController'));


app.use(express.static(path.join('server/uploads/')))
const port=process.env.PORT || 4000

if(process.env.NODE_ENV === "development"){
  app.use(morgan('dev'))
}
// const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
  )
}else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
  }
// global error handler
// app.use(errorHandler);

 app.listen(port,()=>{
    console.log(`server is running in port ${port}`)
})
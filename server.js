// express를 불러온 것
const express = require('express');
// express를 실행하는 것을 app 이라고 부르기로 상수화
const app = express();
// mongoose loading
const mongoose = require('mongoose');
// morgan loading
const morgan = require('morgan');
// body-parser loading
const bodyParser = require("body-parser");


//server.js 파일에서 라우트를 만들어서 상수화 시켜준다
//require(경로)를 orderRoute와 productRoute로 상수화 시켜준다

const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');

const mongoDBurl = "mongodb+srv://seolin202:tjfdls0114**@cluster0-4lqvd.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDBurl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongDB conneted.."))
    .catch(err => console.log(err.message));

app.use('/products', productsRoute);
app.use('/orders', ordersRoute);
// dev는 개발자 버젼, 콘솔로그창에 디테일한 표시 
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));










// port는 3000번(보통)
const port = 3000;
// app중의 .listen이라는 모듈을 실행한다 그리고 console.log를 통해 서버가 실행되면 server started..라는 스트링을 보이게 한다.
app.listen(port,console.log("server started.."));
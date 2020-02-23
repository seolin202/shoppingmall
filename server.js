
// express를 불러온 것
const express = require('express');
// express를 실행하는 것을 app 이라고 부르기로 상수화
const app = express();


//server.js 파일에서 라우트를 만들어서 상수화 시켜준다
//require(경로)를 orderRoute와 productRoute로 상수화 시켜준다

const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');


app.use('/products', productsRoute);
app.use('/orders', ordersRoute);










// port는 3000번(보통)
const port = 3000;
// app중의 .listen이라는 모듈을 실행한다 그리고 console.log를 통해 서버가 실행되면 server started..라는 스트링을 보이게 한다.
app.listen(port,console.log("server started.."));
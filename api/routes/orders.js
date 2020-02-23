// 익스프레스를 불러온다
const express = require('express');
// express안에 있는 많은 모듈들 중에 .Router();를 쓰고 싶다
// 이것을 router 라고 상수한다
const router = express.Router();

//오더와 관련된 api 즉 order CRUD는 여기서 진행될 것이다
//req(require), res(response)
router.get('/', (req, res) => {
    res.json({
        msg: "ordersdata get"
    });
});




//라우터를 모듈화 시켜서 내보낸다
module.exports = router;
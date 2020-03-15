const express = require('express');
const router = express.Router();

// 프로덕트와 관련된 api 즉 데이터 CRUD가 여기서 진행된다
router.get('/', (req, res) => {
    res.json({
        msg: "products data get"
    });
});

router.post('/', (req, res) => {

    const products = {
        name : req.body.productname,
        price : req.body.productprice,
        qty : req.body.productqty,
        from : req.body.productfrom
    };
    
    res.json({
        msg: "products posting"
    });
});

router.patch('/', (req, res) => {
    res.json({
        msg: "products updated"
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: "products deleted"
    });
});

module.exports = router;
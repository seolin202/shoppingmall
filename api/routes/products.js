const express = require('express');
const router = express.Router();

// 프로덕트와 관련된 api 즉 데이터 CRUD가 여기서 진행된다
router.get('/', (req, res) => {
    res.json({
        msg: "productsdata get"
    });
});

router.post('/', (req, res) => {
    res.json({
        msg: "products posting"
    });
});

router. patch('/', (req, res) => {
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
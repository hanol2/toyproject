const express = require('express');
const router = express.Router();
const conn = require('../config/database');

router.post('/Login', (req, res) => {
    console.log('Login Router!', req.body);
    // 라우터 로직을 추가하세요.
});

module.exports = router; // 라우터 모듈을 내보냅니다.
const express = require('express');
const router = express.Router();
const conn = require('../config/database');

// 아이디 중복확인
router.post('/checkid', (req, res) => {
    console.log('checkId Router!', req.body);
    let { id } = req.body;

    let sql = 'SELECT id FROM bro_member WHERE id = ?';
    conn.query(sql, [id], (err, rows) => {
        console.log('rows', rows);
        console.log('err', err);

        if (err == null) {
            // 오류 X
            if (rows.length > 0) {
                // 중복
                res.json({ result: "dup" });
            } else {
                // 가입 가능
                res.json({ result: "uniq" });
            }
        }
    });
});

// 회원가입 로직
router.post('/join', (req, res) => {
    console.log('Join Router!', req.body);
    const { id, pw1 } = req.body;

    let sql = 'INSERT INTO bro_member VALUES (?, ?)';
    conn.query(sql, [id, pw1], (err, result) => {
        if (err) {
            console.error('err', err);
            res.status(500).json({ msg: 'failed' });
        } else {
            if (result.affectedRows > 0) {
                res.json({ msg: 'success' });
            } else {
                res.json({ msg: 'failed' });
            }
        }
    });
});


router.post('/login', (req, res) => {
    console.log('Login Router!', req.body);
    const { id, pw } = req.body;

    let sql = 'SELECT FROM bro_member where id=?, pw=?';
    conn.query(sql, [id, pw1], (err, result) => {
        if (err) {
            console.error('err', err);
            res.status(500).json({ msg: 'failed' });
        } else {
            if (result.affectedRows > 0) {
                res.json({ msg: 'success' });
            } else {
                res.json({ msg: 'failed' });
            }
        }
    });
});


module.exports = router; // 라우터 모듈을 내보냅니다.
const express = require('express')
const db_config = require('../config/database')
const router = express.Router()

// mysql DB 사용
const conn = db_config.init()
db_config.connect(conn)

// 회원가입
// http://172.30.1.23:8888/join
router.post('/join', (req, res)=>{
    console.log(req.body.AndMember);
    let andMember = JSON.parse(req.body.AndMember)

    console.log(andMember);

    res.send('OK')
})

module.exports = router
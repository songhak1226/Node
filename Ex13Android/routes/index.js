const express = require('express')
const db_config = require('../config/database')
const router = express.Router()

// mysql DB 사용
const conn = db_config.init()
db_config.connect(conn)

// 회원가입
// http://172.30.1.23:8089/join
router.post('/join', (req, res)=>{
    console.log(req.body.AndMember);
    let {id, pw, tel, birth} = JSON.parse(req.body.AndMember)

    let sql = 'insert into andmember values (?,?,?,?)'

    conn.query(sql, [id, pw, tel, birth], function(err, rows){
        if(err){ // 오류 발생
            console.log(err)
            res.send('Fail')
        } else { // 오류 X
            // console.log(rows)
            if(rows.affectedRows > 0){ // 값이 잘 들어갔을 때
                res.send('Success')
            } else {
                res.send('Fail')
            }
        }
    })
})


// 로그인
router.post('/login', (req, res)=>{
    // console.log('req 찍은거',req);
    console.log('req.body 찍은거', req.body);
    console.log('AndMember까지 찍은거',req.body.AndMember)
    let {id, pw} = JSON.parse(req.body.AndMember)

    let sql = 'select * from andmember where id=? and pw=?'

    conn.query(sql, [id, pw],function(err, rows) {
        if(err){
            console.log(err)
            res.send('Fail')
        } else {
            console.log(rows)
            if(rows.length > 0){ // 값이 잘 들어갔을 때
                res.send('Success')
            } else {
                res.send('Fail')
            }
        }
        
    })
    
})

module.exports = router
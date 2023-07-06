const express = require('express')
const db = require('../config/database')
const router = express.Router()

const conn = db.init() // 연결 객체생성, 반환
db.connect(conn) // 연결

// member 테이블 전체 정보 가져오기
router.get('/select', (req, res)=>{
    // 템플릿엔진 : html 양식(템풀릿) + 데이터 -> 결과 문서(nunjucks)
    //            => 가지고 온 데이터를 활용해서 화면 렌더링

    let sql = 'select * from member'
                    //결과 처리(err - 오류, rows - select 결과(데이터), fields - 결과외의 메타데이터)
    conn.query(sql, function(err, rows, fields){
        // console.log(err)
        // console.log(rows)
        // console.log(fields)
                           // key : value
        res.render('index', {list : rows})
    })

    
})

router.get('/select/:id', (req, res)=>{
    console.log(req.params)
})

module.exports = router
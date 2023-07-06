const express = require('express')
const router = express.Router()

// 세션 생성
router.get('/setsession', (req, res) => {
    req.session.nickname = 'newnick' // req.session.키값 = value
    req.session.lunch = '닭가슴살'

    res.send('세션생성')
})

//세션확인
router.get('/getsession', (req, res) => {
    res.send(req.session.nickname + ',' + req.session.lunch)
})

// 세션 삭제
router.get('/deletesessions', (req,res)=>{
    req.session.destroy()
    res.send('세션삭제')
})

module.exports = router
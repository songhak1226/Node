const express = require('express')
const router = express.Router()

// 쿠키 생성
router.get('/setcookie', (req,res)=>{
    let nick = 'nickname1'
    // 서버에서 쿠키 생성 -> 보관은 클라이언트로 응답 시 포함
    res.cookie('nickname', nick, {
        maxAge : 1000000, // 쿠키 만료기간 (밀리초 단위)
        signed : true // 쿠키 서명 -> 암호화
    })

    res.cookie('lunch', '닭가슴살', {
        expires : new Date(Date.now() + 1000*60*60*24)
    })

    res.send('쿠키 생성')
})

// 쿠키 값 확인하기
router.get('/getcookies', (req, res)=>{
    console.log(req.cookies.lunch); // 서명이 안딘 쿠키만 가지고 올 수 있음
    console.log(req.signedCookies.nickname);

    res.send('쿠키확인')
})

// 쿠키 삭제
router.get('/deletecookie', (req, res)=>{
    res.clearCookie('lunch')
    res.send('쿠키삭제')
})

module.exports = router
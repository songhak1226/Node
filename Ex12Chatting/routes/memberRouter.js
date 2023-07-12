const express = require('express')
const Member = require('../models/member')
const router = express.Router()


router.post('/login', async(req,res,next)=>{
    console.log(req.body);
    try{
        const result = await Member.findOne({
            where : {id : req.body.id, pw : req.body.pw},
            attributes : ['id',"pw", 'nick']
        })
        // 세션에 저장
        req.session.member = result
        req.session.save(function(){
            if(result){
                res.redirect('/rooms')
            } else {
                res.redirect('/')
            }
        res.send('OK')
        })

        // res.json(result)
    }catch(err){
        next(err)
    }
    
})



module.exports = router
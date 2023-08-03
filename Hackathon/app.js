const express = require('express')
const indexRouter = require('./routes/index')
const boardRouter = require('./routes/board')
const app = express()


app.use(express.urlencoded({extended:true}))

app.use('/index', indexRouter)
app.use('/board', boardRouter)

app.set('port', process.env.POST || 8888)
const server = app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 연결 기다리는 중...');
})
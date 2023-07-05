const express = require('express')
const app = express()

// post 방식으로 요청한 데이터 -> body에 데이터가 있음 -> body를 파싱해줘야 함
app.use(express.urlencoded({extended:true})) // 파싱해주는 코드

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Ex04Form.html')
})

app.get('/get', (req, res) => {
    // QueryString : ?id=test1&pw=test2
    // localhost:8888/login/test1/test2
    console.log(req.query.id);
    console.log(req.query.pw);
    res.send('get 완료')
})

// a태그
app.get('/get/:id/:pw', (req, res) => {
    console.log(req.params.id);
    console.log(req.params.pw);
    res.send('post 완료')
})

//post
app.post('/post', (req, res) => {
    console.log(req.body.id);
    console.log(req.body.pw);
    res.send('post 완료')
})

app.set('port', process.env.PORT || 8888)

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 연결 기다리는 중...');
})
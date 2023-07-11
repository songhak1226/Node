const express = require('express')
const indexRouter = require('./routes/index')
const nunjucks = require('nunjucks')
const {sequelize} = require('./models/index')
const MemberRouter = require('./routes/memberRouter')
const session = require('express-session')
const bodyParser = require('body-parser')
const filestore = require('session-file-store')(session)
const cookieParser = require('cookie-parser')
const app = express()

// force : false -> 기존 테이블은 건들지 않음

app.use(express.urlencoded({extended:true})) // body 데이터 가져올 때 추가 // 매우 필요함
app.use(bodyParser.json()) // json 데이터 

sequelize.sync({force : false})
.then(()=>{
    console.log("DB 연결 성공");
})
.catch((err)=>{
    console.log(err);
})


app.use(cookieParser('secretkey')) // 쿠키 암호화 키 설정
app.use(session({
    httpOnly : true, // http 통신 할때만 허용
    secret : 'secretkey', // 암호화 키설정
    resave : false, // 세션에 수정사항이 없더라도 다시 저장할것인지에 대한 설정 false - 안한다
    cookie : { // 쿠키 설정
        httpOnly : true
    },
    store : new filestore()
}))


app.set('views', __dirname + '/views')
app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app,
    watch: true
})

app.use('/', indexRouter)
app.use('/member', MemberRouter)

app.set('port', process.env.POST || 8888)
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 연결 기다리는 중...');
})
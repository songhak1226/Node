const http = require('http')
const fs = require('fs').promises
const url = require('url') // url 모듈

const server = http.createServer(async (req, res) => {
    // url 다루기 -> url 모듈 사용
    let reqUrl = req.url
    console.log(url.parse(reqUrl, true).pathname);
    let pathname = url.parse(reqUrl, true).pathname
    if (pathname === '/form') {
        const f = await fs.readFile('./Ex03.html')
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
        res.write(f)
        res.end()
    } else if (pathname === '/home') {
        let queryData = url.parse(reqUrl, true).query // query, data(사용자가 입력한 값)
        console.log(url.parse(reqUrl, true));
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
        let html = '<html>'
        html += '<body>'
        html += '<h3>' + queryData.num1 +'+'+ queryData.num2 + '=' + (parseInt(queryData.num1) + parseInt(queryData.num2)) +'</h3>'
        html += '</body>'
        html += '</html>'

        res.write(html)
        res.end()
    }
})

server.listen(8888)
server.on('listening', () => {
    console.log('8888 포트에서 서버연결 기다리는 중...');
})
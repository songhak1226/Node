const http = require('http')

const server = http.createServer((req, res) => {
    // REST API
    // 전체 회원 정보 : [GET]localhost:8888/fullstack(context)/user
    // 1번 회원 정보 : [GET]localhost:8888/fullstack(context)/user/1
    //                                                      /user?num=1

    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })

        let data = '<html>'
        data += '<body>'
        data += '<h2>home!</h2>'
        data += '</body>'
        data += '</html>'

        res.write(data)
        res.end
    } else if (req.url === '/plus') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })

        let data = '<html>'
        data += '<body>'
        data += '<h2>plus!</h2>'
        data += '</body>'
        data += '</html>'

        res.write(data)
        res.end
    }

})

server.listen(8888)
server.on('listening', () => {
    console.log('8888 포트에서 서버 연결 기다리는 중///');
})
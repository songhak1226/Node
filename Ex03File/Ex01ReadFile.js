// 파일 다루는 모듈 (fs사용)
// fs : file system
const fs = require('fs')


// fs -> 콜백함수
// readFile(읽어들일 파일 경로)
fs.readFile('./file1.txt', (err, data)=>{
    // err : 파일 경로가 잘못되면 에러가 발생할 수 있음
    // data : 파일을 제대로 읽어왔을 때 파일안에 데이터

    if(err){
        console.log(err);
    } else {
        console.log(data.toString());
    }
})
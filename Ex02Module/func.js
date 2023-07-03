const {odd, even} = require('./var.js') // 현재 폴더의 var.js 모듈 가져다가 쓰겠다

function checkOddOrEven(num){
    if(num%2===1){
        // 홀수 -> var.js가 가지고 있음 (odd)
        return odd
    } else {
        // 짝수 -> var.js가 가지고 있음 (even)
        return even
    }
}

module.exports = checkOddOrEven
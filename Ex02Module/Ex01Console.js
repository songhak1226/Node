console.log('일반 로그');
console.error('에러메시지');
console.table([{name:'굥', age:'20'},{name:'윤',age:'19'}])

console.time('timer1')
for(let i=0; i<10000000; i++){}
console.timeEnd('timer1')
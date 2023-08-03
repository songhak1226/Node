const mysql = require('mysql2')

const db_info ={
    host : 'project-db-campus.smhrd.com',
    port : '3307', //mysql 기본 포트 번호 
    user : 'campus_23SW_FS_hack_4',
    password : 'smhrd4',
    database : 'campus_23SW_FS_hack_4' //스키마 지정
}

// init, connect 정의
module.exports = {
    init : function(){
        return mysql.createConnection(db_info)
    },
    connect : function(conn){
        conn.connect(function(err){
            if(err) console.log(err);
            else console.log('connected successfully');
        })
    }
  }
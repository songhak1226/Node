const mysql = require('mysql2')

const db_info ={
    host : 'localhost',
    port : '3306', //mysql 기본 포트 번호 
    user : 'fullstack',
    password : '12345',
    database : 'boot' //스키마 지정
}

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
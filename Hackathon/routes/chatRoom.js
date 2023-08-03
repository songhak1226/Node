const express = require('express')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const db_config = require('../config/database')
const router = express.Router()

let conn = db_config.init()
db_config.connect(conn)

router.get('/', (req, res) => {

    let sql = "select r.room_content, r.room_at, m.mb_nick, m.mb_profile from tb_chatroom r, tb_chat c, tb_member m where r.chat_idx = c.chat_idx and m.mb_id = c.mb_id;"
    conn.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            res.send('Fail')
        } else {
            res.send(rows)
        }
    })
})





module.exports = router
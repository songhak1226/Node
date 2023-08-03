const express = require('express')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const db_config = require('../config/database')
const router = express.Router()

let conn = db_config.init()
db_config.connect(conn)

router.get('/feed', (req, res) => {

    let sql = "select b.board_content, b.board_img, b.board_cost, b.board_idx, m.mb_nick from tb_board b, tb_member m where m.mb_id = b.mb_id"
    // let like = "SELECT COUNT(board_idx) FROM tb_like"
    conn.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            res.send('Fail')
        } else {
            res.send(rows)
        }
    })
})

router.get('/like', (req, res) => {
    let sql = "SELECT COUNT(board_idx) FROM tb_like"
    conn.query(sql, (err, rows) => {
        if (err) {
            console.log(err)
            res.send('Fail')
        } else {
            res.send(rows)
        }
    })
})



module.exports = router
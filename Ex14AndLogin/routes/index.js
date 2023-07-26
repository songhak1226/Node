const express = require('express')
const db_config = require('../config/database')
const router = express.Router()

var conn = db_config.init()
db_config.connect(conn)

router.post('/login', (req, res) => {
    console.log(req.body);
    let { id, pw } = JSON.parse(req.body.AndMember)

    var sql = 'select * from andmember where id=? and pw=?'
    conn.query(sql, [id, pw], function (err, rows) {
        if (err) {
            res.send('Fail')
        } else {
            if (rows.length > 0) {
                res.send(rows)
            } else {
                res.send('Fail')
            }
        }
    })
})

module.exports = router
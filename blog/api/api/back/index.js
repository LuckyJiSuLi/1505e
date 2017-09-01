var query = require("../../config/db_connect")
var express = require("express")
var router = express.Router()

router.get("/", function(req, res, next) {
    var sql = "select * from user"
    query(sql, function(err, rows, fields) {
        res.send(rows)
    })
})

module.exports = router
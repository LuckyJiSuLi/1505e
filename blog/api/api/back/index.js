var query = require("../../config/db_connect")
var express = require("express")
var router = express.Router()

router.post("/", function(req, res, next) {
    var sql = "select * from user"
    query(sql, function(err, rows, fields) {
        let state = false;
        let user = false;
        let userI = null
        console.log(req.body.params.loginname)
        rows.forEach(function(i) {

            console.log(req.body.params.loginname === i.name)
            if (req.body.params.loginname === i.name) {
                user = true
                state = req.body.params.loginpw === i.password
                userI = i
            }
        });
        if (user) {
            if (state) {
                res.send({
                    code: "1001",
                    userid: userI.id,
                    msg: "登录成功"
                })
            } else {
                res.send({
                    code: "1002",
                    userid: null,
                    msg: "登录失败"
                })
            }
        } else {
            res.send({
                code: "1003",
                userid: null,
                msg: "用户名不存在"
            })
        }


    })
})

module.exports = router
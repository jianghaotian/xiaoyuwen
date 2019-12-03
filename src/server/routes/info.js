var express = require('express');
var router = express.Router();

const runSql = require('../mysql');
const { getTimestamp_13 } = require('../src/timer');
const { getToken, checkToken } = require('../src/token');


/**
 * 获取用户信息
 * GET
 * 接收参数:
 *     uid : 用户id
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/get', function (req, res, next) {
    let { uid } = req.query;
    let token = req.header('token');

    checkToken(token, (result) => {
        if (result.status === 0) {
            if ( uid == result.data.uid) {
                runSql('select Uname, Usignature, Usex, Ubirthday, Uphone, Ugrade from user where uid = ?', [uid], (result) => {
                    res.json(result);
                });
            } else {
                let jsonData = {
                    status: -2,
                    message: 'uid or token error'
                }
                res.json(jsonData);
            }
        } else {
            res.json(result);
        }
    });
});









module.exports = router;

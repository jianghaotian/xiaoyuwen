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
                runSql('select Uname, Usignature, Usex, Ubirthday, Uphone, Ugrade, Uimage from user where uid = ?', [uid], (result) => {
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

/**
 * 修改用户年级
 * POST
 * 接收参数:
 *     grade : 用户年级
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.post('/setgrade', function (req, res, next) {
    let { grade } = req.body;
    let token = req.header('token');

    checkToken(token, (result) => {
        if (result.status === 0) {

            runSql('update user set Ugrade = ? where Uid = ?', [grade, result.data.uid], (result) => {
                res.json(result);
            });

        } else {
            res.json(result);
        }
    });
});

/**
 * 修改用户姓名
 * POST
 * 接收参数:
 *     name : 用户姓名
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.post('/setname', function (req, res, next) {
    let { name } = req.body;
    let token = req.header('token');

    checkToken(token, (result) => {
        if (result.status === 0) {

            runSql('update user set Uname = ? where Uid = ?', [name, result.data.uid], (result) => {
                res.json(result);
            });

        } else {
            res.json(result);
        }
    });
});

/**
 * 修改用户个性签名
 * POST
 * 接收参数:
 *     signature : 用户个性签名
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.post('/setsignature', function (req, res, next) {
    let { signature } = req.body;
    let token = req.header('token');

    checkToken(token, (result) => {
        if (result.status === 0) {

            runSql('update user set Usignature = ? where Uid = ?', [signature, result.data.uid], (result) => {
                res.json(result);
            });

        } else {
            res.json(result);
        }
    });
});

/**
 * 修改用户性别
 * POST
 * 接收参数:
 *     sex : 用户性别
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.post('/setsex', function (req, res, next) {
    let { sex } = req.body;
    let token = req.header('token');

    checkToken(token, (result) => {
        if (result.status === 0) {

            runSql('update user set Usex = ? where Uid = ?', [sex, result.data.uid], (result) => {
                res.json(result);
            });

        } else {
            res.json(result);
        }
    });
});

/**
 * 修改用户生日
 * POST
 * 接收参数:
 *     sex : 用户性别
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.post('/setbir', function (req, res, next) {
    let { date } = req.body;
    let token = req.header('token');

    checkToken(token, (result) => {
        if (result.status === 0) {

            runSql('update user set Ubirthday = ? where Uid = ?', [date, result.data.uid], (result) => {
                res.json(result);
            });

        } else {
            res.json(result);
        }
    });
});


module.exports = router;

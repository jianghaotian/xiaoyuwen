var express = require('express');
var router = express.Router();

const runSql = require('../mysql');
const { getTimestamp_13 } = require('../src/timer');
const { getToken, checkToken } = require('../src/token');


/**
 * 获取词语（看字识音）
 * GET
 * 接收参数:
 *     grade : 用户年级
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/ciyu', function (req, res, next) {
    let { uid } = req.query;
    let token = req.header('token');



});






module.exports = router;

var express = require('express');
var router = express.Router();

const runSql = require('../mysql');
const { getTimestamp_13 } = require('../src/timer');
const { getToken, checkToken } = require('../src/token');

let { getBuchongshiju } = require('../src/data/shici.js')

/**
 * （补充诗句）
 * GET
 * 接收参数:
 *     grade : 用户年级
 * 返回参数:
 *     status: 0,
 *     message: "OK",
 *     data: {}
 */
router.get('/bcsj', function (req, res, next) {
    let { grade } = req.query;
    // let token = req.header('token');

    let jsonData = {
        status: 0,
        data: getBuchongshiju(grade)
    }
    res.json(jsonData);

});






module.exports = router;

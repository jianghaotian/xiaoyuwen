var express = require('express');
var router = express.Router();

const runSql = require('../mysql');
const { getTimestamp_13 } = require('../src/timer');
const { getToken, checkToken } = require('../src/token');

const getRandom = require('../src/user/verification');
const sendEmail = require('../src/user/email');
const sendMsg = require('../src/user/message');

var v_minute = 3; // 验证码有效时间

/**
 * 获取验证码
 * POST
 * 接收参数:
 *     account : 手机号/邮箱
 *     type    : 类型  (phone/email)
 * 返回参数:
 *     status: 0,
 *     message: "OK"
 */
router.post('/verification', function (req, res, next) {






});


module.exports = router;

var express = require('express');
var router = express.Router();
var {appId, appSecret} = require('../config').wechat;

// 登录
// router.get('/login', function(req, res, next) {
//   let { code } = req.query;
//   let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`



//   res.json({login: 'haha'});

// });

module.exports = router;

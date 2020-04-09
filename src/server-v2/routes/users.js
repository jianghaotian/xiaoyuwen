var express = require('express');
var router = express.Router();
var request = require('request');
var {appId, appSecret} = require('../config').wechat;

// 登录
router.get('/login', function(req, res, next) {
  let { code } = req.query;
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`

  request(url, function (error, response, body) {
    if (error) {
      console.log(error);

    } else {
      if (response.statusCode == 200) {
        console.log(body);
        // "openid":"oGZ330Ce3Kh5dgedN8yhKidV147Q"

      } else {
        console.log(response.statusCode);

      }
    }

  });

  res.json({login: 'haha'});

});

module.exports = router;

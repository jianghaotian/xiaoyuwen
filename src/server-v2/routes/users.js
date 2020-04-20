var express = require('express');
var router = express.Router();
var {appId, appSecret} = require('../config').wechat;
var {get} = require('../utils/requests');
var {getToken, checkToken} = require('../utils/token');

// 登录
router.get('/login', async function(req, res, next) {
  let { code } = req.query;
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
  let jsonData = {
    status: 0,
    data: ''
  }
  try {
    let bodyObj = await get(url);
    // console.log('bodyObj', bodyObj);
    let token = getToken(bodyObj);
    jsonData.data = token;
    res.json(jsonData);
  } catch (err) {
    console.log('err', err);
    jsonData.status = -1;
    res.json(jsonData);
  }
});

module.exports = router;

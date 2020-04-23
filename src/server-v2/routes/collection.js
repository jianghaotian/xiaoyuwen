var express = require('express');
var router = express.Router();
const runSql = require('../mysql');
var {getToken, checkToken} = require('../utils/token');
var { getTi } = require('../data/utils/tyxz');


router.get('/get', async function(req, res, next) {
  let {token, type} = req.query;
  try {
    let {openid, session_key} = await checkToken(token);
    let sqlResult = [];

    if (type == 'all') {
      sqlResult = await runSql('SELECT type, pinyin FROM collection where uid = ?', [openid]);


    } else {
      sqlResult = await runSql('SELECT pinyin FROM collection where uid = ? and type = ?', [openid, type]);


    }


    console.log(sqlResult);
    
    res.json({status: 0, data: sqlResult});
  } catch(e) {
    console.log(e);
    res.json({status: -1});
  }
});

router.post('/shoucang', async function(req, res, next) {
  let {type, id, token, be} = req.body;
  try {
    let {openid, session_key} = await checkToken(token);
    
    if (be == false) {  // 取消收藏
      await runSql('DELETE FROM collection WHERE uid = ? and pinyin = ? VALUES (?, ?, ?)', [openid, id]);
    } else {        // 收藏
      await runSql('INSERT INTO collection (uid, pinyin, type) VALUES (?, ?, ?)', [openid, id, type]);
    }
    res.json({status: 0});
  } catch(e) {
    console.log(e);
    res.json({status: -1});
  }
});


module.exports = router;

var express = require('express');
var router = express.Router();
const runSql = require('../mysql');
var {getToken, checkToken} = require('../utils/token');
var { getTi, getAllNum } = require('../data/utils/tyxz');


router.get('/getguan', async function(req, res, next) {
  let {token} = req.query;
  try {
    let {openid, session_key} = await checkToken(token);
    let sqlResult = await runSql('SELECT guan, score FROM tyxz where uid = ? ORDER BY guan asc', [openid]);
    
    res.json({status: 0, data: sqlResult, all: getAllNum()});
  } catch(e) {
    console.log(e);
    res.json({status: -1});
  }
});

router.get('/getti', function(req, res, next) {
  let {id} = req.query;
  let ti = getTi(id);
  if (ti == null) {
    res.json({status: -1});
  } else {
    res.json({status: 0, data: ti});
  }
});

router.post('/submitti', async function(req, res, next) {
  let {score, id, token} = req.body;
  try {
    let {openid, session_key} = await checkToken(token);
    console.log(openid);
    let sqlResult = await runSql('SELECT score FROM tyxz WHERE uid = ? AND guan = ?', [openid, id]);
    if (sqlResult.length == 0) {
      await runSql('INSERT INTO tyxz (uid, guan, score) VALUES (?, ?, ?)', [openid, id, score]);
    } else {
      if (sqlResult[0].score < score) {
        await runSql('UPDATE tyxz SET score=? WHERE uid=? AND guan=?', [score, openid, id]);
      }
    }
    res.json({status: 0});
  } catch(e) {
    console.log(e);
    res.json({status: -1});
  }
});


module.exports = router;

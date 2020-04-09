var express = require('express');
var router = express.Router();

var { getPinyin } = require('../data/utils/pinyin');


router.get('/pinyin', function(req, res, next) {
  let { id } = req.query;
  let data = null;
  if (id) {
    data = getPinyin(id);
  }
  let jsonData = {
    status: data == null ? -1 : 0,
    data: data
  }
  res.json(jsonData);
});




module.exports = router;

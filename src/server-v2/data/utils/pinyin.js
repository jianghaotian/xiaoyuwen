var pinyin = require('../sys/pinyin.json');


function getPinyin(id) {
  if (id == 'shengmu' || id == 'yunmu' || id == 'zhengtiyin')
    return pinyin[id];
  else
    return null;
}



module.exports = { getPinyin }

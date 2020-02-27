let { getRandom, randomNum, shuffleArray } = require('./random');

function createCCY(chengyu,grade){
  let all = [];
  let data = chengyu[grade];
  let arr = getRandom(data.length-1);
  for(let i = 0;i<arr.length;++i){
    var obj = {};
    obj.answer = data[arr[i]].name;
    obj.description= data[arr[i]].mean;
    obj.words = data[arr[i]].name.split('');
    for(let j = 0;j<data[arr[i]].example.length;++j){
      if(obj.words.length == 10){
        break;
      }else{
        if(obj.words.includes(data[arr[i]].example[j]) || 
        data[arr[i]].example[j] == ',' || data[arr[i]].example[j] == ':' || data[arr[i]].example[j] == '。' || 
        data[arr[i]].example[j] == ' ' || data[arr[i]].example[j] == '（' || 
        data[arr[i]].example[j] == '）' || data[arr[i]].example[j] == '～' || 
        data[arr[i]].example[j] == '，' || data[arr[i]].example[j] == '“' || data[arr[i]].example[j] == '”'
        || data[arr[i]].example[j] == '"' || data[arr[i]].example[j] == '《' || data[arr[i]].example[j] == '》') {
          continue;
        }else{
          obj.words.push(data[arr[i]].example[j]);
        }
      }
    }
    obj.words = shuffleArray(obj.words);
    all.push(obj);
  }
  return all;
}

module.exports = { createCCY }


function createRandom(len){
  var numarr = [];
  for(var i =0;i<10;++i){
    var rannum = Math.floor(Math.random()*(len-1));
    if(numarr.includes(rannum)){
      --i;
    }else{
      numarr.push(rannum);
    }
  }
  return numarr;
}


function createObj(result, grade){
  var lsarr = [[],[]];
  var len = result[grade].length;
  var idxarr = createRandom(len-1);
  for(var i = 0;i<idxarr.length;++i){
    if(lsarr[0].includes(result[grade][idxarr[i]][0].word)){
      if(lsarr[0].includes(result[grade][idxarr[i]][1].word)){
        for(var j = 0;j<idxarr.length;++j){
          if(lsarr[0].includes(result[grade][idxarr[i]][0].word)){
            if(lsarr[0].includes(result[grade][idxarr[i]][1].word)){
              continue;
            }else{
              lsarr[0].push(result[grade][idxarr[i]][1].word);
              lsarr[1].push(result[grade][idxarr[i]][1].spell);
            }
          }else{
            lsarr[0].push(result[grade][idxarr[i]][0].word);
            lsarr[1].push(result[grade][idxarr[i]][0].spell);
          }
        }
      }else{
        lsarr[0].push(result[grade][idxarr[i]][1].word);
        lsarr[1].push(result[grade][idxarr[i]][1].spell);
      }
    }else{
      lsarr[0].push(result[grade][idxarr[i]][0].word);
      lsarr[1].push(result[grade][idxarr[i]][0].spell);
    }
  }
  return lsarr;
}

function tyxz(result, grade) {
  var ziarr=[];
  var all = [];
  for(var i = 0;i<=10;++i){
    var arr = createObj(result, grade);
    all.push(arr);
  }
  for(var j = 1,p=0;j<all.length;++j,++p){
    var ran = Math.ceil(Math.random()*9);
    all[j][0][ran] = all[0][0][j-1];
    all[j][1][ran] = all[0][1][j-1];
    var obj = {
      zi:all[0][0][p],
      yin:all[0][1][p],
      chioce:[...all[j][0]]
    }
    ziarr.push(obj);
  }
  return ziarr;
}

module.exports = {tyxz}

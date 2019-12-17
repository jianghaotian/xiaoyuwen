let { getRandom } = require('./random');

let ciyu = require('../../data/sys/ciyu.json');
let pinyin = require('../../data/sys/pinyin.json');

function getPinyin(flag, index) {
    let dict = {
        main: pinyin[flag][index],
        num: pinyin[flag].length
    }
    return dict;
}






function getKanzishiyin(grade) {

    let ciyui = getRandom(ciyu[grade].length, 10);
    
    if (ciyui.length === 10) {
        let ciyuArr = [];
        ciyui.forEach((i) => {
            ciyuArr.push(ciyu[grade][i]);
        });
        return ciyuArr;
    } else {
        return null;
    }
}

// function getTingyinxuanzi(grade) {

//     let ciyui = getRandom(ciyu[grade].length, 10);
    
//     if (ciyui.length === 10) {
//         let ciyuArr = [];
//         ciyui.forEach((i) => {
//             ciyuArr.push(ciyu[grade][i]);
//         });
//         return ciyuArr;
//     } else {
//         return null;
//     }
// }



module.exports = { getPinyin, getKanzishiyin }

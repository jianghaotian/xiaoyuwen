let { getRandom } = require('./random');

let chengyu = require('../../data/sys/chengyu.json');

function getChengyu(grade, index) {
    let dict = {
        main: chengyu[grade][index],
        num: chengyu[grade].length
    }
    return dict;
}

// function getChengyuycz(grade, index) {
//     let dict = {
//         shici: shici[grade][index].content.join(''),
// 		name: shici[grade][index].name,
// 		errwords: shici[grade][index].errword,
//         max: shici[grade].length
//     }
//     return dict;
// }


module.exports = { getChengyu }

let { getRandom } = require('./random');

// let chengyu = require('../../data/sys/chengyu.json');

function getChengyu(grade, index) {
    let dict = {
        main: chengyu[grade][index],
        num: chengyu[grade].length
    }
    return dict;
}




module.exports = { getChengyu }

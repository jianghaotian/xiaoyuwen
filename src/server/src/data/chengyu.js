let { getRandom } = require('./random');

let chengyu = require('../../data/sys/chengyu.json');
let { createCCY } = require('./caichengyu');

function getChengyu(grade, index) {
    let dict = {
        main: chengyu[grade][index],
        num: chengyu[grade].length
    }
    return dict;
}

function getChengyuycz(grade, index) {
    let dict = {
        chengyu: chengyu[grade][index].name,
		errwords: chengyu[grade][index].errword,
        max: chengyu[grade].length,
        audio: chengyu[grade][index].audio
    }
    return dict;
}

function getCaichengyu(grade) {
    let arr = createCCY(chengyu, grade);
    return arr;
}

module.exports = { getChengyu, getChengyuycz, getCaichengyu }

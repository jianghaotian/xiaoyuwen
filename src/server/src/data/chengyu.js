let { getRandom } = require('./random');

let chengyu = require('../../data/sys/chengyu.json');

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
        max: chengyu[grade].length
    }
    return dict;
}

function getCaichengyu(grade) {



}

module.exports = { getChengyu, getChengyuycz, getCaichengyu }

let { getRandom, randomNum, shuffleArray } = require('./random');

let shici = require('../../data/sys/shici.json');

let shiciLen = (function() {
    let shiciLen = {
        6: {
            1: [],
            0: []
        },
        8: {
            1: [],
            0: []
        }
    }
    for (var grade = 1; grade < 7; grade++) {
        for (var i = 0; i < shici[grade].length; i++) {
            for (var j = 0; j < shici[grade][i].content.length; j++) {
                shiciLen[shici[grade][i].content[0].length][j % 2 ? 0 : 1].push(shici[grade][i].content[j]);
            }
        }
    }
    return shiciLen;
})();

// console.log(shiciLen);

function createBuchongshiju(grade, index) {
    let content = shici[grade][index].content;

    let question_i = randomNum(content.length - 1);
    let question_len = content[0].length;

    let flag = question_i % 2;
    let show = content[question_i];
    let choose = [];
    let answer = '';
    let theno = '';
    if (flag == 0) {
        answer = content[question_i + 1];
    } else {
        answer = content[question_i - 1];
    }
    if (question_i > 1) {
        if (flag == 0) {
            theno = content[1];
        } else {
            theno = content[0];
        }
    } else {
        if (flag == 0) {
            theno = content[3];
        } else {
            theno = content[2];
        }
    }
    choose.push(theno);
    choose.push(answer);

    let otherCi = getRandom(shiciLen[question_len][flag].length - 1, 4);
    for (var i = 0; choose.length < 4; i++) {
        let other = shiciLen[question_len][flag][otherCi[i]];
        if (other != answer && other != theno) {
            choose.push(other);
        }
    }
    choose = shuffleArray([...choose]);

    let dict = {
        flag: flag,
        show: show,
        answer: answer,
        choose: choose
    }
    return dict;
}

function createBct(arr) {
    let shicid = [];

    arr.forEach((value, index) => {
        if (index == 0) {
            getRandom(shici[index + 1].length - 2, value).forEach(v => {
                shicid.push({grade: index + 1, index: v + 1})
            });
        } else {
            getRandom(shici[index + 1].length - 1, value).forEach(v => {
                shicid.push({grade: index + 1, index:v})
            });
        }
    });

    return shuffleArray([...shicid]);
}
function getBuchongshiju(grade) {
    let shicid = [];
 
    if (grade == 1) {
        shicid = createBct([10]);
    } else if (grade == 2) {
        shicid = createBct([4, 6]);
    } else if (grade == 3) {
        shicid = createBct([2, 2, 6]);
    } else if (grade == 4) {
        shicid = createBct([1, 1, 1, 7]);
    } else if (grade == 5) {
        shicid = createBct([0, 1, 1, 1, 7]);
    } else if (grade == 6) {
        shicid = createBct([0, 0, 1, 1, 2, 6]);
    } else {
        return null;
    }

    if (shicid.length === 10) {
        let shiciDict = {};
        shicid.forEach((value, i) => {
            shiciDict[i+1] = createBuchongshiju(value.grade, value.index);
        })

        return shiciDict;
    } else {
        return null;
    }
}

function getShici(grade, index) {
    let dict = {
        main: shici[grade][index],
        num: shici[grade].length
    }
    return dict;

}

// console.log(getBuchongshiju(6));

module.exports = { getBuchongshiju, getShici }


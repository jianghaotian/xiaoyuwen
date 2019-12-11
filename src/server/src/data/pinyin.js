let getRandom = require('./random');

let ciyu = require('../../data/ciyu.json');

function getCiyu(grade) {

    let ciyui = getRandom(ciyu[grade].length);
    
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


console.log(getCiyu(2));


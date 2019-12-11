let getRandom = require('./random');

let shici = require('../../data/shici.json');


function getBuchongshiju(grade) {

    let shicii = getRandom(shici[grade].length);
    
    // if (ciyui.length === 10) {
    //     let ciyuArr = [];
    //     ciyui.forEach((i) => {
    //         ciyuArr.push(ciyu[grade][i]);
    //     });
    //     return ciyuArr;
    // } else {
    //     return null;
    // }


}


// console.log(getBuchongshiju(5));


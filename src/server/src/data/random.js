
function randomNum(n){
    return parseInt(Math.random() * (n + 1), 10);
}


function getRandom(len) {
    let arr = [];
    while (arr.length < 10) {
        let random = randomNum(len);
        for (var i = 0; i < arr.length; i++) {
            if (random == arr[i]) {
                random = -1;
                break;
            }
        }
        if (random != -1) {
            arr.push(random);
        }
    }
    return arr;
}

module.exports = getRandom;



// let num = 0;
// while(1) {
//     num ++;
//     let q = randomNum(100);
//     if (q == 101) console.log(q, num);
// }


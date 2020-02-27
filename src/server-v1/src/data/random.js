
function randomNum(n){
    return parseInt(Math.random() * (n + 1), 10);
}


function getRandom(num, len=10) {
    let arr = [];
    while (arr.length < len) {
        let random = randomNum(num);
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

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

module.exports = { getRandom, randomNum, shuffleArray };



// let num = 0;
// while(1) {
//     num ++;
//     let q = randomNum(10);
//     if (q == 11) console.log(q, num);
// }


function getRandom (x) {
    let arr = []
    for (var i = 0; i < x; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr.join('');
}

module.exports = getRandom;

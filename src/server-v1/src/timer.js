
function getTimestamp_13() {
    return Date.now();
}

function getTimestamp_10() {
    return Number(String(Date.now()).substr(0,10));
}

// console.log(getTimestamp_13());
// console.log(getTimestamp_10());

module.exports = { getTimestamp_13, getTimestamp_10 };

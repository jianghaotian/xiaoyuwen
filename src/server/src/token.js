const jwt = require('jsonwebtoken');

let { secretOrPrivateKey } = require('../config');

function getToken(content, params) { 
    return jwt.sign(content, secretOrPrivateKey, params);
}

function checkToken(token, callback) {
    jwt.verify(token, secretOrPrivateKey, (err, decode)=> {
        if (err) {
            // console.log(err);
            let jsonData = {
                status: -1,
                message: 'err',
                data: {
                    name: err.name,
                    message: err.message
                }
            }
            callback(jsonData);
        } else {
            // console.log(decode);
            let jsonData = {
                status: 0,
                message: 'OK',
                data: decode
            }
            callback(jsonData);
        }
    })
}

module.exports = { getToken, checkToken };



// let tokenContent = {
//     uid: 2
// };
// let params = {
//     expiresIn: 60 * 60 * 24 * 31  // 31天过期
// }

// let token = getToken(tokenContent, params);

// console.log(token);



var aatoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTU3NTI0NjE1OSwiZXhwIjoxNTc3OTI0NTU5fQ.P0mZqfScG4CiODM_X_LCrmv-oUKMQcxvAzGyznQ6r_E'
checkToken(aatoken, (r) => {
    console.log(r);
})


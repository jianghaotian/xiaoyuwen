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

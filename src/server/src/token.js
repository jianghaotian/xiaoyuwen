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


 aatoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJpZmljYXRpb24iOiI5NDYzMjEiLCJpYXQiOjE1NzUwODQwNzEsImV4cCI6MTU3NTA4NDI1MX0.fiJb9DSQWOwarKr7UOGr1-8_-VpmiEOO4nqORZgqHB0'
 checkToken(aatoken, (r) => {
    console.log(r);
 })
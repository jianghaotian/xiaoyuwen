var getRequest = require('request');

function get (url) {
  return new Promise((resolve, reject) => {
    getRequest(url, function (error, response, body) {
      if (error) {
        reject(error.errno);
      } else {
        if (response.statusCode != 200) {
          reject(response.statusCode);
        } else {
          let bodyObj = JSON.parse(body);
          if (bodyObj.errcode) {
            if (bodyObj.errcode != 0) {
              reject(bodyObj.errcode);
            } else {
              resolve(bodyObj);
            }
          } else {
            resolve(bodyObj);
          }
        }
      }
    });
  });
}

module.exports = { get };

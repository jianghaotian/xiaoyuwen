const regeneratorRuntime = require('../libs/regenerator-runtime/runtime-module');

function login () {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res0 => {
        if (res0.code) {
          wx.request({
            url: 'https://xyw.htapi.pub/v2/users/login',
            data: {
              code: res0.code
            },
            success (res) {
              if (res.statusCode == 200) {  // 服务器返回200
                if (res.data.status == 0) {  // 服务器手动返回0
                  // console.log(res.data.data);  // token
                  resolve(res.data.data);
                } else {
                  reject('登录失败');
                }
              } else {
                // console.log('无法连接到服务器（可能服务器问题）', res);
                reject('无法连接到服务器');
              }
            },
            fail (res) {
              // console.log('无法连接到服务器 ' + res);
              reject('无法连接到服务器');
            }
          });
        } else {
          // console.log('no res.code: 获取用户凭证失败', res0);
          reject('获取用户凭证失败');
        }
      },
      fail: res0 => {
        // console.log('登录接口调用失败 ' + res0);
        reject('登录接口调用失败');
      }
    })
  });
}

module.exports = {
  login
}

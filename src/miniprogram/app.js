const regeneratorRuntime = require('./libs/regenerator-runtime/runtime-module');
const { login } = require('./utils/login');

App({
  onLaunch: async function () {
    wx.setStorageSync('token', '');
    let token = '';
    // 登录
    try {
      token = await login();
    } catch(e) {
      // console.log(e);
      wx.showToast({
        title: e + '，将无法使用收藏夹和听音选字功能',
        icon: 'none',
        duration: 2000
      })
    }
    // 存储token
    try {
      wx.setStorageSync('token', token);
      // let token1 = wx.getStorageSync('token') || ''
      // console.log(token1);
    } catch(e) {
      console.log(e);
      wx.showToast({
        title: '程序错误，将无法使用收藏夹和听音选字功能',
        icon: 'none',
        duration: 2000
      })
    }
    wx.setInnerAudioOption({obeyMuteSwitch: false});
  }
})

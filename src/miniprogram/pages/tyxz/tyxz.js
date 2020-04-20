const regeneratorRuntime = require('../../libs/regenerator-runtime/runtime-module');
const { login } = require('../../utils/login');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    problems: [],
    canTap: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    let token = wx.getStorageSync('token') || '';
    if (token == '') {
      wx.showToast({
        title: '获取账号信息失败，请重新打开小程序',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.request({
        url: 'https://xyw.htapi.pub/v2/tyxz/getguan',
        data: {
          token: token
        },
        success: (res) => {
          if (res.statusCode == 200) {  // 服务器返回200
            if (res.data.status == 0) {  // 服务器手动返回0
              // console.log(res.data.data);  // 通过关卡情况
              let all = res.data.all || 30;
              let problems = [];
              for (let i = 0; i < all; i++) {
                let scoreOne = '';
                if (res.data.data[i] != undefined) {
                  scoreOne = res.data.data[i].score;
                }
                problems.push({
                  num: i + 1,
                  score: scoreOne
                })
              }
              let scoreLen = res.data.data.length;
              let canTap = scoreLen;
              if (res.data.data[scoreLen - 1].score < 6) {
                canTap = scoreLen - 1;
              }
              this.setData({
                problems, canTap
              })
            } else {
              wx.showToast({
                title: '身份信息错误，请重新打开小程序',
                icon: 'none',
                duration: 2000
              })
            }
          } else {
            // console.log('无法连接到服务器（可能服务器问题）', res);
            wx.showToast({
              title: '无法连接到服务器',
              icon: 'none',
              duration: 2000
            })
          }
        },
        fail (res) {
          // console.log('无法连接到服务器 ' + res);
          wx.showToast({
            title: '无法连接到服务器',
            icon: 'none',
            duration: 2000
          })
        }
      });

    }

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  problem: function(e){
    let {id} = e.currentTarget.dataset;
    if (id <= this.data.canTap + 1) {
      wx.navigateTo({
        url: `./tyxzti?id=${id}`,
      })
    }
  }
})
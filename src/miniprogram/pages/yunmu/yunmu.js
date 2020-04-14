// pages/yunmu/yunmu.js
const regeneratorRuntime = require('../../libs/regenerator-runtime/runtime-module');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabColor: [
      {tabname: '单韵母', tabcolor: '#F4E7D7', num: '0', letter: 'c0'},
      {tabname: '复韵母', tabcolor: '#F4E7D7', num: '1', letter: 'c1'},
      {tabname: '前鼻韵母', tabcolor: '#F4E7D7', num: '2', letter: 'c2'},
      {tabname: '后鼻韵母', tabcolor: '#F4E7D7', num: '3', letter: 'c3'}
    ],
    dan: ['a', 'o', 'e', 'i', 'u', 'ü'],
    fu: ['ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 'üe', 'er'],
    qianbi: ['an', 'en', 'in', 'un', 'ün'],
    houbi: ['ang', 'eng', 'ing',],
    toView: 'c0',
    viewHeight: 0,
  },
  change: async function (e) {
    for (let j = 0; j < this.data.tabColor.length; j++) {
      let all = "tabColor[" + j + "].tabcolor";
      this.setData({
        [all]: '#F4E7D7'
      })
    }
    let id = e.currentTarget.id;
    let num = id.charAt(id.length - 1);
    let target = e.currentTarget.dataset.hash;
    let up = "tabColor[" + num + "].tabcolor";
    this.setData({
      [up]: 'rgb(250, 191, 124)',
      toView: target
    });
    let a = await new Promise((resolve, reject) => {
      wx.createSelectorQuery().select('#c' + num).boundingClientRect(res => {
        resolve(res.top);
      }).exec();
    });
    let b = await new Promise((resolve, reject) => {
      wx.createSelectorQuery().selectViewport().scrollOffset(res => {
        resolve(res.scrollTop);
      }).exec();
    });
    let tabbarH = await new Promise((resolve, reject) => {
      wx.createSelectorQuery().select('#tabbar').boundingClientRect(res => {
        resolve(res.height);
      }).exec();
    });
    
    wx.pageScrollTo({
      scrollTop: a + b - tabbarH
    })
    console.log(a, b, tabbarH);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: res => {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let changeHeight = 750 / clientWidth;
        let height = clientHeight * changeHeight - (clientHeight * 70 / 750);
        this.setData({
          viewHeight: height
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // let query = wx.createSelectorQuery()
    //   query.select('#c0').boundingClientRect(function (res) {
    //      console.log(res);
    //   }).exec();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  }
})
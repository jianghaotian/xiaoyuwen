const xiangqingData = require('./data');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    labaPlay: 0,
    show: '',
    list: [],
    id: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {id, type} = options;
    let show = '';
    let list = [];
    if (type == 'shengmu') {
      show = '声母';
      list = xiangqingData.shengmu;
    } else if (type == 'yunmu') {
      show = '韵母';
      list = xiangqingData.yunmu;
    } else if (type == 'zhengtiyin') {
      show = '整体音';
      list = xiangqingData.zhengtiyin;
    }
    let current = this.findAInArrName(list, id);
    this.setData({
      show,
      list,
      id,
      current
    });
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

  findAInArrName: function (arr, a) {
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i].name == a) {
        return i;
      }
    }
  },

  // 收藏
  collect: function(e){
    this.setData({
      status: !this.data.status
   })
  },

  // 点击播放音频
  playAudio: function (e) {
    let audioFile = e.currentTarget.dataset.audio;
    // console.log(audio);
    let audio = wx.createInnerAudioContext();  
    audio.src = `https://xyw.htapi.pub/v2/audios/pinyin/${audioFile}`;
    // audio.src = `https://cdn.jsdelivr.net/gh/lemonoink/xiaoyuwen@cdn/audios/pinyin/${audioFile}`;
    audio.autoplay = true;
    audio.onPlay(() => {
      this.setData({labaPlay: 1});
      // console.log(audioFile, 'onPlay');
    });
    audio.onEnded(() => {
      this.setData({labaPlay: 0});
      // console.log(audioFile, 'onEnded');
    });
  }
})

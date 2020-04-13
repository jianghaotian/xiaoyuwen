// pages/zimu/zimu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    playItem: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  // 点击播放音频
  playAudio: function (e) {
    let {id} = e.currentTarget.dataset;
    console.log(id);

    var audio = wx.createInnerAudioContext();  
    audio.src = `https://xyw.htapi.pub/v2/audios/zimu/${id}.mp3`;
    audio.autoplay = true;
    audio.onPlay(() => {
      this.setData({playItem: id});
      console.log(id, 'onPlay');
    });
    audio.onEnded(() => {
      this.setData({playItem: ''});
      console.log(id, 'onEnded');
    });
  }

})
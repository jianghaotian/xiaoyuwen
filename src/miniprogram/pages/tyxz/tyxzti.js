// pages/tyxz/tyxzti.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ti: [{
      pinyin:'hào',
      question:['啦','噜','皓','天'],
      answer:'皓',
    },
    {
      pinyin:'yán',
      question:['嘟','哒','王','炎'],
      answer:'炎',
    },
    {
      pinyin:'shuāng',
      question:['滴','哒','毅','双'],
      answer:'双',
    },
    {
      pinyin:'shí',
      question:['时','针','心','彤'],
      answer:'时',
    },
    {
      pinyin:'dòng',
      question:['转','动','丽','娜'],
      answer:'动',
    },
    {
      pinyin:'wǒ',
      question:['可','是','我','不'],
      answer:'我',
    },
    {
      pinyin:'mén',
      question:['知','道','你','们'],
      answer:'们',
    },
    {
      pinyin:'huì',
      question:['会','什','么','拼'],
      answer:'会',
    },
    {
      pinyin:'lā',
      question:['音','啦','那','就'],
      answer:'啦',
    },
    {
      pinyin:'hǎo',
      question:['这','样','好','了'],
      answer:'好',
    }],
    num: 0,
    select: '',
    selected: 0,
    score: 0,
    labaPlay: 0,

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

  select: function (e) {
    if (this.data.selected == 0) {
      this.setData({selected: 1});
      let {id} = e.currentTarget.dataset;
      console.log(id);
      this.setData({select: id});
      // 结果
      let audio = wx.createInnerAudioContext();
      if (id == this.data.ti[this.data.num].answer) {
        this.setData({score: this.data.score + 1});
        audio.src = '/audio/zhengque.wav';
      } else {
        audio.src = '/audio/cuowu.wav';
      }
      audio.autoplay = true;
      setTimeout(() => {
        this.setData({
          selected: 0,
          select: '',
          num: this.data.num + 1
        });
      }, 1000);
    }
  },

})
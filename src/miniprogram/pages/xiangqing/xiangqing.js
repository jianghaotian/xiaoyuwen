const xiangqingData = require('./data');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // id: '',
    // shengmu:['b','p','m','f','d','t','n','l','g','k','h','j','q','x','zh','ch','sh','r','z','c','s','y','w'],
    // zhengtiyin:['zhi','chi','shi','ri','zi','ci','si','yi','wu','yu','ye','yue','yuan','yin','yun','ying'],
    // yunmu:['a','o','e','i','u','ü','ai','ei','ui','ao','ou','iu','ie','üe','er','ɑn','en','in','un','ün','ɑnɡ','enɡ','inɡ','onɡ'],
    // list: ['b','p','m','f','d','t','n','l','g','k','h','j','q','x','zh','ch','sh','r','z','c','s','y','w'],
    // count: 23,
    // status: false,
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
    
    let {id, type, index} = options;
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
  detailPage:function(e){
    let {id} = e.currentTarget.dataset;
    // console.log(id);
  },
  collect:function(e){
    this.setData({
      status:!this.data.status

   })
  }
})
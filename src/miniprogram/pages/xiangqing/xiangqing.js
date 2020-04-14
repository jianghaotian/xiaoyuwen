// pages/xiangqing/xiangqing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // id: '',
    // shengmu:['b','p','m','f','d','t','n','l','g','k','h','j','q','x','zh','ch','sh','r','z','c','s','y','w'],
    // zhengtiyin:['zhi','chi','shi','ri','zi','ci','si','yi','wu','yu','ye','yue','yuan','yin','yun','ying'],
    // yunmu:['a','o','e','i','u','ü','ai','ei','ui','ao','ou','iu','ie','üe','er','ɑn','en','in','un','ün','ɑnɡ','enɡ','inɡ','onɡ'],
    list:['b','p','m','f','d','t','n','l','g','k','h','j','q','x','zh','ch','sh','r','z','c','s','y','w'],
    count:23,
    status:false
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
  onUnload: function (options) {
    if(options.id == 'zhengtiyin'){
      this.setData({
        list:this.data.zhengtiyin,
        title:"整体音",
        count:16
      })
    }
    else if(options.id == 'shengmu'){
      this.setData({
        list:this.data.shengmu,
        title:"声母",
        count:23
      })
    }
    else if(options.id == 'yunmu'){
      this.setData({
        list:this.data.yunmu,
        title:"韵母",
        count:24
      })
    }
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
  detailPage:function(e){
    let {id} = e.currentTarget.dataset;
    console.log(id);
  },
  collect:function(e){
    this.setData({
      status:!this.data.status

   })
  }
})
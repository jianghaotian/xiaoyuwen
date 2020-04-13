// pages/shengmu/shengmu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    shengmu:{data:['b','p','m','f','d','t','n','l','g','k','h','j','q','x','zh','ch','sh','r','z','c','s','y','w'],length:23},
    zhengtiyin:{data:['zhi','chi','shi','ri','zi','ci','si','yi','wu','yu','ye','yue','yuan','yin','yun','ying'],length:16},
    yunmu:['a','o','e','i','u','ü','ai','ei','ui','ao','ou','iu','ie','üe','er','ɑn','en','in','un','ün','ɑnɡ','enɡ','inɡ','onɡ']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.id == 'zhengtiyin'){
      this.setData({
        list:this.data.zhengtiyin.data,
        title:"整体音",
        count:this.data.zhengtiyin.length
      })
    }else if(options.id == 'shengmu'){
      this.setData({
        list:this.data.shengmu.data,
        title:"声母",
        count:this.data.shengmu.length
      })
    }
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
  detailPage:function(e){
    let {id} = e.currentTarget.dataset;
    console.log(id);
  }
})
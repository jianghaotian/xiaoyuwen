const regeneratorRuntime = require('../../libs/regenerator-runtime/runtime-module');
const {getLayout, scrollTop} = require('../../utils/util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    yunmu: [
      {list: '单韵母', item: ['a', 'o', 'e', 'i', 'u', 'ü']},
      {list: '复韵母', item: ['ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 'üe', 'er']},
      {list: '前鼻韵母', item: ['an', 'en', 'in', 'un', 'ün']},
      {list: '后鼻韵母', item: ['ang', 'eng', 'ing','ong']}
    ],
    topbarHeight: 44,
    viewHeight: 500,
    tab: [],
    selectTab: 0,
    selected: 0,
    lastBottom: '300px',
    scrollTopItem: [],  // 每个item距离顶部距离
    scrollTop: 0,
    scrollInto: 't0',
    type: ''
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
        let topbarHeight = 80 / changeHeight;
        let viewHeight = clientHeight - topbarHeight;
        this.setData({
          topbarHeight: topbarHeight,
          viewHeight: viewHeight
        });
      }
    });

    // TODO: 获取数据
    // console.log(options.id);
    if (options.id == 'yunmu') {
      this.setData({
        tab: this.data.yunmu,
        type: 'yunmu'
      });
    } else if (options.id == 'shengdiao') {


    } else if (options.id == 'shoucang') {


    }


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: async function () {
    let topbarHeight = this.data.topbarHeight.toFixed(0);
    let scrollTopItem = [];
    let lastBottom = 0;
    for (let i = 0; i < this.data.tab.length; i++) {
      let layout = await getLayout('#t' + i);
      scrollTopItem.push(layout.top - topbarHeight);
      if (i == this.data.tab.length - 1) {
        lastBottom = this.data.viewHeight - layout.height;
      }
    }
    this.setData({
      scrollTopItem: scrollTopItem,
      lastBottom: lastBottom + 'px'
    });

    // console.log(scrollTopItem);
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

  clickTab: function (e) {
    let {id} = e.currentTarget.dataset;
    this.setData({
      selectTab: id,
      selected: 1
    });
    this.setData({
      scrollInto: 't' + id
    });
  },

  bindScroll: function (e) {
    // console.log(e.detail.scrollTop);
    if (this.data.scrollTopItem.length < 2) {
      return ;
    }
    if (this.data.selected == 1) {
      this.setData({
        selected: 0
      });
      return ;
    }
    for (let i = 0; i < this.data.scrollTopItem.length; i++) {
      if (i == 0) {
        if (e.detail.scrollTop < this.data.scrollTopItem[i + 1]) {
          this.setData({
            selectTab: i
          });
          return ;
        }
      }
      if (e.detail.scrollTop >= this.data.scrollTopItem[i]) {
        if (i == this.data.scrollTopItem.length - 1) {
          this.setData({
            selectTab: i
          });
          return ;
        } else if (e.detail.scrollTop < this.data.scrollTopItem[i + 1]) {
          this.setData({
            selectTab: i
          });
          return ;
        }
      }
    }
  },

  clickOne: function (e) {
    let {id} = e.currentTarget.dataset;
    // console.log(id);
    wx.navigateTo({
      url: `/pages/xiangqing/xiangqing?type=${this.data.type}&id=${id}`
    })
  }

})
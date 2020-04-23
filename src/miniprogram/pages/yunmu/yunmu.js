const regeneratorRuntime = require('../../libs/regenerator-runtime/runtime-module');
const { getLayout, scrollTop } = require('../../utils/util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    yunmu: [
      { list: '单韵母', item: [{value:'a',state:0}, {value:'o',state:0}, {value:'e',state:0}, {value:'i',state:0}, {value:'u',state:0}, {value:'ü',state:0}] },
      { list: '复韵母', item: [{value:'ai',state:0}, {value:'ei',state:0}, {value:'ui',state:0}, {value:'ao',state:0}, {value:'ou',state:0}, {value:'iu',state:0}, {value:'ie',state:0}, {value:'üe',state:0}, {value:'er',state:0}] },
      { list: '前鼻韵母', item: [{value:'an',state:0}, {value:'en',state:0}, {value:'in',state:0}, {value:'un',state:0}, {value:'ün',state:0}] },
      { list: '后鼻韵母', item: [{value:'ang',state:0}, {value:'eng',state:0}, {value:'ing',state:0}, {value:'ong',state:0}] }
    ],
    shengdiao: [
      { list: '单韵母', item: ['ā', 'á', 'ǎ', 'à', 'ō', 'ò', 'ǒ', 'ó', 'ē', 'é', 'ě', 'è', 'ī', 'í', 'ǐ', 'ì', 'ū', 'ú', 'ǔ', 'ù', 'ǖ', 'ǘ', 'ǚ', 'ǜ'] },
      { list: '复韵母', item: ['āi', 'ái', 'ǎi', 'ài', 'ēi', 'éi', 'ěi', 'èi', 'uī', 'uí', 'uǐ', 'uì', 'āo', 'áo', 'ǎo', 'ào', 'ōu', 'òu', 'ǒu', 'óu', 'iū', 'iú', 'iǔ', 'iù', 'iē', 'ié', 'iě', 'iè', 'üē', 'üé', 'üě', 'üè', 'ēr', 'ér', 'ěr', 'èr'] },
      { list: '鼻韵母', item: ['ān', 'án', 'ǎn', 'àn', 'ēn', 'én', 'ěn', 'èn', 'īn', 'ín', 'ǐn', 'ìn', 'ūn', 'ún', 'ǔn', 'ùn', 'ǖn', 'ǘn', 'ǚn', 'ǜn', 'āng', 'áng', 'ǎng', 'àng', 'ēng', 'éng', 'ěng', 'èng', 'īng', 'íng', 'ǐng', 'ìng', 'ōng', 'òng', 'ǒng', 'óng'] },
      { list: '整体音', item: ['zhī', 'zhí', 'zhǐ', 'zhì', 'chī', 'chí', 'chǐ', 'chì', 'shī', 'shí', 'shǐ', 'shì', 'rī', 'rí', 'rǐ', 'rì', 'zī', 'zí', 'zǐ', 'zì', 'cī', 'cí', 'cǐ', 'cì', 'sī', 'sí', 'sǐ', 'sì', 'yī', 'yí', 'yǐ', 'yì', 'wū', 'wú', 'wǔ', 'wù', 'yū', 'yú', 'yǔ', 'yù', 'yē', 'yé', 'yě', 'yè', 'yuē', 'yué', 'yuě', 'yuè', 'yuān', 'yuán', 'yuǎn', 'yuàn', 'yīn', 'yín', 'yǐn', 'yìn', 'yūn', 'yún', 'yǔn', 'yùn', 'yīng', 'yíng', 'yǐng', 'yìng'] }
    ],
    topbarHeight: 44,
    viewHeight: 500,
    tab: [],
    selectTab: 0,
    selected: 0,
    lastBottom: '300px',
    scrollTopItem: [],
    scrollTop: 0,
    scrollInto: 't0',
    type: '',
    displaywhat:'none',
    playItem: ''
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
    // console.log(options.id);
    if (options.id == 'yunmu') {
      this.setData({
        tab: this.data.yunmu,
        type: 'yunmu'
      });
    } else if (options.id == 'shengdiao') {
      this.setData({
        tab: this.data.shengdiao,
        type: 'shengdiao',
        displaywhat:"block"
      });
    } else if (options.id == 'shoucangjia') {
      wx.request({
        url: 'https://xyw.htapi.pub/v2/collection/get',
        data: {
          token: token
        },
        success: (res) => {
          if (res.statusCode == 200) {  // 服务器返回200
            if (res.data.status == 0) {  // 服务器手动返回0
              console.log(res.data.data);  // 通过关卡情况
              
              
              // TODO
              this.setData({
                tab: [{ list: '玩命开发中...', item: [] }],
                type: 'shoucangjia'
              });
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: async function () {
    let topbarHeight = this.data.topbarHeight.toFixed(0);
    let scrollTopItem = [];
    let lastBottom = 0;
    for (let i = 0; i < this.data.tab.length; i++) {
      let layout = await getLayout('#t' + i);
      scrollTopItem.push(layout.top - topbarHeight - 20);
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
    let { id } = e.currentTarget.dataset;
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
      return;
    }
    if (this.data.selected == 1) {
      this.setData({
        selected: 0
      });
      return;
    }
    for (let i = 0; i < this.data.scrollTopItem.length; i++) {
      if (i == 0) {
        if (e.detail.scrollTop < this.data.scrollTopItem[i + 1]) {
          this.setData({
            selectTab: i
          });
          return;
        }
      }
      if (e.detail.scrollTop >= this.data.scrollTopItem[i]) {
        if (i == this.data.scrollTopItem.length - 1) {
          this.setData({
            selectTab: i
          });
          return;
        } else if (e.detail.scrollTop < this.data.scrollTopItem[i + 1]) {
          this.setData({
            selectTab: i
          });
          return;
        }
      }
    }
  },

  clickOne: function (e) {
    let { id } = e.currentTarget.dataset;
    // console.log(id);
    if (this.data.type == 'shengdiao') {

    } else {
      wx.navigateTo({
        url: `/pages/xiangqing/xiangqing?type=${this.data.type}&id=${id.value}&state=${id.state}`
      })
    }
  }

})
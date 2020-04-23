const regeneratorRuntime = require('../../libs/regenerator-runtime/runtime-module');
const { getLayout, scrollTop } = require('../../utils/util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    yunmu: [
      { list: '单韵母', item: ['a', 'o', 'e', 'i', 'u', 'ü'] },
      { list: '复韵母', item: ['ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 'üe', 'er'] },
      { list: '前鼻韵母', item: ['an', 'en', 'in', 'un', 'ün'] },
      { list: '后鼻韵母', item: ['ang', 'eng', 'ing', 'ong'] }
    ],
    shengdiao: [
      { list: '单韵母', item: ['ā', 'á', 'ǎ', 'à', 'ō', 'ó', 'ǒ', 'ò', 'ē', 'é', 'ě', 'è', 'ī', 'í', 'ǐ', 'ì', 'ū', 'ú', 'ǔ', 'ù', 'ǖ', 'ǘ', 'ǚ', 'ǜ'] },
      { list: '复韵母', item: ['āi', 'ái', 'ǎi', 'ài', 'ēi', 'éi', 'ěi', 'èi', 'uī', 'uí', 'uǐ', 'uì', 'āo', 'áo', 'ǎo', 'ào', 'ōu', 'óu', 'ǒu', 'òu', 'iū', 'iú', 'iǔ', 'iù', 'iē', 'ié', 'iě', 'iè', 'üē', 'üé', 'üě', 'üè', 'ēr', 'ér', 'ěr', 'èr'] },
      { list: '鼻韵母', item: ['ān', 'án', 'ǎn', 'àn', 'ēn', 'én', 'ěn', 'èn', 'īn', 'ín', 'ǐn', 'ìn', 'ūn', 'ún', 'ǔn', 'ùn', 'ǖn', 'ǘn', 'ǚn', 'ǜn', 'āng', 'áng', 'ǎng', 'àng', 'ēng', 'éng', 'ěng', 'èng', 'īng', 'íng', 'ǐng', 'ìng', 'ōng', 'óng', 'ǒng', 'òng'] },
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
    this.setData({id: options.id});
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
    if (this.data.id == 'shoucangjia') {
      let tab = [{ list: '声母', item: [] },{ list: '韵母', item: [] },{ list: '整体音', item: [] }];
      let token = wx.getStorageSync('token') || '';
      if (token == '') {
        wx.showToast({
          title: '获取账号信息失败，请重新打开小程序',
          icon: 'none',
          duration: 2000
        })
      } else {
        wx.request({
          url: 'https://xyw.htapi.pub/v2/collection/get',
          data: {
            token: token,
            type: 'all'
          },
          success: (res) => {
            if (res.statusCode == 200) {  // 服务器返回200
              if (res.data.status == 0) {  // 服务器手动返回0
                // console.log(res.data.data);
                for (let i = 0; i < res.data.data.length; i++) {
                  if (res.data.data[i].type == 'shengmu') {
                    tab[0].item.push(res.data.data[i].pinyin);
                  } else if (res.data.data[i].type == 'yunmu') {
                    tab[1].item.push(res.data.data[i].pinyin);
                  } else if (res.data.data[i].type == 'zhengtiyin') {
                    tab[2].item.push(res.data.data[i].pinyin);
                  }
                }
                this.setData({
                  tab,
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
    let { id, index } = e.currentTarget.dataset;
    let type = '';
    if (this.data.type == 'shengdiao') {
      // console.log(id);
      let audio = wx.createInnerAudioContext();  
      audio.src = `https://xyw.htapi.pub/v2/audios/diao/${id}.mp3`;
      // audio.src = `https://cdn.jsdelivr.net/gh/lemonoink/xiaoyuwen@cdn/audios/zimu/${id}.mp3`;
      audio.autoplay = true;
      audio.onPlay(() => {
        this.setData({playItem: id});
        // console.log(id, 'onPlay');
      });
      audio.onEnded(() => {
        this.setData({playItem: ''});
        // console.log(id, 'onEnded');
      });
    
    } else if (this.data.type == 'shoucangjia') {
      for (let i = 0; i < this.data.tab.length; i++) {
        if (this.data.tab[i].item[index] == id) {
          if (this.data.tab[i].list == '声母') {
            type = 'shengmu';
          } else if (this.data.tab[i].list == '韵母') {
            type = 'yunmu';
          } else if (this.data.tab[i].list == '整体音') {
            type = 'zhengtiyin';
          }
          break;
        }
      }
      wx.navigateTo({
        url: `/pages/xiangqing/xiangqing?type=${type}&id=${id}&sc=1`
      })
    } else {
      wx.navigateTo({
        url: `/pages/xiangqing/xiangqing?type=${this.data.type}&id=${id}&sc=0`
      })
    }
  }

})
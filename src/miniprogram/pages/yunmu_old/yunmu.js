// pages/yunmu/yunmu.js
const regeneratorRuntime = require('../../libs/regenerator-runtime/runtime-module');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabColor: [
      {tabname: '单韵母', tabcolor: '#F4E7D7', num: '0', letter: 'c0',chil: ['a', 'o', 'e', 'i', 'u', 'ü']},
      {tabname: '复韵母', tabcolor: '#F4E7D7', num: '1', letter: 'c1',chil:['ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 'üe', 'er']},
      {tabname: '前鼻韵母', tabcolor: '#F4E7D7', num: '2', letter: 'c2',chil:['an', 'en', 'in', 'un', 'ün']},
      {tabname: '后鼻韵母', tabcolor: '#F4E7D7', num: '3', letter: 'c3',chil:['ang', 'eng', 'ing','ong']}
    ],
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
    // console.log(a, b, tabbarH);
  },
  // scrollTo:function(e){
  //   let viewTop = e.detail.scrollTop;
  //   console.log(1)
  // },
  onPageScroll:function(){
    let that=this;
    for (let j = 0; j < this.data.tabColor.length; j++) {
      let all = "tabColor[" + j + "].tabcolor";
      that.setData({
        [all]: '#F4E7D7'
      })
    }
    for(var i=0;i<this.data.tabColor.length;i++){
      (function(i){
        wx.createSelectorQuery().select('#c' + i).boundingClientRect(res => {
          // console.log("c"+i+":"+res.top)
          // console.log("height:"+res.height)
          if(res.top<=60 && res.top>=-res.height/2){
            let up = "tabColor[" + i+ "].tabcolor";
            that.setData({
              [up]: 'rgb(250, 191, 124)',
            });
          }
        }).exec();
      }(i))
    }
    
      // wx.createSelectorQuery().selectViewport().scrollOffset(res => {
      //   console.log("scrollHowMuch:"+res.scrollTop);
      // }).exec();
  },
  clickOne:function(e){
    let {id, to} = e.currentTarget.dataset;
    console.log(id, to);
    wx.navigateTo({
      url: `../xiangqing/xiangqing`
      // url: `../${to}/${to}?id=${id}`
    });
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
    if(options.id == 'shengdiao'){
      this.setData({
        tabColor: [
          {tabname: '单韵母', tabcolor: '#F4E7D7', num: '0', letter: 'c0',chil:['ā','á','ǎ','à', 'ō','ò','ǒ','ó', 'ē','é','ě','è', 'ī','í','ǐ','ì','ū','ú','ǔ','ù','ǖ','ǘ','ǚ','ǜ']},
          {tabname: '复韵母', tabcolor: '#F4E7D7', num: '1', letter: 'c1',chil:['āi','ái','ǎi','ài', 'ēi','éi','ěi','èi', 'uī','uí','uǐ','uì', 'āo','áo','ǎo','ào', 'ōu','òu','ǒu','óu', 'iū','iú','iǔ','iù', 'iē','ié','iě','iè', 'üē','üé','üě','üè', 'ēr','ér','ěr','èr']},
          {tabname: '鼻韵母', tabcolor: '#F4E7D7', num: '2', letter: 'c2',chil:['ān','án','ǎn','àn', 'ēn','én','ěn','èn', 'īn','ín','ǐn','ìn', 'ūn','ún','ǔn','ùn', 'ǖn','ǘn','ǚn','ǜn','āng','áng','ǎng','àng', 'ēng','éng','ěng','èng', 'īng','íng','ǐng','ìng','ōng','òng','ǒng','óng']},
          {tabname: '整体音', tabcolor: '#F4E7D7', num: '3', letter: 'c3',chil:['zhī','zhí','zhǐ','zhì','chī','chí','chǐ','chì','shī','shí','shǐ','shì','rī','rí','rǐ','rì','zī','zí','zǐ','zì','cī','cí','cǐ','cì','sī','sí','sǐ','sì','yī','yí','yǐ','yì','wū','wú','wǔ','wù','yū','yú','yǔ','yù','yē','yé','yě','yè','yuē','yué','yuě','yuè','yuān','yuán','yuǎn','yuàn','yīn','yín','yǐn','yìn','yūn','yún','yǔn','yùn','yīng','yíng','yǐng','yìng']}
        ],
      })
    }else if(options.id == 'shoucangjia'){
      this.setData({
        tabColor: [
          {tabname: '单韵母', tabcolor: '#F4E7D7', num: '0', letter: 'c0',chil:['ā','ǜ']},
          {tabname: '复韵母', tabcolor: '#F4E7D7', num: '1', letter: 'c1',chil:['āi','ěr','èr']},
          {tabname: '鼻韵母', tabcolor: '#F4E7D7', num: '2', letter: 'c2',chil:['ān','án','ǎn','àn']},
          {tabname: '整体音', tabcolor: '#F4E7D7', num: '3', letter: 'c3',chil:[]}
        ],
      })
    }
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
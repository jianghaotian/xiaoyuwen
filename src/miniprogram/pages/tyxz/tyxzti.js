// pages/tyxz/tyxzti.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ti: [],
    num: 0,
    select: '',
    selected: 0,
    score: 0,
    labaPlay: 0,
    id: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {id} = options;
    this.setData({
      id: id
    })
    wx.request({
      url: 'https://xyw.htapi.pub/v2/tyxz/getti',
      data: {
        id: id
      },
      success: (res) => {
        if (res.data.status == 0) {
          // console.log(res.data.data);  // 返回数据
          this.setData({ti: res.data.data});
        } else {
          wx.showToast({
            title: '题目获取失败',
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
        audio.src = '/audio/zhengque.mp3';
      } else {
        audio.src = '/audio/cuowu.mp3';
      }
      audio.autoplay = true;
      setTimeout(() => {
        this.setData({
          selected: 0,
          select: '',
          num: this.data.num + 1
        }, () => {
          // 过关
          if (this.data.num >= 10) {
            let lastAudio = wx.createInnerAudioContext();
            if (this.data.score < 6) {
              lastAudio.src = '/audio/shibai.mp3';
            } else {
              lastAudio.src = '/audio/guoguan.mp3';
            }
            lastAudio.autoplay = true;
            // 发送数据
            let token = wx.getStorageSync('token') || '';
            wx.request({
              url: 'https://xyw.htapi.pub/v2/tyxz/submitti',
              method: 'POST',
              data: {
                score: this.data.score,
                id: this.data.id,
                token: token
              },
              success: (res) => {
                if (res.data.status != 0) {
                  wx.showToast({
                    title: '成绩上传失败',
                    icon: 'none',
                    duration: 2000
                  })
                }
              },
              fail (res) {
                // console.log('无法连接到服务器 ' + res);
                wx.showToast({
                  title: '无法连接到服务器，成绩上传失败',
                  icon: 'none',
                  duration: 2000
                })
              }
            });
          }
        });
      }, 1000);
    }
  },

  tapLaba: function (e) {
    let {zi} = e.currentTarget.dataset;
    // console.log(zi);
    let audio = wx.createInnerAudioContext();  
    audio.src = `https://xyw.htapi.pub/v2/audios/tyxz/${zi}.wav`;
    // audio.src = `https://cdn.jsdelivr.net/gh/lemonoink/xiaoyuwen@cdn/audios/tyxz/${zi}.wav`;
    audio.autoplay = true;
    audio.onPlay(() => {
      this.setData({labaPlay: 1});
      // console.log(id, 'onPlay');
    });
    audio.onEnded(() => {
      this.setData({labaPlay: 0});
      // console.log(id, 'onEnded');
    });

  }

})
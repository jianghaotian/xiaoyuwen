const xiangqingData = require('./data');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    labaPlay: 0,
    type: '',
    show: '',
    list: [],
    id: '',
    status: [],
    viewHeight:0,
    height1:0,
    height2:0,
    height3:0
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
        let topbarHeight = 100 / changeHeight;
        let height1 = 80/changeHeight;
        let height2 = 380/changeHeight;
        let height3 = 300/changeHeight;

        let viewHeight = clientHeight - topbarHeight;
        this.setData({
          viewHeight: viewHeight,
          height1:height1,
          height2:height2,
          height3:height3
        });
      }
    });
    let {id, type, sc} = options;
    let show = '';
    let list = [];
    let status = [];
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
    if (sc == 1) {
      type = 'shoucangjia';
      list = [list[current]];
      current = 0;
      status = [1];
    } else {
      // 获取收藏
      let token = wx.getStorageSync('token') || '';
      if (token == '') {
        wx.showToast({
          title: '收藏信息获取失败，原因是：获取账号信息失败，请重新打开小程序',
          icon: 'none',
          duration: 2000
        })
      } else {
        wx.request({
          url: 'https://xyw.htapi.pub/v2/collection/get',
          data: {
            token: token,
            type: type
          },
          success: (res) => {
            if (res.statusCode == 200) {  // 服务器返回200
              if (res.data.status == 0) {  // 服务器手动返回0
                // console.log(res.data.data);
                for (let i = 0; i < list.length; i++) {
                  status[i] = false;
                  for (let j = 0; j < res.data.data.length; j++) {
                    if (res.data.data[j].pinyin == list[i].name) {
                      status[i] = true;
                      break;
                    }
                  }
                }
                this.setData({
                  status
                });
                setTimeout(() => {
                  let showed = wx.getStorageSync('showed') || '';
                  if (showed == '') {
                    wx.showToast({
                      title: '左右滑动可以切换页面～',
                      icon: 'none',
                      duration: 2000
                    })
                    wx.setStorageSync('showed', 1);
                  }
                }, 1000);
              } else {
                wx.showToast({
                  title: '收藏信息获取失败，原因是：身份信息错误，请重新打开小程序',
                  icon: 'none',
                  duration: 2000
                })
              }
            } else {
              // console.log('无法连接到服务器（可能服务器问题）', res);
              wx.showToast({
                title: '收藏信息获取失败，原因是：无法连接到服务器',
                icon: 'none',
                duration: 2000
              })
            }
          },
          fail (res) {
            // console.log('无法连接到服务器 ' + res);
            wx.showToast({
              title: '收藏信息获取失败，原因是：无法连接到服务器',
              icon: 'none',
              duration: 2000
            })
          }
        });
      }
    }
    this.setData({
      type,
      show,
      list,
      id,
      current,
      status
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

  // 收藏
  collect: function(e){
    let {index, name} = e.currentTarget.dataset;
    let status = this.data.status;
    let oldStatus = status[index]
    status[index] = !oldStatus;
    this.setData({
      status
    })
    let token = wx.getStorageSync('token') || '';
    if (token == '') {
      wx.showToast({
        title: '收藏失败，原因是：获取账号信息失败，请重新打开小程序',
        icon: 'none',
        duration: 2000
      })
      let status = this.data.status;
      status[index] = oldStatus;
      this.setData({
        status
      })
    } else {
      wx.request({
        url: 'https://xyw.htapi.pub/v2/collection/shoucang',
        method: 'POST',
        data: {
          token: token,
          type: this.data.type,
          id: name,
          be: status[index]
        },
        success: (res) => {
          if (res.statusCode == 200) {  // 服务器返回200
            if (res.data.status != 0) {
              wx.showToast({
                title: '收藏失败，原因是：身份信息错误，请重新打开小程序',
                icon: 'none',
                duration: 2000
              })
              let status = this.data.status;
              status[index] = oldStatus;
              this.setData({
                status
              })
            }
          } else {
            // console.log('无法连接到服务器（可能服务器问题）', res);
            wx.showToast({
              title: '收藏失败，原因是：无法连接到服务器',
              icon: 'none',
              duration: 2000
            })
            let status = this.data.status;
            status[index] = oldStatus;
            this.setData({
              status
            })
          }
        },
        fail (res) {
          // console.log('无法连接到服务器 ' + res);
          wx.showToast({
            title: '收藏失败，原因是：无法连接到服务器',
            icon: 'none',
            duration: 2000
          })
          let status = this.data.status;
          status[index] = oldStatus;
          this.setData({
            status
          })
        }
      });
    }
  },

  // 点击播放音频
  playAudio: function (e) {
    let audioFile = e.currentTarget.dataset.audio;
    // console.log(audio);
    let audio = wx.createInnerAudioContext();  
    audio.src = `https://xyw.htapi.pub/v2/audios/pinyin/${audioFile}`;
    // audio.src = `https://cdn.jsdelivr.net/gh/lemonoink/xiaoyuwen@cdn/audios/pinyin/${audioFile}`;
    audio.autoplay = true;
    audio.onPlay(() => {
      this.setData({labaPlay: 1});
      // console.log(audioFile, 'onPlay');
    });
    audio.onEnded(() => {
      this.setData({labaPlay: 0});
      // console.log(audioFile, 'onEnded');
    });
  }
})

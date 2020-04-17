const regeneratorRuntime = require('../libs/regenerator-runtime/runtime-module');

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getLayout = query => {
  return new Promise((resolve, reject) => {
    wx.createSelectorQuery().select(query).boundingClientRect(res => {
      resolve(res);
    }).exec();
  });
}

const getScrollTop = query => {
  return new Promise((resolve, reject) => {
    wx.createSelectorQuery().selectViewport().scrollOffset(res => {
      resolve(res.scrollTop);
    }).exec();
  });
}

module.exports = {
  formatTime: formatTime,
  getLayout: getLayout,  // 节点的布局位置
  scrollTop: getScrollTop,  // 节点的竖直滚动位置
}

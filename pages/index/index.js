//index.js
//获取应用实例
const app = getApp()
const date = new Date()
const years = []
const collageNames = []
const schoolList = [["中山大学", "华南理工大学","广州大学"], ["复旦大学", "同济大学","上海交通大学"]]

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    years: years,
    year: date.getFullYear(),
    collage: "SYSU",
    entranceYearValue: [9999],

    schoolList: schoolList,
    multiArray: [["广东省","上海市"],schoolList[0]],
    multiIndex: [0, 0],
  },
  //年份
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
    })
  },
  //省份
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    var data = {
      schoolList: this.data.schoolList,
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    if (e.detail.column == 0) {
      data.multiArray[1] = data.schoolList[data.multiIndex[0]];
      data.multiIndex[1] = 0;
    }

    this.setData(data);
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  addToClass: function() {
    wx.navigateTo({
      url: '../addToNewClass/addToNewClass',
    })
  },
  createNewClass: function() {
    wx.navigateTo({
      url: '../createClass/createClass',
    })
  }
})

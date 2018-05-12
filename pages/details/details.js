// pages/details/details.js
const memberList = [
  {
    name: "巩泽群",
    sid: 16340000,
    note: "我就是我"
  },
  {
    name: "古文鑫",
    sid: 16340001,
    note: "我就是我"
  },
  {
    name: "黄俊凯",
    sid: 16340002,
    note: "我就是我"
  },
  {
    name: "我很皮",
    sid: 16340003,
    note: "我就是我"
  },
  {
    name: "古文鑫",
    sid: 16340001,
    note: "我就是我"
  },
  {
    name: "黄俊凯",
    sid: 16340002,
    note: "我就是我"
  },
  {
    name: "我很皮",
    sid: 16340003,
    note: "我就是我"
  },
  {
    name: "古文鑫",
    sid: 16340001,
    note: "我就是我"
  },
  {
    name: "黄俊凯",
    sid: 16340002,
    note: "我就是我"
  },
  {
    name: "我很皮",
    sid: 16340003,
    note: "我就是我"
  },
  {
    name: "古文鑫",
    sid: 16340001,
    note: "我就是我"
  },
  {
    name: "黄俊凯",
    sid: 16340002,
    note: "我就是我"
  },
  {
    name: "我很皮",
    sid: 16340003,
    note: "我就是我"
  }
]

var loadParams = new Object()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    memberList: memberList,
    loadParams: loadParams
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad ")
    console.log(options)
    this.setData({
      loadParams: options
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {  
    console.log("Onready ")
    console.log(loadParams)
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

  toClass: function () {
    wx.navigateTo({
      url: '../classUI/classUI',
    })
  },

  toProblem: function () {
    wx.navigateTo({
      url: '../problemUI/problemUI',
    })
  },
})
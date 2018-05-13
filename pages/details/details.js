// pages/details/details.js
const memberList = [
  {
    name: "Suosuoso",
    sid: 16340000,
    note: "我就是我"
  },
  {
    name: "gold",
    sid: 16340001,
    note: "我就是我"
  },
  {
    name: "thunder",
    sid: 16340002,
    note: "我就是我"
  },
  {
    name: "我很皮",
    sid: 16340003,
    note: "我就是我"
  },
  {
    name: "zhenly",
    sid: 16340001,
    note: "我就是我"
  },
  {
    name: "icytown",
    sid: 16340002,
    note: "我就是我"
  },
  {
    name: "mega",
    sid: 16340003,
    note: "我就是我"
  },
  {
    name: "sqdalao",
    sid: 16340001,
    note: "我就是我"
  },
  {
    name: "xiuxiu",
    sid: 16340002,
    note: "我就是我"
  },
  {
    name: "cxj",
    sid: 16340003,
    note: "我就是我"
  },

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
    var querystring = JSON.stringify(this.data.loadParams)
    querystring = querystring.slice(1, querystring.length - 1)
    querystring = querystring.replace(/\"/g, "").replace(/,/g, "&").replace(/:/g, "=").replace('[', '').replace(']', '')
    
    var url = '../classUI/classUI?' + querystring;
    wx.navigateTo({
      url: url,
    })
  },

  toProblem: function () {
    wx.navigateTo({
      url: '../problemUI/problemUI'
    })
  },
})
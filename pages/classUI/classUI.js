// pages/classUI/classUI.js
Page({

  data: {
    classname:{},
    questionArray: [
      "鸡生蛋还是蛋生鸡？",
      "保住头发好还是肝完代码好？",
      "想问各位dalao这周计组有作业吗？",
      "cocos2d-x怎么配置？",
      "删库跑路是怎样一种体验？",
      "有没有期末考试资料？",
      "这周作业什么时候交？",
      "这周的计组作业是什么？"
    ]
  },
  
  onLoad: function (options) {
    this.setData({
      classname: options
    })
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

  toDetail: function() {
    var querystring = JSON.stringify(this.data.classname)
    querystring = querystring.slice(1, querystring.length-1)
    querystring = querystring.replace(/\"/g, "").replace(/,/g, "&").replace(/:/g, "=").replace('[', '').replace(']', '')
    var url = '../details/details?' + querystring;
    wx.navigateTo({
      url: url,
    })
  },
  toProblem: function () {
    wx.navigateTo({
      url: '../problemUI/problemUI',
    })
  },
  toAsk: function () {
    wx.navigateTo({
      url: '../ask/ask',
    })
  }, 
  // problemDetail: function(e) {
  //   var url = '../problemUI/problemUI?'
  //   console.log(this.data.questionArray)
  //   var params = this.data.questionArray[e.currentTarget.dataset.index];
  //   url = url + JSON.stringify(params).replace(/\"/g, "");
  //   console.log(url);
  //   wx.navigateTo({
  //     url: url,
  //     success: function(res) {},
  //     fail: function(res) {},
  //     complete: function(res) {},
  //   })
  // }
})
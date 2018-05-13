// pages/ask/ask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionInput: '',
    queryArray: [],
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  bindKeyInput: function (e) {
    this.setData({
      queryArray: [],
      questionInput: e.detail.value
    })
    
    var temp = []
    for (var i in this.data.questionArray) {
      if (this.data.questionArray[i].indexOf(e.detail.value) !== -1) {
        temp.push(this.data.questionArray[i]);
      }
    }
    
    this.setData({
      queryArray: temp
    })
  },

  problemDetail: function (e) {
    var url = '../problemUI/problemUI?'
    var params = this.data.questionArray[e.currentTarget.dataset.index];
    url = url + JSON.stringify(params).replace(/\"/g, "");
    console.log(url);
    wx.navigateTo({
      url: url,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  ask: function () {
    if (this.data.queryArray.length === 0) {
      var temp1 = this.data.queryArray
      var temp2 = this.data.questionArray
      temp1.unshift(this.data.questionInput)
      temp2.unshift(this.data.questionInput)
      this.setData({
        queryArray: temp1,
        questionArray: temp2
      })
      wx.showToast({
        title: '提问成功',
        icon: 'success'
      })
    }
  }
})
// pages/problemUI/problemUI.js
Page({
  data: {
    scrollTop: 100,
    answerInput: "",
    QAList: [
      {
        username: 'zhenly',
        answer: "没有\n"
      },
      {
        username: 'icytown',
        answer: '我不会\n'
      },
      {
        username: 'gold',
        answer: "我会啊你求求我啊\n"
      }
    ]
  },
  submit: function () {
      var temp = this.data.QAList
      temp.push({ username: 'suosuoso', answer: this.data.answerInput });
      wx.showToast({
        title: '提交成功',
        icon: 'success'
      })
      this.setData({
        QAList: temp,
        answerInput: ""        
      })
  },

  keyInput: function (e) {
    this.setData({
      answerInput : e.detail.value
    })
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
  
  }
})
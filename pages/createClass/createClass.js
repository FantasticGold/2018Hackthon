

const date = new Date()
const years = []
const collageNames = []
const schoolList = [["中山大学", "华南理工大学", "广州大学"], ["复旦大学", "同济大学", "上海交通大学"]]

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

// pages/createClass/createClass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    years: years,
    year: date.getFullYear(),
    collage: "SYSU",
    entranceYearValue: [9999],

    schoolList: schoolList,
    multiArray: [["广东省", "上海市"], schoolList[0]],
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

  /** 
   * 表单提交
   */
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  }
})
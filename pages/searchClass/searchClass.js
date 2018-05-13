


const date = new Date()
const years = []
const collageNames = []
const schoolList = [["中山大学", "华南理工大学", "广州大学"], ["复旦大学", "同济大学", "上海交通大学"]]

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

// pages/searchClass/searchClass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    years: years,
    year: date.getFullYear(),
    collage: "SYSU",
    entranceYearValue: [2018],

    schoolList: schoolList,
    multiArray: [["广东省", "上海市"], schoolList[0]],
    multiIndex: [0, 0],

    searchResults: [ ]
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
   * 搜索框点击
   */
  searchButtonClick: function(e) {
    this.setData({
      searchResults: [
                      {
                        classname: "软工一班",
                        classmembersnum: 43
                      },
                      {
                        classname: "软工二班",
                        classmembersnum: 45
                      },
                      {
                        classname: "软工三班",
                        classmembersnum: 47
                      },
                      {
                        classname: "软工四班",
                        classmembersnum: 49
                      }
                    ]
    })
    console.log(this.data)
    // var query = e.detail.value    
    // query = JSON.stringify(query)
    // query = query.slice(1, query.length-1).replace(/\"/g, "").replace(/:/g, "=")
    // console.log(query);
    // var url = '../details/details?' + query
    // wx.navigateTo({
    //   url: url
    // });
  },
  JumpToClassDetails: function(e) {
    console.log(e)
    var classname = this.data.searchResults[e.currentTarget.dataset.index]
    if (!classname.collagename) {
      classname.collagename = "中山大学";
    }
    if (!classname.entranceyear) {
      classname.entranceyear = 2018;
    }
    var querystring = JSON.stringify(classname)
    querystring = querystring.slice(1, querystring.length - 1)
    querystring = querystring.replace(/\"/g, "").replace(/,/g, "&").replace(/:/g, "=").replace('[', '').replace(']', '')
    var url = '../details/details?' + querystring;
    wx.navigateTo({
      url: url
    })
  }

})
// pages/self/self.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    erweima: ['https://i.loli.net/2020/06/20/AcfHTPGDWgZqzVx.jpg',
      'https://i.loli.net/2020/06/20/MvAFZ75SgmbCl26.jpg',
      'https://i.loli.net/2020/06/20/BowkAXQYHWnUpL9.png',
    ]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  wx_click:function(even){
    var index = even.target.dataset.index;
    wx.previewImage({
      current: this.data.erweima[index], // 当前显示图片的http链接
      urls: this.data.erweima // 需要预览的图片http链接列表
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
    this.setData({
      show: false,
    })
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
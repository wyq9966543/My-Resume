// pages/self/self.js
Page({
  containerTap:function(res){
    //console.log(res.touches[0]);
    var x=res.touches[0].pageX;
    var y=res.touches[0].pageY+85;
    this.setData({
      rippleStyle:''
    });
    this.setData({
      rippleStyle:'top:'+y+'px;left:'+x+'px;-webkit-animation: ripple 0.4s linear;animation:ripple 0.4s linear;'
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    self_name: '温涌乾',
    self_job: '前端工程师',
    self_desc: '立志欲坚不欲锐，成功在久不在速',
    self_photo: 'https://i.loli.net/2020/06/20/aHEBvOJi2KF169m.jpg',
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
  onShow: async function () {
    //初始化云数据库
    const db = wx.cloud.database({
      env: 'wyq9966543-gcf9c'
    })
    const selfInfo = db.collection('selfInfo')
    //异步获取云端数据
    var info = await selfInfo.get().then(res => {
      // console.log(res)
      return res.data[0]
    })
    this.setData({
      self_name: info.self_name,
      self_job: info.self_job,
      self_desc: info.self_desc,
      erweima: info.erweima
    })
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
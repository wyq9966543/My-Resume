// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 基本信息
    width: 0,
    height: 0,
    name: '',
    spell: '' ,
    photo: '',
    job: '' ,
    exp: '' ,
    tel: '',
    sex: '',
    age: '',
    email: '',
    address: '',
    // 技能
    skill:[],
    // 教育经历
    edu: [],
    project:[],
    introduction:""
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
  onShow: async function () {
    var width = wx.getSystemInfoSync().windowWidth
    var height = wx.getSystemInfoSync().windowHeight
    //初始化云数据库
    const db = wx.cloud.database({
      env: 'wyq9966543-gcf9c'
    })
    const myInfo = db.collection('myInfo')
    //异步获取云端数据
    var info = await myInfo.get().then(res => {
      //console.log(res)
      return res.data[0]
    })
    //console.log(info)
    this.setData({
      width: width,
      height: height,
      name : info.personInfo.name,
      spell: info.personInfo.spell,
      photo: info.personInfo.Photo,
      job: info.personInfo.job,
      exp: info.personInfo.exp,
      tel: info.personInfo.tel,
      sex: info.personInfo.sex,
      age: info.personInfo.age,
      email: info.personInfo.email,
      address: info.personInfo.address,
      introduction: info.personInfo.introduction,
      skill: info.skill,
      edu: info.edu,
      project: info.project
    })
  },

  coverInfo: function () {
    this.animate('.cover-info', [
      { scale: [1, 1]},
      { scale: [1.1, 1.1]},
      { scale: [1.1, 1.1]},
      { scale: [1, 1]},
    ], 800, function () {
      this.clearAnimation('.cover-info')
    }.bind(this))
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
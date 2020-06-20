// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 基本信息
    width: 0,
    height: 0,
    name: '温涌乾',
    spell: 'Wen Yongqian' ,
    job: '前端工程师' ,
    exp: '向右滑动 > >' ,
    tel: '13249237382',
    sex: '男',
    age: '22',
    email: '601995712@qq.com',
    address: '深圳市龙岗区横岗街道大康社区新龙路23号',
    // 技能
    skill:[
      { name: 'HTML/CSS/javascript', percent: 90},
      { name: 'javascript/ES5/ES6', percent: 85},
      { name: 'java', percent: 70},
      { name: 'react', percent: 85},
      { name: 'vue', percent: 85}
    ],
    // 教育经历
    edu: [
      {
        school: '佛山科学技术学院(佛山大学)',
        major: '计算机科学与技术',
        degree: '本科',
        year: '2016-2020',
        desc: '计算机科学与技术是一个计算机系统与网络兼顾的计算机学科宽口径专业，旨在培养具有良好的科学素养，具有自主学习意识和创新意识，科学型和工程型相结合的计算机专业高水平工程技术人才',
      },      
    ],
    project:[
      {
        name:"在线拍卖平台",
        desc:"该拍卖系统是O2O类型的新零售电商拍卖平台，分为用户登录注册系统、用户竞拍系统、拍卖品库存系统。核心采用了SSM整合开发框架开发，整合了上述若干功能子系统。"
      },
      {
        name:"模具钢余料管理系统",
        desc:"项目最终建立基于B/S的钢材进出库管理系统，与模具钢工厂材料管理现状对接，调研工厂方余料的使用与管理，确定余料利用的算法，完成余料管理系统。"
      },
      {
        name:"硅谷外卖",
        desc:"项目是关于外卖业务的前后台分离Web App (SPA),包括商家, 商品, 购物车, 用户等多个子模块,使用 Vue 全家桶+ES6+Webpack 等前端最新最热的技术采用模块化、组件化、工程化的模式开发,基于 Vue 的最新版本,后台应用技术架构为: Node + Express + Mongodb + Mongoose,前台应用技术架构为: vue + vuex + vue-router + webpack + ES6"
      },
      {
        name:"react后台管理系统",
        desc:"项目为一个前后台分离的商城后台管理的SPA应用, 包括前端 PC 应用和后端应用 ， 包括用户管理 / 商品分类管理 / 商品管理 / 权限管理等功能模块 前端: 使用 React 全家桶 + Antd + Axios + ES6 + Webpack 等技术， 后端: 使用 Node + Express + Mongodb 等技术，采用模块化、组件化、工程化的模式开发"
      }
    ],
    introduction:"参与项目开发工作，写过后台，做过前端设计，与团队成员一起参与去企业的调研，吃苦耐劳，有上进心，工作认真负责。在参与学习的经历中，觉得自己更喜欢前端的内容，视觉交互上的开发设计，绚丽的交互效果一直是我的最爱，爱好做表情包，做视频，做网页，做软件设计，更喜欢花里胡哨的东西。本人性格稳重，待人和善，人际关系良好，接受能力强，对待工作认真负责，有较强的组织能力与团队精神，上进心强、勤于学习能不断提高自身的能力与综合素质。在未来的工作中，我将以充沛的精力，刻苦钻研的精神来努力工作，稳定地提高自己的工作能力，与企业同步发展。"
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
    var width = wx.getSystemInfoSync().windowWidth
    var height = wx.getSystemInfoSync().windowHeight
    this.setData({
      width: width,
      height: height
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
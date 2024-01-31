// pages/individual/individual.js
//商品详情界面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      user_id:1,
      name:"巴黎夜雨",
      imagePath:"/images/hot.png",//需要图片路径
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 读取用户信息并将this.setData({userInfo:})设置为缓存中的用户信息 （后端）
  },
  cancel(){
    wx.clearStorage('usercookie')
  }
})
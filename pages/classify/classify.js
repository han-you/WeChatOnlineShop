// pages/classify/classify.js
import {request}from "../../request/index.js"
//分类浏览界面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList:["服装","化妆品","美妆","服装","化妆品","美妆","服装","化妆品","美妆","服装","化妆品","美妆"],//分类商品的列表
    rightMenuList:[{
      imagePath:"/images/测试_服装1.jpg",
      price:100,
      good_name:"好衣服",
      good_id:1
          },
          {
            imagePath:"/images/测试_服装1.jpg",
            price:100,
            good_name:"好衣服",
            good_id:1
                },
          {
            imagePath:"/images/测试_服装1.jpg",
            price:100,
            good_name:"好衣服",
            good_id:1
          },
    ],//需要有照片路径和价格、名称
    currentIndex:0,//被点击左侧菜单
    scrollTop:0//滑动的距顶距离
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {  
    //获取有多少分类，变成一个list放到leftMenuList(后端)
    //获取leftMenuList的第一个类型对应的商品放到rightMenuList（后端）
  },  
//左侧点击事件
handleItemTap(e)
{
  this.setData({
    currentIndex:e.currentTarget.dataset.index,
    scrollTop:0
  })
  //需要重新请求leftMenuList[currentIndex]对应的数据（后端)
}
})
// pages/home/home.js
import {request}from"../../request/index.js"
//首页
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swiperList:["/images/测试_轮播图.jpg","/images/测试_轮播图2.jpg"],
    //楼层数组
    floorList:[{
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
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
//将轮播图图片路劲加入swiperList(后端)
//将楼层对象加入到floorList（后端）
  }
})
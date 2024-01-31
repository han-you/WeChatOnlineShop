// pages/payment/payment.js
//支付界面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    payList:[{
      imagePath:"../../images/测试_服装1.jpg",
      goodName:"好东西好东西",
      price:3100,
      buy_num:6
    }],
    totalPrice:0,
    goodNum:0,
    order_id:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.order_id=options.order_id
    //根据order_id获取数据放到payList中(后端)
    this.getSum()
  },
  getSum(){
    for(var i=0;i<this.data.payList.length;i++)
    {
      this.setData({
        totalPrice:this.data.payList[i].buy_num*this.data.payList[i].price,
        goodNum:this.data.payList[i].buy_num
      })
    }
  },
  destoryStorage(){
    //支付成功，将对应的订单数据将订单数据更新到数据库（后端）
    wx.navigateTo({
      url: '/pages/home/home',
    })
  }
})
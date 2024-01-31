// pages/goods_detail/goods_detail.js
//商品详情界面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj:{
      imagePaths:["../../images/测试_服装1.jpg","../../images/测试_服装2.jpg"],
      mainImage:"../../images/测试_服装1.jpg",
      prices:3100,
      sold:10000,
      left:3,
      goods_id:"4",
      good_name:"好东西好东西",
      description:"秋装上市，潮流新品,啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
    },
    buy_num:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var good_id=options.good_id
    //根据good_id即订单id获取对应的数据写到goodsObj这个对象上(后端)
  },

  cutnum(){
    if(this.data.buy_num>1)
    {
      var a=this.data.buy_num
      this.setData({
        buy_num:a-1
      })
    }
  },
  addnum(){
    if(this.data.buy_num<this.data.goodsObj.left)
    {
      var a=this.data.buy_num
      this.setData({
        buy_num:a+1
      })
    }

  },
  add_cart(){
    wx.showToast({
      title: '加入成功',  
      icon: 'success',  
      duration: 2000  
    })
//通过写对应的传数据到购物车数据库代码，用户id是缓存中的id,商品id是goodsObj中的id(后端)
  },
  addToStorage(){
    let dict={}
    let payList=[]
    dict['imagePath']=this.data.goodsObj.mainImage
    dict['goodName']=this.data.goodsObj.good_name
    dict['price']=this.data.goodsObj.prices
    dict['buy_num']=this.data.buy_num
    dict['good_id']=this.data.goodsObj.goods_id
    payList.push(dict)
    console.log(payList)
 //根据payList中信息创建订单
 var order_id=1;
 //获取订单的id放入order_id
 wx.navigateTo({
   url: '/pages/payment/payment?order_id='+order_id,
 })
  }
})
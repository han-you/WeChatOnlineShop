// pages/order/order.js
//订单界面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    undeliver_item_list:[
      {
        order_id:1,
        imagePath:"/images/测试_服装1.jpg",
        buy_num:2,
        price:3788,
        good_introduction:"红红火火恍恍惚惚或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或"
    },{
      order_id:2,
      imagePath:"/images/测试_服装1.jpg",
      buy_num:2,
      price:3788,
      good_introduction:"红红火火恍恍惚惚或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或"
    }],
    deliver_item_list:[ {
      order_id:3,
      sign_for_status:true,//是否签收
      deliver_id:"JD123456789",
      imagePath:"/images/测试_服装2.jpg",
      buy_num:2,
      price:3788,
      good_introduction:"红红火火恍恍惚惚或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或"
  },{
    order_id:4,
    deliver_id:"EA123456789CS",
    sign_for_status:false,
    imagePath:"/images/测试_服装2.jpg",
    buy_num:2,
    price:3788,
    good_introduction:"红红火火恍恍惚惚或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或"
  }],
  unpayed_item_list:[
    {
      order_id:3,
      imagePath:"/images/测试_服装2.jpg",
      buy_num:2,
      price:3788,
      good_introduction:"红红火火恍恍惚惚或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或"
  },
  {
    order_id:3,
    imagePath:"/images/测试_服装2.jpg",
    buy_num:2,
    price:3788,
    good_introduction:"红红火火恍恍惚惚或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或"
},{
  order_id:3,
  imagePath:"/images/测试_服装2.jpg",
  buy_num:2,
  price:3788,
  good_introduction:"红红火火恍恍惚惚或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或"
}
  ]
  },
  onLoad(options) {
    //在缓存中获得用户id
    //根据id请求数据（后端），包括未支付订单到unpayed_item_list，待发货订单到undeliver_item_list，已发货订单到deliver_item_list
  },
  onReminder(){
    wx.showToast({  
      title: '催单成功',  
      icon: 'success',  
      duration: 2000  
    });
    //发对应的催单提醒到数据库（后端）
  },
  signFor(e){
    wx.showToast({  
      title: '签收成功',  
      icon: 'success',  
      duration: 2000  
    });
    var id=e.currentTarget.dataset.order_id
    //将数据库对应订单的签收字段改为已签收并重新根据用户id获取订单数据（后端）
  },
  onCancel(e){
    console.log(e)
    wx.showToast({  
      title: '订单取消成功',  
      icon: 'success',  
      duration: 2000  
    });
    var id=e.currentTarget.dataset.order_id
    //将数据库对应订单取消并重新根据用户id获取订单数据（后端）
  }
})
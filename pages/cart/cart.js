// pages/cart/cart.js
//购物车界面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[{
      buy_num:2,
      good_name:"脉动",
      fashion:"最新款二代",
      price:100,
      left:200,

      imagePath:"../../images/测试.jpg",
      text:"测试测试测试测试",
      store:"脉动官方店",
      goods_id:"4"
    },
    {
      buy_num:2,
      good_name:"脉动",
      price:100,
      left:200,

      fashion:"最新款二代",
      imagePath:"../../images/测试.jpg",
      text:"测试测试测试测试",
      store:"脉动官方店",
      goods_id:"3"
    },
    {
      buy_num:2,
      left:200,
      good_name:"脉动",
      price:100,
      fashion:"最新款二代",
      imagePath:"../../images/测试.jpg",
      text:"测试测试测试测试",
      store:"脉动官方店",
      goods_id:"1"
    },{
      left:200,
      buy_num:2,
      good_name:"脉动",
      fashion:"最新款二代",
      imagePath:"../../images/测试.jpg",
      text:"测试测试测试测试",
      store:"脉动官方店",
      goods_id:"2",
      price:100

    }], 
    checkedList:[],
    total_price:0,
    SelectALL:false,
    TotalSum:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //根据缓存中的用户id获取购物车信息(后端)
    this.setData({
      checkedList:this.data.goodsList.map(()=>false)
    })
  },
  sub(options) {  
    var index=options.currentTarget.dataset.index
    if (this.data.goodsList[index].buy_num > 1) {  
      this.setData({  
        ['goodsList[' + index + '].buy_num']: this.data.goodsList[index].buy_num - 1  
      });  
    }  
    this.addMoney()
    this.getSum()
    //将goodList【index】对应的数据在数据库中减少（后端)

  },
  add(options){
    var index=options.currentTarget.dataset.index
    if (this.data.goodsList[index].buy_num < this.data.goodsList[index].left) {  
      this.setData({  
        ['goodsList[' + index + '].buy_num']: this.data.goodsList[index].buy_num + 1  
      });  
    }  
    this.addMoney()
    this.getSum()
    //将goodList【index】对应的数据在数据库中增加（后端)
  },
  selectGoods(e){
    var index=e.target.dataset.index
    this.setData({
      ['checkedList[' + index + ']']:!this.data.checkedList[index]
    })
    this.addMoney()
    this.getSum()
  },
  addMoney()
  {
    var tmp=0
    for(var index=0;index<this.data.checkedList.length;index++)
    {
      if(this.data.checkedList[index])
      {
        tmp+=this.data.goodsList[index].price*this.data.goodsList[index].buy_num
      }
    }
    this.setData({
      total_price:tmp
    })
  },
  select_all(){
    this.setData({
      SelectALL:!this.data.SelectALL
    })
    for(var index=0;index<this.data.checkedList.length;index++)
    {
      if(this.data.SelectALL)
      {
        this.setData({
          ['checkedList[' + index + ']']:true
        })
      }
      else
      {
        this.setData({
          ['checkedList[' + index + ']']:false
        })
      }
    }
    this.addMoney()
    this.getSum()
  },
  getSum()
  {
    var tmp=0
    for(var index=0;index<this.data.checkedList.length;index++)
    {
      if(this.data.checkedList[index])
      {
        tmp+=this.data.goodsList[index].buy_num
      }
    }
    this.setData({
      TotalSum:tmp
    })
  },
  delete_goods(){
    //将CheckList【】中值为true的数据从数据库中删除（后端）
    var newGoodsList=[]
    var newCheckList=[]
    for(var index=0;index<this.data.checkedList.length;index++)
    {
      if(!this.data.checkedList[index])
      {
        newGoodsList.push(this.data.goodsList[index])
        newCheckList.push(false)
      }
    }
    this.setData({
      goodsList:newGoodsList,
      checkedList:newCheckList
    })
    this.addMoney()
    this.getSum()
  },
  addToStorage(){
        let payList=[]
        console.log(this.data.checkedList.length)

        for(var i=0;i<this.data.checkedList.length;i++)
        {

          if(this.data.checkedList[i])
          {
        let dict={}
            dict['goods_id']=this.data.goodsList[i].goods_id;
            dict['imagePath']=this.data.goodsList[i].imagePath;
            dict['price']=this.data.goodsList[i].price;
            dict['goodName']=this.data.goodsList[i].good_name;
            dict['buy_num']=this.data.goodsList[i].buy_num;
            payList.push(dict)
          }
        }
        if(payList.length!=0)
        {
          //根据payList中信息创建订单
          var order_id=2;
          //获取订单的id放入order_id
          wx.navigateTo({
            url: '/pages/payment/payment?order_id='+order_id,
          })
        }
  }
})
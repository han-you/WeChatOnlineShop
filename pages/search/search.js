// pages/search/search.js
//搜索界面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"综合",
        isActive:true
      },
      {
        id:1,
        value:"销量",
        isActive:false
      },
      {
        id:2,
        value:"价格",
        isActive:false
      }
    ],
    currentIndex:0,
    currentItemsList:[{
      imagePath:"../../images/测试.jpg",
      text:"测试测试测试测试",
      store:"脉动官方店",
      goods_id:"4"
    },
    {
      imagePath:"../../images/测试.jpg",
      text:"测试测试测试测试",
      store:"脉动官方店",
      goods_id:"3"
    },
    {
      imagePath:"../../images/测试.jpg",
      text:"测试测试测试测试",
      store:"脉动官方店",
      goods_id:"1"
    },{
      imagePath:"../../images/测试.jpg",
      text:"测试测试测试测试",
      store:"脉动官方店",
      goods_id:"2"
    }],
    search_good_name:"",
  },
  handleItemTab(e){
    const id=e.currentTarget.dataset.index;
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===id?v.isActive=true:v.isActive=false);
    this.setData({
      tabs:tabs,
      currentIndex:id
    })
    //currentIndex 0:综合 1：销量 2：价格
    //根据currentIndex对应请求页面内容currentItemsList中（后端）
  },
  handleInput(e){
    console.log(e)
    
    this.setData({
      search_good_name:e.detail.value.trim(),
    })
  },
  search_tap(){
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===0?v.isActive=true:v.isActive=false);
    this.setData({
      tabs:tabs,
      currentIndex:0
    })
    if(!this.data.search_good_name.trim())
    {
      return;
    }
    else
    {
      //根据search_good_name获取数据库（后端）
    }
  }
})
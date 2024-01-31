// pages/proposal/proposal.js
//提交订单界面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    wordCount: 0
  },
  handleInput(event) {  
    const txt=event.detail.value;
    const wordlength=txt.length;
    this.setData({
      value:txt,
      wordCount:wordlength,
    })
  },  
  handleSubmit(){
    //添加到数据库对应的语句（后端）

    wx.switchTab({
      url: '/pages/individual/individual',
    })
    wx.showToast({
      title: '提交成功',  
      icon: 'success',  
      duration: 1000  
    })
  }
})
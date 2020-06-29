
//获取url参数
function getQueryString(e) {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,      
        function (m, key, value) {            
            vars[key] = value;
        }
    );       
    if(vars[e] === undefined) return ''
    return vars[e];
}


function shareWxMenu(title,desc,link,imgUrl){ 
    var obj = {
        // url:encodeURIComponent(window.location.href.split('#')[0])
        url:window.location.href.split('#')[0]
    };
      $.ajax({       
        type:'post',      
        url:'https://www.toread.com.cn/huodong/wechat/share/config/yh/',       
        data:obj,
        success:function(res){
            console.log(res)
            wx.config({
                debug: false, //开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: res.data.config.appid, // 必填，公众号的唯一标识
                timestamp: res.data.config.timestamp, // 必填，生成签名的时间戳
                nonceStr: res.data.config.noncestr, // 必填，生成签名的随机串
                signature: res.data.config.signature,// 必填，签名，见附录1
                jsApiList: ['updateAppMessageShareData','updateTimelineShareData','hideMenuItems']
            });
            // 判断config 成功的接口
            wx.ready(function() {               
                wx.updateAppMessageShareData({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: imgUrl, // 分享图标                   
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function (res) {
                        console.log(res)
                    }
                });
                wx.updateTimelineShareData({
                    title: title, // 分享标题                 
                    link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: imgUrl, // 分享图标 
                    success: function () {

                    }
                });     
                wx.hideMenuItems({
                    menuList: ["menuItem:copyUrl","menuItem:share:qq",
                    "menuItem:share:weiboApp","menuItem:share:facebook","menuItem:share:QZone","menuItem:openWithQQBrowser", "menuItem:openWithSafari"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
                });          
                wx.error(function (res) {
                    console.log(res);
                });

            })
        },
        error:function(err){
         
        }
    });
   
}


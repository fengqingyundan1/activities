
function DPR() {
    if (window.devicePixelRatio && window.devicePixelRatio > 1) {
        return window.devicePixelRatio;
    }
    return 1;
}
function parseValue(value) {
    return parseInt(value, 10);
};
function drawCanvas(selector) {
    // 获取想要转换的 DOM 节点
    var dom = document.getElementById(selector);       
    var box = window.getComputedStyle(dom);
    // DOM 节点计算后宽高
    var width = parseValue(box.width);
    var height = parseValue(box.height);       
    console.log(width,height)
    // 获取像素比
    var scaleBy = DPR();
    // 创建自定义 canvas 元素
    var canvas = document.createElement('canvas');
    // 设定 canvas 元素属性宽高为 DOM 节点宽高 * 像素比
    canvas.width = width * scaleBy;
    canvas.height = height * scaleBy;
    // 设定 canvas css宽高为 DOM 节点宽高
    canvas.style.width = width+'px';
    canvas.style.height = height+'px';
    // 获取画笔
    var context = canvas.getContext('2d');
    context.scale(scaleBy, scaleBy);
    console.log(context)
    // 将所有绘制内容放大像素比倍      
    // 将自定义 canvas 作为配置项传入，开始绘制
    return  html2canvas(dom, {canvas});
}

function getImgData(img,dir,next){
    var image=new Image();
    image.onload=function(){
    var degree=0,drawWidth,drawHeight,width,height;
    drawWidth=this.naturalWidth;
    drawHeight=this.naturalHeight;
    //以下改变一下图片大小
    var maxSide = Math.max(drawWidth, drawHeight);
    if (maxSide > 1024) {
    var minSide = Math.min(drawWidth, drawHeight);
    minSide = minSide / maxSide * 1024;
    maxSide = 1024;
    if (drawWidth > drawHeight) {
    drawWidth = maxSide;
    drawHeight = minSide;
    } else {
    drawWidth = minSide;
    drawHeight = maxSide;
    }
    }
    var canvas=document.createElement('canvas');
    canvas.width=width=drawWidth;
    canvas.height=height=drawHeight;
    var context=canvas.getContext('2d');
    //判断图片方向，重置canvas大小，确定旋转角度，iphone默认的是home键在右方的横屏拍摄方式
    switch(dir){
    //iphone横屏拍摄，此时home键在左侧
    case 3:
    degree=180;
    drawWidth=-width;
    drawHeight=-height;
    break;
    //iphone竖屏拍摄，此时home键在下方(正常拿手机的方向)
    case 6:
    canvas.width=height;
    canvas.height=width;
    degree=90;
    drawWidth=width;
    drawHeight=-height;
    break;
    //iphone竖屏拍摄，此时home键在上方
    case 8:
    canvas.width=height;
    canvas.height=width;
    degree=270;
    drawWidth=-width;
    drawHeight=height;
    break;
    }
    //使用canvas旋转校正
    context.rotate(degree*Math.PI/180);
    context.drawImage(this,0,0,drawWidth,drawHeight);
    //返回校正图片
    next(canvas.toDataURL("image/png",1));
    }
    image.src=img;
} 

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

shareWxMenu()
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
                jsApiList: ['updateAppMessageShareData','updateTimelineShareData','hideAllNonBaseMenuItem']
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
                wx.hideAllNonBaseMenuItem();          
                wx.error(function (res) {
                    console.log(res);
                });

            })
        },
        error:function(err){
         
        }
    });
   
}




var oid = getCookie('oid')


function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
    else
    return null;
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
// 判断是否登录
// isLogin()
function isLogin(){  
    if(oid === 'null' || oid === null || oid === ''){       
        window.location.href = 'https://www.toread.com.cn/huodong/index/'
    }
}

function getUserInfo(){
    console.log('获取信息')
    $.post('https://www.toread.com.cn/huodong/mine/info/',{'openid':oid},function(res){
        if(res.ret){
            $('.username').html(res.data.nickname)
        }
    })
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
    // 将所有绘制内容放大像素比倍
    context.scale(scaleBy, scaleBy);      
    // 将自定义 canvas 作为配置项传入，开始绘制
    return  html2canvas(dom, {canvas});
}

var programmer = {
    "topic":[
        {
            'title':'码农最在意自己的哪儿个部位形象?',
            'content':[
                {'order':"A",'choose':'脸蛋儿','desc':'颜值即王道','price':'5'},
                {'order':"B",'choose':'手','desc':'代码全靠手','price':'10'},
                {'order':"C",'choose':'头发','desc':'谁秃谁知道','price':'20'},
            ],            
        },
        {
            'title':'码农最怕以下哪件事儿？',
            'content':[
                {'order':"A",'choose':'有BUG','desc':'BUG是我的命数','price':'20'},
                {'order':"B",'choose':'加班','desc':'使我头秃','price':'10'},
                {'order':"C",'choose':'选妹子','desc':'太美太靓，都能解忧','price':'5'},
            ],            
        },
        {
            'title':'码农业余时间都在做什么？',
            'content':[
                {'order':"A",'choose':'代码是我的归属','desc':'我究竟为什么进了这行','price':'20'},
                {'order':"B",'choose':'群里最骚的肯定是我','desc':'我的舞台我最sao','price':'5'},
                {'order':"C",'choose':'我还剩xxx根头发','desc':'生活太难了','price':'10'},
            ],            
        },
        {
            'title':'码农算法挑战：1=5，2=15，3=215，4=2145那么5=?',
            'content':[
                {'order':"A",'choose':'10725','desc':'这么简单','price':'5'},
                {'order':"B",'choose':'1','desc':'小case','price':'20'},
                {'order':"C",'choose':'55555','desc':'我放弃','price':'10'},
            ],            
        },
        {
            'title':'码农最喜欢什么？',
            'content':[
                {'order':"A",'choose':'格子衫','desc':'最爱！','price':'20'},
                {'order':"B",'choose':'冲锋衣','desc':'性价比之王','price':'10'},
                {'order':"C",'choose':'黑包','desc':'谁背谁知道','price':'5'},
            ],            
        },
    ]
}


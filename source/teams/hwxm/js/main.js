//banner js开始 给定一个数组图片通过循环添加给页面图片
var aimgs=["images/banner_9.jpg","images/banner_1.jpg","images/banner_2.jpg","images/banner_3.jpg","images/banner_4.jpg","images/banner_5.jpg","images/banner_6.jpg","images/banner_7.jpg","images/banner_8.jpg"];
//使#list始终在中间
var lew=-$("#list").width()/2+"px";
$("#list").css({transform:"translateX("+lew+")"})
var imgbox=document.querySelector("#imgbox");
var list=document.querySelector("#list");
for(var i=0;i<aimgs.length;i++){
    var img=document.createElement("img");
    var li=document.createElement("li");
    list.appendChild(li);
    imgbox.appendChild(img);
    img.src=aimgs[i];
};

$("#imgbox").children("img").eq(0).click(function () {
    window.location.href="active.html"
}).css({ cursor:"pointer"})

//使用jq  banner插件函数开始
$(".cont").banner({
    items:$(".cont").find("#imgbox").children("img"),   //必传
    list:$(".cont").find("#list").children("li"),       //小圆点非必传
    autoPlay:true,
    delayTime:4000,
    moveTime:500,
});
//JQ banner 插件结束
//banner上面右边的导航条 因为没次鼠标滑过时展示出来的页面不是固定在顶部
var arrli= $("#bdn").children("li");
arrli.mouseenter(function () {
    var t=-$(this).index()*$(this).height();
    //当前鼠标滑过的li的index*这个li的高
    $(this).children("div").attr("class","banner_down").css({top:t+"px"});
});
//banner 结束
//公告动画  此动画函数在百度查找
var noticeanimate= setInterval("noticeUp('#notice','-48px',500)", 3000);
$("#notice").mouseenter(function(){
    clearInterval(noticeanimate);
});
$("#notice").mouseleave(function(){
    setInterval("noticeUp('#notice','-48px',500)", 3000);
});
//公告函数 obj为选择的对象元素 top是一次向上走多少  time 是停留多长时间
function noticeUp(obj,top,time) {
    $(obj).animate({
        marginTop: top
    }, time, function () {
        $(this).css({marginTop:"0"}).find(":first").appendTo(this);
    })
}
//banner利用ajax获取数据
//事件委托写小轮播图按钮 这里不太明白按钮不是生成的为什么直接绑定事件绑定不上去
$(".box").on("click",".btn_l",function (e) {
    var move=$(".lunbo").css("left");
    move=Number(move.slice(0,-2));
    if(move>=0){
        $(".lunbo").css({left:0})
    }else {
        $(".lunbo").stop().animate({left:move+1191+"px"})
    }
}).on("click",".btn_r",function (e){
    var move=$(".lunbo").css("left");
    move=Number(move.slice(0,-2));
    if(move<=-3573){
        $(".lunbo").css({right:0})
    }else {
    $(".lunbo").stop().animate({left:move-1191+"px"});
    console.log(move)
}
});
//轮播图结束
//小轮播图切换开始
var imgarr=$(".sbanner").children("img");
var liarr=$(".sbanner").find("li");
liarr.mouseenter(function () {
    imgarr.eq($(this).index()).attr("class","position").siblings().attr("class","");
    liarr.eq($(this).index()).attr("class","bg").siblings().attr("class","");
});
//小轮播图切换结束

$.ajax({
    url:"jsonp/jsp.json",
    success:function (res) {
        function create(star,end,date) {
            var arr=[];
            var str="";
            arr=res.slice(star,end);
            for(var i=0;i<arr.length;i++){
                var day=new Date()

 str+=`<a href="about.html?src=${arr[i].img}&id=${arr[i].id}_t${day.getTime()}"><img src=${arr[i].img} alt="">
                                   <div class="shop_name">
                                      ${arr[i].name}
                                   </div>
                                    <p>${arr[i].details}</p>
                                   <p>￥${arr[i].price}</p>
                               </a>`;
            }
            $(date).get(0).innerHTML+=(str);
        }
        create(0,4,".banner1");
        create(4,8,".banner2");
        create(8,12,".banner3");
        create(12,16,".banner4");
        create(16,20,".banner5");
        create(20,24,".banner6");
        create(24,32,".shop_re");
        create(30,53,".lunbo");//二十三条数据
        create(32,43,".phone");
        create(43,50,".book");
        create(50,57,".ping");
        create(57,63,".zhi");
        create(43,66,".lunbo2");

    }
});






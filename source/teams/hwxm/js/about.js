var col1=$(".col1").children("ul").children("li");
col1.click(function () {
    var str1=$(this).text();
    $(this).css({borderColor:"red"}).siblings().css({borderColor:""});
        $("#e1").html(`${str1}`)
});
var col2=$(".col2").children("ul").children("li");
col2.click(function () {
    var str2=$(this).text();
    $(this).css({borderColor:"red"}).siblings().css({borderColor:""});
    $("#e2").html(`${str2}`)
});
var big=$(".big").children("ul").children("li");
big.click(function () {
    var str3=$(this).text();
    $(this).css({borderColor:"red"}).siblings().css({borderColor:""});
    $("#e3").html(`${str3}`)
});
/*

var details_left_list=$(".details_left_list").children("li")
details_left_list.click(function () {
   $(this).css({borderColor:"red"}).siblings().css({borderColor:""})
   var  src=$(".details_left_list").children("li").eq($(this).index()).children("img").get(0).src
    $(".open_img").children("img").attr("src",src)
})*/
let hre=window.location.search;
hre=hre.split("_t")[0].slice(1).split("&");
let obj={};
for(let i=0;i<hre.length;i++){
    obj[hre[i].split("=")[0]]=hre[i].split("=")[1]
}
$(".open_img").children("img").get(0).src=obj.src;
$(".bianhao").text($(".bianhao").text()+obj.id)
$.ajax({
    url:"jsonp/jsp.json",
    success:function (res) {
        for(let i=0;i<res.length;i++){
            if(res[i].id===Number(obj.id)){
                $(".b_name").text(res[i].name+res[i].details);
                //console.log(res[i]);
                //console.log(res[i].name+res[i].details)
                a=eval(res[i].imgs);
                //console.log(a);
                $(".details_left_list").html(`<li><img src=${a[0]} alt=""></li>
        <li><img src=${a[1]} alt=""></li>
        <li><img src=${a[2]} alt=""></li>
        <li><img src=${a[3]} alt=""></li>
        <li><img src=${a[4]} alt=""></li>
        <li><img src=${a[5]} alt=""></li>`)

            }
        }
    }
});
$(".details_left_list").on("click","li",function (e) {
    $(this).css({borderColor:"red"}).siblings().css({borderColor:""});
    let  src=$(".details_left_list").children("li").eq($(this).index()).children("img").get(0).src;
    $(".open_img").children("img").attr("src",src)
})
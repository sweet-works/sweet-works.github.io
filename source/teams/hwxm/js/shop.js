$(".head").load("data/data.html .box_head");
$(".footer").load("data/data.html .box_footer");
$(".footer_foot").load("data/data.html .box_footer_foot");

// var arrCook= JSON.parse($.cookie("goods"));
// var str=""
/*$.ajax({
    url:"jsonp/jsp.json",
    success:function (res) {
        for(var j=0;j<res.length;j++){

            for(var i=0;i<arrCook.length;i++){
                //                    console.log(arrCook[i].id);
                if(Number(arrCook[i].id)===res[j].id){
                    str+=`
<table cellpadding="0" cellspacing="0" class="gwc_tb2"><tr>
                        <td class="tb2_td1">
        <input type="checkbox" value="1" name="newslist" id="newslist-1" />
                        </td>
                        <td class="tb2_td2">
                            <a href="#"><img src=${res[j].img}/></a>
                        </td>
                        <td class="tb2_td3"><a href="#">${res[j].name}</a></td>
                        <td class="tb1_td4">${res[j].details}</td>
                        <td class="tb1_td5">
                            <input id="text_box1" name="" type="number" value=${arrCook[i].num} />
                        </td>
                        <td class="tb1_td8">
                        <label id="dan" class="">${res[j].price}</label>
                    </td>
                        <td class="tb1_td6">
                            <label id="total1" class="tot">${arrCook[i].num*res[j].price}.00元</label>
                        </td>
                        <td class="tb1_td7"><a href="#">删除</a></td>
                    </tr></table>`
                }
            }
        }
        $("#biaobiao").get(0).innerHTML=str;

    }
});*/


class Cart{
    constructor(options){
        this.url = options.url;
        this.body = options.tbody;
        this.load()
    }
    load(){
        var that = this;
        $.ajax({
            url:this.url,
            success:function(res){
                that.res = res
                that.getCookie()

            }
        })
    }
    getCookie(){
        this.goods = JSON.parse($.cookie("goods"))
        this.display()

    }
    display(){
        var str = ""
        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goods.length;j++){
                // console.log(this.res[i].id)
                // console.log(this.goods[j].id)
                console.log(this.goods[j].num)
                if(this.res[i].id === Number(this.goods[j].id)){
                    str += `
<tbody cellpadding="0" cellspacing="0" class="gwc_tb2"><tr>
                        <td class="tb2_td1">
        <input type="checkbox" value="1" name="newslist" id="newslist-1" />
                        </td>
                        <td class="tb2_td2">
                            <a href="#"><img src=${this.res[i].img}></a>
                        </td>
                        <td class="tb2_td3"><a href="#">${this.res[i].name}</a></td>
                        <td class="tb1_td4">${this.res[i].details}</td>
                        <td class="tb1_td5">
                            <input id="text_box1" name="" type="number" value=${this.goods[j].num} />
                        </td>
                     <td class="tb1_td8">
                        <label id="dan" class="">${this.res[i].price}</label>
                    </td>
                        <td class="tb1_td6">
                            <label id="total1" class="tot">${this.goods[j].num*this.res[i].price}.00元</label>
                        </td>
                        <td class="tb1_td7"><em style="font-style: normal" data-index=${this.res[i].id}>删除</em></td>
                    </tr></tbody>`
                }
            }
        }
        this.body.html(str);
        this.init()
    }
    //			以下是将删除和修改的方法合成了一个
    init(){
        var that = this;
        //				删除事件
        this.body.on("click","em",function(){
            var id = $(this).attr("data-index");
            $(this).parent().parent().parent().remove()
            console.log( $(this).parent().parent().parent().get(0))
            that.changeCookie(id,function(i){
                that.goods.splice(i,1)
            })
        })
        //				修改事件
        this.body.on("input","#text_box1",function(){
            var num = $(this).val();
            if(num<=0){num=0}else {
            var pir=Number($(this).parent().next().children("label").text())
           $(this).parent().next().next().children("label").get(0).textContent=num*pir+".00元"}
            // console.log(num)
            var id = $(this).parent().parent().children(".tb1_td7").children("em").attr("data-index");
            // console.log($(this).parent().parent().children(".tb1_td7").children("em").attr("data-index"))
            that.changeCookie(id,function(i){
                that.goods[i].num = num
            })
        })
    }
    changeCookie(id,callback){
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id == id){
                callback(i)
            }
        }
        $.cookie("goods",JSON.stringify(this.goods))
    }
    heji(){

    }
}
new Cart({
    url:"jsonp/jsp.json",
    tbody:$("#biaobiao")
})
$("#biaobiao").on("click","table",function () {
    console.log($(this).index())
})
$("#biaobiao").on("click","#newslist-1",function () {
    var str=$(this).parent().siblings().eq(5).children().text().slice(0,-1)-0
    //console.log(str);
    // var a1=$(this).parent().parent().parent().parent().siblings().last().find(".tb3_td3").children("span").get(0).textContent=str
    var s=$(".tb3_td3").children("span").get(0).textContent-0
  $(".tb3_td3").children("span").get(0).textContent=s+str
    // console.log(a1)
})
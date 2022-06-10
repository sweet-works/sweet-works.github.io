// $("#jion").click(function () {
//     console.log(obj.id);
//     $.cookie(obj.id,$("#inp").val())
// });
class GoodsList{
    constructor(options){
        //this.url = options.url;
        this.cont = options.cont;
        this.inp = options.inp;
        this.init()
    }
    init(){
        var that = this;
        this.cont.click(function () {
            // console.log(obj.id);
            // $.cookie(obj.id,$("#inp").val());
            that.id=obj.id;
            that.num=$("#inp").val();
            that.setCookie();
            window.location.href="shop.html"
        });
    }
    setCookie(){
        //				购物车只能使用一条cookie
        this.goods = JSON.parse($.cookie("goods"));
        console.log(this.num)
        //			点击
        if(this.goods == null){
            //					第一次存:直接存
            this.goods = [{
                id:this.id,
                num:1
            }]

        }else{
            //					不是第一次:要判断之前的商品是否跟这次点的一致
            var onOff = true;
            //					遍历之前所有商品,跟这次的商品比较,如果相同,那么就增加数量
            for(var i=0;i<this.goods.length;i++){
                if(this.goods[i].id == this.id){
                    //							之前存了A,这次又点了A
                    if(this.num===1){
                    this.goods[i].num++;}
                    else if(this.num>=1){
                        this.goods[i].num+= Number(this.num);
                    }
                    //							改变开关状态
                    onOff = false
                }
            }
            //					如果遍历完所有对象,开关没有被改变,说明没有找到重复商品,那么就需要添加新商品
            if(onOff == true){
                //						之前存了B,这次点了A
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }

        	console.log(this.goods);

        //				cookie只能存字符
        $.cookie("goods",JSON.stringify(this.goods))
        //				document.cookie = "goods=" + JSON.stringify([{a:10,b:20}]);
    }
}
new GoodsList({
    cont:$("#jion"),
    inp:$("#inp")
})
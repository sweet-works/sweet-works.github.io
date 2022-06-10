$(".head").load("date/hefo.html .box_h");
$(".foot").load("date/hefo.html .box_f");
var bool=false;
$("#sele").click(function () {
    if(bool){
        $("#sele").children("img").get(0).src="images/tick-off.png";
        return bool=!bool;
    }if(!bool){
        $("#sele").children("img").get(0).src="images/tick-on.png";
        return  bool=!bool;
    }
});
$("#log1").click(function () {
    $("#log1").css({color:"red"}).siblings().css({color:""});
    $(".log_body").css({display:"block"}).next().css({display:"none"});
});
$("#log2").click(function () {
    $("#log2").css({color:"red"}).siblings().css({color:""});
    $(".log_right").css({display:"block"}).prev().css({display:"none"});
})

//利用cook验证登陆
class getCook{
    constructor(option){
        this.admin=option.admin;
        this.em=option.em ;
        this.log_in=option.log_in ;
        this.init()
    }
    init(){
        let that=this;
        $(".int_name").on("input",function () {
            that.name=$(".int_name").val();
            let reg1=/^1[34578]\d{9}$/;
            let tel=that.name;
            if(!tel.match(reg1)){
                that.em.text("请正确输入手机号")
                $(".error").css({display:"block"})

            }else {
                that.em.text("");
                $(".error").css({display:""})
            }

        });
        $(".int_pass").on("input",function () {
            that.pass=$(".int_pass").val();
            console.log()
        });
        this.clickin()
    }
    clickin(){
        let that=this;
        this.log_in.click(function () {
            if(that.name===undefined||that.pass===undefined){
                that.em.text("账号或密码不能为空");
                $(".error").css({display:"block"})
            }else {
                that.em.text("");
                $(".error").css({display:""})
            }
            that.inCook()
        })
    }
    inCook(){
        for(let i=0;i<this.admin.length;i++){
            if(this.admin[i].name==this.name){
                //                    console.log(this.admin[i])
                if(this.admin[i].pass==this.pass){
                    $(".last").animate({"opacity":"1"},1000);
                    $(".last").css({zIndex:"100"})
                    break;
                }else {
                    this.em.get(0).textContent="请检查账号密码是否正确";
                    $(".error").css({display:"block"});
                    break;
                }
            }else if(this.admin[i].name!==this.name){
                this.em.text("还未注册，快去注册吧");
                $(".error").css({display:"block"})
            }
        }
    }
}

new getCook({
    admin:JSON.parse($.cookie("admin")),
    int_name:$(".int_name"),
    int_pass:$(".int_pass"),
    em:$(".em"),
    log_in:$(".log_in")
});
//跳转代码
$(".in1").click(function () {
    window.location.href="../index.html";
    $(".last").animate({"opacity":"0"},1000)
});
$(".in2").click(function () {
    window.location.href="log.html";
    $(".last").animate({"opacity":"0"},1000)
});
console.log(JSON.parse($.cookie("admin")));
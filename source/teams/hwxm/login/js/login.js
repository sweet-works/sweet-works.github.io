$(".head").load("date/hefo.html .box_h");
$(".foot").load("date/hefo.html .box_f");
$(".s1").click(function () {
    $(".s1").css({background:"#B40707"}).next().css({background:"#ccc"})
});
$(".s2").click(function () {
    $(".s2").css({background:"#B40707"}).prev().css({background:"#ccc"})
})
class Login {
    constructor(option){
        this.tel=option.tel;
        this.ma=option.ma;
        this.duan=option.duan;
        this.psd1=option.psd1;
        this.psd2=option.psd2;
        this.e1=option.e1;
        this.e2=option.e2;
        this.zc=option.zc;
        this.init()
    }
    init(){
        let that=this;
        this.tel.on("input",function (){
            let reg1=/^1[34578]\d{9}$/;
            let tel=that.tel.val();
            if(!tel.match(reg1)){
                that.e1.text("请正确输入手机号")

            }else {
                that.e1.text("")
            }
        });
        this.psd2.on("input",function () {
            if(that.psd2.val()!=that.psd1.val()){
                that.e2.text("输入两次密码不一致")
            }else {
                that.e2.text("");

            }
        })
        this.psd1.on("input",function () {
            let reg1=/^[A-Za-z]{8,16}$|[0-9]{8,16}$/;
            let reg2=/^[A-Za-z0-9]{8,16}$/;
            let reg3=/^[A-Za-z0-9]|[?=.*,/;:'"{}|!@#$%^&]{8,16}$/;
            let str=that.psd1.val();
            if(((str.length<8&&str.length>0)||str.length>16)){
                that.e2.text("8-16位字符或数字")
            }else {
                that.e2.text("");
                if(str.match(reg1)){
                    that.e2.text("密码强度低")
                }
                else if(str.match(reg2)){
                    that.e2.text("密码强度中")
                }else if(str.match(reg3)){
                    that.e2.text("密码强度高")
                }
            }
        })
        this.zc.click(function () {
            that.name=that.tel.val();
            that.pass=that.psd1.val();
            that.setCookie();

        })
    }
    setCookie(){
        this.admin = JSON.parse($.cookie("admin"));
        console.log(this.admin )
        if(this.admin == null){
            this.admin = [{
                name:this.name,
                pass:this.pass
            }];
            $(".last").animate({"opacity":"1"},1000)
            $(".last").css({zIndex:"10"});

        }else{
            var onOff = true;
            for(var i=0;i<this.admin.length;i++){
                if(this.admin[i].name == this.name){
                    alert("输入手机号占用");
                    onOff = false;
                    window.location.href="login.html"
                }else {
                    $(".last").animate({"opacity":"1"},1000)
                    $(".last").css({zIndex:"10"});
                    onOff = true
                    //                            window.location.href="log.html"
                }
            }

        if(onOff == true){
            this.admin.push({
                name:this.name,
                pass:this.pass,
            })
        }

        }
        $.cookie("admin",JSON.stringify(this.admin))

    }
}
//                console.log(this.admin);
//
//				document.cookie = "goods=" + JSON.stringify([{a:10,b:20}]);

new Login({
    tel:$(".tel").children("input"),
    ma:$(".M_A").children("input"),
    duan:$(".D_AN").children("input"),
    psd1:$(".psd1").children("input"),
    psd2:$(".psd2").children("input"),
    e1:$(".e1"),
    e2:$(".e2"),
    zc:$(".zc")
});
$(".in1").click(function () {
    window.location.href="log.html";
    $(".last").animate({"opacity":"0"},1000)
});
$(".in2").click(function () {
    window.location.href="login.html";
    $(".last").animate({"opacity":"0"},1000)
})
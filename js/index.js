/**
 * Created by dell on 2017/3/6.
 */
window.onload = function () {
search();
secondkill();
scrollPic();
};
/*头部搜索*/
function search() {
    /*获取搜索框对象*/
    var search = document.getElementsByClassName("jd_header_box")[0];
    /*获取banner对象*/
    var banner = document.getElementsByClassName("jd_banner")[0];
    /*获取高度*/
    var height = banner.offsetHeight;
    // console.log(height);
    window.onscroll = function () {
        var top = document.body.scrollTop;
        if (top > height){
            search.style.background = "rgba(201,21,35,0.85)";
        }else{
            var opacity = top/height*0.85;
            search.style.background = "rgba(201,21,35,"+opacity+")";
        }
    }
}

/*秒杀倒计时*/
function secondkill () {
    /*复盒子*/
    var parentTime = document.getElementsByClassName("sk_time")[0];
    /*span时间*/
    var timeList = parentTime.getElementsByClassName("num");
    console.log(timeList.length);
    var times = 4 * 60 *60;
    setInterval(function () {
        times --;
        var h = Math.floor(times/(60*60));
        var m = Math.floor(times/60%60);
        var s = times % 60;
        console.log(h+"-"+m+"-"+s);

        timeList[0].innerHTML = h>10 ? Math.floor(h/10):0;
        timeList[1].innerHTML = h%10;

        timeList[2].innerHTML = m>10 ? Math.floor(m/10):0;
        timeList[3].innerHTML = m%10;

        timeList[4].innerHTML = s>10 ? Math.floor(s/10):0;
        timeList[5].innerHTML = s%10;
    },1000)
}

/*轮播图*/
function scrollPic() {
    /*banner*/
    var banner = document.getElementsByClassName("jd_banner")[0];
    /*图片的宽度*/
    var width = banner.offsetWidth;
    /*图片盒子*/
    var imgBox = banner.getElementsByTagName("ul")[0];
    /*点盒子*/
    var pointBox = banner.getElementsByTagName("ul")[1];
    /*点的数组*/
    var pointList = pointBox.getElementsByTagName("li");
    var index = 1;
    var timer = null;
    /*加过渡*/
    /*第一个规定设置过渡效果的CSS的属性的名称
    第二个规定完成过渡效果需要多少秒或毫秒
    第三个规定效果速度曲线
    第四个定义过渡效果何时开始*/
    var addTransition = function () {
        imgBox.style.transition = "all .3s ease 0s";
        imgBox.style.webkitTransition = "all .3s ease 0s";
    };
    /*减过渡*/
    var removeTransition = function () {
      imgBox.style.transition = "none";
      imgBox.style.webkitTransition = "none";
    };
    /*改变位置*/
    var setTransform = function (t) {
        imgBox.style.transform = "translateX("+ t +"px)";
        imgBox.style.webkitTransform = "translateX("+t+"px)";
    };
    timer = setInterval(function () {
        index++;
        addTransition();
        setTransform(-index*width);
    },3000);
    imgBox.addEventListener("transitionEnd",function () {
        // console.log("过渡完了");
        if(index >= 9){
            index = 1;
        }else if(index <= 0){
            index = 8;
        }
        removeTransition();
        setTransform(-index*width);
    },false);
    imgBox.addEventListener("webkitTransitionEnd",function () {
        // console.log("过渡完了");
        if(index >= 9){
            index = 1;
        }else if(index <= 0){
            index = 8;
        }
        removeTransition();
        setTransform(-index*width);
    },false);
    }


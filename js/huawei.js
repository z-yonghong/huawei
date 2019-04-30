window.onscroll=function () {
    var Old = document.documentElement.scrollTop;
    var Top=document.getElementById("Top");
    if(Old>20){
        Top.style.top=-28+"px";
    };

    if(Old>74){
        Top.style.top=-102+"px";
    };
    var New=0;
    setTimeout(function () {
        New = document.documentElement.scrollTop;
        if(Old>New){
            Top.style.top=-28+"px";
        };
        if(Old<New){
            Top.style.top=-102+"px";
        };
        if(Old<20){
            Top.style.top=0+"px";
        };
    },20);
};

// window.onload=function () {
//     var user=document.getElementsByClassName("user")[0];
//     var qiye=document.getElementsByClassName("qiye")[0];
//     var op=document.getElementsByClassName("op")[0];
//     var yun=document.getElementsByClassName("yun")[0];
//     var xun=document.getElementsByClassName("xun")[0];
//     var fuwu=document.getElementsByClassName("fuwu")[0];
//     user.onclick=function () {
//         qiye.style.display="block";
//         yun.style.display="none";
//         fuwu.style.display="none";
//     };
//     op.onclick=function () {
//         yun.style.display="block";
//         qiye.style.display="none";
//         fuwu.style.display="none";
//     };
//     xun.onclick=function () {
//         fuwu.style.display="block";
//         yun.style.display="none";
//         qiye.style.display="none";
//     };
// };





var titles=document.getElementsByClassName("titles");
var divs=document.getElementsByClassName("showw");
for(var i=0;i<titles.length;i++){
    titles[i].id=i;
    titles[i].onclick=function () {
        for(var j=0;j<titles.length;j++){
            titles[j].style.borderBottom="0px solid red";
            divs[j].style.display="none";
        }
        titles[this.id].style.borderBottom="3px solid red";
        divs[this.id].style.display="block";
    }
}

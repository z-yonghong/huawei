window.onscroll=function () {
    var Old = document.documentElement.scrollTop;
    var Top=document.getElementById("Top");
    // var Top02=document.getElementById("Top02");
    // if(Old<20){
    //     Top.style.top=0+"px";
    // };
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
            console.log('Old:'+Old);
            console.log('New:'+New);
            console.log('shanghua');
        };
        if(Old<New){
            Top.style.top=-102+"px";
            console.log('Old:'+Old);
            console.log('New:'+New);
            console.log('xiahua');
        };
        if(Old<20){
            Top.style.top=0+"px";
        };
    },20);
};
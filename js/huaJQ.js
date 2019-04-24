$(document).ready(function () {
    $("#Top01-left").click(function () {
        $(".container01").slideToggle("slow");
        $(".container02").slideUp("slow");
    });
    $(".tr1").click(function () {
        $(".container02").slideToggle("slow");
        $(".container01").slideUp("slow");
    });

    $(".Top02-li01").hover(
        function(){
            $(".container03").slideDown("slow");
            $(".container03").hover(
                function () {
                    $(".container03").slideDown("slow");
                },
                function () {
                    $(".container03").slideUp("slow");
                }
            );
        },
        function(){
            $(".container03").slideUp("slow");
        }
    );
    $(".Top02-li02").hover(
        function(){
            $(".container04").slideDown("slow");
        },
        function(){
            $(".container04").slideUp("slow");
        }
    );




});
$(document).ready(function () {
    $("#Top01-left").click(function () {
        $(".container01").slideToggle("slow");
        $(".container02").slideUp("slow");
    });
    $(".tr1").click(function () {
        $(".container02").slideToggle("slow");
        $(".container01").slideUp("slow");
    });

    // if( $(".container01").slideDown("slow")) {
    //     $("#Top01-left:first i").addClass("fa-rotate-180");
    //  }
    //  if($(".container01").slideUp("slow")){
    //     $("#Top01-left:first i").removeClass("fa-rotate-180");
    // }


});
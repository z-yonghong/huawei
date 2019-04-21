$(document).ready(function () {
    $("#Top01-left").click(function () {
        $(".container01").slideToggle("slow");
        $(".container02").slideUp("fast");
    });
    $(".tr1").click(function () {
        $(".container02").slideToggle("slow");
        $(".container01").slideUp("fast");
    });
});
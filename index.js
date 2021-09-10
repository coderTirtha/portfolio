$(document).ready(function() {
    $(".menu-items").hide();
    $(".fa-bars").click(function() {
        $(".menu-items").toggle(500);
    });
    $(".settings-menu").hide();
    $(".fa-cog").click(function() {
        $(".settings-menu").toggle(500);
    });
    $(".fa-toggle-off").click(function() {
        $("body").toggleClass("portfolio-body1");
        $(".fa-toggle-off").toggleClass("fa-toggle-on");
        $(".settings-menu").hide(1500);
        $(".project hr").css("border-top", "2px solid white");
        $(".about-text hr").css("border-top", "2px solid white");
        $(".service").toggleClass("service1");
        $("#audio img").toggle();
        $("#front img").toggle();
        $("#responsive img").toggle();
        $(".facebook").toggleClass("facebook1");
        $(".instagram").toggleClass("instagram1");
        $(".twitter").toggleClass("twitter1");
        $(".linkedin").toggleClass("linkedin1");
        $(".github").toggleClass("github1");
    });
});
$(document).ready(function () {
    $(".hamburger").on("click", function () {
        $(".navbar-side").toggleClass("active");
    });
    $(".close").on("click", function () {
        $(".navbar-side").toggleClass("active");
    });
});
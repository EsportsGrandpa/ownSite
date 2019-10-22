$(document).ready(function () {
    $(".hamburger").on("click", function (e) {
        e.preventDefault();
        $(".navbar-side").toggleClass("active");
    });
    $(".close").on("click", function () {
        $(".navbar-side").toggleClass("active");
    });

    function Close() {
        //alert('close');
        $(".navbar-side").toggleClass("active");
    }

    $('.navbar-side a').on('click', Close);
});
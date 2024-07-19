$(document).ready(function () {
    $('.otras-img').on("click", function () {
        $('.img').removeClass('active');
        $(this).parent().addClass('active')
        var i =  $(this).attr("src");
        $('#opcion').attr("src",i)
    });
});

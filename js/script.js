
$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger,.menu').toggleClass('active');
    });

    $('.sub-m').click(function (event) {
        $('.sub-mul').toggleClass('open');
    });
});

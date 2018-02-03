let navHeight = $('.navContainer').height();

$(".mainContent").css("margin-top", navHeight);

$(window).load(function(){
    $(".portraitHolder, .aboutMe").toggle();
});
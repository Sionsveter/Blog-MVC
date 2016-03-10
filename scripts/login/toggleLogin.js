$('input[type="submit"]').mousedown(function(){
  $(this).css('background', '#2ecc71');
});
$('input[type="submit"]').mouseup(function(){
  $(this).css('background', '#1abc9c');
});

$('#loginform').click(function(){
  $('.login').fadeToggle('slow');
  $(this).toggleClass('green');
});
$('#registerform').click(function(){
  $('.signup').fadeToggle('slow');
  $(this).toggleClass('green');
});



$(document).mouseup(function (e)
{


    if ((!$(".login").is(e.target)||$(".signup").is(e.target))) // ... nor a descendant of the container
    {
        $(".login").hide();
        $(".signup").hide();
        $('#loginform').removeClass('green');
        $('#registerform').removeClass('green');
    }
});
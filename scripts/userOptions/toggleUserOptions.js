$('button').mousedown(function(){
  $(this).css('background', '#2ecc71');
});
$('button').mouseup(function(){
  $(this).css('background', '#1abc9c');
});

$('#user-options-btn').click(function(){
  $('.user-options').fadeToggle('slow');
  $(this).toggleClass('green');
});

$(document).mouseup(function (e)
{
    if (!$(".user-options").is(e.target) // if the target of the click isn't the container...
        && $(".user-options").has(e.target).length === 0) // ... nor a descendant of the container
    {
        $(".user-options").hide();
        $('#user-options-btn').removeClass('green');
    }

});
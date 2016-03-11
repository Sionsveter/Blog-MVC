$('#user-control-logout').click(function(){
    delete localStorage.loggedInUser;
    delete localStorage.userId;
    $.notify('User logged out successfully!', 'success');
});
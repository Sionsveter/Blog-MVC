$('#user-control-logout').click(function(){
    delete localStorage.loggedInUser;
    delete localStorage.userId;
});
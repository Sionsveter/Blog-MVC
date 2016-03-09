var app = app || {};

app.loginView = (function() {
    function HomeView(selector, data) {
        $.get('templates/login.html', function(template) {
            var output = Mustache.render(template);

            $(selector).html(output);


            $("#login").click(function(){
                var username = $("#username").val();
                var password = $("#password").val();
                var loginUserModel = new LogInUser(username, password);
                var userRepoModel = app.userRepoModel.load();
                userRepoModel.login(loginUserModel);
                console.log("clicked");
                console.log(loginUserModel)
            });
        });
    }

    return {
        load: function (selector, data) {
            return HomeView(selector, data);
        }
    }
}());

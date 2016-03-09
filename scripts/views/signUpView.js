var app = app || {};

app.signUpView = (function() {
    function HomeView(selector, data) {
        $.get('templates/signUP.html', function(template) {
            var output = Mustache.render(template);

            $(selector).html(output);
        });
        $("#signUp").on("click" ,function(){

            var repoModel = app.userRepoModel.load();
            var username = $("#username").val();
            var password =$("#password").val();
            var email = $("#email").val();
            var userModel = new SignUpUserModel(username, email, password);
            repoModel.signUp(JSON.stringify(userModel));
            console.log("dsadasds");

        });
    }

    return {
        load: function (selector, data) {
            return HomeView(selector, data);
        }
    }
}());


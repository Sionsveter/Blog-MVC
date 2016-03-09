var app = app || {};

app.signUpView = (function() {
    function SignUpView(selector, data) {
        $.get('templates/signUP.html', function(template) {
            var output = Mustache.render(template);

            $(selector).html(output);
            $("#signUp").on("click" ,function(){
                var repoModel = app.userRepoModel.load();
                var username = $("#username").val();
                var password =$("#password").val();
                var email = $("#email").val();
                var userModel = new SignUpUserModel(username, email, password);
                repoModel.signUp(userModel);
            });
        });

    }

    return {
        load: function (selector, data) {
            return SignUpView(selector, data);
        }
    }
}());

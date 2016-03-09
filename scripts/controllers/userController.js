/**
 * Created by user on 8.3.2016 г..
 */
var app = app || {};

app.userController = (function(){
    function UserController(userRepoModel){
        this.userRepoModel = userRepoModel;
    }
    UserController.prototype.getLoginPage = function(selector) {
        app.loginView.load(selector);

        $("#login").click(function () {
            var username = $("#username").val();
            var password = $("#password").val();
            var loginUserModel = new LogInUser(username, password);
            var userRepoModel = app.userRepoModel.load();
            userRepoModel.login(loginUserModel);
            console.log('clicked');
        });
    };
    UserController.prototype.getSignUpPage = function(selector) {
        app.signUpView.load(selector);

            $("#signUp").on("click", function () {
                var repoModel = app.userRepoModel.load();
                var username = $("#username").val();
                var password = $("#password").val();
                var email = $("#email").val();
                var userModel = new SignUpUserModel(username, email, password);
                repoModel.signUp(userModel);
            });
    };
    return {
        load:function(userRepoModel){
            return new UserController(userRepoModel);
        }
    }

})();

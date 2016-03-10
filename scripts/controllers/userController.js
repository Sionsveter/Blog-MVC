/**
 * Created by user on 8.3.2016 г..
 */
var app = app || {};

app.userController = (function(){
    function UserController(userRepoModel){
        this.userRepoModel = userRepoModel;
    }
    UserController.prototype.getLoginPage = function() {
        var _this = this;
        $("#login-button").click(function () {
            var username = $("#username-login").val();
            var password = $("#password-login").val();
            var loginUserModel = new LogInUser(username, password);
            console.log($("#username").val());
            _this.userRepoModel.login(loginUserModel);
            console.log('clicked');
        });
    };
    UserController.prototype.getSignUpPage = function() {
        var _this = this;
            $("#sign-up-button").on("click", function () {
                var username = $("#username-signup").val();
                var password = $("#password-signup").val();
                var email = $("#email-signup").val();
                var userModel = new SignUpUserModel(username, email, password);
                _this.userRepoModel.signUp(userModel);
            });
    };
    return {
        load:function(userRepoModel){
            return new UserController(userRepoModel);
        }
    }

})();

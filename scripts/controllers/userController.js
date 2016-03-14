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
            var loginUserModel = new LogInUser(username, password, password);

            _this.userRepoModel.login(loginUserModel).then(function(data){
                console.log(data);
                $(location).attr("href","#/posts/all");
            });
        });
    };
    UserController.prototype.getLogoutPage = function() {
        var _this = this;
        $("#user-control-logout").click(function () {
            _this.userRepoModel.logout();
            $("location").attr("href","#/");

        });
    };
    UserController.prototype.getSignUpPage = function() {
        var _this = this;
            $("#sign-up-button").on("click", function () {
                var username = $("#username-signup").val();
                var password = $("#password-signup").val();
                var email = $("#email-signup").val();
                var userModel = new SignUpUserModel(username, email, password);
                _this.userRepoModel.signUp(userModel).then(function(success){
                    console.log(success);
                    $(location).attr("href","#/posts/all")
                }, function(error){
                    //TODO : SHOW VALIDATION MESSAGES
                });
            });
    };
    return {
        load:function(userRepoModel){
            return new UserController(userRepoModel);
        }
    }

})();

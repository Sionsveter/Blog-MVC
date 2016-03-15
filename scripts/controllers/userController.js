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
    UserController.prototype.loadLogoutPage = function() {
        var _this = this;
        $("#user-control-logout").click(function () {
            _this.userRepoModel.logout();
            $("location").attr("href","#/");

        });
    };
    UserController.prototype.loadUserViewPage = function(selector, userId){
        var _this = this;
            this.userRepoModel.getUserById(userId).then(function (user) {
                _this.userRepoModel.getPostsByUserId(userId).then(function(posts){
                   var userViewModel = new UserViewModel(user.username, user.email, posts);
                   app.userProfileView.load(selector, userViewModel);
               });
            });
    };
    UserController.prototype.loadSignUpPage = function() {
        var _this = this;
            $("#sign-up-button").on("click", function () {
                var username = $("#username-signup").val();
                var password = $("#password-signup").val();
                var email = $("#email-signup").val();
                var userModel = new SignUpUserModel(username, email, password);
                _this.userRepoModel.signUp(userModel).then(function(success){
                    var loginUserModel = new LogInUser(success.username, success.password, success.password);
                    _this.userRepoModel.login(loginUserModel).then(function(data){
                        $(location).attr("href","#/posts/all");
                    });
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

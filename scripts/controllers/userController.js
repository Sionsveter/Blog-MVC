/**
 * Created by user on 8.3.2016 г..
 */
var app = app || {};

app.userController = (function(){
    function UserController(userRepoModel){
        this.userRepoModel = userRepoModel;

    }
    UserController.prototype.getLoginPage = function(selector){
        app.loginView.load(selector);
    };
    UserController.prototype.getSignUpPage = function(selector){
        app.signUpView.load(selector);
    };
    return {
        load:function(userRepoModel){
            return new UserController(userRepoModel);
        }
    }

})();

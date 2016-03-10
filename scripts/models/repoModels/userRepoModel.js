/**
 * Created by user on 9.3.2016 г..
 */
var app = app || {};

app.userRepoModel = (function(){
    function UserRepoModel(){
        this.requester = app.requester.load();
    }
    UserRepoModel.prototype.signUp = function(signUpUserModel){

        var _this = this;
        var url = this.requester.baseUrl+"user/"+this.requester.appId+"/";

        this.requester.postRequest(url, signUpUserModel)
            .then(function(){
                $.notify('User registered successfully!', 'success');
                var homeController = app.homeController.load();
                //TODO: Load all posts
                homeController.getHomePage('#wrapper');
        }, function(){
                $.notify("Unsuccessful registration!", 'error');
            }).done();
    };
    UserRepoModel.prototype.login = function(loginUserModel){
        var url = this.requester.baseUrl+"user/"+this.requester.appId+"/login";
        var deffer = Q.defer();
        this.requester.postRequest(url, loginUserModel, false)
            .then(function(success){
                localStorage["loggedInUser"] = success._kmd.authtoken;
                localStorage["userId"] = success._id;
                $.notify('User logged in successfully!', 'success');
            },function(){
                $.notify("Unsuccessful log in!", 'error');
            }).done();
    };

    return {
        load:function(){
                return new UserRepoModel()
            }
        }

})();
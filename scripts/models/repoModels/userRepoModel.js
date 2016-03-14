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
        var deffer = Q.defer();
        this.requester.postRequest(url, signUpUserModel,false)
            .then(function(success){
                $.notify('User registered successfully!', 'success');
                deffer.resolve(success)


        }, function(error){
                $.notify("Unsuccessful registration!", 'error');
                deffer.reject(error);
            });
        return deffer.promise;
    };
    UserRepoModel.prototype.login = function(loginUserModel){
        var url = this.requester.baseUrl+"user/"+this.requester.appId+"/login";
        var deffer = Q.defer();
        this.requester.postRequest(url, loginUserModel,false)
            .then(function(success){
                localStorage["loggedInUser"] = success._kmd.authtoken;
                localStorage["userId"] = success._id;
                localStorage["username"] =success.username;
                deffer.resolve(success);
                window.onload();//reloads the header on login
            },function(error){
                deffer.reject(error);
                $.notify("Unsuccessful log in!", 'error');

            });
        return deffer.promise;
    };
    UserRepoModel.prototype.logout = function(){
        //TODO MAKE REQUEST FOR LOGOUT!!!
        localStorage.clear();
        $.notify('User logged out successfully!', 'success');
        window.onload();//reloads the header on logout

    };

    return {
        load:function(){
                return new UserRepoModel()
            }
        }

})();
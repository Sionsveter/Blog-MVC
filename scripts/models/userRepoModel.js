/**
 * Created by user on 9.3.2016 г..
 */
var app = app || {};

app.userRepoModel = (function(){
    function UserRepoModel(){
        this.requester = app.requester.load();
    }
    UserRepoModel.prototype.signUp = function(signUpUserModel){
        var deffer = Q.defer();
        var _this = this;
        var url = this.requester.baseUrl+"user/"+this.requester.appId+"/";

        console.log(JSON.stringify(signUpUserModel));
        this.requester.postRequest(url, signUpUserModel, false);

        return deffer.promise;
    };
    return {
        load:function(){
                return new UserRepoModel()
            }
        }

})();
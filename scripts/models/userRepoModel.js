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

        this.requester.makeRequest("POST",url, signUpUserModel, false)
        de
        return deffer.promise;
    };
    return {
        load:function(){
                return new UserRepoModel()
            }
        }

})();
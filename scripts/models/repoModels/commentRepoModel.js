/**
 * Created by user on 8.3.2016 г..
 */
var app = app ||{};

app.commentRepoModel = (function(){
    function CommentRepoModel(){

        this.requester = app.requester.load();
        this.url = this.requester.baseUrl +"appdata/"+this.requester.appId+"/Posts/";

        this.commentRepo = {
            comments:[]
        }
    }
    CommentRepoModel.prototype.addCommentRequest = function(commentModel){
        var _this = this,
            deffer = Q.defer();
        this.requester.postRequest(this.url, commentModel).then(function(data){
            deffer.resolve(data);
        },function(error){
            deffer.reject(error);
        });
        return deffer.promise;
    };


    return {
        load:function(){
            return new CommentRepoModel();
        }
    }
})();
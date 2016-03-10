/**
 * Created by user on 8.3.2016 г..
 */
var app = app ||{};

app.postRepoModel = (function(){
    function PostRepoModel(){
        this.requester = app.requester.load();
        this.postRepo = {
            posts:[]
        }
    }
    PostRepoModel.prototype.addPostRequest = function(postModel){
        var url = this.requester.baseUrl +"appdata/"+this.requester.appId+"/Posts";

        return this.requester.postRequest(url, postModel);

    };
    return {
        load:function(){
            return new PostRepoModel();
        }
    }
})();
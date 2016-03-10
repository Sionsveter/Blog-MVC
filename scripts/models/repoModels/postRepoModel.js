/**
 * Created by user on 8.3.2016 г..
 */
var app = app ||{};

app.postModel = (function(){
    function PostRepoModel(){
        this.requester = app.requester.load();
        this.postRepo = {
            posts:[]
        }
    }
    PostRepoModel.prototype.addPost = function(postModel){
        var url = app.requester.baseUrl +"appdata/"+this.requester.appId+"/Posts";
        return this.requester.postRequest(url, postModel);

    }
    return {
        load:function(){
            new PostRepoModel();
        }
    }
})();
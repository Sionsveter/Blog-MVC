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
    PostRepoModel.prototype.getPosts = function(selector){
        app.loginView.load(selector);
    }
})();
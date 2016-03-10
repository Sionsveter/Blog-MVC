/**
 * Created by user on 10.3.2016 г..
 */
var app = app || {};

app.postController = (function(){
    function PostController(repomodel){
        this.repoModel = repomodel;
    }
    PostController.prototype.addPost = function(selector){
        app.addPostView.load(selector);


    };
    return {
        load:function(repomodel){
            return new PostController(repomodel);
        }
    }

})();

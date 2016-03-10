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
        var _this = this;
        $("#addPost").click(function(){
            var title = $("#title").val();
            var content = $("#content").val();
            var userId = localStorage["userId"];
            var postModel = new PostModel(title, content, userId);
            _this.repoModel.addPost(postModel)
                .then(function(success){
                    $.notify("Post added successfully", "success");
                    //TODO: LOAD ALL POSTS

                }, function(error){
                    $.notify("error","error");
                });
        })






    };
    return {
        load:function(repomodel){
            return new PostController(repomodel);
        }
    }

})();

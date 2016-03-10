/**
 * Created by user on 10.3.2016 г..
 */
var app = app || {};

app.postController = (function(){
    function PostController(repoModel){
        this.repoModel = repoModel;
    }
    PostController.prototype.addPost = function(selector){
        app.addPostView.load(selector);
        var _this = this;
        $("#addPost").click(function(){
            var title = $("#title").val();
            var description = $("#description").val();
            var tags = $("#tags").val();
            var content = $("#content").val();
            var userId = localStorage["userId"];
            var postModel = new PostModel(title,description, content, userId);
            _this.repoModel.addPostRequest(postModel)
                .then(function(success){
                    $.notify("Post added successfully", "success");
                    //TODO: LOAD ALL POSTS

                }, function(error){
                    $.notify("error","error");
                });
        })

    };
    return {
        load:function(repoModel){
            return new PostController(repoModel);
        }
    }

})();

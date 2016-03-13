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
            var username = localStorage["username"];
            var tagsArray = $("#tags").val().split(/\s+/);
            console.log(tagsArray);
            var postModel = new PostBindingModel(title,description, content, userId, username);
            for (var tag in tagsArray) {
                if(tag){
                    postModel.tags.push(tagsArray[tag]);
                }
            }
            _this.repoModel.addPostRequest(postModel)
                .then(function(success){
                    $.notify("Post added successfully", "success");
                    $(location).attr("href","#/posts/all");


                }, function(error){
                    $.notify("error","error");
                });
        })

    };
    PostController.prototype.loadAllPosts = function(selector){
        this.repoModel.getAllPosts().then(function(data){

            app.allPostsView.load(selector, data);
        });
    };
    PostController.prototype.loadPostById = function(selector, id){
        this.repoModel.getPostById(id).then(function(data){
            console.log(data);
           app.postView.load(selector,data);
        });

    };

    return {
        load:function(repoModel){
            return new PostController(repoModel);
        }
    }

})();

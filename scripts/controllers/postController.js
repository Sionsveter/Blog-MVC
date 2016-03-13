/**
 * Created by user on 10.3.2016 г..
 */
var app = app || {};

app.postController = (function(){
    function PostController(repoModel, tagsRepoModel){
        this.repoModel = repoModel;
        this.tagsRepoModel = tagsRepoModel;
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
                .then(function(data){
                    $.notify("Post added successfully", "success");
                        var postId = data._id,
                            tags = data.tags;
                        tags.forEach(function(tagName) {
                            if (tagName) {
                                _this.tagsRepoModel.addTagRequest(postId, tagName);
                            }
                        });
                    $(location).attr("href","#/posts/all");
                },function(error){
                    $.notify("Post isn't added", "error");
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
        load:function(repoModel, tagsRepoModel){
            return new PostController(repoModel, tagsRepoModel);
        }
    }

})();

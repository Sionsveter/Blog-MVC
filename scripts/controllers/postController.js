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
            var requester = app.requester.load();
            console.log(requester.baseUrl+"user/"+requester.appId+"/"+userId);
            requester.getRequest(requester.baseUrl+"user/"+requester.appId+"/"+userId)
                .then(function(data){

                    var tagsArray = $("#tags").val().trim().split(/\s+/);
                    var postModel = new PostBindingModel(title,description, content, userId, username, data.passwordForPutRequests);

                    tagsArray.forEach(function(tag){
                        if(!tag || /^\s*$/.test(tag)){
                            throw new Error("Tags cannot be empty.");
                        }
                        postModel.tags.push(tag);
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
                    });
                });
        })
    };
    PostController.prototype.loadAllPosts = function(selector){
        var _this = this;
        this.repoModel.getAllPosts().then(function(posts){
           // console.log(posts);
            _this.tagsRepoModel.getAllTags().then(function(tags){
                var data = {
                    "posts": posts,
                    "tags": tags
                };
                app.allPostsView.load(selector, data);
                $('#search-by-tags-button').click(function(){
                    var selectedTagName = $('#search-tag').val();
                    $(location).attr("href","#/postsByTagName/" + selectedTagName);
                })
            })
        });
    };
    PostController.prototype.loadPostsByTagName = function(selector, selectedTagName){
        var neededPosts = [];
            this.repoModel.getAllPosts().then(function(posts){
                    neededPosts = posts.filter(function(post){
                    return post.tags.contains(selectedTagName);
                });

                var obj = {
                    "posts": neededPosts
                };
                app.postsByTagName.load(selector, obj);
            });
    };
    PostController.prototype.loadPostById = function(selector, id){
        this.repoModel.getPostById(id).then(function(data){
           app.postView.load(selector,data);
        });

    };

    return {
        load:function(repoModel, tagsRepoModel){
            return new PostController(repoModel, tagsRepoModel);
        }
    }

})();

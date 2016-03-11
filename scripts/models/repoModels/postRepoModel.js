/**
 * Created by user on 8.3.2016 г..
 */
var app = app ||{};

app.postRepoModel = (function(){
    function PostRepoModel(){

        this.requester = app.requester.load();
        this.url = this.requester.baseUrl +"appdata/"+this.requester.appId+"/Posts/";
        this.postRepo = {
            posts:[]
        }
    }
    PostRepoModel.prototype.addPostRequest = function(postModel){


        return this.requester.postRequest(this.url, postModel);

    };
    PostRepoModel.prototype.getAllPosts = function(){
        this.postRepo["posts"].length = 0;
        var deffer = Q.defer();
        var _this = this;
        this.requester.getRequest(this.url)
            .then(function(data){
                data.forEach(function(post){
                    var postViewModel = new PostViewModel(post._id, post.title, post.description);
                    _this.postRepo["posts"].push(postViewModel);
                });
                deffer.resolve(_this.postRepo);

            },function(error){
                deffer.reject(error);
            });
        return deffer.promise;
    };
    PostRepoModel.prototype.getPostById = function(id){
        var deffer = Q.defer();

        var _this= this;
        this.requester.getRequest(this.url+'?query={"_id":"'+id+'"}')
            .then(function(data){
                deffer.resolve(data)},
                function(error){
                    deffer.reject(error);
                }
            );
        console.log(this.url+'/?query={"_id":"'+id+'"}');
        return deffer.promise;
    };
    return {
        load:function(){
            return new PostRepoModel();
        }
    }
})();
/**
 * Created by user on 8.3.2016 г..
 */
var PostBindingModel = (function(){
    function PostModel(title, description,content,userId, username){
        this.title = title;
        this.description = description;
        this.content = content;
        this.comments = [];
        this.tags = [];
        this.author = {
            "_type": "KinveyRef",
            "_id": userId,
            "_collection": "Posts",
            "username": username

        };
        this.postDate = new Date();
        this.views = 0;
    }
    return PostModel;
})();

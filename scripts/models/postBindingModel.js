/**
 * Created by user on 8.3.2016 г..
 */
var PostBindingModel = (function(){
    function PostModel(title, description,content,userId){
        this.title = title;
        this.description = description;
        this.content = content;
        this.comments = [];
        this.tags = [];
        this.author = {
            "_type": "KinveyRef",
            "_id": userId,
            "_collection": "Posts"

        }
    }
    return PostModel;
})();

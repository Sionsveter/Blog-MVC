/**
 * Created by user on 8.3.2016 г..
 */
var PostModel = (function(){
    function PostModel(title, description,content,userId){
        this.title = title;
        this.description = description;
        this.content = content;
        this.comments = [];
        this.tags = [];
        this.relation = {
            "_type": "KinveyRef",
            "_id": userId,
            "_collection": "Posts"

        }
    }
    return PostModel;
})();

/**
 * Created by user on 8.3.2016 г..
 */
var PostModel = (function(){
    function Post(content, tag, userId){
        this.content = content;
        this.tag = tag;
        this.relation = {
            "_type": "KinveyRef",
            "_id": userId,
            "_collection": "Posts"


    }
    }
})();

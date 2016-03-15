
var CommentBindingModel = (function(){
    function CommentBindingModel(currentUser, mail, content, postId){
        this.setUserName(currentUser);
        this.setUserEmail(mail);
        this.content = content;
        this.postOn = new Date();
        this.author = {
            "_type": "KinveyRef",
            "_id": postId,
            "_collection": "Posts"
        };

    }

    function isBlankNullOrUndefined(str) {
        return (!str || /^\s*$/.test(str));
    }



    CommentBindingModel.prototype.setUserName = function(value){
        if(!isBlankNullOrUndefined(value)){
            throw new Error("Name cannot be empty.");
        }
        this.username = value;
    };

    CommentBindingModel.prototype.setUserEmail = function(value){

        this.userEmail = value;
    };
    return CommentBindingModel;
})();

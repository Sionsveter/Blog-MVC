/**
 * Created by user on 13.3.2016 г..
 */
var CommentBindingModel = (function(){
    function CommentModel(currentUser, userEmail=null, content, postId=null){
        this.userName = userName($("#commenterName").val());
        this.userEmail = userEmail($("#commenterEmail").val());
        this.content = content;
        this.postId = postId;
    }

    function isBlankNullOrUndefined(str) {
        return (!str || /^\s*$/.test(str));
    }

    function ValidateEmail(value)
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
        {
            return (true)
        }

        return (false)
    }

    CommentBindingModel.prototype.userName = function(value){
        if(isBlankNullOrUndefined(value)){
            throw new Error("Name cannot be empty.");
        }
        this.username = value;
    };

    CommentBindingModel.prototype.userEmail = function(value){
        if(!ValidateEmail(value)){
            throw new Error("Email is in invalid format.");
        }
        this.userEmail = value;
    };
    return CommentModel;
})();

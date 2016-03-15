
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

    function ValidateEmail(value)
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
        {
            return (true)
        }

        return (false)
    }

    CommentBindingModel.prototype.setUserName = function(value){
        if(!isBlankNullOrUndefined(value)){
            throw new Error("Name cannot be empty.");
        }
        this.username = value;
    };

    CommentBindingModel.prototype.setUserEmail = function(value){
        if(ValidateEmail(value)){
            throw new Error("Email is in invalid format.");
        }
        this.userEmail = value;
    };
    return CommentBindingModel;
})();

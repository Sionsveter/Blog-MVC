app = app || {};

app.commentController = (function(){
    function CommentController(commentRepoModel){
        this.repoModel = commentRepoModel;
    }
    CommentController.prototype.addComment = function(selector){
        app.commentView.load(selector);
        var _this = this;
        $("#addComment").click(function(){
            var userName =  $("#commenterName").text();
            var userEmail = $("#commenterEmail").val();
            var comment = $("#comment").val();
            var requester = app.requester.load();

        })
    };
    return {
        load:function(commentRepoModel){
            return new CommentController(commentRepoModel);
        }
    }

})();

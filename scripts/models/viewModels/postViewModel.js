/**
 * Created by user on 13.3.2016 г..
 */
var PostViewModel = (function(){
    function PostViewModel(postId, title, description, content, comments, tags, author, postedOn){
        this.title = title;
        this.description = description;
        this.content = content;
        this.comments = comments;
        this.tags = tags;
        this.author = author;
        this.postId = postId;
        this.postedOn = postedOn;
    }
    return PostViewModel;
})();
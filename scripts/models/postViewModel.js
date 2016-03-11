/**
 * Created by user on 11.3.2016 г..
 */
var PostViewModel = (function(){
    function PostViewModel(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
    }
    return PostViewModel;
})();
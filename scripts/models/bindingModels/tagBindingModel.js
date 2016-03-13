var TagBindingModel = (function(){
    function TagBindingModel(name, posts){
        this.name = name;
        this.posts = posts || [];
    }

    return TagBindingModel;
}());
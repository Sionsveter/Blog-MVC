var app = app ||{};

window.onload = function() {
    if (localStorage["loggedInUser"]) {
        app.allreadyLoggedView.load('header');
    }
    else {
        app.signUpView.load('header');
    }
    // TODO : load footer on window load
};

(function(){
    app.router = Sammy(function () {

            var selector = '#wrapper',
                userOptions = "#userOptions",
                header = 'header',
                userRepoModel = app.userRepoModel.load(),
                postRepoModel = app.postRepoModel.load(),
                homeController = app.homeController.load(),
                //commentController = app.commentController.load(),
                userController = app.userController.load(userRepoModel),
                tagsRepoModel = app.tagsRepoModel.load(),
                postController = app.postController.load(postRepoModel, tagsRepoModel);

            //this.before({except:{path:'#\/(user/(login|signUp))?'}}, function(){
            //    var loggedInUser = localStorage['loggedInUser'];
            //    if(!loggedInUser){
            //        this.redirect("#/user/login");
            //        window.onload();
            //
            //    }
            //});

            this.get('#/', function () {
                homeController.getHomePage(selector);
            });
            this.get('#/user/options', function(){
                userController.getLogoutPage(userOptions);
                this.redirect("#/");
            });
            this.get('#/user/login', function(){
                userController.getLoginPage(userOptions);
            });
            this.get('#/user/signUp', function(){
                userController.getSignUpPage(userOptions);
            });
            this.get('#/posts/add', function(){
                try{
                    postController.addPost(selector);
                }
                catch (e){
                    $.notify(e.message,"error");
                }
            });
            this.get('#/comments/add', function(){
                try{
                    /*commentController.addComment(selector);*/
                }
                catch (e){
                    $.notify(e.message,"error");
                }
            });
            this.get('#/posts/all',function(){
                postController.loadAllPosts(selector);
            });
            this.get('#/postsByTagName/:tagName', function(){
                postController.loadPostsByTagName(selector, this.params['tagName']);
            });

            this.get('#posts/:postId', function(){
                postController.loadPostById(selector, this.params['postId']);
            });



    });

    app.router.run('#/');
})();

var app = app ||{};

(function(){
    app.router = Sammy(function () {
        var selector = '#wrapper';
        var header = 'header';
        var userRepoModel = app.userRepoModel.load();
        var postRepoModel = app.postRepoModel.load();
        var homeController = app.homeController.load();
        var userController = app.userController.load(userRepoModel);
        var postController = app.postController.load(postRepoModel);

        this.get('#/', function () {
            homeController.getHomePage(selector);
        });
        this.get('#/user/login', function(){
            userController.getLoginPage(selector);
        });
        this.get('#/user/signUp', function(){
            userController.getSignUpPage(selector);
        });
        this.get('#/posts/add', function(){
            postController.addPost(selector);
        });
        this.get('#/posts/all',function(){
            postController.loadAllPosts(selector);
        });
        this.get('#posts/:postId', function(){

            postController.loadPostById(selector, this.params['postId']);
        })


    });

    app.router.run('#/');
})();

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
            header = 'header',
            userRepoModel = app.userRepoModel.load(),
            postRepoModel = app.postRepoModel.load(),
            homeController = app.homeController.load(),
            //commentController = app.commentController.load(),
            userController = app.userController.load(userRepoModel),
            postController = app.postController.load(postRepoModel);



        this.get('#/', function () {
            homeController.getHomePage(selector);
        });

        if(localStorage["loggedInUser"]){
            this.get('#/user/options', function(){
                userController.getLogoutPage(selector);
            });
        }
        else{
            this.get('#/user/login', function(){
                userController.getLoginPage(selector);
            });
            this.get('#/user/signUp', function(){
                userController.getSignUpPage(selector);
            });
        }

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

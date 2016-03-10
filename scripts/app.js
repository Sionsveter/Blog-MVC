var app = app ||{};

(function(){
    app.router = Sammy(function () {
        var selector = '#wrapper';
        var userRepoModel = app.userRepoModel.load();
        var homeController = app.homeController.load();
        var userController = app.userController.load(userRepoModel);



        this.get('#/', function () {
            homeController.getHomePage(selector);
        });
        this.get('#/user/login', function(){
            userController.getLoginPage(selector);
        });
        this.get('#/user/signUp', function(){
            userController.getSignUpPage(selector);
        })
        this.get('#/posts/add', function(){

        })


    });

    app.router.run('#/');
})();

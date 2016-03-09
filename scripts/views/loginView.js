var app = app || {};

app.loginView = (function() {
    function HomeView(selector) {
        $.ajax({
            method: 'GET',
            url: 'templates/login.html',
            async: false
        }).success(function(template){
            var output = Mustache.render(template);
            $(selector).html(output);
        });
    }

    return {
        load: function (selector, data) {
            return HomeView(selector, data);
        }
    }
}());

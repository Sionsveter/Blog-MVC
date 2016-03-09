var app = app || {};

app.loginView = (function() {
    function HomeView(selector, data) {
        $.get('templates/login.html', function(template) {
            var output = Mustache.render(template);

            $(selector).html(output);
        })
    }

    return {
        load: function (selector, data) {
            return HomeView(selector, data);
        }
    }
}());

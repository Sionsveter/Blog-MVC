/**
 * Created by user on 8.3.2016 г..
 */
var app = app ||{};

app.requester = (function () {
    function Requester(){
        this.appId = "kid_-JxcTTZzkW";
        this.appSecret = "ad2d7f1dd9c24ced8b98942b48da54a6";
        this.baseUrl = "https://baas.kinvey.com/";
    }

    Requester.prototype.makeRequest = function(method,url,data,useSession){
        var token,
            defer = Q.defer(),
            options = {
                method: method,
                url:url,
                success:function(data){
                    defer.resolve(data);
                },
                error:function(error){
                    defer.reject(error);
                }
            };
        if(data!==null){
            options.data = JSON.stringify(data);
            options.headers = {
                'Content-Type':'application/json'
            };
        }

        if(!useSession){
            token = this.appId +":" + this.appSecret;
            options.beforeSend = function(xhr){
                xhr.setRequestHeader('Authorization','Basic '+ btoa(token))
            }
        }else{
            token = sessionStorage['sessionAuth'];
            options.beforeSend = function(xhr){
                xhr.setRequestHeader('Authorization','Kinvey '+ token)
            }
        }

        $.ajax(options);

        return defer.promise;
    };

    return{
        load: function(){
            app.requester = new Requester();
        }
    }
})();

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

    Requester.prototype.getRequest = function(url){
        var token,
            defer = Q.defer();

        if(!localStorage['loggedInUser']){
            token = 'Basic ' + btoa(this.appId + ":" + this.appSecret);
        }else{
            token = 'Kinvey ' + localStorage['loggedInUser'];
        }

        $.ajax({
            method: 'GET',
            headers: {
                'Authorization': token
            },
            url: url,
            success:function(data){
                defer.resolve(data);
            },
            error:function(error){

                defer.reject(error);
            }
        });

        return defer.promise;
    };

    Requester.prototype.postRequest = function(url, data, async){
        var token,
            defer = Q.defer();

        if(!localStorage['loggedInUser']){
            token = 'Basic ' + btoa(this.appId + ":" + this.appSecret);
        }else{
            token = 'Kinvey ' + localStorage['loggedInUser'];
        }


        $.ajax({
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            url: url,
            async: async,
            data: JSON.stringify(data),
            success:function(data){
                defer.resolve(data);
            },
            error:function(error){
                defer.reject(error);
            }
        });

        return defer.promise;
    };

    Requester.prototype.deleteRequest = function(url, async){
        var token,
            defer = Q.defer();

        if(!localStorage['loggedInUser']){
            token = 'Basic ' + btoa(this.appId + ":" + this.appSecret);
        }else{
            token = 'Kinvey ' + localStorage['loggedInUser'];
        }

        $.ajax({
            method: 'DELETE',
            headers: {
                'Authorization': token
            },
            url: url,
            async: async,
            success:function(data){
                defer.resolve(data);
            },
            error:function(error){
                defer.reject(error);
            }
        });

        return defer.promise;
    };

    Requester.prototype.putRequest = function(url, data, async, username, password){
        var token,
            defer = Q.defer();
            token = 'Kinvey ' + btoa(username+":"+password);


        $.ajax({
            method: 'PUT',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            url: url,
            async: async,
            data: JSON.stringify(data),
            success:function(data){
                defer.resolve(data);
            },
            error:function(error){
                defer.reject(error);
            }
        });

        return defer.promise;
    };

    return{
        load: function(){
            return new Requester();
        }
    }
})();

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

    Requester.prototype.getRequest = function(url, useSession){
        var token,
            defer = Q.defer();

        if(!useSession){
            token = 'Basic ' + btoa(this.appId + ":" + this.appSecret);
        }else{
            token = 'Kinvey ' + sessionStorage['sessionAuth'];
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

    Requester.prototype.postRequest = function(url, data, useSession){
        var token,
            defer = Q.defer();

        if(!useSession){
            token = 'Basic ' + btoa(this.appId + ":" + this.appSecret);
        }else{
            token = 'Kinvey ' + sessionStorage['sessionAuth'];
        }


        $.ajax({
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            url: url,
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

    Requester.prototype.deleteRequest = function(url, useSession){
        var token,
            defer = Q.defer();

        if(!useSession){
            token = 'Basic ' + btoa(this.appId + ":" + this.appSecret);
        }else{
            token = 'Kinvey ' + sessionStorage['sessionAuth'];
        }

        $.ajax({
            method: 'DELETE',
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

    Requester.prototype.putRequest = function(url, data, useSession){
        var token,
            defer = Q.defer();

        if(!useSession){
            token = 'Basic ' + btoa(this.appId + ":" + this.appSecret);
        }else{
            token = 'Kinvey ' + sessionStorage['sessionAuth'];
        }

        $.ajax({
            method: 'PUT',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            url: url,
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

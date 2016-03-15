var app = app ||{};

app.sidebarRepoModel = (function(){
    function SidebarRepoModel(){
        this.requester = app.requester.load();
        this.url = this.requester.baseUrl +"appdata/"+this.requester.appId;
        this.sidebarRepo = {
            lastPosts:[],
            allTags:[],
            archive:[]
        }
    }

    SidebarRepoModel.prototype.getSidebarInfo = function(){
        this.sidebarRepo["lastPosts"].length = 0;
        var deffer = Q.defer();
        var _this = this;

        this.requester.getRequest(this.url+'/Posts?query={}&sort={"postDate": -1}&limit=5&fields=_id,title')
            .then(function(data){
                    data.forEach(function(post){
                        _this.sidebarRepo["lastPosts"].push(post);
                    });
                    deffer.resolve(_this.sidebarRepo)
            },
                function(error){
                    deffer.reject(error);
                }
            );
        console.log(this.sidebarRepo);
        return deffer.promise;
    };

    return {
        load:function(){
            return new SidebarRepoModel();
        }
    }
})();
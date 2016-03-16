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

                    _this.requester.getRequest(_this.url+'/Tags')
                        .then(function(data){
                                var arrTags = [];

                                data.forEach(function(tag){
                                    arrTags.push(tag);
                                });

                                var modifiedTags = arrTags.map(function(tag){
                                    var obj = {name:tag.name,tagId:tag._id,posts:tag.posts.length};

                                    return obj;
                                });

                                modifiedTags.sort(function (a, b) {
                                    if (b.posts > a.posts) {
                                        return 1;
                                    }
                                    if (b.posts < a.posts) {
                                        return -1;
                                    }

                                    return 0;
                                });

                                _this.sidebarRepo['allTags'] = modifiedTags.slice(0, 30);
                                deffer.resolve(_this.sidebarRepo)
                            },
                            function(error){
                                deffer.reject(error);
                            }
                        );
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
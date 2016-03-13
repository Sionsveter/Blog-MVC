/**
 * Created by user on 8.3.2016 г..
 */
var app = app ||{};

app.tagsRepoModel = (function(){
    function TagsRepoModel(){
        this.requester = app.requester.load();
        this.url = this.requester.baseUrl +"appdata/"+this.requester.appId+"/Tags/";
        this.tagsRepo = {
            tags:[]
        };
    }
    
    TagsRepoModel.prototype.addTagRequest = function(postId,tagName){
        var existingTag,
            postRelation = {
                "_type": "KinveyRef",
                "_id": postId,
                "_collection": "Tags"
            },
            _this = this;

        this.getTagByName(tagName).then(function(data){
            existingTag = data[0];
            if(existingTag){
                existingTag.posts.push(postRelation);
                _this.updateTagByName(existingTag._id, existingTag).done();
            }
            else{
                var tagModel = new TagBindingModel(tagName,[postRelation]);
                return _this.requester.postRequest(_this.url, tagModel, false).done();
            }
        });


    };


    TagsRepoModel.prototype.getAllTags = function(){
        this.tagsRepo["tags"] = [];
        var deffer = Q.defer();
        var _this = this;
        this.requester.getRequest(this.url)
            .then(function(data){
                data.forEach(function(tag){
                    var tagModel = new TagBindingModel(tag._id, tag.posts);
                    _this.tagsRepo["tags"].push(tagModel);
                });
                deffer.resolve(_this.tagsRepo);
            },function(error){
                deffer.reject(error);
            });

        return deffer.promise;
    };

    TagsRepoModel.prototype.updateTagByName = function(id, updatedTag){
        var deffer = Q.defer();
        console.log(this.url + id);
        this.requester.putRequest(this.url + id, updatedTag, false)
            .then(function(data) {
                console.log(data);
                    deffer.resolve(data);
            },
                function(error){
                    deffer.reject(error);
                }
            );

        return deffer.promise;
    };

    TagsRepoModel.prototype.getTagByName = function(name){
        var deffer = Q.defer();

        this.requester.getRequest(this.url+'?query={"name":"' + name + '"}', false)
            .then(function(data){
                    deffer.resolve(data)},
                function(error){
                    deffer.reject(error);
                }
            );

        return deffer.promise;
    };

    TagsRepoModel.prototype.getTagById = function(id){
        var deffer = Q.defer();
        this.requester.getRequest(this.url+'?query={"_id":"'+id+'"}')
            .then(function(data){
                    deffer.resolve(data)},
                function(error){
                    deffer.reject(error);
                }
            );

        return deffer.promise;
    };
    return {
        load:function(){
            return new TagsRepoModel();
        }
    }
})();
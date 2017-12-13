angular.module('myapp')
.service('MyService',function($http)
{
    var name="AAS";

    this.getName = function(){
        return name;
    };
    this.setName = function(newVal){
        name = newVal;
    };

    this.getRes = function()
    {
         //var url = 'https://api.github.com/users/jintoppy/repos';
         var url= 'http://www.mocky.io/v2/5a2f9e0f2d0000910fa83abe';
         return $http.get(url);
    };
});
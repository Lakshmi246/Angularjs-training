angular.module('myapp',[]);

angular.module('myapp')
.component('app',{
    templateUrl:'app.component.html',
    controller:function(MyService){
        // var name= MyService.getName();
        // alert(name);
        var promise = MyService.getRes();
        promise.then(function(res)
        {
           console.log(res.data);  
        },function(err){
            console.log(err);
        });
    }
});


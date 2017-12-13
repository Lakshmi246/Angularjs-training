angular.module('myapp')
.directive('nameCustomCheck',function(){
    return {
        restrict:'A',
        require: 'ngModel',
        link: function(scope,element,attrs,ngModelCtrl){
            ngModelCtrl.$validators.nameCustomCheck= function(val)
            {
                if(val && val.startsWith('a')){
                    return false;
                }
                return true;
            };
        }
    };
})
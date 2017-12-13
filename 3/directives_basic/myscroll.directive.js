angular.module('myapp')
.directive('myScroll', function(){
    return {
        restrict: 'A',
        controller: 
         function()
         {
            this.sayName = function(){
                alert('hi');
            };
         },
        link: function(scope,element,attrs,ctrl)
        {
            element.css("max-height",attrs.myScroll+'px');
            element.css("overflow-y","auto");
            ctrl.sayName();
        }
    };
});
angular.module('myapp')
.directive('appHighlight', function(){
    return {
        restrict: 'EA',
        templateUrl: 'highlight.template.html',
        controller: function($scope,$element)  //dependancy injection
        {
            $element.find('h3').css('color','blue');
            $scope.onClick = function(){
                $scope.myVal = "modified";
            };
        },
        //scope: true
       // scope: false,
        //scope: {}
        scope: {
            myTitle:'@',
            myVal:'='
        },
        link: function(scope,element,attrs)
        {
            //element.find('h3').css('color','orange');
        }
    };
});
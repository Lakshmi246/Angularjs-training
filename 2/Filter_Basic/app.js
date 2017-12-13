angular.module('myapp', []);

angular.module('myapp')
    .component('app', {
        templateUrl: 'app.component.html',
        controller: function(){
            this.greeting = 'Hello Everyone';

            this.dob = '1513061958000';

            this.yourAge = 20;
            
        }
    });

angular.module('myapp')
    .filter('myName', function(){

        return function(value, greeting){
            return greeting + " filtered value is " + value;
        }; 

    });


angular.module('myapp')
    .filter('ageCheck', function(){

        return function(value, ageLimit){
            var limit = ageLimit || 10;

            if(parseInt(value) < limit) {
                return "You are Junior";
            }
            return "You are Senior";
            
        }; 

    });
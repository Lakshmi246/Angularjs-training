var myapp = angular.module('myapp',[]);
myapp.component('myCalculator',{
    //template:'<div>My Custom Calculator</div>',
    templateUrl:'mycalculator.tpl.html',
    controller: 'MyCalculatorCtrl',
    bindings:
    {
        resultText:'@'   //expecting value
    }
});

myapp.controller('MyCalculatorCtrl',function()
{
   this.isCalculated = false;
   this.onInputChange = function(){
       this.isCalculated = false;
   };
   this.calculate = function(operation){
       var input1= parseInt(this.input1);
       var input2= parseInt(this.input2);
      var result;
      switch(operation)
      {
          case 'add':
          result = input1+input2;
          break;
          case 'substract':
          result = input1-input2;
          break;
          case 'multiply':
          result = input1*input2;
          break;
          default:
          result = input1/input2;
          break;
      }
      this.result =result;
      this.isCalculated = true;
   };
});
myapp.controller('MyCtrl',function($scope)
{
    // $scope.title = "AngularJS training";
    // $scope.age = 10;
    // $scope.sayHi = function(){
    //     alert('hi');
    // };
    
    // $scope.students=[
    //     {
    //         Name: 'Lakshmi',
    //         Department: 'MITS',
    //         DOB:'24-09-1993'
    //     },
    //     {
    //         Name: 'Shilpa',
    //         Department: 'OPER',
    //         DOB:'24-09-1991'
    //     },
    //     {
    //         Name: 'Jinto',
    //         Department: 'ITEC',
    //         DOB:'24-09-1987'
    //     }
    // ];

    // $scope.onStudentSelect = function(student){
    //    $scope.selectedStudent = student;
    // };
    //-----------------Image slider
    // $scope.activeImageIndex = 0;
    // $scope.goNext = function(){
    //     if($scope.activeImageIndex === $scope.imgList.length-1)
    //     {
    //        $scope.activeImageIndex =0;
    //     }
    //     else
    //     {
    //         $scope.activeImageIndex= $scope.activeImageIndex+1;
    //     }
    // };
    
    // $scope.goBack = function(){
    //     if($scope.activeImageIndex === 0)
    //     {
    //         $scope.activeImageIndex = $scope.imgList.length-1;
    //     }
    //     else
    //     {
    //         $scope.activeImageIndex= $scope.activeImageIndex-1;
    //     }
    // };
    
    // $scope.imgList = [
    //     'https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg',
    //     'http://upload.wikimedia.org/wikipedia/commons/2/25/Nasa-logo.gif',
    //     'https://thumb7.shutterstock.com/display_pic_with_logo/3921209/571681849/stock-vector-blue-bird-on-a-white-background-571681849.jpg'
    // ];
    //---------------------ImageSlider
    //$scope.myImage = 'https://thumb7.shutterstock.com/display_pic_with_logo/3921209/571681849/stock-vector-blue-bird-on-a-white-background-571681849.jpg';
   
    //--------------Calculator
    // $scope.onInputChange = function()
    // {
    //     $scope.isCalculated = false;
    // }
    // $scope.calculate = function(operation){
    //     var input1= parseInt($scope.input1);
    //     var input2= parseInt($scope.input2);
    //    var result;
    //    switch(operation)
    //    {
    //        case 'add':
    //        result = input1+input2;
    //        break;
    //        case 'substract':
    //        result = input1-input2;
    //        break;
    //        case 'multiply':
    //        result = input1*input2;
    //        break;
    //        default:
    //        result = input1/input2;
    //        break;
    //    }
    //    $scope.result =result;
    //    $scope.isCalculated = true;
    // };
    //--------------Calculator
});
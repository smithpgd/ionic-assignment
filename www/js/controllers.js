angular.module('calorie.controllers', [])	//to use this controller neeed to call ng-app="calorie" which is fdone in the index

.controller('AppCtrl', function($scope) {
  $scope.categories = ['Drinks', 'Vegetables', 'Fruit', 'Meats'];
  
})
//taken from the todo app, to remember the total calories
.factory('Projects', function() {
  return {
    
    save: function(projects) {
      window.localStorage['projects'] = angular.toJson(projects);
    },
    
  }
})

//controller for the food template

.controller('FoodsCtrl', function($scope,$rootScope,Projects, $stateParams) {			//the contrller named FoodsCtrl
	$rootScope.count = 0;																//inialises the count to 0, which will be the total calories
  categories = ['Drinks', 'Vegetables', 'Fruit', 'Meats'];								//the different categories for the food items

  
	//adds up the total calories each time calories are added
	$scope.function1 = function(calorie) {													//takes in the variable calorie and adds this to the total calories
	     
		 $rootScope.count = $scope.count + calorie;
		 //saves the value of the count
		  Projects.save($rootScope.count);													//saves the value of total calories accross states
	};
	
	//resets the calories to 0	//called by the reset button
	$scope.functionReset = function() {
	   //changes the scope to 0
		 $rootScope.count = 0;
	};
	//shows the total in an alert box // called by the done button
	//was only used in earlier versions
	$scope.functionDone = function(tot){
		alert(tot);
	};
  
  
  //list of all the foods, their image locations and their calories to be added to the states
  Foods = [
    [
      {title: "Milk",		 imgsrc: "img/Milk.jpg", 	calories: 50},
      {title: "Fizzy Drink", imgsrc: "img/Fizzy.gif",	calories: 60},
      {title: "Beer",		 imgsrc: "img/Beer.png", 	calories: 70},
      {title: "Wine", 		 imgsrc: "img/wine.png",	calories: 40}
    ],
    [
	  {title: 	"Potatoes",	imgsrc: "img/Potatoes.jpg",	calories: 15},
      {title:	"Carrots",	imgsrc: "img/Carrots.jpg",	calories: 20},
      {title:	"Peas",		imgsrc: "img/Peas.jpg",		calories: 25},
	  {title: 	"Cucumber", imgsrc: "img/cucumber.jpg",	calories: 26},
      {title:	"Brocolli",	imgsrc: "img/Brocolli.jpg",	calories: 40},
      {title:	"Peppers",	imgsrc: "img/Peppers.jpg",	calories: 50},

    ],
    [
      {title: "Apple",		  imgsrc: "img/Apples.jpg",		 calories: 125},
      {title: "Banana",		  imgsrc: "img/banana.png",		 calories: 125},
      {title: "Grapes",	      imgsrc: "img/grapes.jpg",		 calories: 125},
      {title: "Orange",		  imgsrc: "img/Orange.jpg",		 calories: 125},
      {title: "Strawberries", imgsrc: "img/Strawberries.jpg",calories: 125},
      {title: "Pear",		  imgsrc: "img/Pear.jpg",		 calories: 125},
    ],
    [
      {title:"Steak 100g",	 imgsrc: "img/Steak.png",	calories: 125},
      {title:"Chicken 100g", imgsrc: "img/Chicken.png",	calories: 125},
      {title:"Lamb 100g", 	 imgsrc: "img/Lamb.jpg", 	calories: 125},
      {title:"Pork 100g",	 imgsrc: "img/Pork.jpg", 	calories: 125},
      {title:"Fish 100g",	 imgsrc: "img/Fish.jpg", 	calories: 125},
   
     
    ]
  ];
  
  $scope.category = categories[$stateParams.FoodsId];
  $scope.Foods = Foods[$stateParams.FoodsId];

});


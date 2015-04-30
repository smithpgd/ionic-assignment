angular.module('calorie', ['ionic', 'calorie.controllers'])			//to use the angularjs below, app needs to declare itself as an angular js app with a value of calorie

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  //the menu state for the left side menu, uses the AppCtrl controller
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  
  //the Foods section, lists the foods in each categories, uses the FoodCtrl controller
  .state('app.Foods', {
    url: "/Foods/:FoodsId",							//the url that will show in the address bar
    views: {
      'menuContent': {
        templateUrl: "templates/Foods.html",		//the location of the template it is to use
        controller: 'FoodsCtrl'						//the controller it is to use
      }
    }
  });

  $urlRouterProvider.otherwise('/app/Foods/1');
});

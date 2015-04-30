angular.module('calorie', ['ionic', 'calorie.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.Foods', {
    url: "/Foods/:FoodsId",
    views: {
      'menuContent': {
        templateUrl: "templates/Foods.html",
        controller: 'FoodsCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/Foods/1');
});

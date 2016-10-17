// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ionic.rating'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // Each tab has its own nav history stack:

  .state('adminOrderList', {
    url: '/adminOrderList',
    templateUrl: 'templates/adminOrderList.html',
    controller: 'AdminOrderListCtrl'
  })
  
  .state('adminOrderDetail', {
    url: '/adminOrderDetail',
    templateUrl: 'templates/adminOrderDetail.html',
    controller: 'AdminOrderDetailCtrl'
  })
  
  .state('assigneeOrderList', {
    url: '/assigneeOrderList',
    templateUrl: 'templates/assigneeOrderList.html',
    controller: 'AssigneeOrderListCtrl'
  })
  
  .state('assigneeOrderDetail', {
    url: '/assigneeOrderDetail',
    templateUrl: 'templates/assigneeOrderDetail.html',
    controller: 'AssigneeOrderDetailCtrl'
  })
  
  .state('adminAllOrderList', {
    url: '/adminAllOrderList',
    templateUrl: 'templates/adminAllOrderList.html',
    controller: 'AdminAllOrderListCtrl'
  })
  
  .state('adminAllItemList', {
    url: '/adminAllItemList',
    templateUrl: 'templates/adminAllItemList.html',
    controller: 'AdminAllItemListCtrl'
  })
  
  .state('adminAssignedList', {
    url: '/adminAssignedList',
    templateUrl: 'templates/adminAssignedList.html',
    controller: 'AdminAssignedListCtrl'
  })
  
  .state('adminCleaningList', {
    url: '/adminCleaningList',
    templateUrl: 'templates/adminCleaningList.html',
    controller: 'AdminCleaningListCtrl'
  })
  
  .state('adminPackingList', {
    url: '/adminPackingList',
    templateUrl: 'templates/adminPackingList.html',
    controller: 'AdminPackingListCtrl'
  })
  
  .state('adminDelieverList', {
    url: '/adminDelieverList',
    templateUrl: 'templates/adminDelieverList.html',
    controller: 'AdminDelieverListCtrl'
  })
  
  .state('main', {
    url: '/main',
    templateUrl: 'templates/main.html',
    controller: 'MainCtrl'
  })
  
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
  
  .state('homeTest', {
    url: '/homeTest',
    templateUrl: 'templates/homeTest.html',
    controller: 'HomeTestCtrl'
  })
  
  .state('registration', {
    url: '/registration',
    templateUrl: 'templates/registration.html',
    controller: 'RegistrationCtrl'
  })
  
  .state('productDetail', {
    url: '/productDetail',
    templateUrl: 'templates/productDetail.html',
    controller: 'ProductDetailCtrl'
  })
  
  .state('myOrder', {
    url: '/myOrder',
    templateUrl: 'templates/myOrder.html',
    controller: 'MyOrderCtrl'
  })
  
  .state('trackMyOrder', {
    url: '/trackMyOrder',
    templateUrl: 'templates/trackMyOrder.html',
    controller: 'TrackMyOrderCtrl'
  })
  
  .state('orderSuccess', {
    url: '/orderSuccess',
    templateUrl: 'templates/orderSuccess.html'
  })
  
  .state('productList', {
    url: '/productList',
    templateUrl: 'templates/productList.html',
    controller: 'ProductListCtrl'
  })
  
  .state('productSummary', {
    url: '/productSummary',
    templateUrl: 'templates/productSummary.html',
    controller: 'ProductSummaryCtrl'
  })
  
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  });
  
  $urlRouterProvider.otherwise('main');

});

(function() {
  angular.module('ionic.rating', []).constant('ratingConfig', {
    max: 5,
    stateOn: null,
    stateOff: null
  }).controller('RatingController', function($scope, $attrs, ratingConfig) {
    var ngModelCtrl;
    ngModelCtrl = {
      $setViewValue: angular.noop
    };
    this.init = function(ngModelCtrl_) {
      var max, ratingStates;
      ngModelCtrl = ngModelCtrl_;
      ngModelCtrl.$render = this.render;
      this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
      this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
      max = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max;
      ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) : new Array(max);
      return $scope.range = this.buildTemplateObjects(ratingStates);
    };
    this.buildTemplateObjects = function(states) {
      var i, j, len, ref;
      ref = states.length;
      for (j = 0, len = ref.length; j < len; j++) {
        i = ref[j];
        states[i] = angular.extend({
          index: 1
        }, {
          stateOn: this.stateOn,
          stateOff: this.stateOff
        }, states[i]);
      }
      return states;
    };
    $scope.rate = function(value) {
      if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
        ngModelCtrl.$setViewValue(value);
        return ngModelCtrl.$render();
      }
    };
    $scope.reset = function() {
      $scope.value = ngModelCtrl.$viewValue;
      return $scope.onLeave();
    };
    $scope.enter = function(value) {
      if (!$scope.readonly) {
        $scope.value = value;
      }
      return $scope.onHover({
        value: value
      });
    };
    $scope.onKeydown = function(evt) {
      if (/(37|38|39|40)/.test(evt.which)) {
        evt.preventDefault();
        evt.stopPropagation();
        return $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? {
          1: -1
        } : void 0));
      }
    };
    this.render = function() {
      return $scope.value = ngModelCtrl.$viewValue;
    };
    return this;
  }).directive('rating', function() {
    return {
      restrict: 'EA',
      require: ['rating', 'ngModel'],
      scope: {
        readonly: '=?',
        onHover: '&',
        onLeave: '&'
      },
      controller: 'RatingController',
      template: '<ul class="rating" ng-mouseleave="reset()" ng-keydown="onKeydown($event)">' + '<li ng-repeat="r in range track by $index" ng-click="rate($index + 1)"><i class="icon" ng-class="$index < value && (r.stateOn || \'ion-ios-star\') || (r.stateOff || \'ion-ios-star-outline\')"></i></li>' + '</ul>',
      replace: true,
      link: function(scope, element, attrs, ctrls) {
        var ngModelCtrl, ratingCtrl;
        ratingCtrl = ctrls[0];
        ngModelCtrl = ctrls[1];
        if (ngModelCtrl) {
          return ratingCtrl.init(ngModelCtrl);
        }
      }
    };
  });

}).call(this);
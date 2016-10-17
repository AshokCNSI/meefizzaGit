angular.module('starter.controllers', ['ngMessages','ionic'])

.controller('AdminOrderListCtrl', function($scope,$timeout,$state) {
  
})

.controller('AdminAssignedListCtrl', function($scope,$timeout,$state) {
  
})

.controller('AdminCleaningListCtrl', function($scope,$timeout,$state) {
  
})

.controller('AdminPackingListCtrl', function($scope,$timeout,$state) {
  
})

.controller('AdminDelieverListCtrl', function($scope,$timeout,$state) {
  
})

.controller('AdminAllOrderListCtrl', function($scope,$timeout,$state) {
  
})

.controller('AdminAllItemListCtrl', function($scope,$timeout,$state,$ionicModal) {
  
  $scope.showModal = function() {
    $ionicModal.fromTemplateUrl('templates/changeFishStatus.html', {
      scope: $scope,
      animation: 'slide-in-up',
      hideDelay:920
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
      $scope.hideModal = function(){
        $scope.modal.hide();
        // Note that $scope.$on('destroy') isn't called in new ionic builds where cache is used
        // It is important to remove the modal to avoid memory leaks
        $scope.modal.remove();
      }
    });
  };
})

.controller('AdminOrderDetailCtrl', function($scope,$timeout,$state,$ionicModal) {
  
  $scope.showModal = function() {
    $ionicModal.fromTemplateUrl('templates/assigneeList.html', {
      scope: $scope,
      animation: 'slide-in-up',
      hideDelay:920
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
      $scope.hideModal = function(){
        $scope.modal.hide();
        // Note that $scope.$on('destroy') isn't called in new ionic builds where cache is used
        // It is important to remove the modal to avoid memory leaks
        $scope.modal.remove();
      }
	  
	  $scope.addAddress = function(){
        $ionicModal.fromTemplateUrl('templates/addAssignee.html', {
		  scope: $scope,
		  animation: 'slide-in-up',
		  hideDelay:920
		}).then(function(modal1) {
		  $scope.modal1 = modal1;
		  $scope.modal1.show();
		  $scope.hideAddress = function(){
			$scope.modal1.hide();
			// Note that $scope.$on('destroy') isn't called in new ionic builds where cache is used
			// It is important to remove the modal to avoid memory leaks
			$scope.modal1.remove();
		  }
		});
      }
	  
    });
  };
  
})

.controller('AssigneeListCtrl', function($scope,$timeout,$state) {
  
})

.controller('AddAssigneeCtrl', function($scope,$timeout,$state) {
  
})

.controller('AssigneeOrderListCtrl', function($scope,$timeout,$state) {
  
})

.controller('AssigneeOrderDetailCtrl', function($scope,$timeout,$state,$ionicModal) {
  $scope.showModal = function() {
    $ionicModal.fromTemplateUrl('templates/changeStatus.html', {
      scope: $scope,
      animation: 'slide-in-up',
      hideDelay:920
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
      $scope.hideModal = function(){
        $scope.modal.hide();
        // Note that $scope.$on('destroy') isn't called in new ionic builds where cache is used
        // It is important to remove the modal to avoid memory leaks
        $scope.modal.remove();
      }
    });
  };
  
})

.controller('AdminTrackingListCtrl', function($scope,$timeout,$state) {
  
})

.controller('AdminDelieverListCtrl', function($scope,$timeout,$state) {
  
})

.controller('MainCtrl', function($scope,$timeout,$state) {
	if(window.StatusBar) {
	  StatusBar.overlaysWebView( false );
	  StatusBar.backgroundColorByHexString('#47a8c3');
	  StatusBar.styleLightContent();
    }
	 $timeout(function() {
        $state.go('login');
    }, 3000);
})

.controller('RegistrationCtrl', function($scope,$timeout,$state) {
  
})

.controller('HomeCtrl', function($scope,$timeout,$state,$ionicSlideBoxDelegate) {
 
 if(window.StatusBar) {
	  StatusBar.overlaysWebView( false );
	  StatusBar.backgroundColorByHexString('#47a8c3');
	  StatusBar.styleLightContent();
    }
	
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
  
  $scope.rating = 4;
  $scope.data = {
    rating : 3,
    max: 5
  }
  
  $scope.$watch('data.rating', function() {
	console.log('New value: '+$scope.data.rating);
  });  

})

.controller('ProductDetailCtrl', function($scope,$timeout,$state) {
	 
	 $scope.rating = 4;
  $scope.data = {
    rating : 3,
    max: 5
  }
  
  $scope.$watch('data.rating', function() {
	console.log('New value: '+$scope.data.rating);
  });  
  
})

.controller('ProductListCtrl', function($scope,$timeout,$state) {
	 
	 $scope.rating = 4;
  $scope.data = {
    rating : 3,
    max: 5
  }
  
  $scope.$watch('data.rating', function() {
	console.log('New value: '+$scope.data.rating);
  });  
  
})

.controller('HomeTestCtrl', function($scope,$timeout,$state,$ionicSlideBoxDelegate) {
 
 if(window.StatusBar) {
	  StatusBar.overlaysWebView( false );
	  StatusBar.backgroundColorByHexString('#47a8c3');
	  StatusBar.styleLightContent();
    }
	
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
  
  $scope.rating = 4;
  $scope.data = {
    rating : 3,
    max: 5
  }
  
  $scope.$watch('data.rating', function() {
	console.log('New value: '+$scope.data.rating);
  });  

})

.controller('ProductDetailCtrl', function($scope,$timeout,$state) {
	 
	 $scope.rating = 4;
  $scope.data = {
    rating : 3,
    max: 5
  }
  
  $scope.$watch('data.rating', function() {
	console.log('New value: '+$scope.data.rating);
  });  
  
})

.controller('selectAddress', function($scope,$timeout,$state) {
  
})

.controller('addAddress', function($scope,$timeout,$state) {
  
})

.controller('MyOrderCtrl', function($scope,$timeout,$state) {
  
})

.controller('TrackMyOrderCtrl', function($scope,$timeout,$state) {
  
})

.controller('ProductSummaryCtrl', function($scope,$timeout,$state,$ionicModal) {
	 
	 $scope.rating = 4;
  $scope.data = {
    rating : 3,
    max: 5
  }
  
  $scope.$watch('data.rating', function() {
	console.log('New value: '+$scope.data.rating);
  });  
  
  $scope.showModal = function() {
    $ionicModal.fromTemplateUrl('templates/selectAddress.html', {
      scope: $scope,
      animation: 'slide-in-up',
      hideDelay:920
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
      $scope.hideModal = function(){
        $scope.modal.hide();
        // Note that $scope.$on('destroy') isn't called in new ionic builds where cache is used
        // It is important to remove the modal to avoid memory leaks
        $scope.modal.remove();
      }
	  
	  $scope.addAddress = function(){
        $ionicModal.fromTemplateUrl('templates/addAddress.html', {
		  scope: $scope,
		  animation: 'slide-in-up',
		  hideDelay:920
		}).then(function(modal1) {
		  $scope.modal1 = modal1;
		  $scope.modal1.show();
		  $scope.hideAddress = function(){
			$scope.modal1.hide();
			// Note that $scope.$on('destroy') isn't called in new ionic builds where cache is used
			// It is important to remove the modal to avoid memory leaks
			$scope.modal1.remove();
		  }
		});
      }
	  
    });
  };
})

.controller('LoginCtrl', function($scope,$timeout,$state,UserService,$location) {
	
	$scope.loginData = $.parseJSON('[{"username":"igasmr@ramajayam.com","password":"ashok"}]');
	
	 $('#remember').click(function(){
		if($(this).find('i').hasClass('ion-ios-information'))
		{
		$(this).find('i').removeClass('ion-ios-information').addClass('ion-ios-checkmark').css('color','green');
		}
		else
		{
		$(this).find('i').removeClass('ion-ios-checkmark').addClass('ion-ios-information').css('color','#0b305a');
		}
	 })
	 
	 $scope.input = {};
	 
	 $scope.login = function(loginForm){
		if(loginForm.$valid)
		{
			alert($scope.input.username+"  "+$scope.input.password)
			var userStatus = false;
			$.each($scope.loginData, function( key, value ) {
				if(value.username == $scope.input.username && value.password == $scope.input.password)
				{
					$location.path("homeTest");
					userStatus = true;
					UserService.setUser({
						loginStatus: true
					});
				}
				});
				if(!userStatus)
				{
					$('#userError').fadeIn();
					$timeout(function() {
						$('#userError').fadeOut();
					}, 2000);
				}
		}
	 }
});
app.controller('homeController', function ($http, $scope, $route, $window) {
	
});

app.controller('GalleryCtrl', function ($scope, $http, $window) {
  
 $scope.images = [];
for(var i =1; i<=37 ; i++){
	$scope.images[i] = "images/whatsapp/" + i + ".jpg";
}
  
});
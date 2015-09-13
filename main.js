var app = angular.module('imageSlideApp', []);

app.controller('MainCtrl', ['$scope', function($scope) {

	$scope.images = {
		image1: 'http://i.imgur.com/BIHN8KQ.jpg',
		image2: 'http://i.imgur.com/nS6dvpq.jpg'
	}

}]);

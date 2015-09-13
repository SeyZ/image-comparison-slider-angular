app.directive('slideImageComparison', function() {

	function moveOver(handle, resized, container) {
		
		var move = {};

		var divideWidth = handle.prop('offsetWidth'),
			containerOffsetLeft = container.prop('offsetLeft'),
			containerOffsetTop = container.prop('offsetTop'),
			containerWidth = container.prop('offsetWidth');


		container[0].addEventListener('mousemove', function(e) {

			move = {
				left: e.pageX - containerOffsetLeft,
				top: e.pageY - containerOffsetTop
			};

			moveWidth = (move.left - 1)*100/containerWidth+'%';

			handle.css({
				left: moveWidth
			});
			resized.css({
				width: moveWidth
			});

		})

	}

	return {
		restrict: 'AE',
		replace: true,
		scope: {
			imageInfo: '=info'
		},
		link: function(scope, elem, attr) {

			// Adjust resize image
			var resized = angular.element(elem[0].querySelector('.resized'));
			var resizedImage = elem[0].querySelector('.resized img');
			angular.element(resizedImage).css({
				width: elem.prop('offsetWidth')+'px'
			})

			// Get divider
			var divider = angular.element(elem[0].querySelector('.divider'));

			// Bind move event
			moveOver(divider, resized, elem);

		},
		templateUrl: 'slideDirective/slider.html'
	};
});
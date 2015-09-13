app.directive('slideImageComparison', function() {

	function moveOver(handle, resized, container) {
		
		var move = {};

		var divideWidth = handle.prop('offsetWidth'),
			containerOffsetLeft = container.prop('offsetLeft'),
			containerOffsetTop = container.prop('offsetTop'),
			containerWidth = container.prop('offsetWidth');

		var moveSlide = function(e) {

			var pageX = e.pageX || e.targetTouches[0].pageX;
			var pageY = e.pageY || e.targetTouches[0].pageY;

			move = {
				left: pageX - containerOffsetLeft,
				top: pageY - containerOffsetTop
			};

			moveWidth = (move.left - 1)*100/containerWidth+'%';

			handle.css({
				left: moveWidth
			});
			resized.css({
				width: moveWidth
			});

		}

		// Support desktop + touch
		container[0].addEventListener('touchmove', moveSlide, false);
		container[0].addEventListener('mousemove', moveSlide, false);

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
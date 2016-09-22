(function() {
	'use strict';

	var states = {
		enjoy: {
			message: "Enjoy!",
			text: 'success',
			inputHas: 'success',
		},
		tooMuch: {
			message: "Too Much!",
			text: 'success',
			inputHas: 'success',
		},
		empty: {
			message: "Please enter data first",
			text: 'danger',
			inputHas: 'error',
		},
	};

	var getAmountOfItems = function(str) {
		if(!str) {
			return 0;
		}
		var items = str.split(',');
		var quantity = 0;
		for(var i in items) {
			if(items[i].trim()) {
				quantity++;
			}
		}
		return quantity;
	};

	angular.module('LunchCheck', [])
		.controller('LunchCheckController', ['$scope', function($scope) {
			$scope.state = {}

			$scope.checkLunchMenu = function() {
				var quantity = getAmountOfItems($scope.lunchMenu);
				if(quantity == 0) {
					$scope.state = states.empty;
				} else if(quantity <= 3) {
					$scope.state = states.enjoy;
				} else {
					$scope.state = states.tooMuch;
				}
			}

		}]);

}) ();
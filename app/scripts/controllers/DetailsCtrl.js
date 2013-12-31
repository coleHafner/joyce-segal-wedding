angular.module('joyceSegalWeddingApp')
	.controller('DetailsCtrl', ['$scope', '$stateParams', '$state', function($scope, $stateParams, $state) {

		$scope.tabs = [
			{title: 'Overview',			page: 'overview',		active: $stateParams.type === 'overview'},
			{title: 'Venue',			page: 'venue',			active: $stateParams.type === 'venue'},
			{title: 'Accomodations',	page: 'accomodations',	active: $stateParams.type === 'accomodations'},
			{title: 'Rehersal Dinner',	page: 'dinner',			active: $stateParams.type === 'dinner'},
		];

		$scope.activateTab = function(tab) {
			var selectedPage = tab.page ? tab.page : '';
			$state.go('details', {type: selectedPage});
		}

	}]);

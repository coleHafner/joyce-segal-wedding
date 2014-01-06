angular.module('joyceSegalWeddingApp')
	.controller('DetailsCtrl', ['$scope', '$stateParams', '$state', function($scope, $stateParams, $state) {

		$scope.tabs = [
			{title: 'Overview',			page: 'overview',		active: $stateParams.type === 'overview'},
			{title: 'Schedule',			page: 'schedule',		active: $stateParams.type == 'schedule'},
			{title: 'Venue',			page: 'venue',			active: $stateParams.type === 'venue'},
			{title: 'Accomodations',	page: 'accomodations',	active: $stateParams.type === 'accomodations'},
			{title: 'Registry',			page: 'registry',		active: $stateParams.type === 'registry'}
		];

		$scope.activateTab = function(tab) {
			var selectedPage = tab.page ? tab.page : '';
			$state.go('details', {type: selectedPage});
		}

	}]);

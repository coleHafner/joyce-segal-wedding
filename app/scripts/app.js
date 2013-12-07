'use strict';

angular.module('joyceSegalWeddingApp', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlStateProvider) {

		$urlStateProvider.otherwise('details/');

		$stateProvider
			.state('details', {
				url: '/details/',
				templateUrl: 'views/details.html',
				controller: 'DetailsCtrl'
			})
			.state('rsvp', {
				url: '/rsvp/',
				templateUrl: 'views/rsvp/rsvp.html',
				controller: 'RsvpCtrl'
			})
			.state('gallery', {
				url: '/gallery/',
				templateUrl: 'views/gallery.html',
				controller: 'GalleryCtrl'
			})
			.state('our-story', {
				url: '/our-story/',
				templateUrl: 'views/our-story.html',
				controller: 'OurStoryCtrl'
			})
		}])

	.run(['$rootScope', '$state', '$timeout', function($rootScope, $state, $timeout) {

		$timeout(function() {
			$rootScope.selectNav({sref:$state.current.name});
		}, 500);

		$rootScope.nav = [
			{label: 'Details',		sref: 'details'},
			{label: 'RSVP',			sref: 'rsvp'},
			{label: 'Gallery',		sref: 'gallery'},
			{label: 'Our Story',	sref: 'our-story'},
		];

		$rootScope.selectNav = function(item) {
			$rootScope.selectedNav = item.sref;
		}

	}]);

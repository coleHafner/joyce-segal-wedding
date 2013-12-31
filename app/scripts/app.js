'use strict';

angular.module('joyceSegalWeddingApp', ['ui.router', 'ui.bootstrap'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlStateProvider) {

		$urlStateProvider.otherwise('/');

		$stateProvider
			.state('index', {
				url: '/',
				templateUrl: 'views/index.html',
				controller: 'IndexCtrl'
			})
			.state('details', {
				url: '/details/:type',
				templateUrl: 'views/details/index.html',
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
			.state('about-us', {
				url: '/about-us/',
				templateUrl: 'views/about-us.html',
				controller: 'AboutUsCtrl'
			})
		}])

	.run(['$rootScope', '$state', '$timeout', function($rootScope, $state, $timeout) {

		$timeout(function() {
			$rootScope.selectNav({sref:$state.current.name});
		}, 500);

		$rootScope.nav = [
			{label: 'Home',			sref: 'index'},
			{label: 'Details',		sref: 'details'},
			{label: 'RSVP',			sref: 'rsvp'},
			{label: 'Gallery',		sref: 'gallery'},
			{label: 'About Us',		sref: 'about-us'},
		];

		$rootScope.selectNav = function(item, hideNav) {
			$rootScope.selectedNav = item.sref;
			document.title = item.label + ' | joycesegalwedding.com';
			if(hideNav === true) {
				$rootScope.mobileNavVisible = false;
			}
		}

		$rootScope.mobileNavVisible = false;

		$rootScope.toggleNav = function() {
			$rootScope.mobileNavVisible = !$rootScope.mobileNavVisible;
		}

	}]);

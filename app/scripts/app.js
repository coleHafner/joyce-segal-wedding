'use strict';

angular.module('joyceSegalWeddingApp', ['ui.router', 'ui.bootstrap'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlStateProvider) {

		$urlStateProvider.otherwise('/');

		$stateProvider
			.state('index', {
				url: '/',
				templateUrl: 'views/index.html?v=' + VIEW_VERSION,
				controller: 'IndexCtrl'
			})
			.state('details', {
				url: '/details/:type',
				templateUrl: 'views/details/index.html?v=' + VIEW_VERSION,
				controller: 'DetailsCtrl'
			})
			.state('rsvp', {
				url: '/rsvp/',
				templateUrl: 'views/rsvp/rsvp.html?v=' + VIEW_VERSION,
				controller: 'RsvpCtrl'
			})
			.state('gallery', {
				url: '/gallery/',
				templateUrl: 'views/gallery.html?v=' + VIEW_VERSION,
				controller: 'GalleryCtrl'
			})
			.state('about-us', {
				url: '/about-us/',
				templateUrl: 'views/about-us.html?v=' + VIEW_VERSION,
				controller: 'AboutUsCtrl'
			})
		}])

	.run(['$rootScope', '$state', '$timeout', function($rootScope, $state, $timeout) {

		$timeout(function() {

			//put together title
			var name = $state.current.name,
				parts = name.split('-'),
				labelParts = [];

			for(var i = 0; i < parts.length; i++) {
				labelParts.push(parts[i].charAt(0).toUpperCase() + parts[i].substr(1));
			}

			var label = labelParts.join(' ');
			$rootScope.selectNav({label: label, sref:name});

		}, 500);

		$rootScope.nav = [
			{label: 'Home',			sref: 'index'},
			{label: 'Details',		sref: 'details'},
			{label: 'RSVP',			sref: 'rsvp'},
			{label: 'Gallery',		sref: 'gallery'},
			{label: 'About Us',		sref: 'about-us'},
		];

		$rootScope.selectNav = function(item, hideNav) {

			var selected = item.hasOwnProperty('sref') ? item.sref : item;
			$rootScope.selectedNav = selected;
			var title = typeof item.label != 'undefined' ? item.label : 'Home';
			document.title = title + ' | joycesegalwedding.com';

			if(hideNav === true) {
				$rootScope.mobileNavVisible = false;
			}
		}

		$rootScope.mobileNavVisible = false;

		$rootScope.toggleNav = function() {
			$rootScope.mobileNavVisible = !$rootScope.mobileNavVisible;
		}

	}]);

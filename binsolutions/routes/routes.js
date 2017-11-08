app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
         .when('/', {
             templateUrl: 'pages/home/index.html',
             controller: 'homeController'
         })
    .when('/about', {
        templateUrl: 'pages/home/about.html',
        controller: 'homeController'
    })
    .when('/contact', {
        templateUrl: 'pages/home/contact.html',
        controller: 'homeController'
    })
    .when('/gallery', {
        templateUrl: 'pages/home/gallery.html',
        controller: 'homeController'
    })
        .when('/services', {
            templateUrl: 'pages/home/services.html',
            controller: 'homeController'
        })
    .when('/contact', {
        templateUrl: 'pages/home/contact.html',
        controller: 'homeController'
    })
	 .when('/renovations', {
        templateUrl: 'pages/home/renovations.html',
        controller: 'GalleryCtrl'
    })
	 .when('/cleaning', {
        templateUrl: 'pages/home/cleaning.html',
        controller: 'homeController'
    })
	.when('/property', {
        templateUrl: 'pages/home/property.html',
        controller: 'homeController'
    })
	.when('/management', {
        templateUrl: 'pages/home/management.html',
        controller: 'homeController'
    })
});
 
/**
* Main AngularJS Web Application
*/
var app = angular.module('DisasterDogsSite', [
'ngRoute'
]);

/**
* Configure the Routes
*/
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    //home
    .when('/', {templateUrl: 'partials/home.html', controller: "PageCtrl"})
    .when('/home', {templateUrl: 'partials/home.html', controller: "PageCtrl"})
    //Pages
    .when('/about', {templateUrl: 'partials/about.html', controller: "PageCtrl"})
    .when('/events', {templateUrl: 'partials/events.html', controller: "PageCtrl"})
    /* etc.. routes to other pages */
    //News / Updates
    .when('/news', {templateUrl: 'partials/news/news.html', controller: "NewsCtrl"})
    .when('/news/current', {templateUrl: 'partials/news/current-post.html', controller: "NewsCtrl"})
    // Media
    // Artists / Musicians / Gallery / Etc (More in the future)
    .when('/media', {templateUrl: 'partials/media.html', controller: "MediaCtrl"})
    .when('/media/artists', {templateUrl: 'partials/media/artists.html', controller: "MediaCtrl"})
    .when('/media/musicians', {templateUrl: 'partials/media/musicians.html', controller: "MediaCtrl"})
    .when('/media/gallery', {templateUrl: 'partials/media/gallery.html', controller: "MediaCtrl"})
    
    //else 404
    .when('/error', {templateUrl: 'partials/error.html',controller: 'PageCtrl'})
    .otherwise({redirectTo: '/error'});
}]);






/**
* Controls the News
* This will grab the .JSON file for all articles/reviews and populate the information
* onto the HTML.
*/
app.controller('NewsCtrl', function (/* $scope, $location, $http */) {
    console.log("News Controller is now running.");
    
        $('.breadcrumb a').on('click',function() {
        console.log('test');
        $('.nav').find('.active').removeClass('active');
        var href = $(this).attr('href');
        console.log(href);
    });
    
});

/**
 * Controls the Media Content
*/
app.controller('MediaCtrl',function(/* $scope, $location, $http */) {
    console.log('Media Controller is now running!');

        $('.breadcrumb a').on('click',function() {
        console.log('test');
        $('.nav').find('.active').removeClass('active');
        var href = $(this).attr('href');
        console.log(href);
    });
    
    
});



/**
* Controls all other Pages
*/
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller is now running.");
    
    $('.breadcrumb a').on('click',function() {
        $('.nav').find('.active').removeClass('active');
        var href = $(this).attr('href');
        console.log(href);
        
    });
    
    // Activates Tooltips for Social Links
    // Need to add Tool-tips for some content (or remove 100%)
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    });
});
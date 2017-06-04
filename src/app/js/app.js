angular.module("ng-process.st", [
    'ngRoute',
    'ng-process.st.services',
    'ng-process.st.controllers',
    'blueimp.fileupload',
    'ngFileUpload'
])

// ******************************
// DEFINE ENDPOINT COSTANT FOR THE SERVICE
// ******************************

.constant("Gateway", {
    "endPoint": "http://localhost:8000" // localhost
})

// ******************************
// ROUTE PROVIDER CONFIG - ENABLED HTML5MODE
// ******************************

.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'app/templates/mainPage/mainPage.tpl.html',
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true
    });
}]);

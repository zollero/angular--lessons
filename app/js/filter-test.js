var app = angular.module("filterApp", [])
app.controller('filterCtrl', ['$scope', '$filter', function($scope, $filter){
    $scope.doIt = "Just do it!";
    $scope.name = $filter('lowercase')('Arri');

    //Date
    $scope.today = new Date();
}]);
app.filter('capitalize', function() {
    return function(input) {
        if (input) {
            return input[0].toUpperCase() + input.slice(1);
        };
    }
})

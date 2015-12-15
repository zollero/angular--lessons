var myApp = angular.module("myApp", []);
myApp.controller('interpolateCtrl', ['$scope', 'EmailParser', function($scope, EmailParser){
    //设置监听
    $scope.$watch('emailBody', function(body) {
        if (body) {
            $scope.previewText = EmailParser.parse(body, {
                to: $scope.to
            });
        };
    });
}]);

angular.module("valideModule", []).
controller('valideCtrl', ['$scope', function($scope){
    $scope.submitted = false;
    $scope.submit = function() {
        // console.log($scope.signup.email.$error.minlength);
        if ($scope.signup_form.$valid) {
            
        };    
    };
}])

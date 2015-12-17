
var myApp = angular.module("myApp", []);

myApp.controller('ctrl', ['$scope', '$rootScope', function($scope, $rootScope){
    //$rootScope是angular中最顶级的作用域（相当于全局作用域）
    //在该方法中，$scope是该controller中的作用域
    //所以，形成 $rootScope --> $scope 的作用域链
    //即$scope 可以访问到 $rootScope上的对象并可以修改该对象的属性
    $rootScope.name = "Hello";
    $rootScope.hello = {name: "Hello"};
    $scope.hello.word = "Angular!";
    // $scope.hello.name = "Angular!";
}]);

myApp.controller('FirstController', ['$scope', function($scope){
    $scope.counter = 0;
    $scope.add = function(amount) { $scope.counter += amount; }
    $scope.subtract = function(amount) { $scope.counter -= amount; }
}]);

myApp.controller('ParentController', ['$scope', function($scope){
    $scope.person = {greeted: false};
}]);
myApp.controller('ChildController', ['$scope', function($scope){
    $scope.sayHello = function() {
        $scope.person.name = "Ari Lerner";
    }
}]);


myApp.controller('MyController', ['$scope', '$parse', function($scope, $parse){
    $scope.$watch('expr', function(newVal, oldVal, scope) {
        if (newVal !== oldVal) {
            var parseFun = $parse(newVal);
            $scope.parsedValue = parseFun(scope);
        };
    });
}]);

myApp.controller('interpolateCtrl', ['$scope', '$interpolate', function($scope, $interpolate){
    //设置监听
    $scope.$watch('emailBody', function(body) {
        if (body) {
            var template = $interpolate(body);
            $scope.previewText = template({to: $scope.to});
        };
    });
}]);

myApp.controller("ctrl2", function($scope, $interpolate){
    $scope.$watch("myTextarea", function(newVal, oldVal, scope){
        var interpolatedFunc = $interpolate(newVal);
        //(1)
        // $scope.interpolatedValue = interpolatedFunc({myName: $scope.myName}); 
        //(2)
        $scope.interpolatedValue = interpolatedFunc(scope);        
    });

});

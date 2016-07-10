angular.module('app', []);

angular.module('app')
.controller('HomeController', function($scope, $timeout, $window) {
    var vm = this;
    vm.appState = 'blank';
    
    $scope.submit = function() {
        if ($scope.wordbank.$valid) {
            console.log('success!');
            $timeout(function() { 
                vm.appState = 'generated';
            }, 0);
        }
    };
    
    $scope.restart = function() {
        $timeout(function() {
            vm.appState = 'blank';
            vm.inputs = {};
            $scope.wordbank.$setPristine();
            $scope.wordbank.$setUntouched();
        }, 0);
    };
});
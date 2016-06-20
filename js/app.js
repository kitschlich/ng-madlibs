angular.module('app', []);

angular.module('app')
.controller('HomeController', function($scope) {
    $scope.model = {
        maleName: 'male name',
        jobTitle: 'job title',
        tediousTask: 'tedious task',
        dirtyTask: 'dirty task',
        celebrity: 'celebrity',
        uselessSkill: 'useless skill',
        obnoxiousCelebrity: 'obnoxious celebrity',
        hugeNumber: 'huge number',
        adjective: 'adjective'
    };
});
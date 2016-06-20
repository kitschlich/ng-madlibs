angular.module('app', []);

angular.module('app')
.controller('HomeController', function($scope) {
    var vm = this;
    this.maleName = 'male name';
    this.jobTitle = 'job title';
    this.tediousTask = 'tedious task';
    this.dirtyTask = 'dirty task';
    this.celebrity = 'celebrity';
    this.uselessSkill = 'useless skill';
    this.obnoxiousCelebrity = 'obnoxious celebrity';
    this.hugeNumber = 'huge number';
    this.adjective = 'adjective';
});
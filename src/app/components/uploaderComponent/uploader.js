angular.module("ng-process.st")

.component('uploader', {
  templateUrl : 'app/components/uploaderComponent/uploader.tpl.html',
  controller  : 'uploaderController',
  controllerAs: 'upld',
  bindings    : {
    file        : '&',
    progressPercentageStyle : '&'
  }
});

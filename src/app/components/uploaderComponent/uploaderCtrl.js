angular.module("ng-process.st.controllers")

.controller('uploaderController', function($scope, UploadService, Upload) {

  // upload later on form submit or something similar
  $scope.submit = function() {
      
    if ($scope.file) {
      $scope.upload($scope.file);
      console.log($scope.file.name);
      $scope.fileName = $scope.file.name;
    }
      
  };

  // upload on file select or drop
  $scope.upload = function (file) {

    var videoUrl    = 'http://fast.wistia.net/embed/iframe/';
      Upload.upload({
          url           : 'https://upload.wistia.com',
          data          : {
            file        : file,
            api_password: '125d3809eead7c23db745e43f082ca7d8a119c3dcb450ad1d9a97b7be78a484d'
          },
      })

      .then(function (resp) {

          console.log('Success ' + resp.config.data.file.name + ' uploaded. Response: ' + resp.data);
          videoUrl += resp.data.hashed_id;

          window.open(videoUrl, '_blank');
      },

      function (resp) {
          console.log('Error status: ' + resp.status);
      },

      function (evt) {
          progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          $scope.progressPercentageStyle = {
            width : self.progressPercentage + '%'
          };
          console.log('progress: ' + self.progressPercentage + '% ' + evt.config.data.file.name);
      });
  };
    
  // for multiple files:
  $scope.uploadFiles = function (files) {

    if (files && files.length) {

      for (var i = 0; i < files.length; i++) {
        Upload.upload({data: {file: files[i]}
        });
      }

      // or send them all together for HTML5 browsers:
      Upload.upload({data: {file: files}
      });
    }
  };
});

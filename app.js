var app = angular.module('plunker', ['ui.bootstrap']);

app.controller('MainCtrl', function ($scope, $modal) {
    $scope.name = 'Brinny';
    
    $scope.clickedButton = '';
    
    $scope.submit = function () {
        var modalInstance = $modal.open({
            templateUrl: 'beep.html',
            controller: 'beepCtrl'
        });
        
        var success = function(okButton){
          $scope.clickedButton = okButton;  
        };
        
        var fail = function(cancelButton){
          $scope.clickedButton = cancelButton;  
        };
        
        modalInstance.result.then(success, fail);
    };
});

app.controller('beepCtrl', function ($scope, $modalInstance) {
    
    $scope.ok = function () {
        $modalInstance.close("Brittany is the cutest!");
    };

    $scope.cancel = function () {
        $modalInstance.dismiss("Charlie is the sweetest!");
    };
});
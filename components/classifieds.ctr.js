(function() {
    "use strict";
    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function($scope, $http) {
            $http.get('../ngClassifieds/data/classifieds.json').then(function(classifieds){
                $scope.classifieds = classifieds.data;
            })
        });
})();
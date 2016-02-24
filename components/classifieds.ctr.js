(function() {
    "use strict";
    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function($scope) {
            $scope.name =  {
                first: "Yaroslav",
            };
            $scope.a = 1;
            $scope.b = 2;
    });
})();
(function() {
    "use strict";
    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function($scope) {
            $scope.name =  {
                first: "Yaroslav",
                second: "Rybiak"
            };
            $scope.a = 1;
            $scope.b = 2;
    });
})();
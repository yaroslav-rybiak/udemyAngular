(function() {
    "use strict";
    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function($scope) {
            $scope.classifieds = [
                {
                    "id": "1",
                    "title": "Columbia jacket",
                    "description": "Take back the outdoors with Columbia sportswear women's jacket shells.",
                    "price": 400,
                    "posted:": "14.02.2016",
                    "contact": {
                        "name": "Diane S. Crocker",
                        "phone":"920-269-2259",
                        "email":"dianecrocker@gmail.com"
                    },
                    image: "../ngClassifieds/img/columbia-jacket.jpg"
                },
                {
                    "id": "2",
                    "title": "Ecco boots",
                    "description": "A favorite rugged boot that offers classic style and great comfort.",
                    "price": 600,
                    "posted:": "10.02.2016",
                    "contact": {
                        "name": "David E. Rast",
                        "phone":"248-224-6305",
                        "email":"davidrast@gmail.com"
                    },
                    image: "../ngClassifieds/img/ecco-boots.jpg"
                },
                {
                    "id": "3",
                    "title": "Skechers shoes",
                    "description": "Supreme comfort and sporty style gives you the edge in the skechers shoes.",
                    "price": 350,
                    "posted:": "07.02.2016",
                    "contact": {
                        "name": "Sarah J. Nunn",
                        "phone":"732-830-3499",
                        "email":"sarahnunn@gmail.com"
                    },
                    image: "../ngClassifieds/img/skechers-shoes.jpg"
                },
                {
                    "id": "4",
                    "title": "Bond girl shorts",
                    "description": "Get equipped for outdoors in warm conditions with these stretch woven shorts.",
                    "price": 220,
                    "posted:": "06.02.2016",
                    "contact": {
                        "name": "John D. Watson",
                        "phone":"774-253-0243",
                        "email":"johnwatson@gmail.com"
                    },
                    image: "../ngClassifieds/img/bond-girl-shorts.jpg"
                },
                {
                    "id": "5",
                    "title": "Reindeer sweater",
                    "description": "Intarisa-knit wool, ribbed crew neckline, long sleeves with ribbed cuffs.",
                    "price": 285,
                    "posted:": "03.02.2016",
                    "contact": {
                        "name": "Katherine B. Wagner",
                        "phone":"334-309-9613",
                        "email":"katherinewagner@gmail.com"
                    },
                    image: "../ngClassifieds/img/reindeer-sweater.jpg"
                },
                {
                    "id": "6",
                    "title": "Low cut toed socks",
                    "description": "Five pairs of stylish low cut toed cotton socks.",
                    "price": 15,
                    "posted:": "30.01.2016",
                    "contact": {
                        "name": "Leonard P. Smith",
                        "phone":"303-450-1661",
                        "email":"leonardsmith@gmail.com"
                    },
                    image: "../ngClassifieds/img/toed-socks.jpg"
                }
            ]
    });
})();
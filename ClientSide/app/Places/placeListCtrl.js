(function () {
    "use strict";

    angular
           .module("locationManagement")
           .controller("placeListCtrl",
                        [locationListCtrl]);
    
    function locationListCtrl() {
        var vm = this;
        vm.sortOrderForPlace = 'stars';
        vm.places = [
            {
                "id": 1,
                "drive": "20km",
                "image": "http://mojportal.mk/uploads/ckfinder/userfiles/images/2014/januari%202014/posetete%20ja%20ponikva%20nasata%20vozdusna%20banja/posetete-ja-ponikva-nasata-vozdusna-banja4.jpg",
                "mapCoordinates": "https://www.google.com/maps/place/Ponikva,+Macedonia+(FYROM)/@42.0298015,22.327652,14z/data=!4m5!3m4!1s0x13559a157f8f51e9:0x7862270029ab9505!8m2!3d42.0315692!4d22.3546395",
                "name": "Osogovo",
                "type": "Mountain Resort",
                "stars":4
            },
             {
                 "id": 2,
                 "drive": "20km",
                 "image": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Carev_Vrv_Osogovo_Macedonia.jpg",
                 "mapCoordinates": "https://www.google.com/maps/place/Ponikva,+Macedonia+(FYROM)/@42.0298015,22.327652,14z/data=!4m5!3m4!1s0x13559a157f8f51e9:0x7862270029ab9505!8m2!3d42.0315692!4d22.3546395",
                 "name": "Brana Gradce",
                 "type": "Lake Resort",
                 "stars": 8
             },
              {
                  "id": 3,
                  "drive": "00.00 km",
                  "image": "http://www.ponikva.info/wp-content/uploads/2015/09/ponikva_slider_11.jpg",
                  "mapCoordinates": "https://www.google.com/maps/place/Ponikva,+Macedonia+(FYROM)/@42.0298015,22.327652,14z/data=!4m5!3m4!1s0x13559a157f8f51e9:0x7862270029ab9505!8m2!3d42.0315692!4d22.3546395",
                  "name": "Trgovski Centar",
                  "type": "Shopping mall",
                  "stars": 6
              }
        ];
       
    }
}());
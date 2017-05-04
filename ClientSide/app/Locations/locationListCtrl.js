(function () {
    "use strict";

    angular
           .module("locationManagement")
           .controller("locationListCtrl",
                        ["locationResource",
                            locationListCtrl]);

    function locationListCtrl(locationResource) {
        var vm = this;
        locationResource.query(function (data) {
            vm.locations = data;
        });

        vm.VotingUpValue = 0;
        vm.VotingDownValue = 0;

        vm.upVoteLocation = function (location) {
            location.upVoteCount++;
        }
        vm.downVoteLocation = function (location) {
            location.downVoteCount--;
        }
        vm.showInfo = true;
        vm.showInformationAboutThePlace = function () {
            vm.showInfo = false;
        }
        vm.hideInformationAboutThePlace = function () {
            vm.showInfo = true;
        }
        vm.sortOrderForLocation = '-name';
        
    }
}());
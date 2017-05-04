(function () {
    "use strict";

    angular
        .module("locationManagement")
        .controller("locationEditCtrl",
                     locationEditCtrl);

    function locationEditCtrl(locationResource) {
        var vm = this;
        vm.location = {};
        vm.message = '';

        locationResource.get({ id: 2},
            function (data) {
                vm.location = data;
                vm.originalLocation = angular.copy(data);
            }, function (response) {
                vm.message = response.statusText + "\r\n";
                if (response.data.exceptionMessage) {
                    vm.message += response.data.exceptionMessage;
                }
            });

        if (vm.location && vm.location.id) {
            vm.title = "Edit: " + vm.location.name;
        }
        else {
            vm.title = "New Location";
        }

        vm.submit = function () {
            vm.message = '';
            if (vm.location.id) {
                vm.location.$update({ id: vm.location.id },
                    function (data) {
                        vm.message = "... Save Complete";
                    }, function (response) {
                        vm.message = response.statusText + "\r\n";
                        if (response.data.modelState) {
                            for (var key in response.data.modelState ) {
                                vm.message += response.data.modelState[key] + "\r\n";
                            }
                        }
                        if (response.data.exceptionMessage) {
                            vm.message += response.data.exceptionMessage;
                        }
                    });
            }
            else {
                vm.location.$save(
                    function (data) {
                        vm.originalLocation = angular.copy(data);
                        vm.message = "... Save Complete";
                    }, function (response) {
                        vm.message = response.statusText + "\r\n";
                        if (response.data.modelState) {
                            for (var key in response.data.modelState) {
                                vm.message += response.data.modelState[key] + "\r\n";
                            }
                        }
                        if (response.data.exceptionMessage) {
                            vm.message += response.data.exceptionMessage;
                        }
                    });
            }
        };

        vm.cancel = function (editForm) {
            editForm.$setPristine();
            vm.location = angular.copy(vm.originalLocation);
            vm.message = "";
        };

    }
}());

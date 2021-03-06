﻿(function () {
    "use strict"
    angular
            .module("common.services")
            .factory("locationResource",
                    ["$resource",
                      "appSettings",
                      "currentUser",
                      locationResource])

    function locationResource($resource, appSettings,currentUser) {
        return $resource(appSettings.serverPath + "/api/locations/:id",null,
            {
                'get': {
                    headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
                },

                'save': {
                    headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
                },
                'update': {
                    method: 'PUT',
                    headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
                }
            });
    }


}());
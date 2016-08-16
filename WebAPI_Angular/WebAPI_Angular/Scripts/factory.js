(function () {
    'use strict';

    angular
        .module('myapp')
        .factory('ItemService', factory);

    factory.$inject = ['$http'];

    function factory($http) {
        var fac = {};
        fac.GetAllRecords = function () {
            return $http.get('api/Items/GetAllItems');
        };
        fac.AddNewRecords = function (items) {
            return $http.post('api/Items/PostItem', items);
        };
        fac.UpdateRecords = function (items) {
            return $http.put('api/Items/PutItem', items);
        };
        fac.DeleteRecords = function (id) {
            return $http.delete('api/Items/DeleteItem/'+id);
        };
        return fac;
    }
})();
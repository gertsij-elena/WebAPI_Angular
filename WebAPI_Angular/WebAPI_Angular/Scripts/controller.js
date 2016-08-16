(function () {
    'use strict';

    angular
        .module('myapp')
        .controller('itemController', controller);

    function controller($scope, $http, ItemService) {     
        $scope.itemsData = null;
       //Get items
        ItemService.GetAllRecords().then(function (d) {
            $scope.itemsData = d.data; // Success
        }, function () {
            alert('Нет соединения с сервером'); // Failed
        });

        $scope.Items = {
            ItemId:'',
            Name: '',
            Price: '',
            Count: ''
        };

        $scope.clear = function () {
            $scope.Items.ItemId ='';
            $scope.Items.Name = '';
            $scope.Items.Price = '';
            $scope.Items.Count = '';
        };
        //Add item
        $scope.save = function () {
            if ($scope.Items.Name != "" &&
           $scope.Items.Price != "" && $scope.Items.Count != "") {
                ItemService.AddNewRecords($scope.Items)
                    .then(function successCallback(response) {
                        $scope.itemsData.push(response.data);
                        $scope.clear();
                       // alert("Item Added Successfully !!!");
                    }, function errorCallback(response) {
                        alert("Error : " + response.data.ExceptionMessage);
                    });
            }
            else {
                alert('Please Enter All the Values !!');
            }
        };
        $scope.edit = function (data) {
            $scope.Items = { ItemId:data.ItemId, Name:data.Name, Price:data.Price, Count:data.Count };
        };
        $scope.cancel = function () {
            $scope.clear();
        };
        // Update item
        $scope.update = function () {
            if ($scope.Items.Name != "" &&
           $scope.Items.Price != "" && $scope.Items.Count != "") {
                ItemService.UpdateRecords($scope.Items)
            .then(function successCallback(response) {
                $scope.itemsData = response.data;
                $scope.clear();
            }, function errorCallback(response) {
                 alert("Error : " + response.data.ExceptionMessage);
            });
            }
            else {
                alert('Please Enter All the Values !!');
            }
        };
        // Delete item
        $scope.delete = function(index) {
            //alert("delete");
            //alert($scope.itemsData[index].ItemId);
            ItemService.DeleteRecords($scope.itemsData[index].ItemId)
           .then(function successCallback(response) {
              $scope.itemsData.splice(index, 1);
                    //alert("Item Deleted Successfully !!!");
                }, function errorCallback(response) {
                    alert("Error : " + response.data.ExceptionMessage);
                });
        };

    }
})();

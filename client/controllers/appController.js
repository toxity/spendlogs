///**
// * Created by im on 2/28/16.
// */
angular.module('app',['angular-meteor', 'accounts.ui', 'ngMaterial']);

angular.module('app').controller('appController', ['$scope', '$meteor', '$mdDialog',
    function ($scope, $meteor, $mdDialog) {

        $scope.expenses = $meteor.collection(Expenses);

        $scope.categories = ['Cat1', 'Cat2'];


        $scope.addSpending = function (date, description, category) {
            $meteor.call('addSpending', date, description, category);
        };

        $scope.removeExpense = function (id) {
            $meteor.call('removeSpending', id);
        };


        $scope.showAdd = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'client/templates/modals/test.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: false
            })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });


            function DialogController($scope, $meteor, $mdDialog) {
                $scope.expenses = $meteor.collection(Expenses);

                $scope.categories = ['Cat1', 'Cat2'];


                $scope.addSpending = function (date, description, category) {
                    $meteor.call('addSpending', date, description, category);
                    $mdDialog.hide();

                }
            }
        };
}]);
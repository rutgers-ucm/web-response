var app = angular.module('test', []);

app.controller('messages', function($scope, $http) {
    $http({
        method : "GET",
        url : "../Calls/GetAll/GetAllUsers.php"
    }).then(function mySucces(response) {
        $scope.users = response.data;
    }, function myError(response) {
        $scope.users = response.statusText;
    });
});

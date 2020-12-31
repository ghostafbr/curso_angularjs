var app = angular.module("MyFirstApp", []);

app.controller("FirsController", function($scope){
    $scope.nombre = " Andrés";
    $scope.comentarios = [
        {
            comentario: "Test 1",
            username: "Usuario 1"
        },
        {
            comentario: "Test 2",
            username: "Usuario 2"
        },
    ];
});
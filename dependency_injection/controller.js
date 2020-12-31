var app = angular.module("MyFirstApp", []).controller("FirsController", function($scope){
    $scope.nombre = " Andrés";
    $scope.nuevoComentario = {};
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
    $scope.agregarComentario = function(){
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }
});
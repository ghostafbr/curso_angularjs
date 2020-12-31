angular
  .module('MyFirstApp', [])
  .controller('FirsController', function ($scope, $http) {
    $scope.posts = [];
    $scope.loading = true;

    $http.get('https://jsonplaceholder.typicode.com/posts').then(
      (response) => {
        $scope.posts = response.data;
        $scope.loading = false;
        console.log($scope.posts);
      },
      (error) => {
        $scope.loading = false;
        console.log(error);
      }
    );
  });

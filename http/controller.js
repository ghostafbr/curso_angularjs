angular
  .module('MyFirstApp', [])
  .controller('FirsController', function ($scope, $http) {
    $scope.posts;
    $http.get('https://jsonplaceholder.typicode.com/posts').then(
      (response) => {
        $scope.posts = response.data;
        console.log($scope.posts);
      },
      (error) => {
        console.log(error);
      }
    );
    $scope.addPost = function () {
      $http.post('https://jsonplaceholder.typicode.com/posts', {
        title: $scope.newPost.title,
        body: $scope.newPost.body,
        userId: 1
      }).then(
        (response, status, headers, config) => {
          $scope.posts.push($scope.newPost);
          $scope.adPost = {};
          console.log(response, status, headers, config);
        },
        (error, status, headers, config) => {
          console.log(error, status, headers, config);
        }
      );
    };
  });

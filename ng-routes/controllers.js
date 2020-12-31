angular
  .module('CustomDirective')
  .controller('ReposController', function ($scope, $http) {
    $scope.repos = [];
    $http.get('https://api.github.com/users/ghostafbr/repos')
      .then((data) => {
        $scope.posts = data.data;
        // console.log($scope.posts, data.data.length);
        for (var i = data.data.length - 1; i >= 0; i--) {
          var repo = data.data[i];
        //   console.log('repo: ', repo.name);
          $scope.repos.push(repo.name);
        //   console.log($scope.repos);
        };
      })
      .then((err) => {
        // // console.log(err);
      });
      $scope.optionSelected = function(data) {
        $scope.$apply(function() {
          $scope.main_repo = data;
        });
      }
  })
  .controller('RepoController',function($scope,$http,$routeParams) {
      $scope.repo = {};
    //   $http.get('https://api.github.com/users/ghostafbr/repos/'+$routeParams.name)
    $http.get('https://api.github.com/repos/ghostafbr/'+$routeParams.name)
      .then((data) => {
          $scope.repo = data.data;
          console.log($scope.repo);
      })
      .then((err) => {
        console.log(err);
      });
  });
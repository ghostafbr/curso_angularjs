angular
  .module('CustomDirective', [])
  .directive('myAutocomplete', function () {
    function link(scope, element, attrs) {
      $(element).autocomplete({
        source: scope.$eval(attrs.myAutocomplete),
        select: function (ev, ui) {
          ev.preventDefault();
          if (ui.item) {
            console.log(ui.item);
            scope.optionSelected(ui.item.value);
          }
        },
        focus: function (ev, ui) {
            ev.preventDefault();
            $(this).val(ui.item.label);
        },
      });
    }
    return {
      link: link,
    };
  })
  .directive('backImage', function() {
    return function (scope, element, attrs) {
      attrs.$observe('backImage', function (value) {
        element.css({
          background: 'url(' + value + ')',
          'background-size': 'cover',
          'background-position': 'center',
        });
      });
      // style="background-image:url({{repo.owner.avatar_url}}); background-position:center; background-size:cover"
    };
  })
  .controller('AppCtrl', function ($scope, $http) {
    $scope.repos = [];
    $http.get('https://api.github.com/users/ghostafbr/repos')
      .then((data) => {
        $scope.posts = data.data;
        console.log($scope.posts, data.data.length);
        for (var i = data.data.length - 1; i >= 0; i--) {
          var repo = data.data[i];
          console.log('repo: ', repo.name);
          $scope.repos.push(repo.name);
          console.log($scope.repos);
        };
      })
      .then((err) => {
        // console.log(err);
      });
      $scope.optionSelected = function(data) {
        $scope.$apply(function() {
          $scope.main_repo = data;
        });
      }
  });

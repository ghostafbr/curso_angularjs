angular.module("CustomDirective",[])
.directive('backImage',function() {
    return function(scope,element,attrs) {
        attrs.$observe('backImage',function(value) {
            console.log('value: ', value);
           element.css({
            "background": "url("+value+")",
            "background-size": "cover",
            "background-position": "center"
           }); 
        });
        // style="background-image:url({{repo.owner.avatar_url}}); background-position:center; background-size:cover"
    }
})
.controller("AppCtrl",function($scope, $http) {
    $http.get("https://api.github.com/users/ghostafbr/repos")
    .then((data) => { 
        $scope.repos = data.data;
        console.log($scope.repos);
    }).then((err)=> {
        console.log(err);
    });
});
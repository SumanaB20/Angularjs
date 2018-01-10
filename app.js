var app = angular.module("myApp" , []);
app.controller("shashiCtr" , ["$http" , "$scope" , function($http , $scope){
   $scope.removeplayer=function(player){
   var removedPlayer=$scope.players.indexOf(player);
   $scope.players.splice(removedPlayer,1);
};
$scope.addplayer=function(){
   $scope.players.push({
	   name:$scope.newName,
	   id:$scope.newId,
	   runs:$scope.newRuns
	   });
};
   
    $http.get("data.json").then(function(item){
        $scope.players = item.data;
    })
}]);



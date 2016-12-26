var app = angular.module('myapp',[]);
  app.controller('main', function($scope, $http){
    var parmas = location.search ;
    if( parmas){
      var waybill = location.search.split('waybill=')[1].split('&')[0]
      var cp_id =  location.search.split('cp_id=')[1];
      var url = "http://www.clickpost.in/api/v2/track-order/?username=testuser&key=2e9b19ac-8e1f-41ac-a35b-4cd23f41ae17&waybill=" +waybill + "&cp_id=" +cp_id;
    }else{
      var url = 'http://www.clickpost.in/api/v2/track-order/?username=testuser&key=2e9b19ac-8e1f-41ac-a35b-4cd23f41ae17&waybill=3515341&cp_id=10';
    }
     $http.get(url).success(function(data){
         $scope.packages = data.result;
         console.log(data.result);
         $scope.message = "Please Enter a Coorect Waybill Number or cp_id";
     });

     $scope.search = function(evt){
       var wb = $scope.wb;
       var cp = $scope.cp;
      //  console.log(wb , cp);
       var url = "http://www.clickpost.in/api/v2/track-order/?username=testuser&key=2e9b19ac-8e1f-41ac-a35b-4cd23f41ae17&waybill=" +wb + "&cp_id=" +cp;
       $http.get(url).success(function(data){
           $scope.packages = data.result;
          //  console.log(data.result.valid);
           $scope.message = "Please Enter a Coorect Waybill Number or cp_id";
       });
     };
});

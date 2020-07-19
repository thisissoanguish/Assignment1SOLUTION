(function () {
'use strict';

angular.module('LunchCheckApp', [])

.controller('LunchCheckAppController', function ($scope) {
  $scope.foods = "";
  $scope.OutputMessage = "";

  $scope.CalcCommas = function () {
    var FinalOutput2 = WhichOutput($scope.foods);
    $scope.OutputMessage = FinalOutput2;
  };


  function WhichOutput(string) {
    var CommaCount = 0;
    var FinalOutput;
    for (var i = 0; i < string.length; i++) {
      if (string[i] == ","){
        CommaCount++;
      }
    }
    if (CommaCount > 3){
      FinalOutput = "Too much!";
    }else if (string == ""){
      FinalOutput = "Please enter data first";
    }else{
      FinalOutput = "Enjoy!";
    }
    return FinalOutput;
  }

});


})();

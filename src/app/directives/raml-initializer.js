RAML.Directives.ramlInitializer = function(ramlParserWrapper) {
  return {
    restrict: 'E',
    templateUrl: 'directives/raml-initializer.tpl.html',
    replace: true,
    controller: function($rootScope, $scope, $element) {
      $scope.ramlLoaded = false;
      $scope.ramlUrl = '';

      $scope.loadFromUrl = function () {
        if ($scope.ramlUrl) {
          ramlParserWrapper.load($scope.ramlUrl);
          $scope.ramlLoaded = true;
        }
      };

      $scope.loadRaml = function() {
        if ($scope.raml) {
          ramlParserWrapper.parse($scope.raml);
          $scope.ramlLoaded = true;
        }
      };
    }
  };
};

angular.module('RAML.Directives')
  .directive('ramlInitializer', RAML.Directives.ramlInitializer);

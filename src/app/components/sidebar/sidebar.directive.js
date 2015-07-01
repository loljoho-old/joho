(function() {
  'use strict';

  angular
    .module('joho')
    .directive('gpSidebar', gpSidebar);

  /** @ngInject */
  function gpSidebar() {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/sidebar/sidebar.html',
      controller: 'SidebarController',
      controllerAs: 'cm',
      bindToController: true
    };

    return directive;

  }

})();

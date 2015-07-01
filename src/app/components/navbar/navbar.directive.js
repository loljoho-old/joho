(function() {
  'use strict';

  angular
    .module('joho')
    .directive('gpNavbar', gpNavbar);

  /** @ngInject */
  function gpNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vc',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      //var vc = this;

      // "vc.creation" is avaible by directive option "bindToController: true"
      // vc.relativeDate = moment(vc.creationDate).fromNow();
    }
  }

})();

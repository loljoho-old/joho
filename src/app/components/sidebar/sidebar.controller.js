(function() {
  'use strict';

  angular
    .module('joho')
    .controller('SidebarController', SidebarController);

    /** @ngInject */
    function SidebarController($mdSidenav, $mdMedia, $log) {
      var cm = this;

      cm.items = [{
          name: 'Home',
          link: '/home'
        }, {
          name: 'Info',
          link: '/info'
        }, {
          name: 'Work',
          link: '/work'
      }];

      activate();

      function activate() {
        $log.info('Activated Sidebar Controller');
      }

      function close() {
        $mdSidenav('left').close()
          .then(function() {
            $log.info('Closed Sidenav Left');
          });
      }
    }

})();
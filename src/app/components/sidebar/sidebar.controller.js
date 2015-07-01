(function() {
  'use strict';

  angular
    .module('joho')
    .controller('SidebarController', SidebarController);

    /** @ngInject */
    function SidebarController($log) {
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
    }

})();
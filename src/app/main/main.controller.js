(function() {
  'use strict';

  angular
    .module('joho')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1435555896697;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      //
      // Yeoman Scaffolding Stuffs
      //
      getWebDevTec();
      $timeout(function() { vm.classAnimation = 'rubberBand'; }, 4000);    
    }


    //
    // Yeoman Scaffolding Stuffs
    //
    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }
    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();
      angular.forEach(vm.awesomeThings, function(awesomeThing) {  awesomeThing.rank = Math.random();  });
    }

  }
})();

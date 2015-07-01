(function() {
  'use strict';

  angular
    .module('joho')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, appDevTech, toastr) {
    var vm = this;

    vm.appDevTechs = [];
    vm.classAnimation = '';
    vm.creationDate = 1435555896697;
    vm.showToastr = showToastr;



    activate();

    function activate() {
      //
      // Yeoman Scaffolding Stuffs
      //
      getAppDevTechs();
      $timeout(function() { vm.classAnimation = 'rubberBand'; }, 4000);    

      
    }



    //
    // Yeoman Scaffolding Stuffs
    //
    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }
    function getAppDevTechs() {
      vm.appDevTechs = appDevTech.getAll();
      //angular.forEach(vm.appDevTechs, function(appDevTech) {  
      //  appDevTech.rank = Math.random();  
      //});
    }

  }
})();

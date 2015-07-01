(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('joho'));

    it('should define more than 5 awesome things', inject(function($controller) {
      var vm = $controller('MainController');

      expect(angular.isArray(vm.appDevTechs)).toBeTruthy();
      expect(vm.appDevTechs.length > 5).toBeTruthy();
    }));
  });
})();

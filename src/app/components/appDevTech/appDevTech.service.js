(function() {
  'use strict';

  angular
      .module('joho')
      .service('appDevTech', appDevTech);

  /** @ngInject */
  function appDevTech() {
    var data = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'skill-thumbs/angular.png',
        'rank': 1
      }, {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'skill-thumbs/gulp.png',
        'rank': 2
      }, {
        'title': 'Yeoman',
        'url': 'https://yeoman.io/',
        'description': 'The web\'s scaffolding tool for modern web applications.',
        'logo': 'skill-thumbs/yeoman.png',
        'rank': 3
      }, {
        'title': 'Sass/Scss',
        'url': 'https://github.com/sass/node-sass',
        'description': 'Syntactically Awesome Stylesheets',
        'logo': 'skill-thumbs/sass.png',
        'rank': 4
      }, {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'skill-thumbs/jasmine.png',
        'rank': 5
      }, {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'skill-thumbs/karma.png',
        'rank': 6
      }, {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'skill-thumbs/protractor.png',
        'rank': 7,
      }, {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'skill-thumbs/browsersync.png',
        'rank': 8
      }
    ];

    this.getAll = getAll;

    function getAll() {
      return data;
    }
  }

})();

(function() {
    'use strict';
  
    angular.module('SOGo.Common')
      .config(configure)

    /**
     * @ngInject
     */
    configure.$inject = ['$mdThemingProvider'];
    function configure($mdThemingProvider) {
      var redMap = $mdThemingProvider.extendPalette('red', {
        '200': '#3e4044',
        '300': '#292b30',
        '1000': '#4C566A',
        '50': '#313131',
        'A100': '#444444',

        '500': '#961414',

        'contrastDefaultColor': 'dark',
        'contrastLightColors': '50 100 200 300 400 500 600 A100 A200 A400 A700',
        'contrastStrongLightColors': '700 800 900 A700'
      });
      $mdThemingProvider.definePalette('red', redMap);
  
      $mdThemingProvider.theme('default')
        .primaryPalette('red', {
          'default': '500', // фон форма авторизации
          'hue-1': '50', //фон поля для ввода своей почты в письме
          'hue-2': '600', //хз, ничего не поменялось
          'hue-3': 'A700' //хз, ничего не поменялось
        })
        .accentPalette('red', {
          'default': 'A100', // фон форма авторизации
          'hue-1': 'A400', //цвет текста при авторизации
          'hue-2': '500', //цвет выбранного сообщения
          'hue-3': '300' //хз, ничего не поменялось
        })
        .backgroundPalette('red');
  
      $mdThemingProvider.generateThemesOnDemand(false);
    }
  })();
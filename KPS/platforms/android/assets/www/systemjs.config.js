/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'locallib:': 'libs/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'build/js',

      // angular bundles
      '@angular/core': 'locallib:core.umd.js',
      '@angular/common': 'locallib:common.umd.js',
      '@angular/compiler': 'locallib:compiler.umd.js',
      '@angular/platform-browser': 'locallib:platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'locallib:platform-browser-dynamic.umd.js',
      '@angular/http': 'locallib:http.umd.js',
      '@angular/router': 'locallib:router.umd.js',
      '@angular/router/upgrade': 'locallib:router-upgrade.umd.js',
      '@angular/forms': 'locallib:forms.umd.js',
      '@angular/upgrade': 'locallib:upgrade.umd.js',
      '@angular/upgrade/static': 'locallib:upgrade-static.umd.js',

      // other libraries
      'rxjs':                      'locallib:rxjs',
      'angular-in-memory-web-api': 'locallib:in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);

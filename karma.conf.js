module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      {
        included: false,
        pattern: 'src/system.conf.js',
        watched: false,
      },
      'karma.shim.js',
      {
        included: false,
        pattern: 'src/**/*.js',
        watched: true,
      },
      {
        included: false,
        pattern: 'src/**/*.html',
        watched: true,
      }
    ],
    exclude: [
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
    ],
    preprocessors: {
    },
    proxies: {
      '/base/src/node_modules/': '/base/node_modules/',
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
  });
};

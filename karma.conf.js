module.exports = function(config) {

  config.set({

    basePath: './',
    browsers: ['PhantomJS'],
    frameworks: ['jasmine-jquery', 'jasmine', 'chai'],
    reporters: ['spec', 'coverage'],

    preprocessors: {
      'lib/*.js': ['coverage']
    },

    files: [
      'node_modules/jquery/dist/jquery.js',
      'lib/highlight.js',
      {
        pattern: 'spec/fixtures/*.html',
        watched: true,
        included: false,
        served: true
      },
      'spec/.dist/**/*.spec.js',
    ],
    exclude: [],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false

  });

};

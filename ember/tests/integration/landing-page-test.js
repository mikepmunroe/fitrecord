import startApp from 'fitrecord/tests/helpers/start-app';

var App;

module('Integration - Landing Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should have Fit Record brand', function() {
  visit('/').then(function() {
    equal(find('a.navbar-brand').text(), 'Fit Record');
  });
});
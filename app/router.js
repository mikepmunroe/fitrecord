var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'history'
});

Router.map(function() {
  this.resource('lift', { path: '/lifts/:lift_id' });
  this.resource('results', function() {
    this.route('new');
  });
});

export default Router;

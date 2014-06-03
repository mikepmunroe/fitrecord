var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('lift', { path: '/lifts/:lift_id' });
  this.resource('results', function() {
    this.route('new');
  });
});

export default Router;

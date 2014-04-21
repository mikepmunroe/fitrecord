var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'history'
});

Router.map(function() {
  this.resource('lift', { path: '/lifts/:lift_id' });
});

export default Router;

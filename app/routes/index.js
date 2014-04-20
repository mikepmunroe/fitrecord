var IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('lift');
  }
});

export default IndexRoute;
var LiftRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('lift', params.lift_id);
  }
});

export default LiftRoute;
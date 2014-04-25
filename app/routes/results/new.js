var ResultsNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('result');
  }
});

export default ResultsNewRoute;
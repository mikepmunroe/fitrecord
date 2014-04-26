var ResultsNewRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      result: this.store.createRecord('result'),
      lifts: this.store.findAll('lift')
    });
  },
  setupController: function(controller, model) {
    controller.set('model', model.result);
    controller.set('lifts', model.lifts);
  }
});

export default ResultsNewRoute;
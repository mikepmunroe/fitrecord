var IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      lifts: this.store.findAll('lift'),
      results: this.store.findAll('result')
    })
  },
  setupController: function(controller, model) {
    var lifts = model.lifts;
    var results = model.results;

    controller.set('lifts', lifts);
    controller.set('results', results);
  }
});

export default IndexRoute;
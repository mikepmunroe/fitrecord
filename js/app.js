App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about');
  this.resource('lifts');
  this.resource('lift', { path: 'lifts/:id' });
});

App.LiftsRoute = Ember.Route.extend({
  model: function() {
    return App.Lifts;
  }
});
App.LiftRoute = Ember.Route.extend({
  model: function(params) {
    return App.Lifts.findBy('id', params.id);
  }
});

App.Lifts = [
  {
    id: '1',
    date: '10/25/2014',
    name: 'Back Squat',
    repScheme: '1',
    load: '325',
    notes: ''
  },
  {
    id: '2',
    date: '10/26/2014',
    name: 'Front Squat',
    repScheme: '1',
    load: '305',
    notes: ''
  }
];

App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
  this.route('about');
  this.resource('lifts', function() {
    this.resource('lift', { path: '/:lift_id' });
  });
});

App.LiftsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('lift');
  }
});

App.Lift = DS.Model.extend({
  date: DS.attr('date'),
  name: DS.attr('string'),
  repScheme: DS.attr('number'),
  load: DS.attr('number'),
  notes: DS.attr('string')
});

App.Lift.FIXTURES = [
  {
    id: 1,
    date: '10/25/2014',
    name: 'Back Squat',
    repScheme: 1,
    load: 325,
    notes: ''
  },
  {
    id: 2,
    date: '10/26/2014',
    name: 'Front Squat',
    repScheme: 1,
    load: 305,
    notes: ''
  }
];
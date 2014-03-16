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
  name: DS.attr('string'),
  events: DS.hasMany('event', {async: true})
});

App.Event = DS.Model.extend({
  date: DS.attr('date'),
  repScheme: DS.attr('number'),
  load: DS.attr('number'),
  notes: DS.attr('string'),
  lift: DS.belongsTo('lift')
});

App.Lift.FIXTURES = [
  {
    id: 1,
    name: 'Back Squat',
    events: [100]
  },
  {
    id: 2,
    name: 'Front Squat',
    events: [101]
  }
];

App.Event.FIXTURES = [
  {
    id: 100,
    date: '10/25/2014',
    lift: 1,
    repScheme: 1,
    load: 325,
    notes: ''
  },
  {
    id: 101,
    date: '10/26/2014',
    lift: 2,
    repScheme: 1,
    load: 305,
    notes: ''
  }
];
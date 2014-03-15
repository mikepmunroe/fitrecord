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
  activites: DS.hasMany('activity', {async: true})
});
App.Activity = DS.Model.extend({
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
  },
  {
    id: 2,
    name: 'Front Squat',
  }
];
App.Activity.FIXTURES = [
  {
    id: 1,
    date: '10/25/2014',
    lift: 'Back Squat',
    repScheme: 1,
    load: 325,
    notes: ''
  },
  {
    id: 2,
    date: '10/26/2014',
    lift: 'Front Squat',
    repScheme: 1,
    load: 305,
    notes: ''
  }
];
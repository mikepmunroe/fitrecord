App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about');
  this.route('usersAndCompanies');
  this.resource('lifts');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.LiftsRoute = Ember.Route.extend({
  model: function() {
    return App.Lifts;
  }
});

App.Lifts = [
  {
    date: '10/25/2014',
    name: 'Back Squat',
    repScheme: '1',
    load: '325',
    notes: ''
  },
  {
    date: '10/26/2014',
    name: 'Front Squat',
    repScheme: '1',
    load: '305',
    notes: ''
  }
];

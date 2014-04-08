App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

// Models
App.Lift = DS.Model.extend({
  name: DS.attr('string'),
  results: DS.hasMany('result', {async: true})
});

App.Result = DS.Model.extend({
  date: DS.attr('date'),
  repScheme: DS.attr('number'),
  load: DS.attr('number'),
  notes: DS.attr('string'),
  lift: DS.belongsTo('lift')
});

// Routes
App.Router.map(function() {
  this.route('about');
  this.route('login');

  this.resource('lift', { path: '/lifts/:lift_id' });
  this.resource('result', { path: '/results/:result_id' });
});

App.LoginRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('login').reset();
  }
});
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      lifts: this.store.findAll('lift'),
      results: this.store.findAll('result')
    });
  },
  setupController: function(controller, model) {
    controller.set('lifts', model.lifts);
    controller.set('results', model.results);
  }
});

App.IndexController = Ember.ArrayController.extend({});

App.LoginController = Ember.Controller.extend({
  reset: function() {
    this.setProperties({
      username: "",
      password: "",
      errorMessage: ""
    });
  },
  actions: {
    login: function() {
      var self = this, data = this.getProperties('username', 'password');

      self.set('errorMessage', null);
      Ember.$.post('/auth.json', data).then(function(response) {
        self.set('errorMessage',response.message);
        if (response.success) {
          self.set('token', response.token);
        }
      });
    }
  }
});

App.LiftsNewController = Ember.Controller.extend({
  types: ["Back Squat", "Front Squat"],
  schemes: ["1x", "3x", "5x", "10x"]
});

// Fixtures
App.Lift.FIXTURES = [
  {
    id: 1,
    name: 'Back Squat',
    results: [100]
  },
  {
    id: 2,
    name: 'Front Squat',
    results: [101]
  }
];

App.Result.FIXTURES = [
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
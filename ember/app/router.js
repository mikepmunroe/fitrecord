import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FitrecordENV.locationType
});

Router.map(function() {
  this.resource('lift', { path: '/lifts/:lift_id' });
  this.resource('results', function() {
    this.route('new');
  });
});

export default Router;

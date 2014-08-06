import Ember from 'ember';

var LiftsController = Ember.ArrayController.extend({
  actions: {
    showResults: function(lift) {
      var results = this.store.filter('result', function(result) {
        return result.get('lift.name') === lift.get('name') ? result : false;
      });
      this.controllerFor('index').set('results', results);
    }
  }
});

export default LiftsController;
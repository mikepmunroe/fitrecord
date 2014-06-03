var ResultsNewController = Ember.Controller.extend({
  actions: {
    createResult: function() {
      var controller = this;
      this.get('model').save().then(function() {
        controller.transitionToRoute('index');
      });
    }
  }
});

export default ResultsNewController;
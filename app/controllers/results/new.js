var ResultsNewController = Ember.Controller.extend({
  format: null,
  date: new Date(),
  formattedDate: function() {
    var date = this.get('date'),
        format = this.get('format');
    return moment(date).format(format);
  }.property('format', 'date'),
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
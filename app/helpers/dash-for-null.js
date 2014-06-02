export default Ember.Handlebars.makeBoundHelper(function(value) {
  if (value != null) {
    return value;
  } else {
    return '-';
  }
});
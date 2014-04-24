export default Ember.Handlebars.makeBoundHelper(function(value, options) {
  if (value != null) {
    return value;
  } else {
    return '-';
  }
});
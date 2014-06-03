var DatePickerView = Ember.View.extend({
  templateName: 'datepicker',
  didInsertElement: function() {
    var onChangeDate, self;
    self = this;
    onChangeDate = function(ev) {
      return self.set("value", ev.date);
    };
    this.$('.datepicker').datepicker({
      separator: "-"
    }).on("changeDate", onChangeDate);
    return this.$('.datepicker').datepicker('setValue', new Date());
  }
});


export default DatePickerView;

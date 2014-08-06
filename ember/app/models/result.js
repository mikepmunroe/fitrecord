import DS from 'ember-data';

var Result = DS.Model.extend({
  date: DS.attr('date'),
  lift: DS.belongsTo('lift'),
  repScheme: DS.attr(),
  load: DS.attr(),
  notes: DS.attr()
});

Result.reopenClass({
  FIXTURES: [{
      id: 1,
      date: new Date(),
      lift: 1,
      repScheme: 5,
      load: 195,
      notes: ''
    },
    {
      id: 2,
      date: new Date(),
      lift: 2,
      repScheme: 5,
      load: 155,
      notes: 'work on triceps flexibility'
    }]
});

export default Result;
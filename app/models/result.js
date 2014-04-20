var Result = DS.Model.extend({
  date: DS.attr(),
  repScheme: DS.attr(),
  load: DS.attr(),
  notes: DS.attr()
});

Result.reopenClass({
  FIXTURES: [{
      id: 1,
      date: '10/27/2011',
      repScheme: 5,
      load: 195,
      notes: ''
    },
    {
      id: 2,
      date: '2/10/2012',
      repScheme: 5,
      load: 155,
      notes: 'work on triceps flexibility'
    }]
});

export default Result;
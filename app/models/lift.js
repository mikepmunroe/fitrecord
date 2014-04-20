var Lift = DS.Model.extend({
  name: DS.attr()
});

Lift.reopenClass({
  FIXTURES: [{
      id: 1,
      name: 'Back Squat'
    },
    {
      id: 2,
      name: 'Front Squat'
    },
    {
      id: 3,
      name: 'Shoulder Press'
    },
    {
      id: 4,
      name: 'Push Press'
    },
    {
      id: 5,
      name: 'Bench Press'
    },
    {
      id: 6,
      name: 'Deadlift'
    },
    {
      id: 7,
      name: 'Pull Up'
    },
    {
      id: 8,
      name: 'Dip'
    }]
});

export default Lift;
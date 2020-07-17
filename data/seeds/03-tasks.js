exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          description: 'unload dishwasher',
          notes: '',
          completed: false,
          project_id: 1,
        },
        {
          id: 2,
          description: 'sort out silverware',
          notes: `make sure there isn't any in the garbage disposal`,
          completed: false,
          project_id: 1,
        },
        {
          id: 3,
          description: 'load dishwasher',
          notes: '',
          completed: false,
          project_id: 1,
        },
        {
          id: 4,
          description: 'run dishwasher',
          notes: `don't forget the soap`,
          completed: false,
          project_id: 1,
        },
        {
          id: 5,
          description: 'assess the damage',
          notes: '',
          completed: false,
          project_id: 2,
        },
        {
          id: 6,
          description: 'paint patch in the wall',
          notes: 'be sure to let the paint actually dry',
          completed: false,
          project_id: 2,
        },
        {
          id: 7,
          description: 'hang shower curtain rod back up',
          notes: '',
          completed: false,
          project_id: 2,
        },
        {
          id: 8,
          description: 're-attach shower curtain',
          notes: '',
          completed: false,
          project_id: 2,
        },
        {
          id: 9,
          description: 'sit down at computer',
          notes: 'preferably on time',
          completed: false,
          project_id: 3,
        },
        {
          id: 10,
          description: 'fork and clone assignment',
          notes: `clone your own copy, not Lambda's`,
          completed: false,
          project_id: 3,
        },
        {
          id: 11,
          description: 'read the README',
          notes: 'make sure you understand exactly what is being asked of you',
          completed: false,
          project_id: 3,
        },
        {
          id: 12,
          description: 'do all the things',
          notes: `(there's a lot of things)`,
          completed: false,
          project_id: 3,
        },
        {
          id: 13,
          description: 'submit the sprint retro form',
          notes: '',
          completed: false,
          project_id: 3,
        },
      ]);
    });
};

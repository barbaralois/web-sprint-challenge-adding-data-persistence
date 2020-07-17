exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          name: 'wash the dishes',
          description: 'time to clean the kitchen up a bit',
          completed: false,
        },
        {
          id: 2,
          name: 'repair shower',
          description:
            'the shower curtain rod fell down and needs to be put back up',
          completed: false,
        },
        {
          id: 3,
          name: 'complete sprint',
          description: 'from 11-2, work studiously on the sprint',
          completed: false,
        },
      ]);
    });
};

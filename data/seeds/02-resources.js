exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1,
          name: 'handyman',
          description: 'someone who has skills with tools',
        },
        { id: 2, name: 'ladder', description: '' },
        {
          id: 3,
          name: 'determination',
          description: 'a very valuable resource',
        },
        { id: 4, name: 'sponge', description: 'preferably a clean one' },
        { id: 5, name: 'soap', description: '' },
        {
          id: 6,
          name: 'computer',
          description: 'even better if it takes less than 5 min to boot up',
        },
        {
          id: 7,
          name: 'internet access',
          description: 'an essential for researching or submitting assignments',
        },
      ]);
    });
};

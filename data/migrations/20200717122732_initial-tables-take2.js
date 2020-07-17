exports.up = function (knex) {
  return knex.schema
    .createTable('projects', (tbl) => {
      tbl.increments();
      tbl.text('name', 128).notNullable();
      tbl.text('description');
      tbl.boolean('completed').defaultTo(false);
    })
    .createTable('resources', (tbl) => {
      tbl.increments();
      tbl.text('name', 128).notNullable();
      tbl.text('description');
    })
    .createTable('tasks', (tbl) => {
      tbl.increments();
      tbl.text('description').notNullable();
      tbl.text('notes');
      tbl.boolean('completed').defaultTo(false);
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('project_resources', (tbl) => {
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('cascade')
        .onDelete('cascade');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};

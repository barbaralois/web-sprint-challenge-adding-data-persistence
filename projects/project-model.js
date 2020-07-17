const db = require('../data/db-config.js');

module.exports = {
  getProjects,
  getProjectById,
  getResources,
  getTasks,
  addProject,
  addTask,
};

function getProjects() {
  return db('projects');
}

function getProjectById(id) {
  return db('projects').where({ id }).first();
}

function getResources(id) {
  return db('project_resources as pr')
    .join('resources as r', 'pr.resource_id', 'r.id')
    .join('projects as p', 'pr.project_id', 'p.id')
    .select('p.name', 'r.name')
    .where('p.id', id);
}

function getTasks(id) {
  return db('projects as p')
    .join('tasks as t', 'p.id', 't.project_id')
    .select(
      'p.name as ProjectName',
      'p.description as ProjectDescription',
      't.description as Task',
      't.notes as TaskNotes'
    )
    .where('p.id', id)
    .orderBy('t.id');
}

function addProject(body) {
  return db('projects')
    .insert(body, 'id')
    .then(([id]) => {
      return getProjectById(id);
    });
}

function addTask(body, id) {
  return db('tasks')
    .insert({ ...body, project_id: id })
    .then((ids) => ({ id: ids[0] }));
}

// function getByresource(id) {
//   return db('project_resources as ri')
//     .join('resources as i', 'ri.resource_id', 'i.id')
//     .join('projects as r', 'ri.project_id', 'r.id')
//     .select('i.resource_name', 'r.project_name', 'ri.quantity')
//     .where('i.id', id);
// }

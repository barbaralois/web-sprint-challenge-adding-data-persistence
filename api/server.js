const express = require('express');
const helmet = require('helmet');

const ProjectRouter = require('../projects/project-router.js');
const db = require('../data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/projects', ProjectRouter);

function getResources() {
  return db('resources');
}

function addResource(body) {
  return db('resources')
    .insert(body, 'id')
    .then(([id]) => {
      return 'it was added';
    });
}

// GET all resources
server.get('/api/resources', (req, res) => {
  getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) =>
      res.status(500).json({ message: 'Failed to get resources.' })
    );
});

// // GET all tasks
// server.post('/api/tasks', (req, res) => {

// });

// POST new resource
server.post('/api/resources', (req, res) => {
  const resourceData = req.body;

  addResource(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) =>
      res.status(500).json({ message: 'Failed to create new resource.' })
    );
});

module.exports = server;

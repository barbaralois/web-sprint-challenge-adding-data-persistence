const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

// GET all Projects
router.get('/', (req, res) => {
  Projects.getProjects()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get projects.' });
    });
});

// GET project by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Projects.getProjectById(id)
    .then((project) => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find project with that ID.' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get project' });
    });
});

// GET resources by project ID
router.get('/:id/resources', (req, res) => {
  const { id } = req.params;

  Projects.getResources(id)
    .then((resources) => {
      if (resources.length) {
        res.json(resources);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find resources for given project ID.' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get resources.' });
    });
});

// GET tasks by project ID
router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Projects.getTasks(id)
    .then((tasks) => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find tasks for given project ID.' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get tasks.' });
    });
});

// POST new project
router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.addProject(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) =>
      res.status(500).json({ message: 'Failed to create new project.' })
    );
});

// POST new task
router.post('/:id/tasks', (req, res) => {
  const taskData = req.body;
  const { id } = req.params;

  Projects.getProjectById(id)
    .then((project) => {
      if (project) {
        Projects.addTask(taskData, id).then((task) => {
          res.status(201).json(task);
        });
      } else {
        res
          .status(404)
          .json({ message: 'Could not find project with given ID.' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to create new task.' });
    });
});

module.exports = router;

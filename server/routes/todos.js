const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');

/* GET /api/todos */
router.get('/', async (req, res) => {
  try {
    const list = await Todo.find(req.query);
    res.json(list);
  } catch (error) {
    res.status(500).json({ error });
  }
});

/* POST /api/todos */
router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error });
  }
});

/* PUT /api/todos/:id */
router.put('/:id', async (req, res) => {
  try {
    const options = { new: true };
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, options);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error });
  }
});

/* DELETE /api/todos/:id */
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Beaware: it can delete all data from db if body is empty (DON'T expoose deleteMany in PRODUCTION!)
/* DELETE /api/todos */
router.delete('/', async (req, res) => {
  try {
    const todo = await Todo.deleteMany(req.body);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;

// const express = require('express');
// const router = express.Router();

// const TODOS = [
//   { title: 'Create API to get this list', isDone: true },
//   { title: 'Connect API with Angular', isDone: true },
//   { title: 'Connect server with mongo', isDone: false },
//   { title: 'Publish app', isDone: false },
// ];

// /* GET /api/todos */
// router.get('/', async (req, res) => {
//   try {
//     res.json(TODOS);
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// });

// module.exports = router;

import express from 'express'
import { getAllTasks, addTask, getTask, updateTask, deleteTask } from '../controllers/task_controllers.js'

const router = express.Router();

router.get('/tasks', getAllTasks);
router.get('/task/:id', getTask);
router.post('/task/add', addTask);
router.put('/task/update/:id', updateTask)
router.delete('/task/delete/:id', deleteTask)


export default router
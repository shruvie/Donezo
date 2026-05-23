import express from 'express';
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createTask);
router.get('/', protect, getTasks);
router.get('/:id', protect, getTaskById);
router.put('/:id', protect, updateTask);
router.delete('/:id', protect, deleteTask);
// Add collaborator to task
router.put('/tasks/:taskId/collaborators/add', async (req, res) => {
    try {
        const { userId } = req.body;  // user to add
        const task = await Task.findByIdAndUpdate(
            req.params.taskId,
            { $addToSet: { collaborators: userId } },  // addToSet avoids duplicates
            { new: true }
        ).populate('collaborators', 'name email avatar');
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Remove collaborator from task
router.put('/tasks/:taskId/collaborators/remove', async (req, res) => {
    try {
        const { userId } = req.body;
        const task = await Task.findByIdAndUpdate(
            req.params.taskId,
            { $pull: { collaborators: userId } },
            { new: true }
        ).populate('collaborators', 'name email avatar');
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
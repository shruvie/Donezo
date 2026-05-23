import express from 'express';
import multer from 'multer';
import cloudinary from '../config/cloudinary.js';
import User from '../models/users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });


// ✅ Just accept the URL string, no multer needed
router.put('/:userId/avatar', async (req, res) => {
    try {
        const { avatar } = req.body;
        
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { avatar },
            { new: true }
        );
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
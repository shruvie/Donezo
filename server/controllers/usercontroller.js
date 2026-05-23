import User from '../models/users.js';
// User schema needs avatar field

// Route to update avatar
router.put('/users/:userId/avatar', async (req, res) => {
    try {
        const { avatar } = req.body;  // pass image URL from Cloudinary/ui-avatars
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { avatar },
            { new: true }
        );
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
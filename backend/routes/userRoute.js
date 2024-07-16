const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to register a new user
router.post('/registerUser', userController.registerUser);

// Route to login a user
router.post('/loginUser', userController.loginUser);

// route to get profile
router.get('/getUserProfile', authMiddleware, userController.getUserProfile);

// Route to update a user
router.put('/updateUser/:id', authMiddleware, userController.updateUser);

// Route to get all users
router.get('/getAllUsers', authMiddleware, userController.getAllUsers);

// Route to delete a user
router.delete('/deleteUser/:id', authMiddleware, userController.deleteUser);

module.exports = router;
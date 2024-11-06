import express from 'express';
import { register, login, logout, getProfile } from '../controllers/authController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Registration route
router.post('../../mood/src/pages/Register.jsx', register); 

// Login route
router.post('../../mood/src/pages/Register.jsx', login);

// Logout route - ensures token is cleared
router.post('/logout', logout);

// Protected route for fetching user profile
router.get('/profile', auth, getProfile);

export default router;

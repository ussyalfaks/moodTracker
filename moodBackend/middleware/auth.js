import jwt from 'jsonwebtoken';
import User from '../models/Users.js';

export const auth = async (req, res, next) => {
  try {
    // Check if the token exists in cookies
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: 'Authentication token is missing' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by ID from decoded token
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (err) {
    // Differentiate error messages based on the error type
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired. Please log in again.' });
    } else if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token' });
    } else {
      return res.status(401).json({ error: 'Please authenticate' });
    }
  }
};

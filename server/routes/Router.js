import Router from 'express';

import UserController from '../controllers/UserController';

const router = Router();

// // Sample routes...
// router.post('/auth/signup', (req, res) => {
//   res.send('hello world');
// });


// Auth routes
router.post('/auth/signup', UserController.register);
// router.post('/auth/signin', UserController.startSession);

// User routes
router.get('/users', UserController.getAll);

export default router;

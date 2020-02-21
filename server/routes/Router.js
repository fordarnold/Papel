import Router from 'express';

import UserController from '../controllers/UserController';
// import AccountController from '../controllers/AccountController';

const router = Router();

// // Sample routes...
// router.post('/auth/signup', (req, res) => {
//   res.send('hello world');
// });


// Auth routes
router.post('/auth/signup', UserController.register);
router.post('/auth/signin', UserController.startSession);

// User routes
router.get('/users', UserController.getAll);
router.get('/users/:userId', UserController.getSingle);
router.delete('/users/:userId', UserController.removeSingle);

// Account routes
// router.post('/accounts', AccountController.create);
// router.get('/accounts', AccountController.getAll);
// router.get('/accounts/:accountNumber', AccountController.getSingle);
// router.delete('/accounts/:accountNumber', AccountController.removeSingle);

export default router;

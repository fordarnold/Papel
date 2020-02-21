import Router from 'express';

import UserController from '../controllers/UserController';
import AccountController from '../controllers/AccountController';
import TransactionController from '../controllers/TransactionController';

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

// Account routes
router.post('/accounts', AccountController.create);
router.get('/accounts', AccountController.getAll);
router.get('/accounts/:accountId', AccountController.findById);
router.delete('/accounts/:accountId', AccountController.findById);

// Transaction routes
router.post('/transactions', TransactionController.create);
router.get('/transactions', TransactionController.getAll);
// router.get('/transactions/:transactionId', TransactionController.findById);
// router.put('/transactions/:transactionId', TransactionController.update);
// router.delete('/transactions/:transactionId', TransactionController.findById);

export default router;

import { Router } from 'express';
import { controllers } from '../../../infra/controllers';

const userRouter = Router();

userRouter.post('/users',controllers.userController.create);
userRouter.get('/users',controllers.userController.get);
userRouter.get('/users/:id',controllers.userController.getById);
userRouter.put('/users/:id',controllers.userController.update);
userRouter.delete('/users/:id',controllers.userController.delete);

export {userRouter};
import { Router } from "express";
import userController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// router.get('/', userController.index); // lista usuários
router.get('/:id',loginRequired, userController.show);// lista usuário

router.post('/', userController.store);
router.put('/',  loginRequired, userController.update);
router.delete('/',  loginRequired, userController.delete);

export default router;


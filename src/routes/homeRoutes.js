import { Router } from "express";
import HomeController from "../controllers/HomeController";
const router = new Router();

router.get('/', (req, res) => {
  res.send(HomeController);
});

export default router


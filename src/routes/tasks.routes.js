import { Router } from "express";
const router = Router();

import { getTasks, createTask } from "../controllers/tasks.controller.js";

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.put('/tasks/"id');
router.delete("/tasks/:id");
router.get("/tasks/:id");

export default router;

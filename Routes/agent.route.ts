import express from "express";
import { RegisterAgent } from "../Controllers/agent.controller";
const router = express.Router();

router.post("/register", RegisterAgent);

export default router;

import express from "express";
import { RegisterAgent } from "../Controllers/agent.controller";
import { Register } from "../helpers/valid";
const router = express.Router();

router.post("/register", Register, RegisterAgent);

export default router;

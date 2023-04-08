import { Application } from "express";
import cors from "cors";
import express from "express";
import agent from "./Routes/agent.route";
export const Middleware = (app: Application) => {
	app.use(express.json()).use(cors()).use("/api/agent", agent);
};

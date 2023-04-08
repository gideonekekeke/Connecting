import express from "express";
import { Middleware } from "./middleware";
import dotenv from "dotenv";
const port = 5000;
import "./utils/dbConfig";
dotenv.config();

const app = express();
Middleware(app);

const server = app.listen(port, () => {
	console.log("port is connected");
});

process.on("uncaughtException", () => {
	process.exit(1);
});

process.on("unhandledRejection", (res: any) => {
	server.close(() => {
		process.exit(1);
	});
});

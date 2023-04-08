import { Request, Response } from "express";
import { Agent } from "../Models/agent.entity";
import crypto from "crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type agentData = {
	fullname: string;
	email: string;
	location: string;
	area: string;
	password: string;
	agentID: string | number;
	connectors?: any[];
};

export const RegisterAgent = async (req: Request, res: Response) => {
	try {
		const { fullname, email, area, location, password, generatedCardNnumber } =
			req.body;

		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);

		const generate = crypto.randomBytes(10).toString("hex");

		const creating = await Agent.create({
			fullname,
			email,
			area,
			location,
			password: hash,
			generatedCardNnumber: generate,
		});

		creating.save();

		return res.status(200).json({
			message: "Agent registered successfully",
			data: creating,
		});
	} catch (err) {
		return res.status(404).json({
			message: "an error occured",
		});
	}
};

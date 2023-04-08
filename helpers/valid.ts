import { check } from "express-validator";

export const Register = [
	check("fullname", "fullName is required")
		.notEmpty()
		.withMessage("you must fill in your correct name"),

	check("email", "Enail is required")
		.isEmail()
		.withMessage("Must be a valid email address"),

	check("password", "password is required")
		.isLength({
			min: 6,
		})
		.withMessage("password must contain at least 6 characters")
		.matches(/\d/)
		.withMessage("password must contain a number"),
];

export const Login = [
	check("email", "email is required")
		.isEmail()
		.withMessage("Must be a valid email address"),

	check("password")
		.notEmpty()
		.isLength({
			min: 6,
		})
		.withMessage("password must be atleast 6 characters")
		.matches(/\d/)
		.withMessage("password must contain a number"),
];

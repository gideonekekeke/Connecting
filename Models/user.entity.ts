import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
} from "typeorm";
import "reflect-metadata";
import { Agent } from "./agent.entity";

@Entity("user")
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: number | string;

	@Column()
	fullname: string;

	@Column()
	email: string;

	@Column()
	area: string;

	@Column()
	location: string;

	@ManyToOne(() => Agent, (user) => user.connectors)
	user: Agent;
}
